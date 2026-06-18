import fs from "node:fs";
import path from "node:path";
import { buildAuditRecommendations } from "@/lib/audit-recommendations";
import {
  buildAccessibilityAudits,
  buildBestPracticesAudits,
  buildPerformanceAudits,
  buildSeoAudits,
  type LighthouseResult,
} from "@/lib/lighthouse-audits";
import type { AuditIssue, AuditStrategy, StrategyReport, WebsiteAuditReport } from "@/types/website-audit";

type LighthouseAudit = {
  title?: string;
  description?: string;
  score?: number | null;
  displayValue?: string;
  details?: {
    items?: Array<{ label?: string; transferSize?: number }>;
  };
};

function normalizeUrl(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) {
    throw new Error("Please enter a website URL.");
  }

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const parsed = new URL(withProtocol);
    if (!parsed.hostname) {
      throw new Error("Please provide a valid website URL.");
    }
    return parsed.toString();
  } catch {
    throw new Error("Please provide a valid website URL.");
  }
}

function getAudit(
  audits: Record<string, LighthouseAudit>,
  id: string
): LighthouseAudit | null {
  return audits[id] ?? null;
}

function displayValue(
  audits: Record<string, LighthouseAudit>,
  id: string
): string | null {
  const audit = getAudit(audits, id);
  return audit?.displayValue ?? null;
}

function issueFromAudit(audit: LighthouseAudit, id: string): AuditIssue {
  const score = audit.score ?? null;
  return {
    id,
    title: audit.title ?? id,
    description: audit.description ?? "",
    displayValue: audit.displayValue ?? null,
    passed: score === null ? true : score >= 0.9,
  };
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KiB`;
  return `${(bytes / 1048576).toFixed(2)} MiB`;
}

function buildStrategyReport(
  lighthouse: LighthouseResult,
  strategy: AuditStrategy
): StrategyReport {
  const audits = lighthouse.audits ?? {};

  const imageAuditIds = [
    "uses-optimized-images",
    "modern-image-formats",
    "uses-responsive-images",
    "offscreen-images",
  ];

  const imageIssues = imageAuditIds
    .map((id) => {
      const audit = getAudit(audits, id);
      if (audit && audit.score !== undefined && audit.score !== null && audit.score < 0.9) {
        return issueFromAudit(audit, id);
      }
      return null;
    })
    .filter((issue): issue is AuditIssue => issue !== null);

  let javascriptSize: string | null = null;
  let cssSize: string | null = null;
  const resourceSummary = getAudit(audits, "resource-summary");

  for (const item of resourceSummary?.details?.items ?? []) {
    const label = (item.label ?? "").toLowerCase();
    const size = item.transferSize ?? 0;
    if (label === "script") javascriptSize = formatBytes(size);
    if (label === "stylesheet") cssSize = formatBytes(size);
  }

  return {
    strategy,
    fetchedAt: new Date().toISOString(),
    performance: buildPerformanceAudits(lighthouse),
    seo: buildSeoAudits(lighthouse),
    accessibility: buildAccessibilityAudits(lighthouse),
    bestPractices: buildBestPracticesAudits(lighthouse),
    technical: {
      pageSize: displayValue(audits, "total-byte-weight"),
      requestCount: displayValue(audits, "network-requests"),
      javascriptSize,
      cssSize,
      imageOptimization: imageIssues,
      unusedCss: displayValue(audits, "unused-css-rules"),
      unusedJavaScript: displayValue(audits, "unused-javascript"),
    },
  };
}

async function fetchPageSpeed(
  url: string,
  strategy: AuditStrategy,
  apiKey: string
): Promise<LighthouseResult> {
  const params = new URLSearchParams({
    url,
    key: apiKey,
    strategy,
  });

  for (const category of ["performance", "accessibility", "best-practices", "seo"]) {
    params.append("category", category);
  }

  const response = await fetch(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params.toString()}`,
    {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(120_000),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || "PageSpeed Insights API request failed.");
  }

  if (!data?.lighthouseResult) {
    throw new Error("PageSpeed report did not include Lighthouse results.");
  }

  return data.lighthouseResult as LighthouseResult;
}

function generateUuid(): string {
  return crypto.randomUUID();
}

const INVALID_API_KEYS = new Set([
  "",
  "your_google_pagespeed_api_key",
  "your_key_here",
]);

function parseEnvFile(filePath: string): Record<string, string> {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const env: Record<string, string> = {};

  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    env[key] = value;
  }

  return env;
}

function readPagespeedKeyFromConfigPhp(): string {
  const configPath = path.join(process.cwd(), "public", "api", "config.php");
  if (!fs.existsSync(configPath)) {
    return "";
  }

  const content = fs.readFileSync(configPath, "utf8");
  const match = content.match(/['"]pagespeed_api_key['"]\s*=>\s*['"]([^'"]*)['"]/);
  return match?.[1]?.trim() ?? "";
}

function resolvePagespeedApiKey(): string {
  const candidates = [
    process.env.PAGESPEED_API_KEY?.trim(),
    parseEnvFile(path.join(process.cwd(), ".env.local")).PAGESPEED_API_KEY?.trim(),
    parseEnvFile(path.join(process.cwd(), ".env")).PAGESPEED_API_KEY?.trim(),
    readPagespeedKeyFromConfigPhp(),
  ];

  for (const candidate of candidates) {
    if (candidate && !INVALID_API_KEYS.has(candidate)) {
      return candidate;
    }
  }

  return "";
}

export async function runWebsiteAudit(urlInput: string): Promise<WebsiteAuditReport> {
  const apiKey = resolvePagespeedApiKey();
  if (!apiKey) {
    throw new Error(
      "PageSpeed API key missing. Add PAGESPEED_API_KEY to your .env file, enable PageSpeed Insights API in Google Cloud Console, then restart npm run dev."
    );
  }

  const url = normalizeUrl(urlInput);
  const [mobileLighthouse, desktopLighthouse] = await Promise.all([
    fetchPageSpeed(url, "mobile", apiKey),
    fetchPageSpeed(url, "desktop", apiKey),
  ]);

  const report: WebsiteAuditReport = {
    id: generateUuid(),
    url,
    analyzedAt: new Date().toISOString(),
    mobile: buildStrategyReport(mobileLighthouse, "mobile"),
    desktop: buildStrategyReport(desktopLighthouse, "desktop"),
    recommendations: [],
  };

  report.recommendations = buildAuditRecommendations(report);
  return report;
}

export { normalizeUrl };

import type { AuditHistoryItem, WebsiteAuditReport } from "@/types/website-audit";

const API_BASE = "/api";
const USE_NEXT_API = process.env.NODE_ENV === "development";
const ANALYZE_TIMEOUT_MS = 180_000;

const endpoints = {
  pagespeed: USE_NEXT_API ? `${API_BASE}/pagespeed` : `${API_BASE}/pagespeed.php`,
  auditReport: USE_NEXT_API ? `${API_BASE}/audit-report` : `${API_BASE}/audit-report.php`,
  auditHistory: USE_NEXT_API ? `${API_BASE}/audit-history` : `${API_BASE}/audit-history.php`,
};

function formatApiError(response: Response, text: string): string {
  if (response.status === 503 || response.status === 504) {
    return "Server timed out while analyzing this site. Large websites can take up to 2 minutes — please try again.";
  }

  if (text.trimStart().startsWith("<!DOCTYPE") || text.trimStart().startsWith("<html")) {
    if (response.status >= 500) {
      return "Server error while running the audit. Please wait a moment and try again.";
    }

    return "Audit API is unavailable on this server. Make sure /api/pagespeed.php is deployed with config.php.";
  }

  return "Invalid response from audit API.";
}

async function parseJsonResponse(response: Response) {
  const text = await response.text();

  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    throw new Error(formatApiError(response, text));
  }
}

function normalizeUrl(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) {
    throw new Error("Please enter a website URL.");
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

export async function analyzeWebsite(url: string): Promise<WebsiteAuditReport> {
  const normalizedUrl = normalizeUrl(url);
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), ANALYZE_TIMEOUT_MS);

  try {
    const response = await fetch(endpoints.pagespeed, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: normalizedUrl }),
      cache: "no-store",
      signal: controller.signal,
    });

    const data = await parseJsonResponse(response);

    if (!response.ok || !data.success) {
      throw new Error((data.message as string) || "Failed to analyze website.");
    }

    return data.report as WebsiteAuditReport;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Analysis took too long. Please try again — heavy sites may need a second attempt.");
    }

    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

export async function fetchAuditReport(
  reportId: string
): Promise<WebsiteAuditReport> {
  const response = await fetch(
    `${endpoints.auditReport}?id=${encodeURIComponent(reportId)}`,
    { cache: "no-store" }
  );
  const data = await parseJsonResponse(response);

  if (!response.ok || !data.success) {
    throw new Error((data.message as string) || "Report not found.");
  }

  return data.report as WebsiteAuditReport;
}

export async function fetchAuditHistory(): Promise<AuditHistoryItem[]> {
  const response = await fetch(endpoints.auditHistory, { cache: "no-store" });
  const data = await parseJsonResponse(response);

  if (!response.ok || !data.success) {
    return [];
  }

  return (data.history || []) as AuditHistoryItem[];
}

export function getShareUrl(reportId: string): string {
  if (typeof window === "undefined") {
    return `/website-audit/?report=${reportId}`;
  }

  const base = `${window.location.origin}/website-audit/`;
  return `${base}?report=${encodeURIComponent(reportId)}`;
}

export function downloadReportJson(report: WebsiteAuditReport) {
  const blob = new Blob([JSON.stringify(report, null, 2)], {
    type: "application/json",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `website-audit-${report.id}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

export { normalizeUrl };

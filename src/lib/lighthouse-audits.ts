import type {
  AuditGroup,
  AuditItem,
  AuditItemStatus,
  CategoryAuditReport,
  FilmstripFrame,
  MetricSavings,
  PerformanceAuditReport,
  TreemapNode,
} from "@/types/website-audit";
import { extractAuditDetails } from "@/lib/audit-details";

type LighthouseAudit = {
  title?: string;
  description?: string;
  score?: number | null;
  scoreDisplayMode?: string;
  displayValue?: string;
  metricSavings?: MetricSavings;
  details?: {
    type?: string;
    headings?: Array<{ key?: string; label?: string; valueType?: string }>;
    nodes?: Array<{
      name?: string;
      resourceBytes?: number;
      unusedBytes?: number;
      encodedBytes?: number;
    }>;
    items?: Array<Record<string, unknown>>;
  };
};

type LighthouseCategoryGroup = {
  title?: string;
  description?: string;
};

type LighthouseCategory = {
  score?: number | null;
  auditRefs?: Array<{ id: string; weight?: number; group?: string }>;
};

export type LighthouseResult = {
  audits?: Record<string, LighthouseAudit>;
  categories?: Record<string, LighthouseCategory>;
  categoryGroups?: Record<string, LighthouseCategoryGroup>;
};

const PERFORMANCE_GROUP_ORDER = ["insights", "diagnostics"] as const;

const ACCESSIBILITY_GROUP_ORDER = [
  "a11y-names-labels",
  "a11y-navigation",
  "a11y-aria",
  "a11y-color-contrast",
  "a11y-tables-lists",
  "a11y-language",
  "a11y-best-practices",
  "a11y-audio-video",
] as const;

const BEST_PRACTICES_GROUP_ORDER = [
  "best-practices-ux",
  "best-practices-trust-safety",
  "best-practices-browser-compat",
  "best-practices-general",
] as const;

const SEO_GROUP_ORDER = ["seo-content", "seo-crawl", "seo-mobile"] as const;

function auditScore(score: number | null | undefined): number | null {
  if (score === null || score === undefined) {
    return null;
  }
  return Math.round(score * 100);
}

function getAuditStatus(audit: LighthouseAudit): AuditItemStatus {
  if (audit.score === null || audit.score === undefined) {
    return "notApplicable";
  }

  if (audit.score >= 0.9) {
    return "passed";
  }

  if (audit.scoreDisplayMode === "informative" || audit.scoreDisplayMode === "manual") {
    return "informative";
  }

  return "failed";
}

function auditItemFromAudit(audit: LighthouseAudit, id: string): AuditItem {
  const metricSavings = audit.metricSavings;
  const hasSavings =
    metricSavings &&
    Object.values(metricSavings).some((value) => typeof value === "number" && value > 0);

  return {
    id,
    title: audit.title ?? id,
    description: audit.description ?? "",
    displayValue: audit.displayValue ?? null,
    status: getAuditStatus(audit),
    metricSavings: hasSavings ? metricSavings : undefined,
    details: extractAuditDetails(audit.details),
  };
}

function extractFilmstrip(audits: Record<string, LighthouseAudit>): FilmstripFrame[] {
  const filmstripAudit = audits["screenshot-thumbnails"];
  const items = filmstripAudit?.details?.items ?? [];

  return items
    .filter((item) => typeof item.data === "string" && item.data.length > 0)
    .map((item) => ({
      timing: Number(item.timing ?? item.timestamp ?? 0),
      data: item.data as string,
    }));
}

function formatGroupTitle(groupId: string): string {
  return groupId
    .replace(/^(a11y|seo|best-practices)-/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function sortGroups(groups: AuditGroup[], order: readonly string[]): AuditGroup[] {
  const orderMap = new Map(order.map((id, index) => [id, index]));

  return [...groups].sort((left, right) => {
    const leftIndex = orderMap.get(left.id) ?? Number.MAX_SAFE_INTEGER;
    const rightIndex = orderMap.get(right.id) ?? Number.MAX_SAFE_INTEGER;
    return leftIndex - rightIndex;
  });
}

function buildGroupedCategoryAudits(
  lighthouse: LighthouseResult,
  categoryId: string,
  groupOrder: readonly string[]
): CategoryAuditReport {
  const audits = lighthouse.audits ?? {};
  const category = lighthouse.categories?.[categoryId];
  const categoryGroups = lighthouse.categoryGroups ?? {};
  const refs = category?.auditRefs ?? [];

  const groupsMap = new Map<string, AuditItem[]>();
  const passedAudits: AuditItem[] = [];
  const notApplicable: AuditItem[] = [];

  for (const ref of refs) {
    const audit = audits[ref.id];
    if (!audit || ref.group === "hidden") {
      continue;
    }

    const item = auditItemFromAudit(audit, ref.id);

    if (item.status === "notApplicable") {
      notApplicable.push(item);
      continue;
    }

    if (item.status === "passed") {
      passedAudits.push(item);
      continue;
    }

    const groupId = ref.group ?? `${categoryId}-general`;
    const existing = groupsMap.get(groupId) ?? [];
    existing.push(item);
    groupsMap.set(groupId, existing);
  }

  const groups: AuditGroup[] = [];

  for (const [id, items] of groupsMap) {
    if (items.length === 0) {
      continue;
    }

    const meta = categoryGroups[id];
    groups.push({
      id,
      title: meta?.title ?? formatGroupTitle(id),
      description: meta?.description,
      items,
    });
  }

  const issues = [
    ...groups.flatMap((group) => group.items),
    ...passedAudits.filter((item) => item.status === "failed"),
  ].filter((item) => item.status === "failed");

  return {
    score: auditScore(category?.score),
    groups: sortGroups(groups, groupOrder),
    passedAudits,
    notApplicable,
    issues: issues.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      displayValue: item.displayValue,
      passed: false,
    })),
  };
}

function extractTreemap(audits: Record<string, LighthouseAudit>): TreemapNode[] {
  const treemapAudit = audits["script-treemap-data"];
  const nodes = treemapAudit?.details?.nodes ?? [];

  return nodes
    .map((node) => ({
      name: node.name ?? "Unknown",
      resourceBytes: node.resourceBytes ?? 0,
      unusedBytes: node.unusedBytes ?? 0,
      encodedBytes: node.encodedBytes,
    }))
    .filter((node) => node.resourceBytes > 0)
    .sort((left, right) => right.resourceBytes - left.resourceBytes);
}

export function buildPerformanceAudits(
  lighthouse: LighthouseResult
): PerformanceAuditReport {
  const audits = lighthouse.audits ?? {};
  const category = lighthouse.categories?.performance;
  const refs = category?.auditRefs ?? [];

  const insights: AuditItem[] = [];
  const diagnostics: AuditItem[] = [];
  const passedAudits: AuditItem[] = [];
  const notApplicable: AuditItem[] = [];

  for (const ref of refs) {
    const audit = audits[ref.id];
    if (!audit || ref.group === "hidden" || ref.group === "metrics") {
      continue;
    }

    const item = auditItemFromAudit(audit, ref.id);

    if (item.status === "notApplicable") {
      notApplicable.push(item);
      continue;
    }

    if (ref.group === "insights") {
      if (item.status === "passed") {
        passedAudits.push(item);
      } else {
        insights.push(item);
      }
      continue;
    }

    if (ref.group === "diagnostics") {
      diagnostics.push(item);
      continue;
    }

    if (item.status === "passed") {
      passedAudits.push(item);
    }
  }

  return {
    score: auditScore(category?.score),
    fcp: audits["first-contentful-paint"]?.displayValue ?? null,
    lcp: audits["largest-contentful-paint"]?.displayValue ?? null,
    tbt: audits["total-blocking-time"]?.displayValue ?? null,
    cls: audits["cumulative-layout-shift"]?.displayValue ?? null,
    speedIndex: audits["speed-index"]?.displayValue ?? null,
    filmstrip: extractFilmstrip(audits),
    treemap: extractTreemap(audits),
    insights,
    diagnostics,
    passedAudits,
    notApplicable,
  };
}

export function buildAccessibilityAudits(
  lighthouse: LighthouseResult
): CategoryAuditReport {
  return buildGroupedCategoryAudits(
    lighthouse,
    "accessibility",
    ACCESSIBILITY_GROUP_ORDER
  );
}

export function buildBestPracticesAudits(
  lighthouse: LighthouseResult
): CategoryAuditReport {
  return buildGroupedCategoryAudits(
    lighthouse,
    "best-practices",
    BEST_PRACTICES_GROUP_ORDER
  );
}

export function buildSeoAudits(lighthouse: LighthouseResult): CategoryAuditReport {
  return buildGroupedCategoryAudits(lighthouse, "seo", SEO_GROUP_ORDER);
}

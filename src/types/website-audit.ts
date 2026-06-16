import type { AuditDetails } from "@/types/audit-details";

export type AuditStrategy = "mobile" | "desktop";

export type AuditItemStatus = "failed" | "passed" | "notApplicable" | "informative";

export type TreemapNode = {
  name: string;
  resourceBytes: number;
  unusedBytes: number;
  encodedBytes?: number;
};

export type FilmstripFrame = {
  timing: number;
  data: string;
};

export type MetricSavings = {
  FCP?: number;
  LCP?: number;
  TBT?: number;
  CLS?: number;
  INP?: number;
};

export type MetricFilter = "all" | "fcp" | "lcp" | "tbt" | "cls";

export type AuditItem = {
  id: string;
  title: string;
  description: string;
  displayValue?: string | null;
  status: AuditItemStatus;
  metricSavings?: MetricSavings;
  details?: AuditDetails;
};

export type AuditGroup = {
  id: string;
  title: string;
  description?: string;
  items: AuditItem[];
};

export type AuditIssue = {
  id: string;
  title: string;
  description: string;
  displayValue?: string | null;
  passed: boolean;
};

export type CategoryAuditReport = {
  score: number | null;
  groups: AuditGroup[];
  passedAudits: AuditItem[];
  notApplicable: AuditItem[];
  issues: AuditIssue[];
};

export type PerformanceAuditReport = {
  score: number | null;
  fcp: string | null;
  lcp: string | null;
  tbt: string | null;
  cls: string | null;
  speedIndex: string | null;
  filmstrip: FilmstripFrame[];
  treemap: TreemapNode[];
  insights: AuditItem[];
  diagnostics: AuditItem[];
  passedAudits: AuditItem[];
  notApplicable: AuditItem[];
};

export type AuditTechnicalMetrics = {
  pageSize: string | null;
  requestCount: string | null;
  javascriptSize: string | null;
  cssSize: string | null;
  imageOptimization: AuditIssue[];
  unusedCss: string | null;
  unusedJavaScript: string | null;
};

export type StrategyReport = {
  strategy: AuditStrategy;
  fetchedAt: string;
  performance: PerformanceAuditReport;
  seo: CategoryAuditReport;
  accessibility: CategoryAuditReport;
  bestPractices: CategoryAuditReport;
  technical: AuditTechnicalMetrics;
};

export type AuditRecommendation = {
  id: string;
  priority: "high" | "medium" | "low";
  category: string;
  title: string;
  description: string;
};

export type WebsiteAuditReport = {
  id: string;
  url: string;
  analyzedAt: string;
  mobile: StrategyReport;
  desktop: StrategyReport;
  recommendations: AuditRecommendation[];
};

export type AuditHistoryItem = {
  id: string;
  url: string;
  analyzedAt: string;
  mobileScore: number | null;
  desktopScore: number | null;
};

/** @deprecated Use CategoryAuditReport */
export type AuditCategoryReport = CategoryAuditReport;

/** @deprecated Use PerformanceAuditReport */
export type AuditPerformanceMetrics = PerformanceAuditReport;

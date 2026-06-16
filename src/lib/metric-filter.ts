import type { AuditItem, MetricFilter } from "@/types/website-audit";

const METRIC_KEYS: Record<Exclude<MetricFilter, "all">, keyof NonNullable<AuditItem["metricSavings"]>> = {
  fcp: "FCP",
  lcp: "LCP",
  tbt: "TBT",
  cls: "CLS",
};

export function filterAuditsByMetric(items: AuditItem[], filter: MetricFilter): AuditItem[] {
  if (filter === "all") {
    return items;
  }

  const key = METRIC_KEYS[filter];

  return items.filter((item) => {
    const savings = item.metricSavings?.[key];
    return typeof savings === "number" && savings > 0;
  });
}

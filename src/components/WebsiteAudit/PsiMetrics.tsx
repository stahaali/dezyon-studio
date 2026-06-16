import { PsiShapeIcon, getMetricShape } from "@/components/WebsiteAudit/PsiShapeIcon";
import styles from "./WebsiteAuditTool.module.css";

type Metric = {
  id: string;
  label: string;
  value: string | null;
};

export function PsiMetrics({
  fcp,
  lcp,
  tbt,
  cls,
  speedIndex,
}: {
  fcp: string | null;
  lcp: string | null;
  tbt: string | null;
  cls: string | null;
  speedIndex: string | null;
}) {
  const metrics: Metric[] = [
    { id: "fcp", label: "First Contentful Paint", value: fcp },
    { id: "lcp", label: "Largest Contentful Paint", value: lcp },
    { id: "tbt", label: "Total Blocking Time", value: tbt },
    { id: "cls", label: "Cumulative Layout Shift", value: cls },
    { id: "si", label: "Speed Index", value: speedIndex },
  ];

  return (
    <div className={styles.psiMetricsGrid}>
      {metrics.map((metric) => (
        <div key={metric.id} className={styles.psiMetricRow}>
          <PsiShapeIcon shape={getMetricShape(metric.id, metric.value)} />
          <span className={styles.psiMetricLabel}>{metric.label}</span>
          <span className={styles.psiMetricValue}>{metric.value || "—"}</span>
        </div>
      ))}
    </div>
  );
}

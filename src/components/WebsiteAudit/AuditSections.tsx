"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScoreRing } from "@/components/WebsiteAudit/ScoreRing";
import { PsiMetrics } from "@/components/WebsiteAudit/PsiMetrics";
import { PsiShapeIcon, scoreRingColor } from "@/components/WebsiteAudit/PsiShapeIcon";
import { AuditDetailPanel } from "@/components/WebsiteAudit/AuditDetailPanel";
import { ViewTreemapPanel } from "@/components/WebsiteAudit/ViewTreemapPanel";
import type {
  AuditGroup,
  AuditItem,
  CategoryAuditReport,
  PerformanceAuditReport,
  StrategyReport,
} from "@/types/website-audit";
import styles from "./WebsiteAuditTool.module.css";

function stripHtml(value: string): string {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function auditItemShape(item: AuditItem) {
  if (item.status === "failed") return "triangle" as const;
  if (item.status === "informative") return "square" as const;
  if (item.status === "passed") return "circle" as const;
  return "neutral" as const;
}

function AuditItemRow({
  item,
  expanded,
  onToggle,
  pageUrl,
}: {
  item: AuditItem;
  expanded: boolean;
  onToggle: () => void;
  pageUrl: string;
}) {
  const hasDetails = Boolean(item.description || item.details);

  return (
    <li className={`${styles.psiAuditItem} ${expanded ? styles.psiAuditItemOpen : ""}`.trim()}>
      <button
        type="button"
        className={styles.psiAuditBtn}
        onClick={hasDetails ? onToggle : undefined}
        aria-expanded={hasDetails ? expanded : undefined}
        disabled={!hasDetails}
      >
        <PsiShapeIcon shape={auditItemShape(item)} />
        <span className={styles.psiAuditTitle}>
          {item.title}
          {item.displayValue ? (
            <span className={styles.psiAuditSavings}> — {item.displayValue}</span>
          ) : null}
        </span>
        {hasDetails ? (
          <span
            className={`${styles.psiAuditChevron} ${expanded ? styles.psiAuditChevronOpen : ""}`.trim()}
          >
            <ChevronDown size={18} />
          </span>
        ) : null}
      </button>
      {expanded && hasDetails ? (
        <AuditDetailPanel item={item} pageUrl={pageUrl} />
      ) : null}
    </li>
  );
}

function AuditItemList({
  items,
  pageUrl,
  defaultExpanded = false,
}: {
  items: AuditItem[];
  pageUrl: string;
  defaultExpanded?: boolean;
}) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() =>
    defaultExpanded ? new Set(items.map((item) => item.id)) : new Set()
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={styles.psiAuditList}>
      {items.map((item) => (
        <AuditItemRow
          key={item.id}
          item={item}
          pageUrl={pageUrl}
          expanded={expandedIds.has(item.id)}
          onToggle={() =>
            setExpandedIds((current) => {
              const next = new Set(current);
              if (next.has(item.id)) {
                next.delete(item.id);
              } else {
                next.add(item.id);
              }
              return next;
            })
          }
        />
      ))}
    </ul>
  );
}

function CollapsibleAuditGroup({
  title,
  count,
  children,
}: {
  title: string;
  count: number;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  if (count === 0) {
    return null;
  }

  return (
    <div className={styles.psiGroup}>
      <button
        type="button"
        className={styles.psiGroupBtn}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span>
          {title} ({count})
        </span>
        <span className={styles.psiGroupMeta}>{open ? "Hide" : "Show"}</span>
      </button>
      {open ? <div className={styles.psiGroupBody}>{children}</div> : null}
    </div>
  );
}

function GroupedSections({
  groups,
  pageUrl,
}: {
  groups: AuditGroup[];
  pageUrl: string;
}) {
  const visibleGroups = groups.filter((group) => group.items.length > 0);

  return (
    <>
      {visibleGroups.map((group) => (
        <div key={group.id} className={styles.psiSubsection}>
          <h5 className={styles.psiSubsectionTitle}>{group.title}</h5>
          {group.description ? (
            <p className={styles.psiSubsectionDesc}>{stripHtml(group.description)}</p>
          ) : null}
          <AuditItemList items={group.items} pageUrl={pageUrl} />
        </div>
      ))}
    </>
  );
}

function CategoryLayout({
  id,
  title,
  score,
  children,
  showCaption = false,
}: {
  id: string;
  title: string;
  score: number | null;
  children: React.ReactNode;
  showCaption?: boolean;
}) {
  return (
    <section id={id} className={styles.psiCategory}>
      <div className={styles.psiCategoryLayout}>
        <div className={styles.psiCategoryGauge}>
          <ScoreRing score={score} label={title} size="xl" theme="dark" />
          {showCaption ? (
            <p className={styles.psiCategoryCaption}>
              Values are estimated and may vary. The performance score is calculated directly from
              these metrics.
            </p>
          ) : null}
        </div>
        <div className={styles.psiCategoryMain}>{children}</div>
      </div>
    </section>
  );
}

function PerformanceSection({
  performance,
  pageUrl,
}: {
  performance: PerformanceAuditReport;
  pageUrl: string;
}) {
  return (
    <CategoryLayout
      id="performance"
      title="Performance"
      score={performance.score}
      showCaption
    >
      <PsiMetrics
        fcp={performance.fcp}
        lcp={performance.lcp}
        tbt={performance.tbt}
        cls={performance.cls}
        speedIndex={performance.speedIndex}
      />

      <ViewTreemapPanel
        filmstrip={performance.filmstrip}
        treemap={performance.treemap}
      />

      {performance.insights.length > 0 ? (
        <div className={`${styles.psiSubsection} ${styles.psiInsightsBox}`}>
          <h5 className={styles.psiSubsectionTitle}>Insights</h5>
          <AuditItemList items={performance.insights} pageUrl={pageUrl} />
        </div>
      ) : null}

      {performance.diagnostics.length > 0 ? (
        <div className={`${styles.psiSubsection} ${styles.psiInsightsBox}`}>
          <h5 className={styles.psiSubsectionTitle}>Diagnostics</h5>
          <AuditItemList items={performance.diagnostics} pageUrl={pageUrl} />
        </div>
      ) : null}

      <CollapsibleAuditGroup title="Passed audits" count={performance.passedAudits.length}>
        <AuditItemList items={performance.passedAudits} pageUrl={pageUrl} />
      </CollapsibleAuditGroup>

      <CollapsibleAuditGroup title="Not applicable" count={performance.notApplicable.length}>
        <AuditItemList items={performance.notApplicable} pageUrl={pageUrl} />
      </CollapsibleAuditGroup>
    </CategoryLayout>
  );
}

function CategorySection({
  id,
  title,
  report,
  pageUrl,
}: {
  id: string;
  title: string;
  report: CategoryAuditReport;
  pageUrl: string;
}) {
  return (
    <CategoryLayout id={id} title={title} score={report.score}>
      <GroupedSections groups={report.groups} pageUrl={pageUrl} />

      <CollapsibleAuditGroup title="Passed audits" count={report.passedAudits.length}>
        <AuditItemList items={report.passedAudits} pageUrl={pageUrl} />
      </CollapsibleAuditGroup>

      <CollapsibleAuditGroup title="Not applicable" count={report.notApplicable.length}>
        <AuditItemList items={report.notApplicable} pageUrl={pageUrl} />
      </CollapsibleAuditGroup>
    </CategoryLayout>
  );
}

export function AuditReportSections({
  data,
  pageUrl,
}: {
  data: StrategyReport;
  pageUrl: string;
}) {
  return (
    <div className={styles.psiCategories}>
      <PerformanceSection performance={data.performance} pageUrl={pageUrl} />
      <CategorySection id="accessibility" title="Accessibility" report={data.accessibility} pageUrl={pageUrl} />
      <CategorySection id="best-practices" title="Best Practices" report={data.bestPractices} pageUrl={pageUrl} />
      <CategorySection id="seo" title="SEO" report={data.seo} pageUrl={pageUrl} />
    </div>
  );
}

export function CategoryScoreNav({
  data,
  onNavigate,
}: {
  data: StrategyReport;
  onNavigate: (id: string) => void;
}) {
  const items = [
    { id: "performance", label: "Performance", score: data.performance.score },
    { id: "accessibility", label: "Accessibility", score: data.accessibility.score },
    { id: "best-practices", label: "Best Practices", score: data.bestPractices.score },
    { id: "seo", label: "SEO", score: data.seo.score },
  ];

  return (
    <nav className={styles.categoryNav} aria-label="Category scores">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={styles.categoryNavBtn}
          onClick={() => onNavigate(item.id)}
        >
          <span
            className={styles.categoryNavScore}
            style={{
              background: scoreRingColor(item.score),
              color: item.score !== null && item.score >= 50 ? "#000200" : "#ffffff",
            }}
          >
            {item.score ?? "—"}
          </span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

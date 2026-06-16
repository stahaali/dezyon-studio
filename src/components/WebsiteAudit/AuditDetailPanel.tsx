"use client";

import { Fragment, useMemo, useState } from "react";
import type { AuditDetailHeading, AuditDetailRow, AuditTableSection } from "@/types/audit-details";
import type { AuditItem } from "@/types/website-audit";
import {
  formatAuditCell,
  formatPsiRequestUrl,
  getAuditSubItems,
  getHostname,
  groupRowsByDomain,
  isRightAlignedHeading,
  parseAuditDescription,
} from "@/lib/audit-details";
import styles from "./WebsiteAuditTool.module.css";

function MetricBadges({ item }: { item: AuditItem }) {
  const badges: string[] = [];

  if (item.metricSavings?.LCP) badges.push("LCP");
  if (item.metricSavings?.FCP) badges.push("FCP");
  if (item.metricSavings?.TBT) badges.push("TBT");
  if (item.metricSavings?.CLS) badges.push("CLS");

  if (badges.length === 0 && item.details) {
    badges.push("Unscored");
  }

  if (badges.length === 0) {
    return null;
  }

  return (
    <div className={styles.auditBadges}>
      {badges.map((badge) => (
        <span key={badge} className={styles.auditBadge}>
          {badge}
        </span>
      ))}
    </div>
  );
}

function AuditCell({
  heading,
  raw,
}: {
  heading: AuditDetailHeading;
  raw: string | number | boolean | null | undefined;
}) {
  if (heading.valueType === "url" && typeof raw === "string") {
    return (
      <a
        href={raw}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.auditTableUrl}
        title={raw}
      >
        {formatPsiRequestUrl(raw)}
      </a>
    );
  }

  return (
    <>
      {formatAuditCell(
        heading.valueType,
        (raw as string | number | boolean | null) ?? null,
        heading.key,
        heading.displayUnit
      )}
    </>
  );
}

function AuditDataTable({
  headings,
  items,
  pageHostname,
}: {
  headings: AuditDetailHeading[];
  items: AuditDetailRow[];
  pageHostname: string;
}) {
  const [showThirdParty, setShowThirdParty] = useState(true);
  const domainGroups = groupRowsByDomain(items, pageHostname, headings);
  const urlHeading = headings.find((heading) => heading.valueType === "url");

  const thirdPartyCount = domainGroups?.filter((group) => group.isThirdParty).length ?? 0;
  const visibleGroups = domainGroups?.filter(
    (group) => showThirdParty || !group.isThirdParty
  );

  const renderRow = (row: AuditDetailRow, rowKey: string, isChild = false) => (
    <Fragment key={rowKey}>
      <tr className={isChild ? styles.auditTableChildRow : undefined}>
        {headings.map((heading) => {
          const raw = row[heading.key];
          const alignNumeric = isRightAlignedHeading(heading.valueType)
            ? styles.auditTableNumeric
            : undefined;

          return (
            <td key={heading.key} className={alignNumeric}>
              <AuditCell heading={heading} raw={raw as string | number | boolean | null} />
            </td>
          );
        })}
      </tr>
      {getAuditSubItems(row).map((subRow, subIndex) => (
        <tr key={`${rowKey}-sub-${subIndex}`} className={styles.auditTableSubRow}>
          {headings.map((heading) => {
            const subKey = heading.subItemsHeading?.key;
            if (!subKey) {
              return <td key={heading.key} />;
            }

            const raw = subRow[subKey];
            const subHeading: AuditDetailHeading = {
              key: subKey,
              label: heading.subItemsHeading?.label ?? heading.label,
              valueType: heading.subItemsHeading?.valueType ?? "text",
            };

            return (
              <td key={heading.key}>
                <AuditCell heading={subHeading} raw={raw as string | number | boolean | null} />
              </td>
            );
          })}
        </tr>
      ))}
    </Fragment>
  );

  return (
    <>
      {domainGroups && urlHeading && thirdPartyCount > 0 ? (
        <label className={styles.thirdPartyToggle}>
          <input
            type="checkbox"
            checked={showThirdParty}
            onChange={(event) => setShowThirdParty(event.target.checked)}
          />
          Show 3rd-party resources ({thirdPartyCount})
        </label>
      ) : null}

      <div className={styles.auditTableWrap}>
        <table className={styles.auditTable}>
          <thead>
            <tr>
              {headings.map((heading) => (
                <th
                  key={heading.key}
                  className={
                    isRightAlignedHeading(heading.valueType)
                      ? styles.auditTableNumeric
                      : undefined
                  }
                >
                  {heading.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {domainGroups && urlHeading
              ? visibleGroups?.map((group) => (
                  <Fragment key={group.hostname}>
                    <tr className={styles.auditTableGroupRow}>
                      {headings.map((heading) => {
                        if (heading.valueType === "url") {
                          return (
                            <td key={heading.key}>
                              <div className={styles.auditTableGroupMain}>
                                <span className={styles.auditTableGroupHost}>{group.hostname}</span>
                                <span
                                  className={`${styles.auditTablePartyBadge} ${
                                    group.isThirdParty
                                      ? styles.auditTablePartyBadgeThird
                                      : styles.auditTablePartyBadgeFirst
                                  }`.trim()}
                                >
                                  {group.isThirdParty ? "3rd party" : "1st party"}
                                </span>
                              </div>
                            </td>
                          );
                        }

                        const total = group.totals[heading.key];
                        if (total !== undefined && total > 0) {
                          return (
                            <td
                              key={heading.key}
                              className={`${styles.auditTableGroupTotal} ${styles.auditTableNumeric}`.trim()}
                            >
                              {formatAuditCell(
                                heading.valueType,
                                total,
                                heading.key,
                                heading.displayUnit
                              )}
                            </td>
                          );
                        }

                        return <td key={heading.key} />;
                      })}
                    </tr>
                    {group.items.map((row, index) =>
                      renderRow(row, `${group.hostname}-${index}`, true)
                    )}
                  </Fragment>
                ))
              : items.map((row, index) => renderRow(row, `row-${index}`))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function AuditChecklist({ checks }: { checks: Array<{ label: string; passed: boolean }> }) {
  return (
    <ul className={styles.auditChecklist}>
      {checks.map((check) => (
        <li
          key={check.label}
          className={`${styles.auditCheckItem} ${
            check.passed ? styles.auditCheckItemPass : styles.auditCheckItemFail
          }`.trim()}
        >
          <span className={styles.auditCheckIcon} aria-hidden="true">
            {check.passed ? "✓" : "✕"}
          </span>
          <span>{check.label}</span>
        </li>
      ))}
    </ul>
  );
}

export function AuditDetailPanel({
  item,
  pageUrl,
}: {
  item: AuditItem;
  pageUrl: string;
}) {
  const pageHostname = useMemo(() => getHostname(pageUrl), [pageUrl]);
  const descriptionParts = useMemo(
    () => parseAuditDescription(item.description),
    [item.description]
  );

  if (!item.description && !item.details) {
    return null;
  }

  const details = item.details;

  const tableSections: AuditTableSection[] = useMemo(() => {
    if (!details) return [];

    if (details.variant === "list" && details.tables?.length) {
      return details.tables;
    }

    if (details.variant === "table" && details.headings?.length && details.items?.length) {
      return [{ headings: details.headings, items: details.items }];
    }

    return [];
  }, [details]);

  return (
    <div className={styles.auditDetailPanel}>
      <div className={styles.auditDetailIntro}>
        {item.description ? (
          <p className={styles.auditDetailDesc}>
            {descriptionParts.map((part, index) =>
              part.type === "link" ? (
                <a
                  key={`${part.href}-${index}`}
                  href={part.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.auditDetailLink}
                >
                  {part.value.replace(/<[^>]*>/g, "")}
                </a>
              ) : (
                <span key={`text-${index}`}>{part.value.replace(/<[^>]*>/g, "")}</span>
              )
            )}
          </p>
        ) : null}

        <MetricBadges item={item} />
      </div>

      {details?.variant === "checklist" && details.checks?.length ? (
        <AuditChecklist checks={details.checks} />
      ) : null}

      {tableSections.map((section, index) => (
        <div key={`table-${index}`} className={styles.auditTableSection}>
          <AuditDataTable
            headings={section.headings}
            items={section.items}
            pageHostname={pageHostname}
          />
        </div>
      ))}
    </div>
  );
}

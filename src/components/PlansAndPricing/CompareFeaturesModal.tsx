"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { Check, ChevronDown, ChevronRight, Sparkles, X } from "lucide-react";
import {
  compareModalPlans,
  getCellValueForPlan,
  getCompareFeatureCategories,
  type CompareCellValue,
  type CompareFeatureCategory,
} from "@/data/compare-features";
import { footerContact } from "@/data/site";
import { useLockBodyScroll } from "@/hooks/useStickyHeader";
import styles from "./CompareFeaturesModal.module.css";

const PLAN_COUNT = compareModalPlans.length;

export type ComparePlan = {
  id: string;
  name: string;
  price: number;
  customPrice?: boolean;
  features: readonly string[];
};

type CompareFeaturesModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function CompareCell({ value }: { value: CompareCellValue }) {
  if (value === true) {
    return (
      <Check
        size={18}
        strokeWidth={2.5}
        className={styles.checkIcon}
        aria-label="Included"
      />
    );
  }

  if (value === false) {
    return <span className={styles.emptyCell} aria-hidden="true" />;
  }

  return <span className={styles.cellText}>{value}</span>;
}

function CategoryAccordion({
  category,
  gridTemplate,
  isOpen,
  onToggle,
}: {
  category: CompareFeatureCategory;
  gridTemplate: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const headerId = useId();

  return (
    <div className={`${styles.categoryBlock} ${isOpen ? styles.categoryBlockOpen : ""}`.trim()}>
      {isOpen ? (
        <div className={styles.categoryOpenWrap}>
          <button
            type="button"
            id={headerId}
            className={`${styles.categoryHeader} ${styles.categoryHeaderOpen}`.trim()}
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
          >
            <span className={styles.categoryHeaderInner}>
              <ChevronDown size={16} className={styles.chevron} aria-hidden="true" />
              <span className={styles.categoryTitle}>{category.title}</span>
              {category.badge ? (
                <span className={styles.categoryBadge}>{category.badge}</span>
              ) : null}
            </span>
          </button>

          <div
            id={panelId}
            role="region"
            aria-labelledby={headerId}
            className={styles.categoryPanel}
          >
            {category.groups.map((group) => (
              <div key={group.id} className={styles.groupBlock}>
                {group.title ? (
                  <div
                    className={styles.groupTitle}
                    style={{ gridTemplateColumns: gridTemplate }}
                  >
                    <span className={styles.groupTitleLabel}>
                      <Sparkles size={14} className={styles.groupIcon} aria-hidden="true" />
                      {group.title}
                    </span>
                  </div>
                ) : null}

                {group.features.map((feature) => (
                  <div
                    key={feature.id}
                    className={styles.featureRow}
                    style={{ gridTemplateColumns: gridTemplate }}
                  >
                    <span
                      className={`${styles.featureLabel} ${feature.tooltip ? styles.featureLabelTooltip : ""}`.trim()}
                      title={feature.tooltip}
                    >
                      {feature.label}
                    </span>
                    {Array.from({ length: PLAN_COUNT }, (_, planIndex) => (
                      <div key={`${feature.id}-${planIndex}`} className={styles.featureCell}>
                        <CompareCell value={getCellValueForPlan(feature.values, planIndex)} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <button
          type="button"
          id={headerId}
          className={styles.categoryHeader}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className={styles.categoryHeaderInner}>
            <ChevronRight size={16} className={styles.chevron} aria-hidden="true" />
            <span className={styles.categoryTitle}>{category.title}</span>
            {category.badge ? (
              <span className={styles.categoryBadge}>{category.badge}</span>
            ) : null}
          </span>
        </button>
      )}
    </div>
  );
}

export function CompareFeaturesModal({
  isOpen,
  onClose,
}: CompareFeaturesModalProps) {
  useLockBodyScroll(isOpen);

  const categories = useMemo(() => getCompareFeatureCategories(), []);
  const [openCategoryId, setOpenCategoryId] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setOpenCategoryId("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const featureGrid = `minmax(240px, 1.5fr) repeat(${PLAN_COUNT}, minmax(108px, 1fr))`;
  const phoneHref = `tel:${footerContact.phone.replace(/[^\d+]/g, "")}`;

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onClick={onClose}
    >
      <div className={styles.dialogShell}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close comparison"
        >
          <X size={24} strokeWidth={1.75} />
        </button>

        <div
          className={styles.dialog}
          role="dialog"
          aria-modal="true"
          aria-labelledby="compare-features-title"
          onClick={(event) => event.stopPropagation()}
        >
          <div className={styles.stickyHeader}>
            <div className={styles.headerTable}>
              <div className={styles.titleCol}>
                <h2 id="compare-features-title" className={styles.title}>
                  Compare plan features
                </h2>
                <p className={styles.subtitle}>
                  Have a question? Call{" "}
                  <a href={phoneHref} className={styles.phoneLink}>
                    {footerContact.phone}
                  </a>
                </p>
              </div>

              <div className={styles.plansRow}>
                {compareModalPlans.map((plan) => (
                  <div key={plan.id} className={styles.planCol}>
                    <p className={styles.planName}>{plan.name}</p>
                    <p className={styles.planPrice}>{plan.priceLabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.body}>
            <div className={styles.categoryList}>
              {categories.map((category) => (
                <CategoryAccordion
                  key={category.id}
                  category={category}
                  gridTemplate={featureGrid}
                  isOpen={openCategoryId === category.id}
                  onToggle={() =>
                    setOpenCategoryId((current) =>
                      current === category.id ? "" : category.id
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

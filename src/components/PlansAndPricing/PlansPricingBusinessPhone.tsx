"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CompareFeaturesModal } from "@/components/PlansAndPricing/CompareFeaturesModal";
import { PlansPricingAddonsSlider } from "@/components/PlansAndPricing/PlansPricingAddonsSlider";
import { PlansPricingExpandSection } from "@/components/PlansAndPricing/PlansPricingExpandSection";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import { getPlansForTeamSize, plansPricingCategories } from "@/data/plans-and-pricing";

const BUSINESS_PHONE_TEAM_SIZE = "1-5" as const;
import { SITE_NAME } from "@/lib/constants";
import styles from "./PlansAndPricing.module.css";
import sectionStyles from "./PlansPricingBusinessPhone.module.css";

function formatTierPrice(
  annualPrice: number | null,
  monthlyPrice: number | null,
  payAnnually: boolean
) {
  if (annualPrice == null || monthlyPrice == null) {
    return null;
  }

  return payAnnually ? annualPrice : monthlyPrice;
}

function formatWasPrice(
  annualPrice: number | null,
  monthlyPrice: number | null,
  payAnnually: boolean
) {
  if (annualPrice == null || monthlyPrice == null) {
    return null;
  }

  return payAnnually ? monthlyPrice : null;
}

export function PlansPricingBusinessPhone() {
  const [payAnnually, setPayAnnually] = useState(true);
  const [compareOpen, setCompareOpen] = useState(false);

  const categoryMeta = plansPricingCategories.find((item) => item.id === "business-phone");
  const plans = getPlansForTeamSize(BUSINESS_PHONE_TEAM_SIZE);

  return (
    <div className={sectionStyles.wrap}>
      <header className={styles.categoryHeader}>
        <p className={styles.categoryEyebrow}>{SITE_NAME}</p>
        <PlansPricingHeading
          title={categoryMeta?.heroTitle}
          size="panel"
          className={styles.categoryTitle}
        />
        <p className={styles.categoryDescription}>{categoryMeta?.heroDescription}</p>
      </header>

      <div className={styles.controls}>
        <button
          type="button"
          role="switch"
          aria-checked={payAnnually}
          className={`${styles.annualToggle} ${payAnnually ? styles.annualToggleActive : ""}`.trim()}
          onClick={() => setPayAnnually((value) => !value)}
        >
          <span className={styles.annualToggleLabel}>
            Save up to 33% by paying annually
          </span>
          <span className={styles.toggleTrack} aria-hidden="true">
            <span className={styles.toggleKnob} />
          </span>
        </button>
      </div>

      <div className={styles.cardsGrid}>
        {plans.map((plan) => {
          const price = formatTierPrice(plan.annualPrice, plan.monthlyPrice, payAnnually);
          const wasPrice = formatWasPrice(plan.annualPrice, plan.monthlyPrice, payAnnually);
          const primaryAction = plan.actions.find((action) => action.variant === "primary");
          const secondaryAction = plan.actions.find((action) => action.variant === "secondary");
          const linkAction = plan.actions.find((action) => action.variant === "link");

          return (
            <article key={plan.id} className={styles.planCard}>
              {plan.badge ? <span className={styles.planBadge}>{plan.badge}</span> : null}

              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDescription}>{plan.description}</p>

              {!plan.customPrice ? (
                <div className={styles.planPricing}>
                  <p className={styles.planPriceRow}>
                    <span className={styles.planPrice}>${price}</span>
                    {wasPrice ? (
                      <span className={styles.planWasInline}>
                        <s>${wasPrice}</s>
                      </span>
                    ) : null}
                  </p>
                  <p className={styles.planMeta}>
                    /user/month* {payAnnually ? "paid annually" : "paid monthly"}
                  </p>
                </div>
              ) : null}

              <div className={styles.planActions}>
                {primaryAction ? (
                  <Link href={primaryAction.href} className={styles.primaryBtn}>
                    {primaryAction.label}
                  </Link>
                ) : null}
                {secondaryAction ? (
                  <Link href={secondaryAction.href} className={styles.secondaryBtn}>
                    {secondaryAction.label}
                  </Link>
                ) : null}
                {linkAction ? (
                  <Link href={linkAction.href} className={styles.linkBtn}>
                    {linkAction.label}
                  </Link>
                ) : null}
              </div>

              <div className={styles.planLower}>
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className={styles.planAiBox}>
                  <p className={styles.planAiTitle}>AI Features</p>
                  <ul className={styles.planAiList}>
                    {plan.aiFeatures.map((feature) => (
                      <li key={feature.label}>
                        <span>{feature.label}</span>
                        {feature.tag ? (
                          <span className={styles.planAiTag}>{feature.tag}</span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.compareFeaturesWrap}>
        <button
          type="button"
          className={styles.compareFeaturesBtn}
          onClick={() => setCompareOpen(true)}
        >
          <ExternalLink size={18} strokeWidth={2} aria-hidden="true" />
          Compare all features
        </button>
      </div>

      <div className={sectionStyles.lowerSections}>
        <PlansPricingAddonsSlider />
        <PlansPricingExpandSection embedded />
      </div>

      <CompareFeaturesModal isOpen={compareOpen} onClose={() => setCompareOpen(false)} />
    </div>
  );
}

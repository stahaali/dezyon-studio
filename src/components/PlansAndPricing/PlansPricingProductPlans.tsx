import Link from "next/link";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import {
  getProductPlansForCategory,
  plansPricingCategories,
  type PlansPricingCategoryId,
} from "@/data/plans-and-pricing";
import { SITE_NAME } from "@/lib/constants";
import styles from "./PlansAndPricing.module.css";

type PlansPricingProductPlansProps = {
  categoryId: PlansPricingCategoryId;
};

export function PlansPricingProductPlans({ categoryId }: PlansPricingProductPlansProps) {
  const activeMeta = plansPricingCategories.find((item) => item.id === categoryId);
  const plans = getProductPlansForCategory(categoryId);

  return (
    <>
      <header className={styles.categoryHeader}>
        <p className={styles.categoryEyebrow}>{SITE_NAME}</p>
        <PlansPricingHeading
          title={activeMeta?.heroTitle}
          size="panel"
          className={styles.categoryTitle}
        />
        <p className={styles.categoryDescription}>{activeMeta?.heroDescription}</p>
      </header>

      <div className={`${styles.cardsGrid} ${styles.productCardsGrid}`}>
        {plans.map((plan) => {
          const primaryAction = plan.actions.find((action) => action.variant === "primary");
          const secondaryAction = plan.actions.find((action) => action.variant === "secondary");

          return (
            <article key={plan.id} className={`${styles.planCard} ${styles.productPlanCard}`}>
              {plan.badge ? <span className={styles.planBadge}>{plan.badge}</span> : null}

              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDescription}>{plan.description}</p>

              {!plan.customPrice ? (
                <div className={styles.planPricing}>
                  <p className={styles.planPriceRow}>
                    <span className={styles.planPrice}>${plan.price}</span>
                  </p>
                  <p className={styles.planMeta}>{plan.priceSuffix}</p>
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
              </div>

              <div className={styles.planLower}>
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

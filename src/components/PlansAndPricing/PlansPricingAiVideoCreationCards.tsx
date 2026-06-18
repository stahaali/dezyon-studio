import Link from "next/link";
import { Check } from "lucide-react";
import { aiVideoCreationPlans } from "@/data/ai-video-creation";
import styles from "./PlansAndPricing.module.css";

export function PlansPricingAiVideoCreationCards() {
  return (
    <div
      className={`${styles.cardsGrid} ${styles.serviceCardsGrid} ${styles.universalCardsGrid} ${styles.customWebsiteCardsGrid}`}
    >
      {aiVideoCreationPlans.map((plan) => (
        <article
          key={plan.id}
          className={`${styles.planCard} ${styles.servicePlanCard} ${styles.customWebsitePlanCard} ${
            plan.featured ? styles.servicePlanCardFeatured : ""
          }`.trim()}
        >
          {plan.featured ? <span className={styles.planBadge}>Most Popular</span> : null}
          <div className={styles.planCardInner}>
            <h3 className={styles.planName}>{plan.name}</h3>
            <p className={styles.customWebsiteBestFor}>Best for: {plan.bestFor}</p>

            <div className={styles.planCardScrollBody}>
              <p className={styles.customWebsiteIncludesLabel}>Includes:</p>
              <ul className={styles.servicePlanFeatures}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.deliveryTime ? (
                <p className={styles.customWebsiteMeta}>
                  <strong>Delivery Time:</strong> {plan.deliveryTime}
                </p>
              ) : null}
              {plan.priceRange ? (
                <p className={styles.customWebsiteMeta}>
                  <strong>Price Range:</strong> {plan.priceRange}
                </p>
              ) : null}
            </div>

            <div className={styles.planActions}>
              <Link href={plan.cta.href} className={styles.primaryBtn}>
                {plan.cta.label}
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

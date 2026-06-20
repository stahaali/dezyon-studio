import Link from "next/link";
import { Check } from "lucide-react";
import { talkingWebsitePricing } from "@/data/talking-website";
import styles from "./PlansAndPricing.module.css";

export function PlansPricingTalkingWebsiteCards() {
  return (
    <div className={`${styles.cardsGrid} ${styles.serviceCardsGrid} ${styles.universalCardsGrid}`}>
      {talkingWebsitePricing.map((plan) => (
        <article
          key={plan.id}
          className={`${styles.planCard} ${styles.servicePlanCard} ${styles.universalPlanCard} ${
            plan.featured ? styles.servicePlanCardFeatured : ""
          }`.trim()}
        >
          {plan.featured ? <span className={styles.planBadge}>Most Popular</span> : null}
          <div className={styles.planCardInner}>
            <h3 className={styles.planName}>{plan.name}</h3>
            <div className={styles.planPricing}>
              <div className={styles.planPriceRow}>
                <p className={styles.planPrice}>{plan.price}</p>
                <span className={styles.planMeta}>{plan.priceNote}</span>
              </div>
            </div>
            <p className={styles.planDescription}>{plan.description}</p>

            <div className={styles.planCardScrollBody}>
              <ul className={styles.servicePlanFeatures}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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

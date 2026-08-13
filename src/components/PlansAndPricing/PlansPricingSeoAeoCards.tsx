import Link from "next/link";
import { Check } from "lucide-react";
import { packagePlansByCategory } from "@/data/packages";
import styles from "./PlansAndPricing.module.css";

export function PlansPricingSeoAeoCards() {
  const plans = packagePlansByCategory.seo;

  return (
    <div className={`${styles.cardsGrid} ${styles.serviceCardsGrid} ${styles.universalCardsGrid}`}>
      {plans.map((plan) => (
        <article
          key={plan.id}
          className={`${styles.planCard} ${styles.servicePlanCard} ${styles.universalPlanCard}`}
        >
          <div className={styles.planCardInner}>
            <h3 className={styles.planName}>{plan.name}</h3>

            <div className={styles.planCardScrollBody}>
              <ul className={styles.servicePlanFeatures}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.customWebsiteMeta}>{plan.note}</p>
            </div>

            <div className={styles.planActions}>
              <Link href="/contact" className={styles.primaryBtn}>
                Get Started
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

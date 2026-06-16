import {
  plansPricingCategories,
  type PlansPricingCategoryId,
} from "@/data/plans-and-pricing";
import { SITE_NAME } from "@/lib/constants";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import { PlansPricingUniversalCards } from "@/components/PlansAndPricing/PlansPricingUniversalCards";
import styles from "./PlansAndPricing.module.css";

type PlansPricingProductPlansProps = {
  categoryId: PlansPricingCategoryId;
};

export function PlansPricingProductPlans({ categoryId }: PlansPricingProductPlansProps) {
  const activeMeta = plansPricingCategories.find((item) => item.id === categoryId);

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

      <PlansPricingUniversalCards />
    </>
  );
}

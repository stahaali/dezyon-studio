"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";import { CompareFeaturesModal } from "@/components/PlansAndPricing/CompareFeaturesModal";
import { PlansPricingAddonsSlider } from "@/components/PlansAndPricing/PlansPricingAddonsSlider";
import { PlansPricingExpandSection } from "@/components/PlansAndPricing/PlansPricingExpandSection";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import { PlansPricingUniversalCards } from "@/components/PlansAndPricing/PlansPricingUniversalCards";
import { plansPricingCategories } from "@/data/plans-and-pricing";
import { SITE_NAME } from "@/lib/constants";
import styles from "./PlansAndPricing.module.css";
import sectionStyles from "./PlansPricingBusinessPhone.module.css";

export function PlansPricingBusinessPhone() {  const [compareOpen, setCompareOpen] = useState(false);

  const categoryMeta = plansPricingCategories.find((item) => item.id === "custom-website");

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

      <PlansPricingUniversalCards />

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

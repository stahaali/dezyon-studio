import {
  plansPricingServiceTabs,
  type PlansPricingServiceTabId,
} from "@/data/plans-and-pricing";
import { SITE_NAME } from "@/lib/constants";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import { PlansPricingUniversalCards } from "@/components/PlansAndPricing/PlansPricingUniversalCards";
import styles from "./PlansAndPricing.module.css";

type PlansPricingServicePanelProps = {
  activeTab: PlansPricingServiceTabId;
};

export function PlansPricingServicePanel({ activeTab }: PlansPricingServicePanelProps) {
  const tabMeta = plansPricingServiceTabs.find((tab) => tab.id === activeTab);

  if (!tabMeta) {
    return null;
  }

  return (
    <div
      id={`plans-service-panel-${activeTab}`}
      role="tabpanel"
      aria-labelledby={`plans-service-tab-${activeTab}`}
      className={styles.servicePanel}
    >
      <header className={styles.categoryHeader}>
        <p className={styles.categoryEyebrow}>
          {"eyebrow" in tabMeta && tabMeta.eyebrow ? tabMeta.eyebrow : SITE_NAME}
        </p>
        <PlansPricingHeading
          prefix={"titlePrefix" in tabMeta ? tabMeta.titlePrefix : undefined}
          highlight={"titleHighlight" in tabMeta ? tabMeta.titleHighlight : undefined}
          title={"title" in tabMeta ? tabMeta.title : undefined}
          size="panel"
          className={styles.categoryTitle}
        />
        <p className={styles.categoryDescription}>{tabMeta.description}</p>
      </header>

      <PlansPricingUniversalCards />
    </div>
  );
}

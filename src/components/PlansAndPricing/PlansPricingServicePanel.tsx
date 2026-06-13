import Link from "next/link";
import { Check } from "lucide-react";
import {
  aiSolutionPlans,
  plansPricingAddons,
  plansPricingExpand,
  plansPricingServiceTabs,
  type PlansPricingServiceTabId,
} from "@/data/plans-and-pricing";
import { talkingWebsitePricing } from "@/data/talking-website";
import { SITE_NAME } from "@/lib/constants";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import styles from "./PlansAndPricing.module.css";

type PlansPricingServicePanelProps = {
  activeTab: PlansPricingServiceTabId;
};

const marketingAddonIds = new Set(["seo-booster", "ai-chatbot"]);
const videoAddonIds = new Set(["ai-video"]);

function getVideoPlans() {
  const addonPlans = plansPricingAddons.items.filter((item) => videoAddonIds.has(item.id));
  const expandPlans = plansPricingExpand.items
    .filter((item) => item.id === "video-production")
    .map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      priceLabel: null,
      price: item.price,
      note: null,
      cta: { label: "Contact sales", href: "/contact" },
    }));

  return [...addonPlans, ...expandPlans];
}

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
        <p className={styles.categoryEyebrow}>{SITE_NAME}</p>
        <PlansPricingHeading
          title={tabMeta.title}
          size="panel"
          className={styles.categoryTitle}
        />
        <p className={styles.categoryDescription}>{tabMeta.description}</p>
      </header>

      {activeTab === "talking-websites" ? (
        <div className={`${styles.cardsGrid} ${styles.serviceCardsGrid}`}>
          {talkingWebsitePricing.map((plan) => (
            <article
              key={plan.id}
              className={`${styles.planCard} ${styles.servicePlanCard} ${plan.featured ? styles.servicePlanCardFeatured : ""}`}
            >
              {plan.featured ? (
                <span className={styles.planBadge}>Most Popular</span>
              ) : null}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDescription}>{plan.description}</p>
              <ul className={styles.servicePlanFeatures}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.planActions}>
                <Link href={plan.cta.href} className={styles.primaryBtn}>
                  {plan.cta.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : null}

      {activeTab === "ai-video-creation" ? (
        <div className={`${styles.cardsGrid} ${styles.serviceCardsGrid}`}>
          {getVideoPlans().map((item) => (
            <article key={item.id} className={`${styles.planCard} ${styles.servicePlanCard}`}>
              <h3 className={styles.planName}>{item.title}</h3>
              <p className={styles.planDescription}>{item.description}</p>
              <div className={styles.servicePlanPricing}>
                {typeof item.price === "number" ? (
                  <>
                    {item.priceLabel ? (
                      <span className={styles.servicePlanPriceLabel}>{item.priceLabel}</span>
                    ) : null}
                    <span className={styles.servicePlanPrice}>${item.price}</span>
                  </>
                ) : (
                  <span className={styles.servicePlanPriceText}>{item.price}</span>
                )}
                {item.note ? <p className={styles.planMeta}>{item.note}</p> : null}
              </div>
              <div className={styles.planActions}>
                <Link href={item.cta.href} className={styles.primaryBtn}>
                  {item.cta.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : null}

      {activeTab === "ai-marketing" ? (
        <div className={`${styles.cardsGrid} ${styles.serviceCardsGrid}`}>
          {plansPricingAddons.items
            .filter((item) => marketingAddonIds.has(item.id))
            .map((item) => (
              <article key={item.id} className={`${styles.planCard} ${styles.servicePlanCard}`}>
                <h3 className={styles.planName}>{item.title}</h3>
                <p className={styles.planDescription}>{item.description}</p>
                <div className={styles.planPricing}>
                  <p className={styles.planPriceRow}>
                    <span className={styles.planPrice}>
                      {item.priceLabel ? `${item.priceLabel} ` : ""}${item.price}
                    </span>
                  </p>
                  {item.note ? <p className={styles.planMeta}>{item.note}</p> : null}
                </div>
                <div className={styles.planActions}>
                  <Link href={item.cta.href} className={styles.primaryBtn}>
                    {item.cta.label}
                  </Link>
                </div>
              </article>
            ))}
        </div>
      ) : null}

      {activeTab === "onboard" ? (
        <div className={`${styles.cardsGrid} ${styles.serviceCardsGrid}`}>
          {aiSolutionPlans.map((plan) => (
            <article
              key={plan.id}
              className={`${styles.planCard} ${styles.servicePlanCard} ${plan.badge === "Most popular" ? styles.servicePlanCardFeatured : ""}`}
            >
              {plan.badge ? <span className={styles.planBadge}>{plan.badge}</span> : null}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDescription}>{plan.description}</p>
              {"customPrice" in plan && plan.customPrice ? (
                <p className={styles.planMeta}>{plan.note}</p>
              ) : (
                <div className={styles.planPricing}>
                  <p className={styles.planPriceRow}>
                    <span className={styles.planPrice}>${plan.price}</span>
                    {plan.wasPrice ? (
                      <span className={styles.planWasInline}>
                        <s>${plan.wasPrice}</s>
                      </span>
                    ) : null}
                  </p>
                  <p className={styles.planMeta}>{plan.note}</p>
                </div>
              )}
              <ul className={styles.servicePlanFeatures}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.planActions}>
                <Link href="/contact" className={styles.primaryBtn}>
                  {"customPrice" in plan && plan.customPrice ? "Book a Demo" : "Get Started"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import { PlansPricingServicePanel } from "@/components/PlansAndPricing/PlansPricingServicePanel";
import { PlansPricingSidebarIcon } from "@/components/PlansAndPricing/PlansPricingSidebarIcon";
import {
  plansPricingCategories,
  plansPricingPage,
  type PlansPricingServiceTabId,
} from "@/data/plans-and-pricing";
import styles from "./PlansAndPricing.module.css";

export function PlansAndPricingContent() {
  const [activeCategory, setActiveCategory] = useState<PlansPricingServiceTabId>("custom-website");

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="plans-pricing-heading">
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBgImage}>
            <Image
              src="/assets/img/pricing/pricing-banner.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className={styles.heroBgImageEl}
            />
          </div>
          <div className={styles.heroBgOverlay} />
        </div>

        <Container className={styles.heroContainer}>
          <ScrollReveal>
            <div className={styles.heroContent}>
              <div className={styles.heroHeadingWrap}>
                <PlansPricingHeading
                  as="h1"
                  id="plans-pricing-heading"
                  prefix={plansPricingPage.titlePrefix}
                  highlight={plansPricingPage.titleHighlight}
                  size="hero"
                  align="center"
                  className={styles.heroTitle}
                />
              </div>
              <p className={styles.heroDescription}>{plansPricingPage.description}</p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className={styles.main} aria-label="Pricing categories and plans">
        <Container className={styles.mainContainer}>
          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              <ul className={styles.sidebarList} role="tablist">
                {plansPricingCategories.map((category) => (
                  <li key={category.id} role="presentation">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeCategory === category.id}
                      aria-controls={`plans-panel-${category.id}`}
                      id={`plans-tab-${category.id}`}
                      onClick={() => setActiveCategory(category.id)}
                      className={`${styles.sidebarBtn} ${activeCategory === category.id ? styles.sidebarBtnActive : ""}`.trim()}
                    >
                      <span className={styles.sidebarIcon}>
                        <PlansPricingSidebarIcon id={category.id} />
                      </span>
                      <span>{category.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            <div
              className={styles.content}
              id={`plans-panel-${activeCategory}`}
              role="tabpanel"
              aria-labelledby={`plans-tab-${activeCategory}`}
            >
              <PlansPricingServicePanel activeTab={activeCategory} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

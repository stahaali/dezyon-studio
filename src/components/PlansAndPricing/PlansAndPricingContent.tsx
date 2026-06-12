"use client";

import { useState } from "react";
import Image from "next/image";
import { PlansPricingAiReceptionist } from "@/components/PlansAndPricing/PlansPricingAiReceptionist";
import { PlansPricingBusinessPhone } from "@/components/PlansAndPricing/PlansPricingBusinessPhone";
import { ContactFAQ } from "@/components/Contact/ContactFAQ/ContactFAQ";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import { PlansPricingProductPlans } from "@/components/PlansAndPricing/PlansPricingProductPlans";
import { PlansPricingSidebarIcon } from "@/components/PlansAndPricing/PlansPricingSidebarIcon";
import {
  plansPricingCategories,
  plansPricingDisclaimers,
  plansPricingPage,
  type PlansPricingCategoryId,
} from "@/data/plans-and-pricing";
import styles from "./PlansAndPricing.module.css";

export function PlansAndPricingContent() {
  const [activeCategory, setActiveCategory] = useState<PlansPricingCategoryId>("business-phone");

  const activeMeta = plansPricingCategories.find((item) => item.id === activeCategory);
  const activeLayout = activeMeta?.layout ?? "business-phone";

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="plans-pricing-heading">
        <Container className={styles.heroContainer}>
          <ScrollReveal>
            <div className={styles.heroContent}>
              <div className={styles.heroHeadingWrap}>
                <div className={styles.heroTitleRow}>
                  <Image
                    src={plansPricingPage.stars.left.src}
                    alt=""
                    width={plansPricingPage.stars.left.width}
                    height={plansPricingPage.stars.left.height}
                    className={styles.starLeft}
                    aria-hidden="true"
                  />
                  <PlansPricingHeading
                    as="h1"
                    id="plans-pricing-heading"
                    prefix={plansPricingPage.titlePrefix}
                    highlight={plansPricingPage.titleHighlight}
                    size="hero"
                    align="center"
                    className={styles.heroTitle}
                  />
                  <Image
                    src={plansPricingPage.stars.right.src}
                    alt=""
                    width={plansPricingPage.stars.right.width}
                    height={plansPricingPage.stars.right.height}
                    className={styles.starRight}
                    aria-hidden="true"
                  />
                </div>
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
              <h2 className={styles.sidebarTitle}>Plans &amp; Pricing</h2>
              <ul className={styles.sidebarList}>
                {plansPricingCategories.map((category) => {
                  const isActive = activeCategory === category.id;

                  return (
                    <li key={category.id}>
                      <button
                        type="button"
                        onClick={() => setActiveCategory(category.id)}
                        className={`${styles.sidebarBtn} ${isActive ? styles.sidebarBtnActive : ""}`.trim()}
                      >
                        <span className={styles.sidebarIcon}>
                          <PlansPricingSidebarIcon id={category.id} />
                        </span>
                        <span>{category.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </aside>

            <div>
              {activeLayout === "business-phone" ? (
                <PlansPricingBusinessPhone />
              ) : activeLayout === "ai-receptionist" ? (
                <PlansPricingAiReceptionist />
              ) : (
                <PlansPricingProductPlans categoryId={activeCategory} />
              )}
            </div>
          </div>
        </Container>
      </section>

      <ContactFAQ />

      <section className={styles.disclaimersSection} aria-labelledby="disclaimers-heading">
        <Container className={styles.sectionContainer}>
          <PlansPricingHeading
            id="disclaimers-heading"
            title={plansPricingDisclaimers.title}
            size="panel"
            className={styles.disclaimersTitle}
          />
          <div className={styles.disclaimersGrid}>
            {plansPricingDisclaimers.columns.map((column, columnIndex) => (
              <div key={`disclaimer-col-${columnIndex}`}>
                {column.map((paragraph) => (
                  <p key={paragraph} className={styles.disclaimerText}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

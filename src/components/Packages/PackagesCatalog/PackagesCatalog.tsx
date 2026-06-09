"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import {
  packageCategories,
  packagePlansByCategory,
  packagesActions,
  type PackageCategoryId,
} from "@/data/packages";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./PackagesCatalog.module.css";

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export function PackagesCatalog() {
  const [activeCategory, setActiveCategory] = useState<PackageCategoryId>("logo");
  const plans = packagePlansByCategory[activeCategory];

  return (
    <section className={styles.section} aria-label="Package plans">
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.tabsWrap}>
            <div className={styles.tabs} role="tablist" aria-label="Package categories">
              {packageCategories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`${styles.tab} ${isActive ? styles.tabActive : ""}`.trim()}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={index * 0.04} as="article">
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{plan.name}</h3>

                <div className={styles.priceRow}>
                  <span className={styles.price}>
                    {plan.price % 1 === 0
                      ? `$${plan.price}`
                      : formatPrice(plan.price)}
                  </span>
                  {!plan.hideWasPrice && (
                    <span className={styles.wasPrice}>
                      was <s>{formatPrice(plan.wasPrice)}</s>
                    </span>
                  )}
                </div>
                {plan.priceSubtitle ? (
                  <p className={styles.priceSubtitle}>{plan.priceSubtitle}</p>
                ) : null}

                <p className={styles.featuresLabel}>Plan includes:</p>
                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <Check size={14} className={styles.checkIcon} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.actions}>
                  <Link
                    href={packagesActions.chatHref}
                    className={styles.actionBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat Now
                  </Link>
                  <Link href={packagesActions.orderHref} className={styles.actionBtn}>
                    ORDER NOW
                  </Link>
                </div>

                <p className={styles.note}>{plan.note}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

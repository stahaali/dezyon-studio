import { Check } from "lucide-react";
import Link from "next/link";
import {
  packagePlansByCategory,
  packagesActions,
  type PackageCategoryId,
} from "@/data/packages";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./PackagesCatalog.module.css";

type PackagesCatalogProps = {
  category: PackageCategoryId;
};

export function PackagesCatalog({ category }: PackagesCatalogProps) {
  const plans = packagePlansByCategory[category];

  return (
    <section className={styles.section} aria-label="Package plans">
      <Container className={styles.container}>
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={index * 0.04} as="article">
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{plan.name}</h3>

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

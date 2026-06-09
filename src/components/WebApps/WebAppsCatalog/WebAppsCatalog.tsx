import { Check } from "lucide-react";
import Link from "next/link";
import { webAppsGrid, webAppsPlans } from "@/data/web-apps";
import { packagesActions } from "@/data/packages";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import catalogStyles from "@/components/Packages/PackagesCatalog/PackagesCatalog.module.css";
import styles from "./WebAppsCatalog.module.css";

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export function WebAppsCatalog() {
  return (
    <section
      className={`${catalogStyles.section} ${styles.section}`}
      aria-labelledby="web-apps-grid-heading"
    >
      <Container className={catalogStyles.container}>
        <ScrollReveal>
          <header className={styles.sectionHeading}>
            <h2
              id="web-apps-grid-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              <span className={styles.titleLight}>
                {webAppsGrid.titlePrefix}
              </span>
              <span className={styles.wordHighlight}>
                {webAppsGrid.titleHighlight}
              </span>
              {webAppsGrid.titleSuffix}
            </h2>
            <p className={styles.description}>{webAppsGrid.description}</p>
          </header>
        </ScrollReveal>

        <div className={catalogStyles.grid}>
          {webAppsPlans.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={index * 0.06} as="article">
              <article className={catalogStyles.card}>
                <h3 className={catalogStyles.cardTitle}>{plan.name}</h3>

                <div className={catalogStyles.priceRow}>
                  <span className={catalogStyles.price}>
                    {formatPrice(plan.price)}
                  </span>
                  <span className={catalogStyles.wasPrice}>
                    was <s>{formatPrice(plan.wasPrice)}</s>
                  </span>
                </div>

                <p className={catalogStyles.featuresLabel}>Plan includes:</p>
                <ul className={catalogStyles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature} className={catalogStyles.feature}>
                      <Check
                        size={14}
                        className={catalogStyles.checkIcon}
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={catalogStyles.actions}>
                  <Link
                    href={packagesActions.chatHref}
                    className={catalogStyles.actionBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat Now
                  </Link>
                  <Link
                    href={packagesActions.orderHref}
                    className={catalogStyles.actionBtn}
                  >
                    ORDER NOW
                  </Link>
                </div>

                <p className={catalogStyles.note}>{plan.note}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

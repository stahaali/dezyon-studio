import { Check } from "lucide-react";
import Link from "next/link";
import { webAppsPackages } from "@/data/web-apps";
import { packagesActions } from "@/data/packages";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { WebAppsSectionHeading } from "@/components/WebApps/WebAppsSectionHeading/WebAppsSectionHeading";
import catalogStyles from "@/components/Packages/PackagesCatalog/PackagesCatalog.module.css";
import styles from "./WebAppsPackages.module.css";

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export function WebAppsPackages() {
  return (
    <section
      className={styles.section}
      aria-labelledby="web-apps-packages-heading"
    >
      <Container className={catalogStyles.container}>
        <ScrollReveal>
          <header className={styles.header}>
            <WebAppsSectionHeading
              id="web-apps-packages-heading"
              prefix={webAppsPackages.titlePrefix}
              highlight={webAppsPackages.titleHighlight}
              suffix={webAppsPackages.titleSuffix}
              centered
              className={styles.sectionTitle}
            />
            <p className={styles.description}>{webAppsPackages.description}</p>
          </header>
        </ScrollReveal>

        <div className={catalogStyles.grid}>
          {webAppsPackages.plans.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={index * 0.05} as="article">
              <article className={catalogStyles.card}>
                <h3 className={catalogStyles.cardTitle}>{plan.name}</h3>
                <div className={styles.cardDivider} aria-hidden="true" />

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

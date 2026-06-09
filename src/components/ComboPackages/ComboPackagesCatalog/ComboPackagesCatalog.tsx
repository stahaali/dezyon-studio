import { Check } from "lucide-react";
import Link from "next/link";
import { comboPackages } from "@/data/combo-packages";
import { packagesActions } from "@/data/packages";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import catalogStyles from "@/components/Packages/PackagesCatalog/PackagesCatalog.module.css";
import styles from "./ComboPackagesCatalog.module.css";

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export function ComboPackagesCatalog() {
  return (
    <section
      className={catalogStyles.section}
      aria-label="Combo package plans"
    >
      <Container className={catalogStyles.container}>
        <div className={`${catalogStyles.grid} ${styles.comboGrid}`}>
          {comboPackages.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={index * 0.04} as="article">
              <article className={catalogStyles.card}>
                <h3 className={catalogStyles.cardTitle}>{plan.name}</h3>

                <div className={catalogStyles.priceRow}>
                  <span className={catalogStyles.price}>
                    {formatPrice(plan.price)}
                  </span>
                  {!plan.hideWasPrice && (
                    <span className={catalogStyles.wasPrice}>
                      was <s>{formatPrice(plan.wasPrice)}</s>
                    </span>
                  )}
                </div>
                {plan.priceSubtitle ? (
                  <p className={catalogStyles.priceSubtitle}>
                    {plan.priceSubtitle}
                  </p>
                ) : null}

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

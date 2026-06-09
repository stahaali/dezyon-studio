import Link from "next/link";
import { Check, MessageCircle, Phone } from "lucide-react";
import { advanceCombo } from "@/data/combo-packages";
import { packagesActions } from "@/data/packages";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import catalogStyles from "@/components/Packages/PackagesCatalog/PackagesCatalog.module.css";
import styles from "./ComboAdvanceSection.module.css";

function formatPrice(value: number) {
  return `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function ComboAdvanceSection() {
  return (
    <section
      className={`${catalogStyles.section} ${styles.section}`}
      aria-labelledby="advance-combo-heading"
    >
      <Container className={catalogStyles.container}>
        <ScrollReveal>
          <article className={`${catalogStyles.card} ${styles.panel}`}>
            <header className={styles.header}>
              <p className={styles.eyebrow}>{advanceCombo.eyebrow}</p>
              <h2
                id="advance-combo-heading"
                className={catalogStyles.cardTitle}
              >
                {advanceCombo.title}
              </h2>
            </header>

            <div className={styles.columns}>
              {advanceCombo.columns.map((column, columnIndex) => (
                <div key={columnIndex} className={styles.column}>
                  {column.map((group) => (
                    <div
                      key={group.label ?? group.items[0]}
                      className={styles.group}
                    >
                      {group.label ? (
                        <p className={catalogStyles.featuresLabel}>
                          {group.label}
                        </p>
                      ) : null}
                      <ul className={catalogStyles.features}>
                        {group.items.map((item) => (
                          <li key={item} className={catalogStyles.feature}>
                            <Check
                              size={14}
                              className={catalogStyles.checkIcon}
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <footer className={styles.footer}>
              <div className={styles.contact}>
                <a href={advanceCombo.phoneHref} className={styles.contactLink}>
                  <Phone size={16} aria-hidden="true" />
                  <span>{advanceCombo.phone}</span>
                </a>
                <a
                  href={advanceCombo.chatHref}
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>Live Chat</span>
                </a>
                <p className={catalogStyles.note}>{advanceCombo.contactNote}</p>
              </div>

              <div className={styles.pricing}>
                <div className={catalogStyles.priceRow}>
                  <span className={catalogStyles.price}>
                    {formatPrice(advanceCombo.price)}
                  </span>
                  <span className={catalogStyles.wasPrice}>
                    was <s>{formatPrice(advanceCombo.wasPrice)}</s>
                  </span>
                </div>
              </div>

              <div className={styles.cta}>
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
                    href={advanceCombo.orderHref}
                    className={catalogStyles.actionBtn}
                  >
                    ORDER NOW
                  </Link>
                </div>
                <p className={styles.promoNote}>{advanceCombo.promoNote}</p>
                <Link
                  href={advanceCombo.detailsHref}
                  className={styles.viewDetails}
                >
                  VIEW DETAILS
                </Link>
              </div>
            </footer>
          </article>
        </ScrollReveal>
      </Container>
    </section>
  );
}

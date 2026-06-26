import { marketingSolutions } from "@/data/marketing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import { MarketingSolutionsIcon } from "./MarketingSolutionsIcon";
import styles from "./MarketingSolutions.module.css";

export function MarketingSolutions() {
  return (
    <section className={styles.section} aria-labelledby="marketing-solutions-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <h2
              id="marketing-solutions-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              <span className={styles.titleLine}>{marketingSolutions.titlePrefix}</span>
              <span className={styles.titleLine}>
                <span className={styles.wordHighlight}>
                  {marketingSolutions.titleHighlight}
                </span>
              </span>
            </h2>
            <p className={styles.subtitle}>{marketingSolutions.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {marketingSolutions.items.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05} as="article">
              <article className={styles.card}>
                <div className={styles.iconVisual}>
                  <div className={styles.iconRingWrap}>
                    <svg
                      className={styles.iconRing}
                      viewBox="0 0 120 120"
                      aria-hidden="true"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="44.625"
                        fill="none"
                        className={styles.iconRingFill}
                        strokeWidth="17.25"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        className={styles.iconRingBorder}
                        strokeWidth="1.5"
                      />
                    </svg>

                    <span className={styles.iconInner}>
                      <MarketingSolutionsIcon iconId={item.icon} />
                    </span>
                  </div>

                  <span className={styles.iconStem} aria-hidden="true">
                    <span className={styles.iconStemLine} />
                    <span className={styles.iconStemDot} />
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

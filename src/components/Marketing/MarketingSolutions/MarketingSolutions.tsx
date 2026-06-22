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

        <ScrollReveal delay={0.08}>
          <div className={styles.panel}>
            <div className={styles.grid}>
              {marketingSolutions.items.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 0.05} as="article">
                  <article className={styles.card}>
                    <div className={styles.cardTop}>
                      <MarketingSolutionsIcon iconId={item.icon} />
                      <span className={styles.cardIndex} aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

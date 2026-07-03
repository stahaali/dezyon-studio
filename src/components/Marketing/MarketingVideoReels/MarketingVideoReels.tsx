import { marketingVideoReels } from "@/data/marketing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import { MarketingVideoReelsIcon } from "./MarketingVideoReelsIcon";
import styles from "./MarketingVideoReels.module.css";

export function MarketingVideoReels() {
  return (
    <section className={styles.section} aria-labelledby="marketing-reels-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.topRow}>
            <h2
              id="marketing-reels-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              <span className={styles.titleLine}>{marketingVideoReels.titlePrefix}</span>
              <span className={styles.titleLine}>
                <span className={styles.wordHighlight}>
                  {marketingVideoReels.titleHighlight}
                </span>
              </span>
            </h2>
            <p className={styles.intro}>{marketingVideoReels.intro}</p>
          </div>
        </ScrollReveal>

        <ul className={styles.grid}>
          {marketingVideoReels.items.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05} as="li" className={styles.card}>
              <MarketingVideoReelsIcon
                iconId={item.icon}
                className={styles.cardIcon}
              />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.label}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

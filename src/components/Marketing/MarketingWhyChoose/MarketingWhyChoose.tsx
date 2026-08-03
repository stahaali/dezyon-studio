import { marketingWhyChoose } from "@/data/marketing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import { MarketingWhyChooseIcon } from "./MarketingWhyChooseIcon";
import styles from "./MarketingWhyChoose.module.css";

export function MarketingWhyChoose() {
  return (
    <section className={styles.section} aria-labelledby="marketing-why-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.heading}>
            <h2
              id="marketing-why-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              <span className={styles.titleLine}>{marketingWhyChoose.titlePrefix}</span>
              <span className={styles.titleLine}>
                <span className={styles.wordHighlight}>
                  {marketingWhyChoose.titleHighlight}
                </span>
              </span>
            </h2>
            <div className={styles.intro}>
              {marketingWhyChoose.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {marketingWhyChoose.items.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.06} as="article" className={styles.card}>
              <div className={styles.iconBadge}>
                <MarketingWhyChooseIcon iconId={item.icon} className={styles.cardIcon} />
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

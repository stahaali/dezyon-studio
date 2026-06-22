import { marketingIntro } from "@/data/marketing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./MarketingIntro.module.css";

export function MarketingIntro() {
  return (
    <section className={styles.section} aria-labelledby="marketing-intro-heading">
      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <ScrollReveal>
            <div className={styles.content}>
              <h2
                id="marketing-intro-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizePanel} ${styles.title}`}
              >
                <span className={styles.titleLine}>{marketingIntro.title.prefix}</span>
                <span className={styles.titleLine}>
                  <span className={styles.wordHighlight}>
                    {marketingIntro.title.highlight}
                  </span>
                </span>
              </h2>
              {marketingIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </div>
    </section>
  );
}

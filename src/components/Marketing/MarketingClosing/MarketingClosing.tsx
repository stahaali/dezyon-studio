import { marketingClosing } from "@/data/marketing";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./MarketingClosing.module.css";

export function MarketingClosing() {
  return (
    <section className={styles.section} aria-labelledby="marketing-closing-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.card}>
            <div className={styles.cardBg} aria-hidden="true">
              <span className={styles.shapeOne} />
              <span className={styles.shapeTwo} />
              <span className={styles.shapeThree} />
              <span className={styles.shapeFour} />
            </div>

            <div className={styles.content}>
              <h2
                id="marketing-closing-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
              >
                <span className={styles.titleLine}>{marketingClosing.titlePrefix}</span>
                <span className={styles.titleLine}>
                  <span className={styles.wordHighlight}>
                    {marketingClosing.titleHighlight}
                  </span>
                </span>
              </h2>

              {marketingClosing.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}

              <Button href={marketingClosing.cta.href} size="lg">
                {marketingClosing.cta.label}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

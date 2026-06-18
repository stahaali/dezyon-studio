import { aboutHelps } from "@/data/about";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./AboutHelps.module.css";

export function AboutHelps() {
  return (
    <section className={styles.section} aria-labelledby="about-helps-heading">
      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <ScrollReveal>
            <div className={styles.content}>
              <h2
                id="about-helps-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
              >
                <span className={styles.titleLine}>{aboutHelps.title.prefix}</span>
                <span className={styles.titleLine}>
                  <span className={styles.wordHighlight}>
                    {aboutHelps.title.highlight}
                  </span>
                </span>
              </h2>
              {aboutHelps.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className={styles.paragraph}>
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

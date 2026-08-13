import {
  bookPublishingStandOut,
  bookPublishingStandOutIntro,
} from "@/data/book-publishing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import styles from "./BookPublishing.module.css";

export function BookPublishingStandOut() {
  return (
    <section
      className={styles.section}
      aria-labelledby="book-publishing-standout-heading"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <div
            className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${styles.sectionHeading}`}
          >
            <h2
              id="book-publishing-standout-heading"
              className={`${splitTitleStyles.title} ${styles.sectionTitle} ${styles.title}`}
            >
              {bookPublishingStandOutIntro.titlePrefix}
              <span className={styles.wordHighlight}>
                {bookPublishingStandOutIntro.titleHighlight}
              </span>
            </h2>
            <p className={styles.sectionDescription}>
              {bookPublishingStandOutIntro.description}
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.standOutGrid}>
          {bookPublishingStandOut.map((item, index) => (
            <ScrollReveal
              key={item.id}
              delay={index * 0.04}
              as="article"
              className={styles.standOutCard}
            >
              <h3 className={styles.standOutTitle}>{item.title}</h3>
              <p className={styles.standOutDesc}>{item.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

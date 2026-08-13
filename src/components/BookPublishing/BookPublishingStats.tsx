import {
  bookPublishingStats,
  bookPublishingStatsIntro,
} from "@/data/book-publishing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import styles from "./BookPublishing.module.css";

export function BookPublishingStats() {
  return (
    <section
      className={`${styles.section} ${styles.statsSection}`}
      aria-labelledby="book-publishing-stats-heading"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <div
            className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${styles.sectionHeading}`}
          >
            <span className={styles.statsEyebrow}>{bookPublishingStatsIntro.eyebrow}</span>
            <h2
              id="book-publishing-stats-heading"
              className={`${splitTitleStyles.title} ${styles.sectionTitle} ${styles.title}`}
            >
              {bookPublishingStatsIntro.titlePrefix}
              <span className={styles.wordHighlight}>
                {bookPublishingStatsIntro.titleHighlight}
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.statsGrid}>
          {bookPublishingStats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.06} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statSublabel}>{stat.sublabel}</span>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

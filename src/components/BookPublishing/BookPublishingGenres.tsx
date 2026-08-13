import Link from "next/link";
import {
  bookPublishingGenres,
  bookPublishingGenresIntro,
} from "@/data/book-publishing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import styles from "./BookPublishing.module.css";

export function BookPublishingGenres() {
  return (
    <section
      className={styles.section}
      aria-labelledby="book-publishing-genres-heading"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <div
            className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${styles.sectionHeading}`}
          >
            <h2
              id="book-publishing-genres-heading"
              className={`${splitTitleStyles.title} ${styles.sectionTitle} ${styles.title}`}
            >
              {bookPublishingGenresIntro.titlePrefix}
              <span className={styles.wordHighlight}>
                {bookPublishingGenresIntro.titleHighlight}
              </span>
            </h2>
            <p className={styles.sectionDescription}>
              {bookPublishingGenresIntro.description}
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.genresGrid}>
          {bookPublishingGenres.map((genre, index) => (
            <ScrollReveal key={genre.id} delay={index * 0.04}>
              <Link href={genre.href} className={styles.genreLink}>
                {genre.label}
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

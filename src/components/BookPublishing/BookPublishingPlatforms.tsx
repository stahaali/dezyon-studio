import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bookPublishingPlatforms } from "@/data/book-publishing";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./BookPublishing.module.css";

export function BookPublishingPlatforms() {
  return (
    <section
      className={styles.platformsSection}
      aria-labelledby="book-publishing-platforms-heading"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.platformsInner}>
            <h2
              id="book-publishing-platforms-heading"
              className={`${splitTitleStyles.title} ${styles.sectionTitle} ${styles.title}`}
            >
              {bookPublishingPlatforms.titlePrefix}
              <span className={styles.wordHighlight}>
                {bookPublishingPlatforms.titleHighlight}
              </span>
            </h2>
            <p className={styles.sectionDescription}>
              {bookPublishingPlatforms.description}
            </p>
            <div className={styles.platformsActions}>
              <Button href={bookPublishingPlatforms.cta.href} size="lg">
                {bookPublishingPlatforms.cta.label}
                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
              </Button>
              <Link
                href={bookPublishingPlatforms.secondaryCta.href}
                className={styles.secondaryCta}
              >
                {bookPublishingPlatforms.secondaryCta.label}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

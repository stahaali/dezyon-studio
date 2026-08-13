import Image from "next/image";
import {
  bookPublishingProcessIntro,
  bookPublishingProcessSteps,
} from "@/data/book-publishing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import styles from "./BookPublishing.module.css";

export function BookPublishingProcess() {
  return (
    <section
      className={styles.section}
      aria-labelledby="book-publishing-process-heading"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <div
            className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${styles.sectionHeading} ${styles.processHeader}`}
          >
            <h2
              id="book-publishing-process-heading"
              className={`${splitTitleStyles.title} ${styles.sectionTitle} ${styles.title}`}
            >
              {bookPublishingProcessIntro.titlePrefix}
              <span className={styles.wordHighlight}>
                {bookPublishingProcessIntro.titleHighlight}
              </span>
            </h2>
            <p className={styles.sectionDescription}>
              {bookPublishingProcessIntro.description}
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.stepsRow}>
          {bookPublishingProcessSteps.map((step, index) => (
            <ScrollReveal key={step.id} delay={index * 0.08} as="article" className={styles.step}>
              <div className={styles.stepVisual}>
                <svg
                  className={styles.dashedRing}
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="94"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="7 9"
                    strokeLinecap="round"
                  />
                </svg>
                <span className={styles.stepBadge}>{step.step}</span>
                <figure className={styles.stepImage}>
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 991px) 220px, 180px"
                    className={styles.stepImageEl}
                  />
                </figure>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

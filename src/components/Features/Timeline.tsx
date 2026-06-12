"use client";

import dynamic from "next/dynamic";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import styles from "./Timeline.module.css";

const TimelineSlider = dynamic(
  () => import("./TimelineSlider").then((mod) => mod.TimelineSlider),
  { ssr: false },
);

export function Timeline() {
  return (
    <section
      id="timeline"
      className={`page-section ${styles.section}`}
      aria-labelledby="timeline-heading"
    >
      <Container>
        <ScrollReveal>
          <div
            className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${sectionHeadingStyles.light} ${styles.sectionHeading}`}
          >
            <h2
              id="timeline-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              How We Got{" "}
              <span className={styles.wordHighlight}>Here</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className={styles.sliderOuter}>
          <TimelineSlider />
        </div>
      </Container>
    </section>
  );
}

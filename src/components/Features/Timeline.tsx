"use client";

import dynamic from "next/dynamic";
import { Container } from "@/components/Shared/Container";
import { SectionHeading } from "@/components/Shared/SectionHeading";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
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
          <SectionHeading
            title="How we got here"
            light
            lineBreak={false}
            className={styles.sectionHeading}
          />
        </ScrollReveal>
      </Container>

      <div className={styles.sliderOuter}>
        <TimelineSlider />
      </div>
    </section>
  );
}

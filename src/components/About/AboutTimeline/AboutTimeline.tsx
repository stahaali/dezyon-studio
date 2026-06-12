"use client";

import dynamic from "next/dynamic";
import { Container } from "@/components/Shared/Container";
import { SectionHeading } from "@/components/Shared/SectionHeading";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./AboutTimeline.module.css";

const AboutTimelineSlider = dynamic(
  () => import("./AboutTimelineSlider").then((mod) => mod.AboutTimelineSlider),
  { ssr: false },
);

export function AboutTimeline() {
  return (
    <section
      id="timeline"
      className={styles.section}
      aria-labelledby="about-timeline-heading"
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="How We Got Here"
            light
            lineBreak={false}
            className={styles.sectionHeading}
          />
        </ScrollReveal>
      </Container>

      <div className={styles.sliderOuter}>
        <AboutTimelineSlider />
      </div>
    </section>
  );
}

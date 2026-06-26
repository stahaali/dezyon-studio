import Image from "next/image";
import { Fragment } from "react";
import {
  videoEditingProcessIntro,
  videoEditingProcessSteps,
} from "@/data/video-editing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import styles from "./VideoEditingProcess.module.css";

function ProcessArrow({ delay = 0 }: { delay?: number }) {
  return (
    <div className={styles.arrowCell} aria-hidden="true">
      <svg
        className={styles.processArrow}
        style={{ animationDelay: `${delay}s` }}
        viewBox="0 0 132 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 6 46 C 42 8, 90 8, 126 46"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        <path
          d="M 118 46 L 126 46 L 126 38"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function VideoEditingProcess() {
  return (
    <section
      className={styles.section}
      aria-labelledby="video-editing-process-heading"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <header className={styles.header}>
            <PlansPricingHeading
              id="video-editing-process-heading"
              prefix={videoEditingProcessIntro.titlePrefix}
              highlight={videoEditingProcessIntro.titleHighlight}
              size="section"
              align="center"
              className={styles.heading}
            />
          </header>
        </ScrollReveal>

        <div className={styles.stepsRow}>
          {videoEditingProcessSteps.map((step, index) => (
            <Fragment key={step.id}>
              <ScrollReveal delay={index * 0.08} as="article" className={styles.step}>
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
                      className={styles.image}
                    />
                  </figure>
                </div>

                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </ScrollReveal>

              {index < videoEditingProcessSteps.length - 1 ? (
                <ProcessArrow delay={index * 0.35} />
              ) : null}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}

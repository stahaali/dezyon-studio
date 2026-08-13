import { seoAeoTimeline } from "@/data/seo-aeo";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SeoAeoSectionHeading } from "./SeoAeoSectionHeading";
import styles from "./SeoAeo.module.css";

export function SeoAeoTimeline() {
  return (
    <section className={styles.section} aria-labelledby="seo-aeo-process-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <SeoAeoSectionHeading
            id="seo-aeo-process-heading"
            title={seoAeoTimeline.title}
            description={seoAeoTimeline.description}
          />
        </ScrollReveal>

        <ol className={styles.timeline}>
          <span className={styles.timelineLine} aria-hidden="true" />

          {seoAeoTimeline.steps.map((step, index) => (
            <ScrollReveal as="li" key={step.title} delay={index * 0.05}>
              <div className={styles.timelineItem}>
                <span className={styles.timelineStep}>{index + 1}</span>
                <div className={styles.timelineCard}>
                  <h3 className={styles.timelineTitle}>{step.title}</h3>
                  <p className={styles.timelineDesc}>{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

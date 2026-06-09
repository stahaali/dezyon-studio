import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import { TestimonialsSlider } from "./TestimonialsSlider";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section id="testimonials" className={`page-section ${styles.section}`}>
      <Container>
        <ScrollReveal>
          <div
            className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${styles.sectionHeading}`}
          >
            <h2
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              Don&apos;t just take our{" "}
              <span className={styles.wordHighlight}>words</span>
            </h2>
          </div>
        </ScrollReveal>
      </Container>

      <div className={styles.sliderWrap}>
        <TestimonialsSlider />
      </div>
    </section>
  );
}

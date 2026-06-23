import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import { TestimonialsSlider } from "./TestimonialsSlider";
import styles from "./Testimonials.module.css";

type TestimonialsProps = {
  className?: string;
};

export function Testimonials({ className = "" }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className={`page-section ${styles.section} ${className}`.trim()}
    >
      <Container>
        <ScrollReveal>
          <div
            className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${styles.sectionHeading}`}
          >
            <h2
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              Don&apos;t Just Take Our{" "}
              <span className={styles.wordHighlight}>Words</span>
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

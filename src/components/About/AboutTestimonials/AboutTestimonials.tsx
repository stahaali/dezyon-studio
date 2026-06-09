import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { aboutTestimonials } from "@/data/about";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import styles from "./AboutTestimonials.module.css";

export function AboutTestimonials() {
  return (
    <section className={styles.section} aria-labelledby="about-testimonials-heading">
      <Container>
        <ScrollReveal>
          <div
            className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${styles.sectionHeading}`}
          >
            <h2
              id="about-testimonials-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              Some clients{" "}
              <span className={styles.wordHighlight}>feedbacks</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {aboutTestimonials.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.06} as="article">
              <article className={styles.card}>
                <blockquote className={styles.quote}>
                  <p>&ldquo;{item.quote}&rdquo;</p>
                </blockquote>
                <footer className={styles.author}>
                  <Image
                    src={item.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.avatar}
                  />
                  <div>
                    <cite className={styles.name}>{item.name}</cite>
                    <span className={styles.role}>{item.role}</span>
                  </div>
                </footer>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <div className={styles.ctaWrapper}>
            <a href="#testimonials" className={styles.seeAll}>
              See all feedbacks
              <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

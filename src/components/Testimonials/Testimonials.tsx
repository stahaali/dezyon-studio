import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/data/site";
import { Container } from "@/components/Shared/Container";
import { SectionHeading } from "@/components/Shared/SectionHeading";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section id="testimonials" className={`page-section ${styles.section}`}>
      <Container>
        <ScrollReveal>
          <SectionHeading
            className={styles.sectionHeading}
            title="Don't just take our words"
          />
        </ScrollReveal>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <ScrollReveal key={`${item.company}-${index}`} delay={index * 0.04} as="article">
              <article className={styles.card}>
                <div className={styles.companyRow}>
                  <Image
                    src={item.logo}
                    alt={item.company}
                    width={165}
                    height={48}
                    className={styles.companyLogo}
                  />
                </div>

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

        <ScrollReveal delay={0.2}>
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

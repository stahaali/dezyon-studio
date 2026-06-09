import { termsPage } from "@/data/terms";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./TermsContent.module.css";

export function TermsContent() {
  return (
    <section className={styles.section} aria-labelledby="terms-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <header className={styles.header}>
            <h1 id="terms-heading" className={styles.title}>
              {termsPage.title}
            </h1>
            <p className={styles.intro}>{termsPage.intro}</p>
          </header>
        </ScrollReveal>

        <div className={styles.sections}>
          {termsPage.sections.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 0.05} as="section">
              <section className={styles.block}>
                <h2 className={styles.blockTitle}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </section>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { blogWebsiteSalesperson } from "@/data/blog-website-salesperson";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./WebsiteSalespersonPost.module.css";

export function WebsiteSalespersonPost() {
  const { titleLines, intro, sections, cta } = blogWebsiteSalesperson;

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <Container className={styles.heroContainer}>
          <ScrollReveal>
            <div className={styles.heroContent}>
              <h1
                id="blog-post-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.title}`}
              >
                <span className={styles.titleLine}>{titleLines.prefix}</span>
                <span className={styles.titleLine}>
                  <span className={styles.wordHighlight}>{titleLines.highlight}</span>
                </span>
                <span className={styles.titleLine}>{titleLines.suffix}</span>
              </h1>
            </div>
          </ScrollReveal>
        </Container>
      </header>

      <Container className={styles.article}>
        <ScrollReveal>
          <div className={styles.intro}>
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <div className={styles.sections}>
          {sections.map((section, index) => (
            <ScrollReveal key={section.id} delay={index * 0.04} as="section">
              <section className={styles.section} aria-labelledby={section.id}>
                <h2 id={section.id} className={styles.heading}>
                  {section.heading}
                </h2>

                {"paragraphs" in section && section.paragraphs ? (
                  <div className={styles.sectionBody}>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)} className={styles.paragraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : null}

                {"list" in section && section.list ? (
                  <ul className={styles.list}>
                    {section.list.map((item) => (
                      <li key={item.lead} className={styles.listItem}>
                        <strong className={styles.listLead}>{item.lead}</strong>{" "}
                        {item.body}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {"services" in section && section.services ? (
                  <ul className={styles.list}>
                    {section.services.map((item) => (
                      <li key={item.lead} className={styles.listItem}>
                        <strong className={styles.listLead}>{item.lead}</strong>
                        {" — "}
                        {item.body}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </ScrollReveal>
          ))}
        </div>
      </Container>

      <section
        className={styles.ctaSection}
        aria-labelledby="blog-post-cta-heading"
      >
        <Container className={styles.ctaContainer}>
          <ScrollReveal>
            <div className={styles.ctaCard}>
              <div className={styles.ctaBg} aria-hidden="true" />
              <div className={styles.ctaContent}>
                <h2
                  id="blog-post-cta-heading"
                  className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.ctaTitle}`}
                >
                  <span className={styles.ctaTitleLine}>{cta.titlePrefix}</span>
                  <span className={styles.ctaTitleLine}>
                    <span className={styles.ctaHighlight}>{cta.titleHighlight}</span>
                  </span>
                </h2>
                {cta.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.ctaParagraph}>
                    {paragraph}
                  </p>
                ))}
                <Button
                  href={cta.button.href}
                  size="lg"
                  className={styles.ctaButton}
                >
                  {cta.button.label}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </article>
  );
}

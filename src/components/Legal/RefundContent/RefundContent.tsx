import { refundPage } from "@/data/refund";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./RefundContent.module.css";

export function RefundContent() {
  return (
    <section className={styles.section} aria-labelledby="refund-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <header className={styles.header}>
            <h1 id="refund-heading" className={styles.title}>
              {refundPage.title}
            </h1>
            <p className={styles.intro}>{refundPage.intro}</p>
          </header>
        </ScrollReveal>

        <div className={styles.sections}>
          {refundPage.sections.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 0.05} as="section">
              <section className={styles.block}>
                <h2 className={styles.blockTitle}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
                {"items" in section && (
                  <ul className={styles.list}>
                    {section.items.map((item) => (
                      <li key={item.slice(0, 32)} className={styles.listItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

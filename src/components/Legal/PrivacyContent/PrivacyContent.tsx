import { privacyPage } from "@/data/privacy";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./PrivacyContent.module.css";

export function PrivacyContent() {
  return (
    <section className={styles.section} aria-labelledby="privacy-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <header className={styles.header}>
            <h1 id="privacy-heading" className={styles.title}>
              {privacyPage.title}
            </h1>
            <div className={styles.intro}>
              {privacyPage.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </header>
        </ScrollReveal>

        <div className={styles.sections}>
          {privacyPage.sections.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 0.05} as="section">
              <section className={styles.block}>
                <h2 className={styles.blockTitle}>{section.title}</h2>
                <ul className={styles.list}>
                  {section.items.map((item) => (
                    <li key={item.slice(0, 32)} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <p className={styles.closing}>{privacyPage.closing}</p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

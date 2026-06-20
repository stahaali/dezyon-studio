import { privacyPage } from "@/data/privacy";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { LegalHero } from "@/components/Legal/LegalHero/LegalHero";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import styles from "../LegalContent.module.css";

export function PrivacyContent() {
  return (
    <div className={styles.page}>
      <LegalHero
        id="privacy-heading"
        titlePrefix={privacyPage.titlePrefix}
        titleHighlight={privacyPage.titleHighlight}
      />

      <Container className={styles.body}>
        <ScrollReveal>
          <div className={`${styles.intro} ${styles.introCentered}`}>
            {privacyPage.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <div className={styles.sections}>
          {privacyPage.sections.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 0.05} as="section">
              <section className={styles.block}>
                <PlansPricingHeading title={section.title} as="h2" size="panel" align="left" />
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
    </div>
  );
}

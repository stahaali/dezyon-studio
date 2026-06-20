import { termsPage } from "@/data/terms";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { LegalHero } from "@/components/Legal/LegalHero/LegalHero";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import styles from "../LegalContent.module.css";

export function TermsContent() {
  return (
    <div className={styles.page}>
      <LegalHero
        id="terms-heading"
        titlePrefix={termsPage.titlePrefix}
        titleHighlight={termsPage.titleHighlight}
        description={termsPage.intro}
      />

      <Container className={styles.body}>
        <div className={styles.sections}>
          {termsPage.sections.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 0.05} as="section">
              <section className={styles.block}>
                <PlansPricingHeading title={section.title} as="h2" size="panel" align="left" />
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
    </div>
  );
}

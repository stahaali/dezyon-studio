import { refundPage } from "@/data/refund";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { LegalHero } from "@/components/Legal/LegalHero/LegalHero";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import styles from "../LegalContent.module.css";

export function RefundContent() {
  return (
    <div className={styles.page}>
      <LegalHero
        id="refund-heading"
        titlePrefix={refundPage.titlePrefix}
        titleHighlight={refundPage.titleHighlight}
        description={refundPage.intro}
        stars={refundPage.stars}
      />

      <Container className={styles.body}>
        <div className={styles.sections}>
          {refundPage.sections.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 0.05} as="section">
              <section className={styles.block}>
                <PlansPricingHeading title={section.title} as="h2" size="panel" align="left" />
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
    </div>
  );
}

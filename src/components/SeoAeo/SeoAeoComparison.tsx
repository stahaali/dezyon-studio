import { Bot, Check, Search } from "lucide-react";
import { seoAeoComparison } from "@/data/seo-aeo";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { TalkingWebsiteGradientIcon } from "@/components/TalkingWebsite/TalkingWebsiteGradientIcon";
import { SeoAeoSectionHeading } from "./SeoAeoSectionHeading";
import styles from "./SeoAeo.module.css";

export function SeoAeoComparison() {
  return (
    <section className={styles.section} aria-labelledby="seo-aeo-comparison-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <SeoAeoSectionHeading
            id="seo-aeo-comparison-heading"
            title={seoAeoComparison.title}
            description={seoAeoComparison.description}
          />
        </ScrollReveal>

        <div className={styles.compareGrid}>
          {seoAeoComparison.columns.map((column, index) => {
            const isAeo = column.id === "aeo";

            return (
              <ScrollReveal key={column.id} delay={index * 0.08}>
                <article
                  className={`${styles.comparePanel} ${isAeo ? styles.comparePanelAeo : ""}`.trim()}
                >
                  <div className={styles.compareHead}>
                    <TalkingWebsiteGradientIcon
                      icon={isAeo ? Bot : Search}
                      tone={isAeo ? "fun" : "language"}
                      size="feature"
                    />
                    <div>
                      <h3 className={styles.compareLabel}>{column.label}</h3>
                      <p className={styles.compareSub}>{column.subtitle}</p>
                    </div>
                  </div>

                  <p className={styles.compareSummary}>{column.summary}</p>

                  <ul className={styles.compareList}>
                    {column.items.map((item) => (
                      <li key={item} className={styles.compareItem}>
                        <Check
                          size={15}
                          strokeWidth={2.6}
                          aria-hidden="true"
                          className={styles.compareCheck}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

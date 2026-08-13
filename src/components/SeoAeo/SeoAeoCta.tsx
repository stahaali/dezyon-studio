import { seoAeoFinalCta } from "@/data/seo-aeo";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./SeoAeo.module.css";

export function SeoAeoCta() {
  return (
    <section className={styles.ctaSection} aria-labelledby="seo-aeo-cta-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.ctaCard}>
            <h2
              id="seo-aeo-cta-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.ctaTitle}`}
            >
              {seoAeoFinalCta.titlePrefix}
              <span className={styles.wordHighlight}>
                {seoAeoFinalCta.titleHighlight}
              </span>
              {seoAeoFinalCta.titleSuffix}
            </h2>

            <p className={styles.ctaDesc}>{seoAeoFinalCta.description}</p>

            <div className={styles.ctaActions}>
              <Button href={seoAeoFinalCta.primaryCta.href} size="lg" animated={false}>
                {seoAeoFinalCta.primaryCta.label}
              </Button>
              <Button
                href={seoAeoFinalCta.secondaryCta.href}
                size="lg"
                variant="outline"
                animated={false}
                className={styles.ctaSecondaryBtn}
              >
                {seoAeoFinalCta.secondaryCta.label}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

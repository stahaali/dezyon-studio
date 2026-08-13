import { seoAeoFeatures } from "@/data/seo-aeo";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SeoAeoCardGrid } from "./SeoAeoCardGrid";
import { SeoAeoSectionHeading } from "./SeoAeoSectionHeading";
import styles from "./SeoAeo.module.css";

export function SeoAeoFeatures() {
  return (
    <section className={styles.section} aria-labelledby="seo-aeo-features-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <SeoAeoSectionHeading
            id="seo-aeo-features-heading"
            title={seoAeoFeatures.title}
            description={seoAeoFeatures.description}
          />
        </ScrollReveal>

        <SeoAeoCardGrid items={seoAeoFeatures.items} />
      </Container>
    </section>
  );
}

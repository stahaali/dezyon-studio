import { seoAeoSolutions } from "@/data/seo-aeo";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SeoAeoCardGrid } from "./SeoAeoCardGrid";
import { SeoAeoSectionHeading } from "./SeoAeoSectionHeading";
import styles from "./SeoAeo.module.css";

export function SeoAeoSolutions() {
  return (
    <section className={styles.section} aria-labelledby="seo-aeo-solutions-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <SeoAeoSectionHeading
            id="seo-aeo-solutions-heading"
            title={seoAeoSolutions.title}
            description={seoAeoSolutions.description}
          />
        </ScrollReveal>

        <SeoAeoCardGrid items={seoAeoSolutions.items} />
      </Container>
    </section>
  );
}

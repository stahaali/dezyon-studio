import { seoAeoProblems } from "@/data/seo-aeo";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SeoAeoCardGrid } from "./SeoAeoCardGrid";
import { SeoAeoSectionHeading } from "./SeoAeoSectionHeading";
import styles from "./SeoAeo.module.css";

export function SeoAeoProblems() {
  return (
    <section className={styles.section} aria-labelledby="seo-aeo-problems-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <SeoAeoSectionHeading
            id="seo-aeo-problems-heading"
            title={seoAeoProblems.title}
            description={seoAeoProblems.description}
          />
        </ScrollReveal>

        <SeoAeoCardGrid items={seoAeoProblems.items} />
      </Container>
    </section>
  );
}

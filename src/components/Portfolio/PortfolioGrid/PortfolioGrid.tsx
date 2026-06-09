import Image from "next/image";
import Link from "next/link";
import { portfolioGrid, portfolioProjects } from "@/data/portfolio";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./PortfolioGrid.module.css";

export function PortfolioGrid() {
  return (
    <section className={styles.section} aria-labelledby="portfolio-grid-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <header className={styles.sectionHeading}>
            <h2
              id="portfolio-grid-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              {portfolioGrid.titlePrefix}
              <span className={styles.wordHighlight}>
                {portfolioGrid.titleHighlight}
              </span>
              {portfolioGrid.titleSuffix}
            </h2>
            <p className={styles.description}>{portfolioGrid.description}</p>
          </header>
        </ScrollReveal>

        <div className={styles.grid}>
          {portfolioProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.06} as="article">
              <article className={styles.card}>
                <Link href={project.href} className={styles.cardLink}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.category}>{project.category}</span>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                  </div>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

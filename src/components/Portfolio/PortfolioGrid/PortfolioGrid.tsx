import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/data/portfolio";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./PortfolioGrid.module.css";

export function PortfolioGrid() {
  return (
    <section className={styles.section} aria-label="Portfolio gallery">
      <Container>
        <div className={styles.grid}>
          {portfolioProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.06} as="article">
              <article className={styles.card}>
                <Link href={project.href} className={styles.cardLink}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.image}
                    />
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

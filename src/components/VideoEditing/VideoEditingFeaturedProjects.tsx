import Image from "next/image";
import {
  videoEditingFeaturedProjects,
  videoEditingFeaturedProjectsIntro,
} from "@/data/video-editing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import styles from "./VideoEditingFeaturedProjects.module.css";

export function VideoEditingFeaturedProjects() {
  return (
    <section
      className={styles.section}
      aria-labelledby="video-editing-featured-projects-heading"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <header className={styles.header}>
            <div className={styles.headerMain}>
              <PlansPricingHeading
                id="video-editing-featured-projects-heading"
                prefix={videoEditingFeaturedProjectsIntro.titlePrefix}
                highlight={videoEditingFeaturedProjectsIntro.titleHighlight}
                size="section"
                align="left"
                className={styles.heading}
              />
            </div>
            <p className={styles.headerDescription}>
              {videoEditingFeaturedProjectsIntro.description}
            </p>
          </header>
        </ScrollReveal>

        <div className={styles.grid}>
          {videoEditingFeaturedProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.05}
              as="article"
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 33vw"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <span className={styles.category}>{project.category}</span>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

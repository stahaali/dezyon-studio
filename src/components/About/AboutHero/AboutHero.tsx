import { aboutHero } from "@/data/about";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./AboutHero.module.css";

export function AboutHero() {
  return (
    <section className={styles.section} aria-labelledby="about-hero-heading">
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.heroMesh} />
        <div className={styles.heroGridLines} />
        <div className={`${styles.heroOrb} ${styles.heroOrbOne}`} />
        <div className={`${styles.heroOrb} ${styles.heroOrbTwo}`} />
      </div>

      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.content}>
            <div className={styles.headingWrap}>
              <h1
                id="about-hero-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.title}`}
              >
                <span className={splitTitleStyles.lightOnDark}>
                  {aboutHero.titlePrefix}
                  <span className={styles.wordHighlight}>{aboutHero.titleHighlight}</span>
                </span>
              </h1>
            </div>
            <p className={styles.description}>{aboutHero.description}</p>
            <p className={styles.tagline}>
              <strong>{aboutHero.tagline}</strong>
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

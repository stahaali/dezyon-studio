import Image from "next/image";
import { aboutHero } from "@/data/about";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./AboutHero.module.css";

export function AboutHero() {
  const { stars } = aboutHero;

  return (
    <section className={styles.section} aria-labelledby="about-hero-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.content}>
            <div className={styles.headingWrap}>
              <h1
                id="about-hero-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.title}`}
              >
                <span className={splitTitleStyles.lightOnDark}>
                  About Dezyon{" "}
                  <span className={styles.wordHighlight}>Studio.</span>
                </span>
              </h1>
              <Image
                src={stars.left.src}
                alt=""
                width={stars.left.width}
                height={stars.left.height}
                className={styles.starLeft}
                aria-hidden="true"
              />
              <Image
                src={stars.right.src}
                alt=""
                width={stars.right.width}
                height={stars.right.height}
                className={styles.starRight}
                aria-hidden="true"
              />
            </div>
            <p className={styles.description}>{aboutHero.description}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

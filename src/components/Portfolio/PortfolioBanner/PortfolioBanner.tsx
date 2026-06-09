import type { CSSProperties } from "react";
import Image from "next/image";
import { portfolioBanner } from "@/data/portfolio";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./PortfolioBanner.module.css";

const positionClasses: Record<string, string> = {
  one: styles.previewOne,
  two: styles.previewTwo,
  three: styles.previewThree,
  four: styles.previewFour,
  five: styles.previewFive,
  six: styles.previewSix,
};

export function PortfolioBanner() {
  const { stars, previews } = portfolioBanner;

  return (
    <section className={styles.section} aria-labelledby="portfolio-banner-heading">
      <div className={styles.floatingLayer} aria-hidden="true">
        {previews.map((preview) => (
          <div
            key={preview.id}
            className={`${styles.previewCard} ${positionClasses[preview.position]}`}
            style={{ "--tilt": `${preview.tilt}deg` } as CSSProperties}
          >
            <div className={styles.previewInner}>
              <Image
                src={preview.src}
                alt=""
                fill
                sizes="220px"
                className={styles.previewImage}
              />
              <div className={styles.previewOverlay} />
            </div>
          </div>
        ))}
      </div>

      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.content}>
            <div className={styles.headingWrap}>
              <div className={styles.titleRow}>
                <Image
                  src={stars.left.src}
                  alt=""
                  width={stars.left.width}
                  height={stars.left.height}
                  className={styles.starLeft}
                  aria-hidden="true"
                />
                <h1
                  id="portfolio-banner-heading"
                  className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.title}`}
                >
                  <span className={splitTitleStyles.lightOnDark}>
                    {portfolioBanner.titlePrefix}
                    <span className={styles.wordHighlight}>
                      {portfolioBanner.titleHighlight}
                    </span>
                  </span>
                </h1>
                <Image
                  src={stars.right.src}
                  alt=""
                  width={stars.right.width}
                  height={stars.right.height}
                  className={styles.starRight}
                  aria-hidden="true"
                />
              </div>
            </div>
            <p className={styles.description}>{portfolioBanner.description}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

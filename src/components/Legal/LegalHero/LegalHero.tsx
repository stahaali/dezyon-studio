import Image from "next/image";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./LegalHero.module.css";

type LegalHeroProps = {
  id: string;
  titlePrefix: string;
  titleHighlight: string;
  description?: string;
  stars?: {
    left: { src: string; width: number; height: number; alt: string };
    right: { src: string; width: number; height: number; alt: string };
  };
};

export function LegalHero({
  id,
  titlePrefix,
  titleHighlight,
  description,
  stars,
}: LegalHeroProps) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.content}>
            <div className={styles.headingWrap}>
              <div className={`${styles.titleRow} ${!stars ? styles.titleRowPlain : ""}`.trim()}>
                {stars ? (
                  <Image
                    src={stars.left.src}
                    alt={stars.left.alt}
                    width={stars.left.width}
                    height={stars.left.height}
                    className={styles.starLeft}
                    aria-hidden="true"
                  />
                ) : null}
                <h1
                  id={id}
                  className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.title}`}
                >
                  <span className={splitTitleStyles.lightOnDark}>
                    {titlePrefix}
                    <span className={styles.wordHighlight}>{titleHighlight}</span>
                  </span>
                </h1>
                {stars ? (
                  <Image
                    src={stars.right.src}
                    alt={stars.right.alt}
                    width={stars.right.width}
                    height={stars.right.height}
                    className={styles.starRight}
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            </div>
            {description ? <p className={styles.description}>{description}</p> : null}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

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
  stars: {
    left: { src: string; width: number; height: number };
    right: { src: string; width: number; height: number };
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
                  id={id}
                  className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.title}`}
                >
                  <span className={splitTitleStyles.lightOnDark}>
                    {titlePrefix}
                    <span className={styles.wordHighlight}>{titleHighlight}</span>
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
            {description ? <p className={styles.description}>{description}</p> : null}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

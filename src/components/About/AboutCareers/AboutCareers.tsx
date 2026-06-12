import Image from "next/image";
import { aboutCareers } from "@/data/about";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./AboutCareers.module.css";

export function AboutCareers() {
  const { illustrations } = aboutCareers;
  const [starOne, starTwo] = illustrations.stars;

  return (
    <section className={styles.section} aria-labelledby="about-careers-heading">
      <div className={styles.banner}>
        <div className={styles.illustrationLeft} aria-hidden="true">
          <Image
            src={illustrations.left.src}
            alt=""
            width={illustrations.left.width}
            height={illustrations.left.height}
            className={styles.illustrationLeftImg}
          />
        </div>

        <Image
          src={starOne.src}
          alt=""
          width={starOne.width}
          height={starOne.height}
          className={styles.starOne}
          aria-hidden="true"
        />
        <Image
          src={starTwo.src}
          alt=""
          width={starTwo.width}
          height={starTwo.height}
          className={styles.starTwo}
          aria-hidden="true"
        />

        <Container className={styles.careersContainer}>
          <ScrollReveal>
            <div className={styles.content}>
              <h2
                id="about-careers-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
              >
                <span className={styles.titleLine}>We&apos;re Looking For</span>
                <span className={styles.titleLine}>
                  People Who Share Our{" "}
                  <span className={styles.wordHighlight}>Vision!</span>
                </span>
              </h2>
              <p className={styles.subtitle}>{aboutCareers.description}</p>
              <Button
                href={aboutCareers.cta.href}
                size="lg"
                className={styles.button}
              >
                {aboutCareers.cta.label}
              </Button>
            </div>
          </ScrollReveal>
        </Container>

        <div className={styles.illustrationRight} aria-hidden="true">
          <Image
            src={illustrations.right.src}
            alt=""
            width={illustrations.right.width}
            height={illustrations.right.height}
            className={styles.illustrationRightImg}
          />
        </div>
      </div>
    </section>
  );
}

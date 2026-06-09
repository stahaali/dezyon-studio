import Image from "next/image";
import { aboutShowcase } from "@/data/about";
import { BrandSlider } from "@/components/Hero/BrandSlider";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./AboutShowcase.module.css";

export function AboutShowcase() {
  const { left, right } = aboutShowcase;

  return (
    <section className={styles.section} aria-label="About gallery">
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.grid}>
            <div className={styles.leftCol}>
              <figure className={styles.figure}>
                <Image
                  src={left.image}
                  alt="Modern office lounge interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 36vw"
                  className={styles.image}
                />
              </figure>
              <Image
                src={left.illustration.src}
                alt=""
                width={left.illustration.width}
                height={left.illustration.height}
                className={styles.illustrationLeft}
                aria-hidden="true"
              />
            </div>

            <div className={styles.rightCol}>
              <figure className={styles.figure}>
                <Image
                  src={right.image}
                  alt="Team collaborating around a laptop"
                  fill
                  sizes="(max-width: 768px) 100vw, 64vw"
                  className={styles.image}
                />
              </figure>
              <Image
                src={right.illustration.src}
                alt=""
                width={right.illustration.width}
                height={right.illustration.height}
                className={styles.illustrationRight}
                aria-hidden="true"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className={styles.brandSlider}>
          <BrandSlider />
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { aboutHelps, aboutStats } from "@/data/about";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SplitTitle } from "@/components/Shared/SplitTitle";
import styles from "./AboutHelps.module.css";

export function AboutHelps() {
  const { illustration } = aboutHelps;

  return (
    <section className={styles.section} aria-labelledby="about-helps-heading">
      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <ScrollReveal>
            <div className={styles.content}>
              <SplitTitle
                as="h2"
                id="about-helps-heading"
                title={aboutHelps.title}
                size="section"
                lineBreak={false}
                className={styles.title}
              />
              {aboutHelps.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}

              <div className={styles.stats}>
                {aboutStats.map((stat) => (
                  <div key={stat.label} className={styles.stat}>
                    <span className={styles.value}>{stat.value}</span>
                    <span className={styles.label}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>

        <Image
          src={illustration.src}
          alt=""
          width={illustration.width}
          height={illustration.height}
          className={styles.illustration}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

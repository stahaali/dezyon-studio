import Image from "next/image";
import { aboutValues } from "@/data/about";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SectionHeading } from "@/components/Shared/SectionHeading";
import { SplitTitle } from "@/components/Shared/SplitTitle";
import styles from "./AboutValues.module.css";

export function AboutValues() {
  return (
    <section className={styles.section} aria-labelledby="about-values-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <SectionHeading
            className={styles.sectionHeading}
            lineBreak={false}
            title="Our Values it's Simple!"
          />
        </ScrollReveal>

        <div className={styles.grid}>
          {aboutValues.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.06} as="article">
              <article className={styles.card}>
                <div className={styles.iconWrap}>
                  <Image
                    src={item.icon}
                    alt=""
                    width={item.iconWidth}
                    height={item.iconHeight}
                    className={styles.icon}
                    aria-hidden="true"
                  />
                </div>
                <SplitTitle
                  as="h3"
                  title={item.title}
                  size="card"
                  className={styles.cardTitle}
                />
                <p className={styles.cardDesc}>{item.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { values } from "@/data/site";
import { StatsGrid } from "@/components/Shared/StatsGrid/StatsGrid";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SplitTitle } from "@/components/Shared/SplitTitle";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./Values.module.css";

export function Values() {
  return (
    <section className={`page-section ${styles.section}`} aria-labelledby="values-heading">
      <Container>
        <ScrollReveal>
          <div className={styles.sectionHeading}>
            <h2
              id="values-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              Our Values It&apos;s{" "}
              <span className={styles.wordHighlight}>Simple!</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.valuesGrid}>
          {values.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08} as="article">
              <article className={styles.card}>
                <div className={styles.iconWrap}>
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={80}
                    height={80}
                    className={styles.icon}
                    aria-hidden="true"
                  />
                </div>
                <SplitTitle
                  as="h3"
                  title={item.title}
                  size="card"
                  lineBreak={false}
                  className={styles.cardTitle}
                />
                <p className={styles.cardDesc}>{item.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <StatsGrid variant="light" animate={false} />
        </ScrollReveal>
      </Container>
    </section>
  );
}

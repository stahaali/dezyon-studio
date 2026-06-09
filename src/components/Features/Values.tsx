import Image from "next/image";
import { values, stats } from "@/data/site";
import { Container } from "@/components/Shared/Container";
import { SectionHeading } from "@/components/Shared/SectionHeading";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SplitTitle } from "@/components/Shared/SplitTitle";
import styles from "./Values.module.css";

export function Values() {
  return (
    <section className={`page-section ${styles.section}`} aria-labelledby="values-heading">
      <Container>
        <ScrollReveal>
          <SectionHeading
            className={styles.sectionHeading}
            lineBreak={false}
            title="Our Values it's Simple!"
          />
        </ScrollReveal>

        <div className={styles.valuesGrid}>
          {values.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08} as="article">
              <article className={styles.card}>
                <div className={styles.iconWrap}>
                  <Image
                    src={item.icon}
                    alt=""
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
          <div className={styles.statsCard}>
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

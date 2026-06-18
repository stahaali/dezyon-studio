import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import { aboutValues } from "@/data/about";
import { AboutValueIcon } from "@/components/About/AboutValues/AboutValueIcon";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import styles from "./AboutValues.module.css";

export function AboutValues() {
  return (
    <section className={styles.section} aria-labelledby="about-values-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <div
            className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${styles.sectionHeading}`}
          >
            <h2
              id="about-values-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              Our Values It&apos;s{" "}
              <span className={styles.wordHighlight}>Simple!</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.row}>
          {aboutValues.map((item, index) => (
            <Fragment key={item.title}>
              {index > 0 ? (
                <div className={styles.arrowBetween} aria-hidden="true">
                  <ArrowRight className={styles.arrowIcon} strokeWidth={1.75} />
                </div>
              ) : null}
              <ScrollReveal delay={index * 0.06} className={styles.cardCell}>
                <article className={styles.card}>
                  <div className={styles.iconWrap}>
                    <AboutValueIcon iconId={item.iconId} />
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </article>
              </ScrollReveal>
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}

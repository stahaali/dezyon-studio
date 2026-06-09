import Image from "next/image";
import { webAppsTechnologies } from "@/data/web-apps";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { WebAppsSectionHeading } from "@/components/WebApps/WebAppsSectionHeading/WebAppsSectionHeading";
import styles from "./WebAppsTechnologies.module.css";

export function WebAppsTechnologies() {
  return (
    <section
      className={styles.section}
      aria-labelledby="web-apps-technologies-heading"
    >
      <Container className={styles.container}>
        <div className={styles.grid}>
          <ScrollReveal className={styles.imageCol}>
            <figure className={styles.figure}>
              <Image
                src={webAppsTechnologies.image}
                alt={webAppsTechnologies.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className={styles.image}
              />
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className={styles.contentCol}>
            <div className={styles.content}>
              <WebAppsSectionHeading
                id="web-apps-technologies-heading"
                prefix={webAppsTechnologies.titlePrefix}
                highlight={webAppsTechnologies.titleHighlight}
                suffix={webAppsTechnologies.titleSuffix}
                className={styles.sectionTitle}
              />

              <p className={styles.intro}>{webAppsTechnologies.intro}</p>

              <div className={styles.segments}>
                {webAppsTechnologies.segments.map((segment) => (
                  <article key={segment.id} className={styles.segment}>
                    <div className={styles.iconWrap}>
                      <Image
                        src={segment.icon}
                        alt=""
                        width={52}
                        height={52}
                        className={styles.icon}
                        aria-hidden="true"
                      />
                    </div>
                    <div className={styles.segmentContent}>
                      <h3 className={styles.segmentTitle}>{segment.title}</h3>
                      <p className={styles.segmentText}>{segment.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

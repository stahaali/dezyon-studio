import Image from "next/image";
import { webAppsDevelopment } from "@/data/web-apps";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { WebAppsSectionHeading } from "@/components/WebApps/WebAppsSectionHeading/WebAppsSectionHeading";
import styles from "./WebAppsDevelopment.module.css";

export function WebAppsDevelopment() {
  return (
    <section
      className={styles.section}
      aria-labelledby="web-apps-development-heading"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <header className={styles.header}>
            <WebAppsSectionHeading
              id="web-apps-development-heading"
              prefix={webAppsDevelopment.titlePrefix}
              highlight={webAppsDevelopment.titleHighlight}
              suffix={webAppsDevelopment.titleSuffix}
              centered
              className={styles.sectionTitle}
            />
            <p className={styles.description}>
              {webAppsDevelopment.description}
            </p>
          </header>
        </ScrollReveal>

        <div className={styles.grid}>
          {webAppsDevelopment.cards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index * 0.06} as="article">
              <article className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.number} aria-hidden="true">
                    {card.number}
                  </span>
                  <Image
                    src={card.icon}
                    alt=""
                    width={72}
                    height={72}
                    className={styles.cardIcon}
                    aria-hidden="true"
                  />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

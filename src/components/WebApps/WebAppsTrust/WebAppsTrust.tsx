import Image from "next/image";
import { webAppsTrust } from "@/data/web-apps";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./WebAppsTrust.module.css";

export function WebAppsTrust() {
  return (
    <section className={styles.section} aria-label="Why choose our web apps">
      <Container className={styles.container}>
        <div className={styles.grid}>
          {webAppsTrust.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05} as="article">
              <article
                className={`${styles.card} ${index % 2 === 1 ? styles.cardAccent : ""}`}
              >
                <div className={styles.iconWrap}>
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={52}
                    height={52}
                    className={styles.icon}
                    aria-hidden="true"
                  />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

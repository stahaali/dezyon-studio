import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { contactReach } from "@/data/contact";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./ContactReach.module.css";

export function ContactReach() {
  return (
    <section className={styles.section} aria-labelledby="contact-reach-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <h2
            id="contact-reach-heading"
            className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
          >
            {contactReach.titlePrefix}
            <span className={styles.wordHighlight}>
              {contactReach.titleHighlight}
            </span>
            {contactReach.titleSuffix}
          </h2>
        </ScrollReveal>

        <div className={styles.grid}>
          {contactReach.items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.06} as="article">
              <article className={styles.card}>
                <Image
                  src={item.icon}
                  alt=""
                  width={52}
                  height={52}
                  className={styles.icon}
                  aria-hidden="true"
                />
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
                <Link
                  href={item.link.href}
                  className={styles.cardLink}
                  {...(item.link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span>{item.link.label}</span>
                  <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { contactBanner } from "@/data/contact";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SplitTitle } from "@/components/Shared/SplitTitle";
import styles from "./ContactBanner.module.css";

export function ContactBanner() {
  const { stars } = contactBanner;

  return (
    <section className={styles.section} aria-labelledby="contact-banner-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.content}>
            <div className={styles.headingWrap}>
              <SplitTitle
                as="h1"
                id="contact-banner-heading"
                title={contactBanner.title}
                theme="dark"
                size="hero"
                lineBreak={false}
                className={styles.title}
              />
              <Image
                src={stars.left.src}
                alt=""
                width={stars.left.width}
                height={stars.left.height}
                className={styles.starLeft}
                aria-hidden="true"
              />
              <Image
                src={stars.right.src}
                alt=""
                width={stars.right.width}
                height={stars.right.height}
                className={styles.starRight}
                aria-hidden="true"
              />
            </div>
            <p className={styles.description}>{contactBanner.description}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

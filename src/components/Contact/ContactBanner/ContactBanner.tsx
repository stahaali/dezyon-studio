import Image from "next/image";
import { contactBanner } from "@/data/contact";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./ContactBanner.module.css";

export function ContactBanner() {
  return (
    <section className={styles.section} aria-labelledby="contact-banner-heading">
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.heroBgImage}>
          <Image
            src="/assets/img/contact/contact-banner.webp"
            alt={contactBanner.bannerImageAlt}
            fill
            priority
            sizes="100vw"
            className={styles.heroBgImageEl}
          />
        </div>
        <div className={styles.heroBgOverlay} />
      </div>

      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.content}>
            <div className={styles.headingWrap}>
              <h1
                id="contact-banner-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.title}`}
              >
                <span className={splitTitleStyles.lightOnDark}>
                  {contactBanner.titlePrefix}
                  <span className={styles.wordHighlight}>
                    {contactBanner.titleHighlight}
                  </span>
                </span>
              </h1>
            </div>
            <p className={styles.description}>{contactBanner.description}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

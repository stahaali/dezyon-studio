import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { bookPublishingHero } from "@/data/book-publishing";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { Button } from "@/components/Shared/Button";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import heroStyles from "@/components/About/AboutHero/AboutHero.module.css";
import styles from "./BookPublishingHero.module.css";

export function BookPublishingHero() {
  return (
    <section
      className={heroStyles.section}
      aria-labelledby="book-publishing-hero-heading"
      data-section-reveal="skip"
    >
      <div className={heroStyles.heroBg} aria-hidden="true">
        <div className={heroStyles.heroBgImage}>
          <Image
            src={bookPublishingHero.bannerImage}
            alt={bookPublishingHero.bannerImageAlt}
            fill
            priority
            sizes="100vw"
            className={heroStyles.heroBgImageEl}
          />
        </div>
        <div className={heroStyles.heroBgOverlay} />
      </div>

      <Container className={heroStyles.container}>
        <ScrollReveal>
          <div className={heroStyles.content}>
            <div className={heroStyles.headingWrap}>
              <h1
                id="book-publishing-hero-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${heroStyles.title}`}
              >
                <span className={splitTitleStyles.lightOnDark}>
                  {bookPublishingHero.titlePrefix}
                </span>
                <span className={`${heroStyles.wordHighlight} ${styles.wordHighlight}`}>
                  {bookPublishingHero.titleHighlight}
                </span>
              </h1>
            </div>
            <p className={heroStyles.description}>{bookPublishingHero.description}</p>
            <p className={heroStyles.tagline}>
              <strong>{bookPublishingHero.tagline}</strong>
            </p>
            <div style={{ marginTop: 28 }}>
              <Button href={bookPublishingHero.cta.href} size="lg">
                {bookPublishingHero.cta.label}
                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

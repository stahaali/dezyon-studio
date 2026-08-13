import Image from "next/image";
import { seoAeoHero } from "@/data/seo-aeo";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./SeoAeo.module.css";

export function SeoAeoHero() {
  return (
    <section
      className={styles.heroSection}
      aria-labelledby="seo-aeo-hero-heading"
      data-section-reveal="skip"
    >
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.heroBgImage}>
          <Image
            src={seoAeoHero.bannerImage}
            alt={seoAeoHero.bannerImageAlt}
            fill
            priority
            sizes="100vw"
            className={styles.heroBgImageEl}
          />
        </div>
        <div className={styles.heroBgOverlay} />
      </div>

      <Container className={styles.heroContainer}>
        <ScrollReveal>
          <div className={styles.heroContent}>
            <div className={styles.heroHeadingWrap}>
              <h1
                id="seo-aeo-hero-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.heroTitle}`}
              >
                <span className={splitTitleStyles.lightOnDark}>
                  {seoAeoHero.titlePrefix}
                </span>
                <span className={styles.wordHighlight}>{seoAeoHero.titleHighlight}</span>
                <span className={splitTitleStyles.lightOnDark}>
                  {seoAeoHero.titleSuffix}
                </span>
              </h1>
            </div>

            <p className={styles.heroDescription}>{seoAeoHero.description}</p>
            <p className={styles.heroTagline}>
              <strong>{seoAeoHero.tagline}</strong>
            </p>

            <div className={styles.heroActions}>
              <Button href={seoAeoHero.primaryCta.href} size="lg" animated={false}>
                {seoAeoHero.primaryCta.label}
              </Button>
              <Button
                href={seoAeoHero.secondaryCta.href}
                size="lg"
                variant="outline"
                animated={false}
                className={styles.heroSecondaryBtn}
              >
                {seoAeoHero.secondaryCta.label}
              </Button>
            </div>

            <dl className={styles.heroStats}>
              {seoAeoHero.highlights.map((highlight) => (
                <div key={highlight.label}>
                  <dt className={styles.heroStatLabel}>{highlight.label}</dt>
                  <dd className={styles.heroStatValue}>{highlight.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

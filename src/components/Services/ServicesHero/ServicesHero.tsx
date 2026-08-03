import Image from "next/image";
import { MarketingHeroScrollWrapper } from "@/components/Marketing/MarketingHeroFloatingCards/MarketingHeroScrollWrapper";
import { marketingHero } from "@/data/marketing-hero";
import { servicesHero } from "@/data/services";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { TypewriterTitle } from "@/components/Services/ServicesHero/TypewriterTitle";
import styles from "./ServicesHero.module.css";

type HeroConfig = typeof servicesHero | typeof marketingHero;

type ServicesHeroProps = {
  hero?: HeroConfig;
  scrollCards?: boolean;
};

export function ServicesHero({
  hero = marketingHero,
  scrollCards = false,
}: ServicesHeroProps) {
  const { cta } = hero;
  const bannerImage = "bannerImage" in hero ? hero.bannerImage : undefined;

  const heroBody = (
    <>
      {bannerImage ? (
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBgImage}>
            <Image
              src={bannerImage}
              alt={"bannerImageAlt" in hero ? hero.bannerImageAlt : ""}
              fill
              priority
              sizes="100vw"
              className={styles.heroBgImageEl}
            />
          </div>
          <div className={styles.heroBgOverlay} />
        </div>
      ) : null}

      <div
        className={`${styles.heroCenter} ${scrollCards ? styles.heroCenterWithCards : ""}`.trim()}
      >
        <Container className={styles.container}>
          <div className={styles.content}>
            <span className={styles.badge}>{hero.badge}</span>

            <TypewriterTitle
              id="services-hero-heading"
              prefix={hero.titlePrefix}
              suffix={hero.titleSuffix}
              phrases={hero.typewriterPhrases}
              className={styles.title}
            />

            {Array.isArray(hero.description) ? (
              <div className={styles.descriptionGroup}>
                {hero.description.map((paragraph) => (
                  <p key={paragraph} className={styles.description}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className={styles.description}>{hero.description}</p>
            )}

            <Button href={cta.href} size="lg" className={styles.cta}>
              {cta.label}
            </Button>
          </div>
        </Container>
      </div>
    </>
  );

  if (scrollCards) {
    return (
      <MarketingHeroScrollWrapper
        className={`${styles.section} ${styles.sectionWithCards}`}
      >
        {heroBody}
      </MarketingHeroScrollWrapper>
    );
  }

  return (
    <section
      className={styles.section}
      aria-labelledby="services-hero-heading"
      data-section-reveal="skip"
    >
      {heroBody}
    </section>
  );
}

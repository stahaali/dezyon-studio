import Image from "next/image";
import type { CSSProperties } from "react";
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

function getOrbitPosition(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;
  const x = Math.cos(radians) * radius;
  const y = Math.sin(radians) * radius;

  return { x, y };
}

export function ServicesHero({
  hero = marketingHero,
  scrollCards = false,
}: ServicesHeroProps) {
  const { floatingIcons, cta } = hero;

  const heroBody = (
    <>
      <div className={styles.bg} aria-hidden="true" />

      <div className={`${styles.heroCenter} ${scrollCards ? styles.heroCenterWithCards : ""}`.trim()}>
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.decorLayer} aria-hidden="true">
          <div className={styles.circles}>
            <span className={styles.ring} />
            <span className={styles.ring} />
            <span className={styles.ring} />
            <span className={styles.ring} />
            <span className={styles.ring} />
          </div>

          {floatingIcons.map((icon, index) => {
            const orbit =
              "angle" in icon && "radius" in icon
                ? getOrbitPosition(icon.angle, icon.radius)
                : null;
            const positionClass =
              "className" in icon
                ? styles[icon.className as keyof typeof styles]
                : undefined;

            return (
              <div
                key={icon.alt}
                className={`${styles.floatingIconWrap} ${positionClass ?? ""}`.trim()}
                style={
                  orbit
                    ? ({
                        "--orbit-x": `${orbit.x}px`,
                        "--orbit-y": `${orbit.y}px`,
                      } as CSSProperties)
                    : undefined
                }
              >
                <div
                  className={styles.iconFloat}
                  style={{
                    animationDuration: `${4.4 + (index % 4) * 0.35}s`,
                    animationDelay: `${index * 0.12}s`,
                  }}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    className={styles.floatingIcon}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

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

            <p className={styles.description}>{hero.description}</p>

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
    <section className={styles.section} aria-labelledby="services-hero-heading">
      {heroBody}
    </section>
  );
}

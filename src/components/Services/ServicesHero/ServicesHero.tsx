import Image from "next/image";
import { servicesHero } from "@/data/services";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { TypewriterTitle } from "@/components/Services/ServicesHero/TypewriterTitle";
import styles from "./ServicesHero.module.css";

export function ServicesHero() {
  const { floatingIcons, cta } = servicesHero;

  return (
    <section className={styles.section} aria-labelledby="services-hero-heading">
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.heroCenter}>
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.decorLayer} aria-hidden="true">
          <div className={styles.circles}>
            <span className={styles.ring} />
            <span className={styles.ring} />
            <span className={styles.ring} />
            <span className={styles.ring} />
            <span className={styles.ring} />
          </div>

          {floatingIcons.map((icon) => {
            const positionClass = styles[icon.className as keyof typeof styles];

            return (
              <div
                key={icon.className}
                className={`${styles.floatingIconWrap} ${positionClass}`}
              >
                <div className={styles.iconFloat}>
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    className={styles.floatingIcon}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <Container className={styles.container}>
          <div className={styles.content}>
            <span className={styles.badge}>{servicesHero.badge}</span>

            <TypewriterTitle
              id="services-hero-heading"
              prefix={servicesHero.titlePrefix}
              suffix={servicesHero.titleSuffix}
              phrases={servicesHero.typewriterPhrases}
              className={styles.title}
            />

            <p className={styles.description}>{servicesHero.description}</p>

            <Button href={cta.href} size="lg" className={styles.cta}>
              {cta.label}
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}

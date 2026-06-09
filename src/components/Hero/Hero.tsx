"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import {
  HERO_POSTER,
  heroAvatars,
  heroFloatingStars,
  heroFloatingThemeIcons,
  heroIconFilters,
} from "@/data/hero";
import { BrandSlider } from "@/components/Hero/BrandSlider";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { SplitTitle } from "@/components/Shared/SplitTitle";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroBg} aria-hidden="true" />

      <div className={styles.floatingLayer} aria-hidden="true">
        {heroFloatingStars.map((icon) => {
          const positionClass = styles[icon.className as keyof typeof styles];
          const filterClass =
            styles[heroIconFilters[icon.filter] as keyof typeof styles];

          return (
            <Image
              key={icon.className}
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              className={`${styles.floatingIcon} ${positionClass} ${filterClass}`.trim()}
            />
          );
        })}

        {heroFloatingThemeIcons.map((icon) => {
          const positionClass = styles[icon.className as keyof typeof styles];

          return (
            <Image
              key={icon.className}
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              className={`${styles.floatingIcon} ${styles.flaticonIcon} ${positionClass}`}
            />
          );
        })}
      </div>

      <Container className={styles.heroOuter}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <SplitTitle
              as="h1"
              id="hero-heading"
              accent="Easy project managment"
              light="of any complexity"
              theme="dark"
              size="hero"
              className={styles.title}
            />

            <Button href="#pricing" size="md" className={styles.cta}>
              Try it out
            </Button>

            <div className={styles.members}>
              <div className={styles.avatarStack}>
                {heroAvatars.map((avatar) => (
                  <Image
                    key={avatar.src}
                    src={avatar.src}
                    alt={avatar.alt}
                    width={40}
                    height={40}
                    className={styles.avatar}
                  />
                ))}
              </div>
              <span className={styles.membersText}>4.6k Hardworking Members</span>
            </div>
          </div>
        </div>

        <div className={styles.mediaPanel}>
          <figure className={styles.mediaFigure}>
            <Image
              src={HERO_POSTER}
              alt="Dezyon Studio team collaborating in office"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
              className={styles.mediaImage}
            />
          </figure>
          <button
            type="button"
            className={styles.playButton}
            aria-label="Play demo video"
          >
            <Play size={28} fill="currentColor" strokeWidth={0} />
          </button>
        </div>

        <div className={styles.brandsPanel}>
          <BrandSlider />
        </div>
      </Container>
    </section>
  );
}

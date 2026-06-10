"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  HERO_POSTER,
  HERO_VIDEO,
  heroAvatars,
  heroContent,
  heroRating,
} from "@/data/hero";
import { BrandSlider } from "@/components/Hero/BrandSlider";
import { HeroImageSlider } from "@/components/Hero/HeroImageSlider";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./Hero.module.css";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroBg} aria-hidden="true" />

      <Container className={styles.heroOuter}>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <div className={styles.ratingBadge} aria-label={heroRating.label}>
              <span className={styles.googleIconWrap} aria-hidden="true">
                <svg viewBox="0 0 24 24" className={styles.googleIcon}>
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </span>
              <span className={styles.ratingStars} aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span className={styles.ratingDivider} aria-hidden="true" />
              <span className={styles.ratingValue}>{heroRating.value}</span>
            </div>

            <h1
              id="hero-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.title}`}
            >
              <span className={splitTitleStyles.lightOnDark}>
                {heroContent.titlePrefix}
                <span className={styles.wordHighlight}>
                  {heroContent.titleHighlight}
                </span>
                {heroContent.titleSuffix}
              </span>
            </h1>

            <p className={styles.subtitle}>{heroContent.subtitle}</p>

            <form
              className={styles.heroForm}
              onSubmit={(event) => event.preventDefault()}
            >
              <div className={styles.formRow}>
                <label className={styles.formField}>
                  <span className={styles.srOnly}>Website URL</span>
                  <input
                    type="url"
                    name="website"
                    placeholder={heroContent.form.placeholder}
                    className={styles.formInput}
                    autoComplete="url"
                  />
                </label>
                <Button type="submit" size="md" className={styles.formSubmit}>
                  {heroContent.form.submitLabel}
                </Button>
              </div>
              <p className={styles.formNote}>{heroContent.form.note}</p>
            </form>

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
              <span className={styles.membersText}>
                {heroContent.membersLabel}
              </span>
            </div>
          </div>

          <div className={styles.sliderColumn}>
            <HeroImageSlider />
          </div>
        </div>

        <div className={styles.mediaPanel}>
          <figure className={styles.mediaFigure}>
            <video
              ref={videoRef}
              className={styles.mediaVideo}
              src={HERO_VIDEO}
              poster={HERO_POSTER}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Dezyon Studio showcase video"
            />
          </figure>
        </div>

        <div className={styles.brandsPanel}>
          <BrandSlider />
        </div>
      </Container>

    </section>
  );
}

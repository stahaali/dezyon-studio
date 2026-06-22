"use client";

import {
  ArrowRight,
  Check,
} from "lucide-react";
import {
  videoEditingBenefits,
  videoEditingBenefitsIntro,
  videoEditingHero,
} from "@/data/video-editing";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import { MarketingCtaBanner } from "@/components/Marketing/MarketingCtaBanner/MarketingCtaBanner";
import { VideoEditingHeroBannerImage } from "@/components/VideoEditing/VideoEditingHeroBannerImage";
import { VideoEditingHeroVisual } from "@/components/VideoEditing/VideoEditingHeroVisual";
import { VideoEditingServices } from "@/components/VideoEditing/VideoEditingServices";
import { VideoEditingTools } from "@/components/VideoEditing/VideoEditingTools";
import styles from "./VideoEditing.module.css";

export function VideoEditingContent() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="video-editing-hero-heading">
        <div className={styles.heroVideoLayer} aria-hidden="true">
          <VideoEditingHeroVisual />
        </div>

        <div className={styles.heroOverlay} aria-hidden="true" />

        <Container className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            <ScrollReveal className={styles.heroContent}>
              <h1
                id="video-editing-hero-heading"
                className={`${splitTitleStyles.title} ${styles.heroTitle}`}
              >
                <span className={`${splitTitleStyles.lightOnDark} ${styles.heroTitleStack}`}>
                  <span className={styles.heroTitleLine}>{videoEditingHero.titlePrefix}</span>
                  <span className={styles.heroTitleLine}>
                    <span className={styles.wordHighlight}>
                      {videoEditingHero.titleHighlight}
                    </span>
                  </span>
                </span>
              </h1>
              <p className={styles.heroSubtitle}>{videoEditingHero.subtitle}</p>
              <div className={styles.heroDescription}>
                {videoEditingHero.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className={styles.heroCtas}>
                <Button href={videoEditingHero.cta.href} size="lg">
                  {videoEditingHero.cta.label}
                  <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className={styles.heroVisual}>
              <VideoEditingHeroBannerImage />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <VideoEditingServices />

      <VideoEditingTools />

      <section
        className={styles.benefits}
        aria-labelledby="video-editing-benefits-heading"
      >
        <Container className={styles.sectionContainer}>
          <ScrollReveal>
            <div className={styles.sectionIntro}>
              <PlansPricingHeading
                id="video-editing-benefits-heading"
                prefix={videoEditingBenefitsIntro.titlePrefix}
                highlight={videoEditingBenefitsIntro.titleHighlight}
                size="section"
                align="center"
              />
            </div>
          </ScrollReveal>

          <ul className={styles.benefitsGrid}>
            {videoEditingBenefits.map((benefit, index) => (
              <ScrollReveal
                key={benefit}
                delay={index * 0.04}
                as="li"
                className={styles.benefitItem}
              >
                <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                <span>{benefit}</span>
              </ScrollReveal>
            ))}
          </ul>
        </Container>
      </section>

      <MarketingCtaBanner />
    </div>
  );
}

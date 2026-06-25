"use client";

import {
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import {
  videoEditingCtaBanner,
  videoEditingHero,
} from "@/data/video-editing";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import { MarketingCtaBanner } from "@/components/Marketing/MarketingCtaBanner/MarketingCtaBanner";
import { VideoEditingServices } from "@/components/VideoEditing/VideoEditingServices";
import { VideoEditingTools } from "@/components/VideoEditing/VideoEditingTools";
import { VideoEditingWhyChoose } from "@/components/VideoEditing/VideoEditingWhyChoose";
import styles from "./VideoEditing.module.css";

export function VideoEditingContent() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="video-editing-hero-heading">
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBgImage}>
            <Image
              src={videoEditingHero.bannerImage}
              alt={videoEditingHero.bannerImageAlt}
              fill
              priority
              sizes="100vw"
              className={styles.heroBgImageEl}
            />
          </div>
          <div className={styles.heroBgOverlay} />
        </div>

        <Container className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            <ScrollReveal className={styles.heroContent}>
              <h1
                id="video-editing-hero-heading"
                className={`${splitTitleStyles.title} ${styles.heroTitle}`}
              >
                <span className={splitTitleStyles.lightOnDark}>
                  {videoEditingHero.titlePrefix}
                  <span className={styles.wordHighlight}>
                    {videoEditingHero.titleHighlight}
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
          </div>
        </Container>
      </section>

      <VideoEditingServices />

      <VideoEditingWhyChoose />

      <VideoEditingTools />

      <MarketingCtaBanner banner={videoEditingCtaBanner} />
    </div>
  );
}

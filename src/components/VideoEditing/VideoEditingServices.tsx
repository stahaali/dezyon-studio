"use client";

import {
  Clapperboard,
  Image as ImageIcon,
  Mic,
  Share2,
  Sparkles,
  Video,
  type LucideIcon,
} from "lucide-react";
import { TalkingWebsiteGradientIcon } from "@/components/TalkingWebsite/TalkingWebsiteGradientIcon";
import {
  videoEditingServices,
  videoEditingServicesIntro,
} from "@/data/video-editing";
import { videoEditingServiceTones } from "@/components/VideoEditing/video-editing-icon-tones";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import styles from "./VideoEditingServices.module.css";

const serviceIcons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  clapperboard: Clapperboard,
  mic: Mic,
  video: Video,
  image: ImageIcon,
  share: Share2,
};

export function VideoEditingServices() {
  return (
    <section
      className={styles.services}
      aria-labelledby="video-editing-services-heading"
    >
      <Container className={styles.servicesContainer}>
        <ScrollReveal>
          <header className={styles.servicesHeader}>
            <PlansPricingHeading
              id="video-editing-services-heading"
              prefix={videoEditingServicesIntro.titlePrefix}
              highlight={videoEditingServicesIntro.titleHighlight}
              size="section"
              align="center"
              className={styles.servicesHeading}
            />
            <p className={styles.servicesDescription}>
              {videoEditingServicesIntro.description}
            </p>
          </header>
        </ScrollReveal>

        <div className={styles.servicesGrid}>
          {videoEditingServices.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? Sparkles;
            const tone = videoEditingServiceTones[index];
            const stepLabel = String(index + 1).padStart(2, "0");

            return (
              <ScrollReveal
                key={service.id}
                delay={index * 0.05}
                as="article"
                className={styles.serviceCard}
              >
                <span className={styles.indexBadge}>{stepLabel}</span>

                <div className={styles.iconArea}>
                  <span
                    className={`${styles.iconGlow} ${styles[`glow${tone}`]}`}
                    aria-hidden="true"
                  />
                  <div className={styles.iconFlipShell}>
                    <div className={styles.iconFlip}>
                      <div className={styles.iconFace}>
                        <TalkingWebsiteGradientIcon
                          icon={Icon}
                          tone={tone}
                          size="feature"
                          className={styles.iconCircle}
                        />
                      </div>
                      <div className={`${styles.iconFace} ${styles.iconFaceBack}`}>
                        <TalkingWebsiteGradientIcon
                          icon={Icon}
                          tone="leads"
                          size="feature"
                          className={styles.iconCircle}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceIntro}>{service.intro}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

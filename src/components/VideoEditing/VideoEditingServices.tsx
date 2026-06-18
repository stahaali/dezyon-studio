"use client";

import {
  Check,
  Clapperboard,
  Image as ImageIcon,
  Mic,
  Share2,
  Sparkles,
  Video,
  type LucideIcon,
} from "lucide-react";
import {
  videoEditingServices,
  videoEditingServicesIntro,
} from "@/data/video-editing";
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
          </header>
        </ScrollReveal>

        <div className={styles.servicesGrid}>
          {videoEditingServices.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? Sparkles;

            return (
              <ScrollReveal
                key={service.id}
                delay={index * 0.05}
                as="article"
                className={`${styles.serviceCard} ${styles.accentBrand}`}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardTop}>
                    <div className={styles.serviceIconWrap}>
                      <Icon size={22} strokeWidth={1.85} aria-hidden="true" />
                    </div>
                    <span className={styles.serviceIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceIntro}>{service.intro}</p>

                  <div
                    className={`${styles.serviceBody} ${
                      service.sections.length > 1
                        ? styles.serviceBodyColumns
                        : styles.serviceBodyStack
                    }`}
                  >
                    {service.sections.map((section) => (
                      <div key={section.label} className={styles.serviceBlock}>
                        <h4 className={styles.serviceLabel}>{section.label}</h4>
                        <ul
                          className={`${styles.serviceList} ${
                            "listColumns" in section && section.listColumns === 2
                              ? styles.serviceListColumns
                              : ""
                          }`.trim()}
                        >
                          {section.items.map((item) => (
                            <li key={item}>
                              <Check
                                size={14}
                                strokeWidth={2.5}
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

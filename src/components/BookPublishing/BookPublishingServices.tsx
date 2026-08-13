"use client";

import {
  BookOpen,
  LayoutTemplate,
  Megaphone,
  Palette,
  PenLine,
  Upload,
  type LucideIcon,
} from "lucide-react";
import { TalkingWebsiteGradientIcon } from "@/components/TalkingWebsite/TalkingWebsiteGradientIcon";
import {
  bookPublishingServices,
  bookPublishingServicesIntro,
} from "@/data/book-publishing";
import { bookPublishingServiceTones } from "@/components/BookPublishing/book-publishing-icon-tones";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import styles from "./BookPublishing.module.css";

const serviceIcons: Record<string, LucideIcon> = {
  pen: PenLine,
  layout: LayoutTemplate,
  upload: Upload,
  palette: Palette,
  megaphone: Megaphone,
  book: BookOpen,
};

export function BookPublishingServices() {
  return (
    <section
      className={styles.section}
      aria-labelledby="book-publishing-services-heading"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <div
            className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${styles.sectionHeading}`}
          >
            <h2
              id="book-publishing-services-heading"
              className={`${splitTitleStyles.title} ${styles.sectionTitle} ${styles.title}`}
            >
              {bookPublishingServicesIntro.titlePrefix}
              <span className={styles.wordHighlight}>
                {bookPublishingServicesIntro.titleHighlight}
              </span>
            </h2>
            <p className={styles.sectionDescription}>
              {bookPublishingServicesIntro.description}
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.servicesGrid}>
          {bookPublishingServices.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? BookOpen;
            const tone = bookPublishingServiceTones[index];

            return (
              <ScrollReveal
                key={service.id}
                delay={index * 0.05}
                as="article"
                className={styles.serviceCard}
              >
                <TalkingWebsiteGradientIcon
                  icon={Icon}
                  tone={tone}
                  size="feature"
                  className={styles.serviceIcon}
                />
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

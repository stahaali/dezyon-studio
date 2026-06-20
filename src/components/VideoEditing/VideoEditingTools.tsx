"use client";

import {
  Clapperboard,
  ExternalLink,
  Image as ImageIcon,
  Mic,
  Video,
  type LucideIcon,
} from "lucide-react";
import { TalkingWebsiteGradientIcon } from "@/components/TalkingWebsite/TalkingWebsiteGradientIcon";
import {
  videoEditingToolGroups,
  videoEditingToolsIntro,
} from "@/data/video-editing";
import { videoEditingToolTones } from "@/components/VideoEditing/video-editing-icon-tones";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import styles from "./VideoEditingTools.module.css";

const toolIcons: Record<string, LucideIcon> = {
  "Voice & Audio": Mic,
  "AI Video": Video,
  "Editing & Motion Graphics": Clapperboard,
  "Design & AI Images": ImageIcon,
};

export function VideoEditingTools() {
  return (
    <section
      className={styles.tools}
      aria-labelledby="video-editing-tools-heading"
    >
      <Container className={styles.toolsContainer}>
        <ScrollReveal>
          <header className={styles.toolsHeader}>
            <PlansPricingHeading
              id="video-editing-tools-heading"
              prefix={videoEditingToolsIntro.titlePrefix}
              highlight={videoEditingToolsIntro.titleHighlight}
              size="section"
              align="center"
              className={styles.toolsHeading}
            />
            <p className={styles.toolsDescription}>
              {videoEditingToolsIntro.description}
            </p>
          </header>
        </ScrollReveal>

        <div className={styles.toolsGrid}>
          {videoEditingToolGroups.map((group, index) => {
            const Icon = toolIcons[group.title] ?? Video;
            const tone = videoEditingToolTones[index];

            return (
              <ScrollReveal
                key={group.title}
                delay={index * 0.06}
                as="article"
                className={`${styles.toolCard} ${styles.accentPrimary}`}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardTop}>
                    <TalkingWebsiteGradientIcon
                      icon={Icon}
                      tone={tone}
                      size="tagline"
                    />
                    <span className={styles.toolIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className={styles.toolTitle}>{group.title}</h3>

                  <ul className={styles.toolList}>
                    {group.tools.map((tool) => (
                      <li key={tool.name}>
                        <a
                          href={tool.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.toolLink}
                        >
                          <span>{tool.name}</span>
                          <ExternalLink
                            size={14}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

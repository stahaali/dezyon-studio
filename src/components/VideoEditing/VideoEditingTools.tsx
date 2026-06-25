"use client";

import {
  Check,
  Clapperboard,
  Image as ImageIcon,
  Mic,
  Video,
  type LucideIcon,
} from "lucide-react";
import {
  videoEditingToolGroups,
  videoEditingToolsIntro,
} from "@/data/video-editing";
import { TalkingWebsiteGradientIcon } from "@/components/TalkingWebsite/TalkingWebsiteGradientIcon";
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

        <ScrollReveal delay={0.06}>
          <div className={styles.toolsPanel}>
            {videoEditingToolGroups.map((group, index) => {
              const Icon = toolIcons[group.title] ?? Video;
              const isLast = index === videoEditingToolGroups.length - 1;

              return (
                <article
                  key={group.title}
                  className={`${styles.toolsColumn} ${!isLast ? styles.toolsColumnDivider : ""}`.trim()}
                >
                  <TalkingWebsiteGradientIcon
                    icon={Icon}
                    tone={videoEditingToolTones[index]}
                    size="feature"
                  />

                  <h3 className={styles.columnTitle}>{group.title}</h3>

                  <ul className={styles.toolList}>
                    {group.tools.map((tool) => (
                      <li key={tool.name} className={styles.toolItem}>
                        <a
                          href={tool.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.toolLink}
                        >
                          <span className={styles.toolCheck} aria-hidden="true">
                            <Check size={12} strokeWidth={2.8} />
                          </span>
                          <span>{tool.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

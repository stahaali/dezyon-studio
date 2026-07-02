import type { LucideIcon } from "lucide-react";
import {
  Bot,
  CalendarCheck,
  Filter,
  Globe,
  Mail,
  MousePointerClick,
} from "lucide-react";
import {
  talkingWebsiteSteps,
  talkingWebsiteStepsIntro,
} from "@/data/talking-website";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import {
  TalkingWebsiteGradientIcon,
  talkingWebsiteStepTones,
  type GradientTone,
} from "./TalkingWebsiteGradientIcon";
import styles from "./TalkingWebsiteProcessSection.module.css";

const stepIcons = [
  Globe,
  MousePointerClick,
  Bot,
  Filter,
  CalendarCheck,
  Mail,
] as const;

/** Column groups: 2-1-2-1 honeycomb pattern for 6 steps */
const honeycombColumns = [
  [0, 1],
  [2],
  [3, 4],
  [5],
] as const;

type HexStepProps = {
  icon: LucideIcon;
  title: string;
  message: string;
  tone: GradientTone;
};

function HexStep({ icon, title, message, tone }: HexStepProps) {
  return (
    <article className={styles.hexCard}>
      <div className={styles.hexShape}>
        <div className={styles.hexInner}>
          <TalkingWebsiteGradientIcon
            icon={icon}
            tone={tone}
            size="tagline"
            className={styles.hexIcon}
          />
          <h3 className={styles.hexTitle}>{title}</h3>
          <p className={styles.hexMessage}>{message}</p>
        </div>
      </div>
    </article>
  );
}

export function TalkingWebsiteProcessSection() {
  return (
    <section className={styles.section} aria-labelledby="how-it-works-heading">
      <div className={styles.bgPattern} aria-hidden="true" />

      <Container className={styles.introContainer}>
        <ScrollReveal>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>Process</span>
            <PlansPricingHeading
              id="how-it-works-heading"
              prefix="How It "
              highlight="Works"
              size="section"
              align="center"
              className={styles.heading}
            />
            <p className={styles.introText}>{talkingWebsiteStepsIntro}</p>
          </div>
        </ScrollReveal>
      </Container>

      <div className={styles.honeycombWrap}>
        <div className={styles.honeycombGrid}>
          {honeycombColumns.map((columnSteps, colIndex) => {
            const isMiddle = columnSteps.length === 1;

            return (
              <div
                key={colIndex}
                className={`${styles.column} ${isMiddle ? styles.columnMiddle : ""} ${columnSteps.length === 2 ? styles.columnDouble : ""}`}
              >
                {columnSteps.map((stepIndex) => {
                  const item = talkingWebsiteSteps[stepIndex];
                  const Icon = stepIcons[stepIndex];

                  return (
                    <HexStep
                      key={item.step}
                      icon={Icon}
                      title={item.title}
                      message={item.message}
                      tone={talkingWebsiteStepTones[stepIndex]}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

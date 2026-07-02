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
  index: number;
};

function HexStep({ icon: Icon, title, message, index }: HexStepProps) {
  return (
    <ScrollReveal delay={0.05 + index * 0.07} as="article" className={styles.hexCard}>
      <div className={styles.hexShape}>
        <div className={styles.hexInner}>
          <div className={styles.hexIconWrap}>
            <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
          </div>
          <h3 className={styles.hexTitle}>{title}</h3>
          <p className={styles.hexMessage}>{message}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function TalkingWebsiteProcessSection() {
  return (
    <section className={styles.section} aria-labelledby="how-it-works-heading">
      <div className={styles.bgPattern} aria-hidden="true" />

      <Container className={styles.container}>
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

        <div className={styles.honeycombGrid}>
          {honeycombColumns.map((columnSteps, colIndex) => {
            const isMiddle = columnSteps.length === 1;

            return (
              <div
                key={colIndex}
                className={`${styles.column} ${isMiddle ? styles.columnMiddle : ""}`}
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
                      index={stepIndex}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

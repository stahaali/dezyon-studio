import type { LucideIcon } from "lucide-react";
import styles from "./TalkingWebsiteGradientIcon.module.css";

export type GradientTone =
  | "voice"
  | "schedule"
  | "leads"
  | "notify"
  | "language"
  | "crm"
  | "availability"
  | "impact"
  | "learn"
  | "fun"
  | "empathy";

export type GradientIconSize =
  | "feature"
  | "tagline"
  | "step"
  | "useCase"
  | "insight"
  | "benefit"
  | "label"
  | "metric"
  | "check";

const SIZE_CLASS: Record<GradientIconSize, string> = {
  feature: styles.sizeFeature,
  tagline: styles.sizeTagline,
  step: styles.sizeStep,
  useCase: styles.sizeUseCase,
  insight: styles.sizeInsight,
  benefit: styles.sizeBenefit,
  label: styles.sizeLabel,
  metric: styles.sizeMetric,
  check: styles.sizeCheck,
};

const ICON_SIZE: Record<GradientIconSize, number> = {
  feature: 28,
  tagline: 20,
  step: 18,
  useCase: 16,
  insight: 22,
  benefit: 18,
  label: 12,
  metric: 14,
  check: 12,
};

type TalkingWebsiteGradientIconProps = {
  icon: LucideIcon;
  tone: GradientTone;
  size?: GradientIconSize;
  className?: string;
};

export function TalkingWebsiteGradientIcon({
  icon: Icon,
  tone,
  size = "feature",
  className,
}: TalkingWebsiteGradientIconProps) {
  return (
    <span
      className={`${styles.iconWrap} ${SIZE_CLASS[size]} ${styles[tone]} ${className ?? ""}`.trim()}
      aria-hidden="true"
    >
      <Icon size={ICON_SIZE[size]} strokeWidth={1.85} />
    </span>
  );
}

export const talkingWebsiteStepTones: GradientTone[] = [
  "language",
  "voice",
  "learn",
  "notify",
  "schedule",
  "empathy",
];

export const talkingWebsiteUseCaseTones: GradientTone[] = [
  "voice",
  "learn",
  "fun",
  "crm",
  "language",
  "notify",
  "availability",
];

export const talkingWebsiteBenefitTones: GradientTone[] = [
  "fun",
  "voice",
  "crm",
  "notify",
  "leads",
];

export const talkingWebsiteTaglineTones: GradientTone[] = [
  "voice",
  "notify",
  "schedule",
];

export const talkingWebsiteHeroMetricTones: GradientTone[] = [
  "voice",
  "availability",
  "fun",
];

export const talkingWebsiteFeatureTones: GradientTone[] = [
  "voice",
  "schedule",
  "leads",
  "notify",
  "language",
  "crm",
  "availability",
];

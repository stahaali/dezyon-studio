import { Crown, Gem, Globe, Trophy, type LucideIcon } from "lucide-react";
import styles from "./AboutValueIcon.module.css";

type AboutValueIconId = "impact" | "learn" | "fun" | "empathy";
type AboutValueTone = "impact" | "learn" | "fun" | "empathy";

const valueIconMap: Record<
  AboutValueIconId,
  { Icon: LucideIcon; tone: AboutValueTone }
> = {
  impact: { Icon: Gem, tone: "impact" },
  learn: { Icon: Trophy, tone: "learn" },
  fun: { Icon: Globe, tone: "fun" },
  empathy: { Icon: Crown, tone: "empathy" },
};

type AboutValueIconProps = {
  iconId: AboutValueIconId;
};

export function AboutValueIcon({ iconId }: AboutValueIconProps) {
  const config = valueIconMap[iconId];
  const { Icon, tone } = config;

  return (
    <span className={`${styles.iconWrap} ${styles[tone]}`}>
      <Icon size={28} strokeWidth={1.85} aria-hidden="true" />
    </span>
  );
}

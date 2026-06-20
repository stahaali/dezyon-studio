import type { LucideIcon } from "lucide-react";
import { Award, Bot, Rocket, Sparkles } from "lucide-react";
import type { StatId } from "@/data/site";
import styles from "./StatsGrid.module.css";

const STAT_ICON_CONFIG: Record<
  StatId,
  { icon: LucideIcon; color: string; background: string }
> = {
  experience: {
    icon: Award,
    color: "#FBBF24",
    background: "rgba(251, 191, 36, 0.16)",
  },
  launches: {
    icon: Rocket,
    color: "#FB923C",
    background: "rgba(249, 115, 22, 0.16)",
  },
  projects: {
    icon: Sparkles,
    color: "#C084FC",
    background: "rgba(192, 132, 252, 0.16)",
  },
  support: {
    icon: Bot,
    color: "#34D399",
    background: "rgba(52, 211, 153, 0.16)",
  },
};

type StatIconProps = {
  statId: StatId;
  label: string;
};

export function StatIcon({ statId, label }: StatIconProps) {
  const { icon: Icon, color, background } = STAT_ICON_CONFIG[statId];

  return (
    <span
      className={styles.statIconWrap}
      style={{ backgroundColor: background }}
      aria-hidden="true"
    >
      <Icon size={24} strokeWidth={2} color={color} />
      <span className={styles.srOnly}>{label} icon</span>
    </span>
  );
}

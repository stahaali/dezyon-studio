import type { LucideIcon } from "lucide-react";
import { Award, Bot, Rocket, Sparkles } from "lucide-react";
import type { StatId } from "@/data/site";
import styles from "./StatsGrid.module.css";

const STAT_ICON_CONFIG: Record<
  StatId,
  { icon: LucideIcon; color: string; background: string; gradient: string }
> = {
  experience: {
    icon: Award,
    color: "#FBBF24",
    background: "rgba(251, 191, 36, 0.16)",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
  },
  launches: {
    icon: Rocket,
    color: "#FB923C",
    background: "rgba(249, 115, 22, 0.16)",
    gradient: "linear-gradient(135deg, #fb923c 0%, #f97316 100%)",
  },
  projects: {
    icon: Sparkles,
    color: "#C084FC",
    background: "rgba(192, 132, 252, 0.16)",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
  },
  support: {
    icon: Bot,
    color: "#34D399",
    background: "rgba(52, 211, 153, 0.16)",
    gradient: "linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)",
  },
};

type StatIconProps = {
  statId: StatId;
  label: string;
  colorful?: boolean;
};

export function StatIcon({ statId, label, colorful = false }: StatIconProps) {
  const { icon: Icon, color, background, gradient } = STAT_ICON_CONFIG[statId];

  return (
    <span
      className={styles.statIconWrap}
      style={{
        background: colorful ? gradient : background,
        boxShadow: colorful ? "0 10px 24px rgba(0, 0, 0, 0.28)" : undefined,
      }}
      aria-hidden="true"
    >
      <Icon size={24} strokeWidth={2} color={colorful ? "#ffffff" : color} />
      <span className={styles.srOnly}>{label} icon</span>
    </span>
  );
}

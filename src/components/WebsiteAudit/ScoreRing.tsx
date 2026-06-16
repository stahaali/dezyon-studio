"use client";

import { Loader2 } from "lucide-react";
import { AnimatedCounter } from "@/components/WebsiteAudit/AnimatedCounter";
import { scoreRingColor } from "@/components/WebsiteAudit/PsiShapeIcon";
import styles from "./ScoreRing.module.css";

type ScoreRingProps = {
  score: number | null;
  label: string;
  size?: "sm" | "lg" | "xl";
  theme?: "dark" | "light";
  loading?: boolean;
  hideLabel?: boolean;
};

const dimensions = {
  sm: { size: 96, stroke: 8, valueClass: styles.valueSm },
  lg: { size: 132, stroke: 10, valueClass: styles.valueLg },
  xl: { size: 176, stroke: 12, valueClass: styles.valueXl },
} as const;

export function ScoreRing({
  score,
  label,
  size = "sm",
  theme = "dark",
  loading = false,
  hideLabel = false,
}: ScoreRingProps) {
  const config = dimensions[size];
  const radius = (config.size - config.stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = score === null ? 0 : Math.max(0, Math.min(100, score)) / 100;
  const offset = circumference * (1 - progress);

  const trackColor = theme === "light" ? "#e8eaed" : "rgba(255,255,255,0.12)";
  const valueColor = theme === "light" ? "#202124" : "#ffffff";
  const labelColor = theme === "light" ? "#5f6368" : "rgba(255,255,255,0.72)";

  return (
    <div className={styles.ringWrap}>
      <div className={styles.ringCanvas} style={{ width: config.size, height: config.size }}>
        <svg width={config.size} height={config.size} className={styles.ringSvg}>
          <circle
            cx={config.size / 2}
            cy={config.size / 2}
            r={radius}
            fill="none"
            stroke={trackColor}
            strokeWidth={config.stroke}
          />
          <circle
            cx={config.size / 2}
            cy={config.size / 2}
            r={radius}
            fill="none"
            stroke={scoreRingColor(score)}
            strokeWidth={config.stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className={styles.ringCenter}>
          {loading ? (
            <Loader2 size={size === "xl" ? 32 : size === "lg" ? 28 : 22} className={styles.ringLoader} />
          ) : (
            <span className={config.valueClass} style={{ color: valueColor }}>
              {score === null ? "—" : <AnimatedCounter value={score} />}
            </span>
          )}
        </div>
      </div>
      {hideLabel ? null : (
        <p className={styles.ringLabel} style={{ color: labelColor }}>
          {label}
        </p>
      )}
    </div>
  );
}

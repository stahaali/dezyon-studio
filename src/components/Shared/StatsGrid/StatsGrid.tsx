import { stats } from "@/data/site";
import { StatValue } from "@/components/Home/HomeStats/StatValue";
import { StatIcon } from "@/components/Shared/StatsGrid/StatIcon";
import styles from "./StatsGrid.module.css";

type StatsGridProps = {
  variant?: "dark" | "light";
  animate?: boolean;
};

export function StatsGrid({ variant = "dark", animate = true }: StatsGridProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`${styles.statsCard} ${isDark ? styles.statsCardDark : styles.statsCardLight}`.trim()}
    >
      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles.stat}>
            <StatIcon statId={stat.id} label={stat.label} />
            {animate ? (
              <StatValue value={stat.value} />
            ) : (
              <span
                className={`${styles.statValue} ${isDark ? styles.statValueDark : styles.statValueLight}`.trim()}
              >
                {stat.value}
                {!stat.value.includes("/") && !stat.value.endsWith("%") ? "+" : ""}
              </span>
            )}
            {stat.label ? (
              <span
                className={`${styles.statLabel} ${isDark ? styles.statLabelDark : styles.statLabelLight}`.trim()}
              >
                {stat.label}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

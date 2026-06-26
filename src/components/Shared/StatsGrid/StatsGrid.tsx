import { stats, type StatId } from "@/data/site";
import { StatValue } from "@/components/Home/HomeStats/StatValue";
import { StatIcon } from "@/components/Shared/StatsGrid/StatIcon";
import styles from "./StatsGrid.module.css";

type StatsGridProps = {
  variant?: "dark" | "light";
  animate?: boolean;
  colorful?: boolean;
  excludeIds?: StatId[];
};

export function StatsGrid({
  variant = "dark",
  animate = true,
  colorful = false,
  excludeIds = [],
}: StatsGridProps) {
  const isDark = variant === "dark";
  const visibleStats = stats.filter((stat) => !excludeIds.includes(stat.id));

  return (
    <div
      className={`${styles.statsCard} ${isDark ? styles.statsCardDark : styles.statsCardLight}`.trim()}
    >
      <div
        className={styles.statsGrid}
        data-count={visibleStats.length}
      >
        {visibleStats.map((stat) => (
          <div key={stat.id} className={styles.stat}>
            <StatIcon statId={stat.id} label={stat.label} colorful={colorful} />
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

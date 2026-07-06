"use client";

import gridStyles from "@/components/Shared/StatsGrid/StatsGrid.module.css";
import { StatOdometer } from "./StatOdometer";

type StatValueProps = {
  value: string;
  index?: number;
};

function parseStatValue(value: string) {
  if (value.endsWith("%")) {
    const target = Number.parseInt(value.replace(/\D/g, ""), 10);
    return { type: "count" as const, target, suffix: "%" };
  }

  if (/^\d+$/.test(value)) {
    const target = Number.parseInt(value, 10);

    if (value.length === 4 && target >= 1900 && target <= 2099) {
      return { type: "count" as const, target, suffix: "" };
    }

    return { type: "count" as const, target, suffix: "+" };
  }

  return { type: "text" as const, text: value };
}

export function StatValue({ value, index = 0 }: StatValueProps) {
  const parsed = parseStatValue(value);
  const valueClass = `${gridStyles.statValue} ${gridStyles.statValueDark}`.trim();

  if (parsed.type === "text") {
    return <span className={valueClass}>{parsed.text}</span>;
  }

  return (
    <span className={valueClass}>
      <StatOdometer
        target={parsed.target}
        suffix={parsed.suffix}
        delay={index * 120}
      />
    </span>
  );
}

"use client";

import { useCountUp } from "@/hooks/useCountUp";
import gridStyles from "@/components/Shared/StatsGrid/StatsGrid.module.css";

type StatValueProps = {
  value: string;
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

export function StatValue({ value }: StatValueProps) {
  const parsed = parseStatValue(value);
  const { count, ref } = useCountUp(
    parsed.type === "count" ? parsed.target : 0,
  );

  const valueClass = `${gridStyles.statValue} ${gridStyles.statValueDark}`.trim();

  if (parsed.type === "text") {
    return (
      <span ref={ref} className={valueClass}>
        {parsed.text}
      </span>
    );
  }

  return (
    <span ref={ref} className={valueClass}>
      {count}
      {parsed.suffix}
    </span>
  );
}

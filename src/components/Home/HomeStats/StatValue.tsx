"use client";

import { useCountUp } from "@/hooks/useCountUp";
import styles from "./HomeStats.module.css";

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

  if (parsed.type === "text") {
    return (
      <span ref={ref} className={styles.statValue}>
        {parsed.text}
      </span>
    );
  }

  return (
    <span ref={ref} className={styles.statValue}>
      {count}
      {parsed.suffix}
    </span>
  );
}

"use client";

import { useCountUp } from "@/hooks/useCountUp";
import styles from "./HomeStats.module.css";

type StatValueProps = {
  value: string;
};

function parseStatValue(value: string) {
  const suffix = value.endsWith("%") ? "%" : "";
  const target = Number.parseInt(value.replace(/\D/g, ""), 10);

  return { target, suffix };
}

export function StatValue({ value }: StatValueProps) {
  const { target, suffix } = parseStatValue(value);
  const { count, ref } = useCountUp(target);

  return (
    <span ref={ref} className={styles.statValue}>
      {count}
      {suffix}
    </span>
  );
}

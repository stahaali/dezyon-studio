"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type SeoAeoCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export function SeoAeoCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.8,
}: SeoAeoCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const display = prefersReducedMotion ? value : count;

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [duration, isInView, prefersReducedMotion, value]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">
        {prefix}
        {display.toLocaleString("en-US")}
        {suffix}
      </span>
      <span className="sr-only">{`${prefix}${value.toLocaleString("en-US")}${suffix}`}</span>
    </span>
  );
}

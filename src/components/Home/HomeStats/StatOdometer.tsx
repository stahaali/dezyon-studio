"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatOdometer.module.css";

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
const DIGIT_HEIGHT_EM = 1.1;

type StatOdometerProps = {
  target: number;
  suffix?: string;
  delay?: number;
  className?: string;
};

export function StatOdometer({
  target,
  suffix = "",
  delay = 0,
  className,
}: StatOdometerProps) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const digits = target.toString().split("");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setActive(true);
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setActive(true);
        observer.disconnect();
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`${styles.odometer} ${className ?? ""}`.trim()}
      aria-label={`${target}${suffix}`}
    >
      {digits.map((digit, index) => {
        const value = Number.parseInt(digit, 10);

        return (
          <span key={`${target}-${index}`} className={styles.column} aria-hidden="true">
            <span
              className={styles.strip}
              style={{
                transform: active
                  ? `translateY(-${value * DIGIT_HEIGHT_EM}em)`
                  : "translateY(0)",
                transitionDelay: active ? `${delay + index * 140}ms` : "0ms",
              }}
            >
              {DIGITS.map((number) => (
                <span key={number} className={styles.digit}>
                  {number}
                </span>
              ))}
            </span>
          </span>
        );
      })}
      {suffix ? <span className={styles.suffix}>{suffix}</span> : null}
    </span>
  );
}

"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { leftRailLinks } from "@/data/site";
import styles from "./LeftSideRail.module.css";

const HIGHLIGHT_INTERVAL_MS = 1000;

const railIcons = {
  contact: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3C7.03 3 3 6.58 3 11c0 1.86.74 3.57 2 4.97V21l4.2-2.1c1.05.3 2.16.46 3.3.46 4.97 0 9-3.58 9-8.04C21.3 6.58 17.27 3 12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="11" r="1" fill="currentColor" />
      <circle cx="12" cy="11" r="1" fill="currentColor" />
      <circle cx="15" cy="11" r="1" fill="currentColor" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  call: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.5 2.7.8 4.1.8.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.9 21.2 2.8 13.1 2.8 3.2 2.8 2.5 3.3 2 4 2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.3 2.8.8 4.1.1.4 0 .9-.3 1.2L6.6 10.8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
} as const;

export function LeftSideRail() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % leftRailLinks.length);
    }, HIGHLIGHT_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  return (
    <aside className={styles.rail} aria-label="Quick contact">
      <svg width="0" height="0" aria-hidden="true" className={styles.gradientDefs}>
        <defs>
          <linearGradient id="leftRailBrandGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#92e13a" />
            <stop offset="48%" stopColor="#42931e" />
            <stop offset="100%" stopColor="#164317" />
          </linearGradient>
        </defs>
      </svg>

      <ul
        className={styles.list}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        {leftRailLinks.map(({ href, label, type }, index) => (
          <li key={type}>
            <a
              href={href}
              className={`${styles.item} ${
                !prefersReducedMotion && !isPaused && index === activeIndex
                  ? styles.itemActive
                  : ""
              }`.trim()}
              aria-label={label}
              {...(type === "whatsapp"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className={styles.itemInner}>
                <span className={styles.icon}>{railIcons[type]}</span>
                <span className={styles.label}>
                  <span className={styles.labelText}>{label}</span>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

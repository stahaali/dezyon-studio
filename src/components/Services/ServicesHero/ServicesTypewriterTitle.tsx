"use client";

import { useEffect, useState } from "react";
import styles from "./ServicesTypewriterTitle.module.css";

interface ServicesTypewriterTitleProps {
  accent: string;
  light: string;
  id?: string;
  className?: string;
  speed?: number;
}

export function ServicesTypewriterTitle({
  accent,
  light,
  id,
  className = "",
  speed = 45,
}: ServicesTypewriterTitleProps) {
  const fullText = `${accent} ${light}`;
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (charIndex >= fullText.length) {
      setIsComplete(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setCharIndex((prev) => prev + 1);
    }, speed);

    return () => window.clearTimeout(timer);
  }, [charIndex, fullText.length, speed]);

  const visibleText = fullText.slice(0, charIndex);
  const accentVisible = visibleText.slice(0, Math.min(charIndex, accent.length));
  const lightVisible =
    charIndex > accent.length
      ? visibleText.slice(accent.length + (charIndex > accent.length ? 1 : 0))
      : "";

  return (
    <h1 id={id} className={`${styles.title} ${className}`.trim()}>
      <span className={styles.accent}>{accentVisible}</span>
      {lightVisible ? <span className={styles.light}> {lightVisible}</span> : null}
      <span
        className={`${styles.cursor} ${isComplete ? styles.cursorDone : ""}`}
        aria-hidden="true"
      >
        |
      </span>
    </h1>
  );
}

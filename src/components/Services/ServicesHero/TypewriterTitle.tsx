"use client";

import { useEffect, useState } from "react";
import styles from "./TypewriterTitle.module.css";

interface TypewriterTitleProps {
  prefix: string;
  suffix?: string;
  phrases: readonly string[];
  id?: string;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}

export function TypewriterTitle({
  prefix,
  suffix = "",
  phrases,
  id,
  className = "",
  typingSpeed = 85,
  deletingSpeed = 50,
  pauseMs = 2400,
}: TypewriterTitleProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;

      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentPhrase.slice(0, displayText.length - 1)
            : currentPhrase.slice(0, displayText.length + 1),
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseMs,
  ]);

  return (
    <h1 id={id} className={`${styles.title} ${className}`.trim()}>
      <span className={styles.prefix}>{prefix}</span>
      <span className={styles.secondLine}>
        {suffix ? <span className={styles.suffix}>{suffix} </span> : null}
        <span className={styles.wordHighlight}>
          <span className={styles.typewriter} aria-live="polite">
            <span className={styles.typewriterText}>{displayText}</span>
            <span className={styles.cursor}>|</span>
          </span>
        </span>
      </span>
    </h1>
  );
}

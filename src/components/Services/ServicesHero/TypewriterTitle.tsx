"use client";

import { useEffect, useState } from "react";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
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
  startDelayMs?: number;
}

export function TypewriterTitle({
  prefix,
  suffix = "",
  phrases,
  id,
  className = "",
  typingSpeed = 55,
  deletingSpeed = 30,
  pauseMs = 1800,
  startDelayMs = 2800,
}: TypewriterTitleProps) {
  const firstPhrase = phrases[0] ?? "";
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState(firstPhrase);
  const [isDeleting, setIsDeleting] = useState(false);
  const [animationReady, setAnimationReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setAnimationReady(true);
    }, startDelayMs);

    return () => window.clearTimeout(timeout);
  }, [startDelayMs]);

  useEffect(() => {
    if (!animationReady) return;

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
            : currentPhrase.slice(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [
    animationReady,
    displayText,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseMs,
  ]);

  return (
    <h1
      id={id}
      className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.title} ${className}`.trim()}
    >
      <span className={styles.firstLine}>
        <span className={styles.prefix}>{prefix}</span>
        {suffix ? <span className={styles.suffixInline}> {suffix}</span> : null}
      </span>
      <span className={styles.secondLine}>
        {suffix ? (
          <span className={styles.suffixWithHighlight}>{suffix}</span>
        ) : null}
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

"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

type HeroTypewriterHighlightProps = {
  phrases: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
};

export function HeroTypewriterHighlight({
  phrases,
  typingSpeed = 85,
  deletingSpeed = 50,
  pauseMs = 2400,
}: HeroTypewriterHighlightProps) {
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
    <span className={styles.wordHighlight}>
      <span className={styles.typewriter} aria-live="polite">
        <span className={styles.typewriterText}>{displayText}</span>
        <span className={styles.typewriterCursor}>|</span>
      </span>
    </span>
  );
}

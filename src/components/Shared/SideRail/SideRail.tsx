"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { sideRailSocialLinks } from "@/data/site";
import { useMobileMenu } from "@/context/MobileMenuContext";
import { SocialIcon } from "@/components/Shared/SocialIcon";
import styles from "./SideRail.module.css";

const HIGHLIGHT_INTERVAL_MS = 1000;

export function SideRail() {
  const { isOpen, toggleMenu } = useMobileMenu();
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % sideRailSocialLinks.length);
    }, HIGHLIGHT_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  return (
    <aside className={styles.rail} aria-label="Quick actions">
      <button
        type="button"
        className={`${styles.menuButton} ${isOpen ? styles.menuButtonActive : ""}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className={`${styles.menuLine} ${styles.menuLineShort}`} />
        <span className={`${styles.menuLine} ${styles.menuLineTall}`} />
        <span className={`${styles.menuLine} ${styles.menuLineMid}`} />
      </button>

      <ul
        className={styles.socialList}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        {sideRailSocialLinks.map(({ href, label }, index) => (
          <li key={label}>
            <a
              href={href}
              className={`${styles.socialLink} ${
                !prefersReducedMotion && !isPaused && index === activeIndex
                  ? styles.socialLinkActive
                  : ""
              }`.trim()}
              data-social={label.toLowerCase()}
              aria-label={label}
              {...(href !== "#"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <SocialIcon label={label} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

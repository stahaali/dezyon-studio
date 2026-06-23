"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import styles from "./BackToTop.module.css";

const SCROLL_THRESHOLD = 360;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      className={`${styles.button} ${visible ? styles.buttonVisible : ""}`.trim()}
      onClick={handleScrollToTop}
      aria-label="Back to top"
      title="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <span className={styles.iconWrap} aria-hidden="true">
        <ChevronUp className={styles.icon} size={22} strokeWidth={2.5} />
      </span>
    </button>
  );
}

"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

const MIN_VISIBLE_MS = 1500;
const MAX_WAIT_MS = 5000;

export function Preloader() {
  const reducedMotion = useReducedMotion();
  const lenis = useLenis();
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setProgress(100);
      const timer = window.setTimeout(() => setPhase("done"), 320);
      return () => window.clearTimeout(timer);
    }

    const startedAt = Date.now();
    let finished = false;

    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 94) return current;
        return Math.min(current + 4 + Math.random() * 9, 94);
      });
    }, 120);

    const complete = () => {
      if (finished) return;
      finished = true;
      window.clearInterval(progressTimer);

      const elapsed = Date.now() - startedAt;
      const delay = Math.max(0, MIN_VISIBLE_MS - elapsed);

      window.setTimeout(() => {
        setProgress(100);
        window.setTimeout(() => setPhase("exit"), 260);
        window.setTimeout(() => setPhase("done"), 1100);
      }, delay);
    };

    if (document.readyState === "complete") {
      complete();
    } else {
      window.addEventListener("load", complete, { once: true });
    }

    const fallbackTimer = window.setTimeout(complete, MAX_WAIT_MS);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("load", complete);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (phase === "done" || !lenis) return;

    lenis.stop();
    return () => lenis.start();
  }, [lenis, phase]);

  useEffect(() => {
    if (phase === "done") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  return (
    <AnimatePresence mode="wait">
      {phase !== "done" ? (
        <div className={styles.root} role="status" aria-live="polite" aria-label="Loading website">
          <motion.div
            className={styles.curtainTop}
            initial={{ y: 0 }}
            animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className={styles.curtainBottom}
            initial={{ y: 0 }}
            animate={phase === "exit" ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          />

          <motion.div
            className={styles.content}
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={
              phase === "exit"
                ? { opacity: 0, y: -24, scale: 0.96 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ duration: phase === "exit" ? 0.45 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.logoWrap}>
              <Image
                src="/assets/img/logo-1.webp"
                alt=""
                width={296}
                height={88}
                className={styles.logo}
                priority
              />
            </div>

            <motion.div
              className={styles.progressDock}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={
                phase === "exit"
                  ? { opacity: 0, y: 16 }
                  : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
            >
              <div className={styles.progressMeta}>
                <span>Loading</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className={styles.progressTrack}>
                <motion.span
                  className={styles.progressFill}
                  initial={false}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

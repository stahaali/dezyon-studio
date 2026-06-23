"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState, type RefObject } from "react";
import {
  getHomepagePathBreakpoint,
  homepageScrollPaths,
  type HomepagePathBreakpoint,
} from "@/data/homepage-scroll-path";
import styles from "./HomepageScrollPath.module.css";

gsap.registerPlugin(ScrollTrigger);

type HomepageScrollPathProps = {
  containerRef: RefObject<HTMLElement | null>;
};

function readBreakpoint(): HomepagePathBreakpoint {
  if (typeof window === "undefined") return "desktop";
  return getHomepagePathBreakpoint(window.innerWidth);
}

export function HomepageScrollPath({ containerRef }: HomepageScrollPathProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const [breakpoint, setBreakpoint] = useState<HomepagePathBreakpoint>("desktop");

  const pathConfig = homepageScrollPaths[breakpoint];

  useEffect(() => {
    const updateBreakpoint = () => {
      setBreakpoint(readBreakpoint());
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint, { passive: true });

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    const glow = glowRef.current;

    if (!container || !path || !glow) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const length = path.getTotalLength();

    gsap.set([path, glow], {
      strokeDasharray: length,
      strokeDashoffset: reducedMotion ? 0 : length,
    });

    if (reducedMotion) return;

    const tween = gsap.to([path, glow], {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.35,
        invalidateOnRefresh: true,
      },
    });

    const handleRefresh = () => {
      const nextLength = path.getTotalLength();
      gsap.set([path, glow], {
        strokeDasharray: nextLength,
      });
    };

    ScrollTrigger.addEventListener("refreshInit", handleRefresh);

    const refreshId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(refreshId);
      ScrollTrigger.removeEventListener("refreshInit", handleRefresh);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [breakpoint, containerRef, pathConfig.d]);

  return (
    <div className={styles.pathLayer} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox={pathConfig.viewBox}
        preserveAspectRatio="none"
        role="presentation"
      >
        <defs>
          <linearGradient
            id="homeScrollPathGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#92e13a" />
            <stop offset="48%" stopColor="#42931e" />
            <stop offset="100%" stopColor="#164317" />
          </linearGradient>
        </defs>
        <path
          ref={glowRef}
          className={styles.pathGlow}
          d={pathConfig.d}
          strokeWidth={pathConfig.strokeWidth + 12}
        />
        <path
          ref={pathRef}
          className={styles.path}
          d={pathConfig.d}
          strokeWidth={pathConfig.strokeWidth}
        />
      </svg>
    </div>
  );
}

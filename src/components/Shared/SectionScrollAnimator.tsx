"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const HERO_PATTERN = /hero/i;
const VIEWPORT_MARGIN = "80px";

function isHeroSection(section: HTMLElement, index: number): boolean {
  if (section.dataset.sectionReveal === "skip") return true;
  if (index === 0) return true;
  if (HERO_PATTERN.test(section.className?.toString() ?? "")) return true;
  if (HERO_PATTERN.test(section.id)) return true;
  return false;
}

function shouldAnimateSection(section: HTMLElement, index: number): boolean {
  if (section.closest("footer")) return false;
  if (isHeroSection(section, index)) return false;
  if (section.dataset.hasInnerReveal === "true") return false;
  if (section.querySelector("[data-scroll-reveal]")) return false;
  return true;
}

export function SectionScrollAnimator() {
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    let frameId = 0;

    const setup = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        const sections = Array.from(
          document.querySelectorAll<HTMLElement>("main section"),
        );

        observerRef.current?.disconnect();

        const toObserve: HTMLElement[] = [];

        sections.forEach((section, index) => {
          if (!shouldAnimateSection(section, index)) {
            section.classList.remove("section-reveal");
            return;
          }

          if (section.classList.contains("section-reveal-visible")) return;

          if (prefersReducedMotion) {
            section.classList.add("section-reveal-visible");
            section.classList.remove("section-reveal");
            return;
          }

          section.classList.add("section-reveal");
          if (!section.classList.contains("section-reveal-visible")) {
            toObserve.push(section);
          }
        });

        if (prefersReducedMotion || toObserve.length === 0) return;

        observerRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const el = entry.target as HTMLElement;
              el.classList.add("section-reveal-visible");
              observerRef.current?.unobserve(el);
            });
          },
          { rootMargin: `-${VIEWPORT_MARGIN} 0px 0px 0px`, threshold: 0 },
        );

        toObserve.forEach((section) => observerRef.current?.observe(section));
      });
    };

    setup();

    const main = document.querySelector("main");
    const mutationObserver =
      main &&
      new MutationObserver(() => {
        setup();
      });

    if (main && mutationObserver) {
      mutationObserver.observe(main, { childList: true, subtree: true });
    }

    return () => {
      cancelAnimationFrame(frameId);
      mutationObserver?.disconnect();
      observerRef.current?.disconnect();
    };
  }, [pathname]);

  return null;
}

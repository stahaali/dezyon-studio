"use client";

import { useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { MarketingHeroFloatingCards } from "./MarketingHeroFloatingCards";

type MarketingHeroScrollWrapperProps = {
  className: string;
  children: ReactNode;
};

const SCROLL_ANIMATION_DISTANCE = 980;

export function MarketingHeroScrollWrapper({
  className,
  children,
}: MarketingHeroScrollWrapperProps) {
  const { scrollY } = useScroll();
  const scrollYProgress = useTransform(
    scrollY,
    [0, SCROLL_ANIMATION_DISTANCE],
    [0, 1],
  );

  return (
    <section
      className={className}
      aria-labelledby="services-hero-heading"
    >
      {children}
      <MarketingHeroFloatingCards scrollProgress={scrollYProgress} />
    </section>
  );
}

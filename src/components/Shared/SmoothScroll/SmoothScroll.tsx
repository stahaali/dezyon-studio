"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

function LenisGsapConnector() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });
    refresh();

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(update);
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);

  return null;
}

type SmoothScrollProps = {
  children: ReactNode;
  enabled?: boolean;
};

export function SmoothScroll({ children, enabled = true }: SmoothScrollProps) {
  const reducedMotion = useReducedMotion();

  if (!enabled || reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        syncTouch: false,
        anchors: true,
      }}
    >
      <LenisGsapConnector />
      {children}
    </ReactLenis>
  );
}

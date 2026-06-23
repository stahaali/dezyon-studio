"use client";

import type Lenis from "lenis";
import { useLenis } from "lenis/react";
import { useCallback } from "react";

type ScrollToOptions = Parameters<Lenis["scrollTo"]>[1];

export function useSmoothScrollTo() {
  const lenis = useLenis();

  return useCallback(
    (target: number | string | HTMLElement, options?: ScrollToOptions) => {
      if (lenis) {
        lenis.scrollTo(target, options);
        return;
      }

      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
      }
    },
    [lenis],
  );
}

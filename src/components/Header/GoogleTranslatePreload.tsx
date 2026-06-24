"use client";

import { useEffect } from "react";
import { ensureTranslatorDefaults, preloadGoogleTranslate } from "@/lib/google-translate";

export function GoogleTranslatePreload() {
  useEffect(() => {
    const run = () => {
      ensureTranslatorDefaults();
      void preloadGoogleTranslate();
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(run, { timeout: 5000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(run, 3500);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";
import {
  getActiveLanguageCode,
  preloadGoogleTranslate,
} from "@/lib/google-translate";

export function GoogleTranslatePreload() {
  useEffect(() => {
    const hasTranslation = getActiveLanguageCode() !== "en";

    if (hasTranslation) {
      void preloadGoogleTranslate();
      return;
    }

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(
        () => {
          void preloadGoogleTranslate();
        },
        { timeout: 2000 }
      );
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(() => {
      void preloadGoogleTranslate();
    }, 1200);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
}

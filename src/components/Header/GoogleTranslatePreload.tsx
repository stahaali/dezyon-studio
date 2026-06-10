"use client";

import { useEffect } from "react";
import {
  getActiveLanguageCode,
  preloadGoogleTranslate,
} from "@/lib/google-translate";

export function GoogleTranslatePreload() {
  useEffect(() => {
    const runPreload = () => {
      void preloadGoogleTranslate();
    };

    if (getActiveLanguageCode() !== "en") {
      runPreload();
      return;
    }

    const requestIdleCallback = window.requestIdleCallback?.bind(window);

    if (requestIdleCallback) {
      const idleId = requestIdleCallback(runPreload, { timeout: 2000 });
      return () => window.cancelIdleCallback?.(idleId);
    }

    const timeoutId = setTimeout(runPreload, 1200);
    return () => clearTimeout(timeoutId);
  }, []);

  return null;
}

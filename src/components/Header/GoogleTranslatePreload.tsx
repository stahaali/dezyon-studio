"use client";

import { useEffect } from "react";
import { preloadGoogleTranslate, ensureTranslatorDefaults } from "@/lib/google-translate";

export function GoogleTranslatePreload() {
  useEffect(() => {
    ensureTranslatorDefaults();
    void preloadGoogleTranslate();
  }, []);

  return null;
}

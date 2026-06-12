"use client";

import { useEffect } from "react";
import { preloadGoogleTranslate } from "@/lib/google-translate";

export function GoogleTranslatePreload() {
  useEffect(() => {
    void preloadGoogleTranslate();
  }, []);

  return null;
}

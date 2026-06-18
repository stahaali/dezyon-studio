"use client";

import { useEffect } from "react";
import {
  attachSiteProtections,
  shouldEnableSiteProtections,
} from "@/lib/site-security";

export function SiteSecurity() {
  useEffect(() => {
    if (!shouldEnableSiteProtections(window.location.hostname)) {
      return;
    }

    return attachSiteProtections();
  }, []);

  return null;
}

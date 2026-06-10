"use client";

import { useEffect } from "react";
import { getPricingCategoryPath } from "@/data/packages";

export default function PackagesPage() {
  useEffect(() => {
    window.location.replace(getPricingCategoryPath("logo"));
  }, []);

  return null;
}

import type { Metadata } from "next";
import { PlansAndPricingContent } from "@/components/PlansAndPricing/PlansAndPricingContent";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Plans & Pricing | ${SITE_NAME}`,
  description:
    "Explore Dezyon Studio plans and pricing for logo design, website development, branding, e-commerce, SEO, video, and AI-powered solutions.",
};

export default function PlansAndPricingPage() {
  return <PlansAndPricingContent />;
}

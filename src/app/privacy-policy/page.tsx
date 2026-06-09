import type { Metadata } from "next";
import { PrivacyContent } from "@/components/Legal/PrivacyContent/PrivacyContent";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: "Read the privacy policy for Dezyon Studio.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}

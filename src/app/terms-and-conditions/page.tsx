import type { Metadata } from "next";
import { TermsContent } from "@/components/Legal/TermsContent/TermsContent";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms and Conditions | ${SITE_NAME}`,
  description: "Read the terms of use, disclaimers, and policies for Dezyon Studio.",
};

export default function TermsAndConditionsPage() {
  return <TermsContent />;
}

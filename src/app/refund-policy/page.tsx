import type { Metadata } from "next";
import { RefundContent } from "@/components/Legal/RefundContent/RefundContent";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Refund Policy | ${SITE_NAME}`,
  description: "Read the refund policy for design and development services at Dezyon Studio.",
};

export default function RefundPolicyPage() {
  return <RefundContent />;
}

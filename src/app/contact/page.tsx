import type { Metadata } from "next";
import { ContactBanner } from "@/components/Contact/ContactBanner/ContactBanner";
import { ContactFAQ } from "@/components/Contact/ContactFAQ/ContactFAQ";
import { ContactHero } from "@/components/Contact/ContactHero/ContactHero";
import { ContactLogos } from "@/components/Contact/ContactLogos/ContactLogos";
import { ContactReach } from "@/components/Contact/ContactReach/ContactReach";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact | ${SITE_NAME}`,
  description:
    "Get in touch with Dezyon Studio. Send us a message, explore other ways to reach us, or browse frequently asked questions.",
};

export default function ContactPage() {
  return (
    <>
      <ContactBanner />
      <ContactHero />
      <ContactReach />
      <ContactFAQ />
      <ContactLogos />
    </>
  );
}

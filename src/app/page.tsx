import { TalkingWebsiteVoiceAssistant } from "@/components/Vapi/TalkingWebsiteVoiceAssistant";
import { ContactFAQ } from "@/components/Contact/ContactFAQ/ContactFAQ";
import { CTA } from "@/components/CTA/CTA";
import { Features } from "@/components/Features/Features";
import { CapabilitiesSection } from "@/components/Home/CapabilitiesSection/CapabilitiesSection";
import { HomeGrowthTeam } from "@/components/Home/HomeGrowthTeam/HomeGrowthTeam";
import { HomeStats } from "@/components/Home/HomeStats/HomeStats";
import { Hero } from "@/components/Hero/Hero";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { contactFaq } from "@/data/contact";
import {
  buildCanonicalUrl,
  createPageMetadata,
  getDocumentTitle,
  PAGE_SEO,
} from "@/lib/seo";
import type { Metadata } from "next";
import styles from "./page.module.css";

const homeCanonical = buildCanonicalUrl("/");
const baseHomeMetadata = createPageMetadata("home");

export const metadata: Metadata = {
  ...baseHomeMetadata,
  title: {
    absolute: "Dezyon Studio",
  },
  description: "AI-powered growth partnerships and digital automation.",
  alternates: {
    canonical: homeCanonical,
  },
  openGraph: {
    ...baseHomeMetadata.openGraph,
    url: homeCanonical,
    title: "Dezyon Studio",
    description: "AI-powered growth partnerships and digital automation.",
  },
  twitter: {
    ...baseHomeMetadata.twitter,
    title: "Dezyon Studio",
    description: "AI-powered growth partnerships and digital automation.",
  },
};

export default function HomePage() {
  const homeSeo = PAGE_SEO.home;

  return (
    <>
      <PageSchema
        breadcrumbs={[{ name: "Home", path: "/" }]}
        title={getDocumentTitle(homeSeo)}
        description={homeSeo.description}
        path={homeSeo.path}
        faq={contactFaq.items}
      />
      <TalkingWebsiteVoiceAssistant>
        <div className={styles.home}>
          <Hero />
          <CapabilitiesSection />
          <Features />
          <HomeStats />
          <CTA compact />
          <Testimonials />
          <HomeGrowthTeam />
          <ContactFAQ twoColumn />
        </div>
      </TalkingWebsiteVoiceAssistant>
    </>
  );
}

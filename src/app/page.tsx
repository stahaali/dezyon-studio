import { HomepageScrollPathShell } from "@/components/Home/HomepageScrollPath/HomepageScrollPathShell";
import { TalkingWebsiteVoiceAssistant } from "@/components/Vapi/TalkingWebsiteVoiceAssistant";
import { ContactFAQ } from "@/components/Contact/ContactFAQ/ContactFAQ";
import { CTA } from "@/components/CTA/CTA";
import { Features } from "@/components/Features/Features";
import { CapabilitiesSection } from "@/components/Home/CapabilitiesSection/CapabilitiesSection";
import { HomeStats } from "@/components/Home/HomeStats/HomeStats";
import { Hero } from "@/components/Hero/Hero";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { contactFaq } from "@/data/contact";
import {
  buildCanonicalUrl,
  createPageMetadata,
  getDocumentTitle,
  HOME_DOCUMENT_TITLE,
  PAGE_SEO,
} from "@/lib/seo";
import type { Metadata } from "next";
import styles from "./page.module.css";

const homeCanonical = buildCanonicalUrl("/");
const baseHomeMetadata = createPageMetadata("home");
const homeTitle = HOME_DOCUMENT_TITLE;
const homeDescription = PAGE_SEO.home.description;

export const metadata: Metadata = {
  ...baseHomeMetadata,
  title: {
    absolute: homeTitle,
  },
  description: homeDescription,
  alternates: {
    canonical: homeCanonical,
  },
  openGraph: {
    ...baseHomeMetadata.openGraph,
    url: homeCanonical,
    title: homeTitle,
    description: homeDescription,
  },
  twitter: {
    ...baseHomeMetadata.twitter,
    title: homeTitle,
    description: homeDescription,
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
        <HomepageScrollPathShell className={styles.home}>
          <Hero />
          <CapabilitiesSection />
          <Features />
          <HomeStats className={styles.aboveScrollPath} />
          <CTA compact />
          <Testimonials className={styles.aboveScrollPath} />
          <ContactFAQ twoColumn sectionClassName={styles.aboveScrollPath} />
        </HomepageScrollPathShell>
      </TalkingWebsiteVoiceAssistant>
    </>
  );
}

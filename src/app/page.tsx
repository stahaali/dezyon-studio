import { TalkingWebsiteVoiceAssistant } from "@/components/Vapi/TalkingWebsiteVoiceAssistant";
import { ContactFAQ } from "@/components/Contact/ContactFAQ/ContactFAQ";
import { CTA } from "@/components/CTA/CTA";
import { Features } from "@/components/Features/Features";
import { Team } from "@/components/Features/Team";
import { CapabilitiesSection } from "@/components/Home/CapabilitiesSection/CapabilitiesSection";
import { HomeStats } from "@/components/Home/HomeStats/HomeStats";
import { Hero } from "@/components/Hero/Hero";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { contactFaq } from "@/data/contact";
import { getDocumentTitle, PAGE_SEO } from "@/lib/seo";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "Dezyon Studio",
  },
  description: "AI-powered growth partnerships and digital automation.",
  alternates: {
    canonical: "https://www.dezyonstudio.com/",
  },
};

export default function Home() {
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
      <div className={styles.home}>
        <Hero />
        <CapabilitiesSection />
        <Features />
        <HomeStats />
        <CTA compact />
        <Testimonials />
        <Team theme="dark" />
        <ContactFAQ twoColumn />
      </div>
    </>
  );
}

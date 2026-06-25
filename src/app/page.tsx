import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero/Hero";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
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

const HomepageScrollPathShell = dynamic(
  () =>
    import("@/components/Home/HomepageScrollPath/HomepageScrollPathShell").then(
      (module) => module.HomepageScrollPathShell,
    ),
);

const CapabilitiesSection = dynamic(
  () =>
    import("@/components/Home/CapabilitiesSection/CapabilitiesSection").then(
      (module) => module.CapabilitiesSection,
    ),
);

const WebsiteDesignsSection = dynamic(() =>
  import("@/components/Home/WebsiteDesignsSection/WebsiteDesignsSection").then(
    (module) => module.WebsiteDesignsSection,
  ),
);

const HomeStats = dynamic(() =>
  import("@/components/Home/HomeStats/HomeStats").then(
    (module) => module.HomeStats,
  ),
);

const CTA = dynamic(() =>
  import("@/components/CTA/CTA").then((module) => module.CTA),
);

const Testimonials = dynamic(() =>
  import("@/components/Testimonials/Testimonials").then(
    (module) => module.Testimonials,
  ),
);

const ContactFAQ = dynamic(() =>
  import("@/components/Contact/ContactFAQ/ContactFAQ").then(
    (module) => module.ContactFAQ,
  ),
);

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
      <HomepageScrollPathShell className={styles.home}>
        <Hero />
        <CapabilitiesSection />
        <WebsiteDesignsSection />
        <HomeStats className={styles.aboveScrollPath} />
        <CTA />
        <Testimonials className={styles.aboveScrollPath} />
        <ContactFAQ twoColumn sectionClassName={styles.aboveScrollPath} />
      </HomepageScrollPathShell>
    </>
  );
}

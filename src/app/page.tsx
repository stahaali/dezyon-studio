import { ContactFAQ } from "@/components/Contact/ContactFAQ/ContactFAQ";
import { CTA } from "@/components/CTA/CTA";
import { Features } from "@/components/Features/Features";
import { Team } from "@/components/Features/Team";
import { HomePortfolio } from "@/components/Home/HomePortfolio/HomePortfolio";
import { CapabilitiesSection } from "@/components/Home/CapabilitiesSection/CapabilitiesSection";
import { HomeStats } from "@/components/Home/HomeStats/HomeStats";
import { Hero } from "@/components/Hero/Hero";
// import { Pricing } from "@/components/Pricing/Pricing";
import { JsonLd } from "@/components/Seo/JsonLd";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { createPageMetadata, getDocumentTitle, PAGE_SEO } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
  getFaqPageJsonLd,
  getWebPageJsonLd,
} from "@/lib/structured-data";
import styles from "./page.module.css";

export const metadata = createPageMetadata("home");

export default function Home() {
  const homeSeo = PAGE_SEO.home;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([{ name: "Home", path: "/" }]),
          getWebPageJsonLd({
            name: getDocumentTitle(homeSeo),
            description: homeSeo.description,
            path: homeSeo.path,
          }),
          getFaqPageJsonLd(),
        ]}
      />
      <div className={styles.home}>
        <Hero />
        <CapabilitiesSection />
        <Features />
        <HomeStats />
        {/* <Pricing /> */}
        <Testimonials />
        <HomePortfolio />
        <Team theme="dark" />
        <ContactFAQ twoColumn />
        <CTA compact />
      </div>
    </>
  );
}

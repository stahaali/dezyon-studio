import { CTA } from "@/components/CTA/CTA";
import { Features } from "@/components/Features/Features";
import { Team } from "@/components/Features/Team";
import { Timeline } from "@/components/Features/Timeline";
import { CapabilitiesSection } from "@/components/Home/CapabilitiesSection/CapabilitiesSection";
import { HomeStats } from "@/components/Home/HomeStats/HomeStats";
import { Hero } from "@/components/Hero/Hero";
import { Pricing } from "@/components/Pricing/Pricing";
import { JsonLd } from "@/components/Seo/JsonLd";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
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
            name: homeSeo.title,
            description: homeSeo.description,
            path: homeSeo.path,
          }),
        ]}
      />
      <div className={styles.home}>
        <Hero />
        <CapabilitiesSection />
        <Features />
        <HomeStats />
        <Pricing />
        <Testimonials />
        <Timeline />
        <Team theme="dark" />
        <CTA compact />
      </div>
    </>
  );
}

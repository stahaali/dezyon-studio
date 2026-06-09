import { CTA } from "@/components/CTA/CTA";
import { Features } from "@/components/Features/Features";
import { Team } from "@/components/Features/Team";
import { Timeline } from "@/components/Features/Timeline";
import { Values } from "@/components/Features/Values";
import { CapabilitiesSection } from "@/components/Home/CapabilitiesSection/CapabilitiesSection";
import { Hero } from "@/components/Hero/Hero";
import { Pricing } from "@/components/Pricing/Pricing";
import { JsonLd } from "@/components/Seo/JsonLd";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
  getWebPageJsonLd,
} from "@/lib/structured-data";

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
      <Hero />
      <CapabilitiesSection />
      <Features />
      <Values />
      <Pricing />
      <Testimonials />
      <Timeline />
      <Team />
      <CTA />
    </>
  );
}

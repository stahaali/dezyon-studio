import { AboutCareers } from "@/components/About/AboutCareers/AboutCareers";
import { AboutHelps } from "@/components/About/AboutHelps/AboutHelps";
import { AboutHero } from "@/components/About/AboutHero/AboutHero";
import { AboutShowcase } from "@/components/About/AboutShowcase/AboutShowcase";
import { Team } from "@/components/Features/Team";
import { Timeline } from "@/components/Features/Timeline";
import { AboutValues } from "@/components/About/AboutValues/AboutValues";
import { JsonLd } from "@/components/Seo/JsonLd";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import {
  getAboutPageJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/structured-data";
import styles from "./page.module.css";

export const metadata = createPageMetadata("about");

export default function AboutPage() {
  const aboutSeo = PAGE_SEO.about;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          getAboutPageJsonLd({
            name: aboutSeo.title,
            description: aboutSeo.description,
            path: aboutSeo.path,
          }),
        ]}
      />
      <div className={styles.page}>
        <AboutHero />
        <AboutShowcase />
        <AboutHelps />
        <AboutValues />
        <Timeline />
        <Team theme="dark" />
        <AboutCareers />
      </div>
    </>
  );
}

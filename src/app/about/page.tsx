import { AboutHelps } from "@/components/About/AboutHelps/AboutHelps";
import { AboutHero } from "@/components/About/AboutHero/AboutHero";
import { AboutChoose } from "@/components/About/AboutChoose/AboutChoose";
import { AboutCtaBanner } from "@/components/About/AboutCtaBanner/AboutCtaBanner";
import { AboutValues } from "@/components/About/AboutValues/AboutValues";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageAlternates, createPageMetadata, PAGE_SEO } from "@/lib/seo";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  ...createPageMetadata("about"),
  alternates: createPageAlternates(PAGE_SEO.about.path),
};

export default function AboutPage() {
  const aboutSeo = PAGE_SEO.about;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        title={aboutSeo.title}
        description={aboutSeo.description}
        path={aboutSeo.path}
        variant="about"
      />
      <div className={styles.page}>
        <AboutHero />
        <AboutHelps />
        <AboutValues />
        <Testimonials noPaddingTop noPaddingBottom />
        <AboutChoose />
        <AboutCtaBanner />
      </div>
    </>
  );
}

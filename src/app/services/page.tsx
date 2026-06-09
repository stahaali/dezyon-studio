import type { Metadata } from "next";
import { CTA } from "@/components/CTA/CTA";
import { ServicesGrid } from "@/components/Services/ServicesGrid/ServicesGrid";
import { ServicesHero } from "@/components/Services/ServicesHero/ServicesHero";
import { SITE_NAME } from "@/lib/constants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `Services | ${SITE_NAME}`,
  description:
    "Explore Dezyon Studio services — logo design, branding, website development, mobile apps, 2D/3D animation, and digital marketing.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <div className={styles.ctaWrap}>
        <CTA />
      </div>
    </>
  );
}

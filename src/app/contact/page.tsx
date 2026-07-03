import { ContactBanner } from "@/components/Contact/ContactBanner/ContactBanner";
import { ContactHero } from "@/components/Contact/ContactHero/ContactHero";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageAlternates, createPageMetadata, PAGE_SEO } from "@/lib/seo";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...createPageMetadata("contact"),
  alternates: createPageAlternates(PAGE_SEO.contact.path),
};

export default function ContactPage() {
  const contactSeo = PAGE_SEO.contact;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        title={contactSeo.title}
        description={contactSeo.description}
        path={contactSeo.path}
        variant="contact"
      />
      <div className={styles.page}>
        <ContactBanner />
        <ContactHero />
      </div>
    </>
  );
}

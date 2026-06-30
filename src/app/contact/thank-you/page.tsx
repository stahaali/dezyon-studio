import { ContactThankYou } from "@/components/Contact/ContactThankYou/ContactThankYou";
import { createPageAlternates, createPageMetadata, PAGE_SEO } from "@/lib/seo";
import type { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
  ...createPageMetadata("thankYou"),
  alternates: createPageAlternates(PAGE_SEO.thankYou.path),
};

export default function ContactThankYouPage() {
  return (
    <div className={styles.page}>
      <ContactThankYou />
    </div>
  );
}

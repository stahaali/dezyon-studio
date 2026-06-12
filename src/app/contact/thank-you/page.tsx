import type { Metadata } from "next";
import { ContactThankYou } from "@/components/Contact/ContactThankYou/ContactThankYou";
import { SITE_NAME } from "@/lib/constants";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: `Thank You | Contact | ${SITE_NAME}`,
  description: "Your contact form submission was received successfully.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactThankYouPage() {
  return (
    <div className={styles.page}>
      <ContactThankYou />
    </div>
  );
}

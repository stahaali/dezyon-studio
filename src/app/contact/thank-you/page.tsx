import { ContactThankYou } from "@/components/Contact/ContactThankYou/ContactThankYou";
import { createPageMetadata } from "@/lib/seo";
import styles from "../page.module.css";

export const metadata = createPageMetadata("thankYou");

export default function ContactThankYouPage() {
  return (
    <div className={styles.page}>
      <ContactThankYou />
    </div>
  );
}

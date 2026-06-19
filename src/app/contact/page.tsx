import { ContactBanner } from "@/components/Contact/ContactBanner/ContactBanner";
import { ContactHero } from "@/components/Contact/ContactHero/ContactHero";
import { TalkingWebsiteVoiceAssistant } from "@/components/Vapi/TalkingWebsiteVoiceAssistant";
import { JsonLd } from "@/components/Seo/JsonLd";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
  getContactPageJsonLd,
} from "@/lib/structured-data";
import styles from "./page.module.css";

export const metadata = createPageMetadata("contact");

export default function ContactPage() {
  const contactSeo = PAGE_SEO.contact;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          getContactPageJsonLd({
            name: contactSeo.title,
            description: contactSeo.description,
            path: contactSeo.path,
          }),
        ]}
      />
      <TalkingWebsiteVoiceAssistant>
        <div className={styles.page}>
          <ContactBanner />
          <ContactHero />
        </div>
      </TalkingWebsiteVoiceAssistant>
    </>
  );
}

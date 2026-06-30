import { ContactBanner } from "@/components/Contact/ContactBanner/ContactBanner";
import { ContactHero } from "@/components/Contact/ContactHero/ContactHero";
import { TalkingWebsiteVoiceAssistant } from "@/components/Vapi/TalkingWebsiteVoiceAssistant";
import { contactVoiceWidgetAvatar } from "@/data/contact";
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
      <TalkingWebsiteVoiceAssistant
        showContactAvatar
        avatarSrc={contactVoiceWidgetAvatar.src}
        avatarAlt={contactVoiceWidgetAvatar.alt}
      >
        <div className={styles.page}>
          <ContactBanner />
          <ContactHero />
        </div>
      </TalkingWebsiteVoiceAssistant>
    </>
  );
}

import { ContactBanner } from "@/components/Contact/ContactBanner/ContactBanner";
import { ContactHero } from "@/components/Contact/ContactHero/ContactHero";
import { TalkingWebsiteVoiceAssistant } from "@/components/Vapi/TalkingWebsiteVoiceAssistant";
import { contactVoiceWidgetAvatar } from "@/data/contact";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata("contact");

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

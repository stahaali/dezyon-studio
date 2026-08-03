"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
import { VapiSimliProvider } from "@/context/VapiSimliContext";
import { contactVoiceWidgetAvatar } from "@/data/contact";
import { Footer } from "@/components/Footer/Footer";
import { GoogleTranslatePreload } from "@/components/Header/GoogleTranslatePreload";
import { Header } from "@/components/Header/Header";
import { SectionScrollAnimator } from "@/components/Shared/SectionScrollAnimator";
import { SiteSecurity } from "@/components/Shared/SiteSecurity";

const CALL_LARA_PATH = "/talking-website/call-lara";

const BackToTop = dynamic(
  () =>
    import("@/components/Shared/BackToTop/BackToTop").then(
      (module) => module.BackToTop
    ),
  { ssr: false }
);

const CursorFollower = dynamic(
  () =>
    import("@/components/Shared/CursorFollower/CursorFollower").then(
      (module) => module.CursorFollower
    ),
  { ssr: false }
);

const LeftSideRail = dynamic(
  () =>
    import("@/components/Shared/LeftSideRail/LeftSideRail").then(
      (module) => module.LeftSideRail
    ),
  { ssr: false }
);

const SideRail = dynamic(
  () =>
    import("@/components/Shared/SideRail/SideRail").then(
      (module) => module.SideRail
    ),
  { ssr: false }
);

const ContactVoiceFloatingAvatar = dynamic(
  () =>
    import(
      "@/components/Contact/ContactVoiceFloatingAvatar/ContactVoiceFloatingAvatar"
    ).then((module) => module.ContactVoiceFloatingAvatar),
  { ssr: false }
);

const VapiVoiceWidget = dynamic(
  () =>
    import("@/components/Vapi/VapiVoiceWidget").then(
      (module) => module.VapiVoiceWidget
    ),
  { ssr: false }
);

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuditPage = pathname.startsWith("/website-audit");
  const isCallLaraPage = pathname === CALL_LARA_PATH;
  const showVoiceAssistant = !isAuditPage && !isCallLaraPage;

  return (
    <MobileMenuProvider>
      <VapiSimliProvider>
        <SectionScrollAnimator />
        <SiteSecurity />
        <GoogleTranslatePreload />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LeftSideRail />
        <SideRail />
        <BackToTop />
        <CursorFollower />
        {showVoiceAssistant ? (
          <ContactVoiceFloatingAvatar
            src={contactVoiceWidgetAvatar.src}
            alt={contactVoiceWidgetAvatar.alt}
            href={CALL_LARA_PATH}
          />
        ) : null}
        {showVoiceAssistant ? <VapiVoiceWidget /> : null}
      </VapiSimliProvider>
    </MobileMenuProvider>
  );
}

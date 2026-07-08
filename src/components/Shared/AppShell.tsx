"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ContactVoiceFloatingAvatar } from "@/components/Contact/ContactVoiceFloatingAvatar/ContactVoiceFloatingAvatar";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
import { VapiSimliProvider } from "@/context/VapiSimliContext";
import { contactVoiceWidgetAvatar } from "@/data/contact";
import { Footer } from "@/components/Footer/Footer";
import { GoogleTranslatePreload } from "@/components/Header/GoogleTranslatePreload";
import { Header } from "@/components/Header/Header";
import { BackToTop } from "@/components/Shared/BackToTop/BackToTop";
import { LeftSideRail } from "@/components/Shared/LeftSideRail/LeftSideRail";
import { SideRail } from "@/components/Shared/SideRail/SideRail";
import { SectionScrollAnimator } from "@/components/Shared/SectionScrollAnimator";
import { SiteSecurity } from "@/components/Shared/SiteSecurity";
import { VapiVoiceWidget } from "@/components/Vapi/VapiVoiceWidget";

const CALL_LARA_PATH = "/talking-website/call-lara";

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

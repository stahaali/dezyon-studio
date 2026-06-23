"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
import { GoogleAnalytics } from "@/components/Seo/GoogleAnalytics";
import { MicrosoftClarity } from "@/components/Seo/MicrosoftClarity";
import { Footer } from "@/components/Footer/Footer";
import { GoogleTranslatePreload } from "@/components/Header/GoogleTranslatePreload";
import { Header } from "@/components/Header/Header";
import { BackToTop } from "@/components/Shared/BackToTop/BackToTop";
import { LeftSideRail } from "@/components/Shared/LeftSideRail/LeftSideRail";
import { Preloader } from "@/components/Shared/Preloader/Preloader";
import { SideRail } from "@/components/Shared/SideRail/SideRail";
import { SiteSecurity } from "@/components/Shared/SiteSecurity";
import { SmoothScroll } from "@/components/Shared/SmoothScroll/SmoothScroll";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuditPage = pathname.startsWith("/website-audit");

  return (
    <MobileMenuProvider>
      <SmoothScroll enabled={!isAuditPage}>
        <Preloader key={pathname} />
        <SiteSecurity />
        {!isAuditPage ? <GoogleTranslatePreload /> : null}
        {!isAuditPage ? <Header /> : null}
        <main className="flex-1">{children}</main>
        {!isAuditPage ? (
          <Footer />
        ) : (
          <>
            <GoogleAnalytics />
            <MicrosoftClarity />
          </>
        )}
        {!isAuditPage ? <LeftSideRail /> : null}
        {!isAuditPage ? <SideRail /> : null}
        {!isAuditPage ? <BackToTop /> : null}
      </SmoothScroll>
    </MobileMenuProvider>
  );
}

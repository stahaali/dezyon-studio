"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
import { Footer } from "@/components/Footer/Footer";
import { GoogleTranslatePreload } from "@/components/Header/GoogleTranslatePreload";
import { Header } from "@/components/Header/Header";
import { BackToTop } from "@/components/Shared/BackToTop/BackToTop";
import { LeftSideRail } from "@/components/Shared/LeftSideRail/LeftSideRail";
import { SideRail } from "@/components/Shared/SideRail/SideRail";
import { SiteSecurity } from "@/components/Shared/SiteSecurity";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuditPage = pathname.startsWith("/website-audit");

  return (
    <MobileMenuProvider>
      <SiteSecurity />
      <GoogleTranslatePreload />
      <Header />
      <main className="flex-1">{children}</main>
      {!isAuditPage ? <Footer /> : null}
      {!isAuditPage ? <LeftSideRail /> : null}
      {!isAuditPage ? <SideRail /> : null}
      {!isAuditPage ? <BackToTop /> : null}
    </MobileMenuProvider>
  );
}

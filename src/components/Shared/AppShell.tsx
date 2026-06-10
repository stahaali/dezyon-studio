"use client";

import type { ReactNode } from "react";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
import { Footer } from "@/components/Footer/Footer";
import { GoogleTranslatePreload } from "@/components/Header/GoogleTranslatePreload";
import { Header } from "@/components/Header/Header";
import { LeftSideRail } from "@/components/Shared/LeftSideRail/LeftSideRail";
import { SideRail } from "@/components/Shared/SideRail/SideRail";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <MobileMenuProvider>
      <GoogleTranslatePreload />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <LeftSideRail />
      <SideRail />
    </MobileMenuProvider>
  );
}

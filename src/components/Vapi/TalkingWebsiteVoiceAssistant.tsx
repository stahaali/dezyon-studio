"use client";

import { VapiVoiceWidget } from "@/components/Vapi/VapiVoiceWidget";
import { VapiSimliProvider } from "@/context/VapiSimliContext";
import type { ReactNode } from "react";

export function TalkingWebsiteVoiceAssistant({ children }: { children: ReactNode }) {
  return (
    <VapiSimliProvider>
      {children}
      <VapiVoiceWidget />
    </VapiSimliProvider>
  );
}

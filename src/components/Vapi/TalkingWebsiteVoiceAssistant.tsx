"use client";

import { VapiVoiceWidget } from "@/components/Vapi/VapiVoiceWidget";
import { ContactVoiceFloatingAvatar } from "@/components/Contact/ContactVoiceFloatingAvatar/ContactVoiceFloatingAvatar";
import { VapiSimliProvider } from "@/context/VapiSimliContext";
import type { ReactNode } from "react";

type TalkingWebsiteVoiceAssistantProps = {
  children: ReactNode;
  showContactAvatar?: boolean;
  avatarSrc?: string;
  avatarAlt?: string;
  avatarHref?: string;
};

export function TalkingWebsiteVoiceAssistant({
  children,
  showContactAvatar = false,
  avatarSrc,
  avatarAlt,
  avatarHref,
}: TalkingWebsiteVoiceAssistantProps) {
  return (
    <VapiSimliProvider>
      {children}
      {showContactAvatar && avatarSrc ? (
        <ContactVoiceFloatingAvatar
          src={avatarSrc}
          alt={avatarAlt ?? ""}
          href={avatarHref}
        />
      ) : null}
      <VapiVoiceWidget />
    </VapiSimliProvider>
  );
}

"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Shared/Button";
import { useVapiSimli } from "@/context/VapiSimliContext";

type TalkingWebsiteHeroCtaProps = {
  label: string;
};

export function TalkingWebsiteHeroCta({ label }: TalkingWebsiteHeroCtaProps) {
  const { openWidget, startCall } = useVapiSimli();

  const handleClick = () => {
    openWidget();
    void startCall();
  };

  return (
    <Button type="button" size="lg" onClick={handleClick}>
      {label}
      <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
    </Button>
  );
}

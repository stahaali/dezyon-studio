"use client";

import { Phone } from "lucide-react";
import { talkingWebsiteHero } from "@/data/talking-website";
import { useVapiSimli } from "@/context/VapiSimliContext";
import { Button } from "@/components/Shared/Button";
import heroStyles from "@/components/VideoEditing/VideoEditing.module.css";
import styles from "./TalkingWebsiteHeroCta.module.css";

export function TalkingWebsiteHeroCta() {
  const { warmLaraSession } = useVapiSimli();
  const { label, href } = talkingWebsiteHero.ctas.primary;

  const handleWarmup = () => {
    warmLaraSession();
  };

  return (
    <Button
      href={href}
      size="lg"
      className={heroStyles.heroCtaButton}
      onMouseEnter={handleWarmup}
      onFocus={handleWarmup}
    >
      <Phone
        size={18}
        strokeWidth={2}
        aria-hidden="true"
        className={styles.phoneIcon}
      />
      {label}
    </Button>
  );
}

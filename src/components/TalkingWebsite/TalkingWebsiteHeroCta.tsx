import { Phone } from "lucide-react";
import { talkingWebsiteHero } from "@/data/talking-website";
import { Button } from "@/components/Shared/Button";
import heroStyles from "@/components/VideoEditing/VideoEditing.module.css";
import styles from "./TalkingWebsiteHeroCta.module.css";

export function TalkingWebsiteHeroCta() {
  const { label, href } = talkingWebsiteHero.ctas.primary;

  return (
    <Button href={href} size="lg" className={heroStyles.heroCtaButton}>
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

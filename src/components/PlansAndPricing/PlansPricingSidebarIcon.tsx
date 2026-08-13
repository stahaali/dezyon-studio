import {
  Bot,
  Clapperboard,
  Globe,
  MessageCircle,
  Search,
  Sparkles,
  Video,
} from "lucide-react";
import type { PlansPricingCategoryId } from "@/data/plans-and-pricing";
import styles from "./PlansPricingSidebarIcon.module.css";

type PlansPricingSidebarIconProps = {
  id: PlansPricingCategoryId;
};

export function PlansPricingSidebarIcon({ id }: PlansPricingSidebarIconProps) {
  switch (id) {
    case "custom-website":
      return (
        <>
          <Globe size={16} strokeWidth={2} aria-hidden="true" />
          <Sparkles className={styles.sparkle} size={8} strokeWidth={2} aria-hidden="true" />
        </>
      );
    case "talking-website":
      return (
        <>
          <MessageCircle size={16} strokeWidth={2} aria-hidden="true" />
          <Sparkles className={styles.sparkle} size={8} strokeWidth={2} aria-hidden="true" />
        </>
      );
    case "ai-video-creation":
      return (
        <>
          <Video size={16} strokeWidth={2} aria-hidden="true" />
          <Sparkles className={styles.sparkle} size={8} strokeWidth={2} aria-hidden="true" />
        </>
      );
    case "video-editing":
      return (
        <>
          <Clapperboard size={16} strokeWidth={2} aria-hidden="true" />
          <Sparkles className={styles.sparkle} size={8} strokeWidth={2} aria-hidden="true" />
        </>
      );
    case "seo-aeo":
      return (
        <>
          <Search size={16} strokeWidth={2} aria-hidden="true" />
          <Sparkles className={styles.sparkle} size={8} strokeWidth={2} aria-hidden="true" />
        </>
      );
    default:
      return <Bot size={17} strokeWidth={2} aria-hidden="true" />;
  }
}

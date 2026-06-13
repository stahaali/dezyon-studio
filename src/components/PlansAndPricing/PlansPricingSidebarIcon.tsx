import {
  BarChart3,
  Bot,
  Headphones,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import type { PlansPricingCategoryId } from "@/data/plans-and-pricing";
import styles from "./PlansPricingSidebarIcon.module.css";

type PlansPricingSidebarIconProps = {
  id: PlansPricingCategoryId;
};

export function PlansPricingSidebarIcon({ id }: PlansPricingSidebarIconProps) {
  switch (id) {
    case "onboard":
      return (
        <>
          <Sparkles size={16} strokeWidth={2} aria-hidden="true" />
          <Sparkles className={styles.sparkle} size={8} strokeWidth={2} aria-hidden="true" />
        </>
      );
    case "talking-websites":
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
    case "ai-marketing":
      return (
        <>
          <BarChart3 size={16} strokeWidth={2} aria-hidden="true" />
          <Sparkles className={styles.sparkle} size={8} strokeWidth={2} aria-hidden="true" />
        </>
      );
    case "business-phone":
      return (
        <>
          <Phone size={16} strokeWidth={2} aria-hidden="true" />
          <Sparkles className={styles.sparkle} size={8} strokeWidth={2} aria-hidden="true" />
        </>
      );
    case "ai-receptionist":
      return (
        <>
          <span className={styles.iconLabel}>AIR</span>
          <Sparkles className={styles.sparkle} size={9} strokeWidth={2} aria-hidden="true" />
        </>
      );
    case "contact-center":
      return <Headphones size={16} strokeWidth={2} aria-hidden="true" />;
    case "video":
      return (
        <>
          <Video size={16} strokeWidth={2} aria-hidden="true" />
          <Sparkles className={styles.sparkle} size={8} strokeWidth={2} aria-hidden="true" />
        </>
      );
    case "events":
      return <Users size={16} strokeWidth={2} aria-hidden="true" />;
    case "conversation-intelligence":
      return (
        <>
          <span className={styles.iconLabel}>ACE</span>
          <Sparkles className={styles.sparkle} size={9} strokeWidth={2} aria-hidden="true" />
        </>
      );
    default:
      return <Bot size={17} strokeWidth={2} aria-hidden="true" />;
  }
}

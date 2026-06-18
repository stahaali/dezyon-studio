import {
  Clapperboard,
  LayoutTemplate,
  Megaphone,
  MessageCircle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import styles from "./ServiceIcon.module.css";

type ServiceIconId =
  | "talking-websites"
  | "custom-website-development"
  | "ai-video-creation"
  | "ai-marketing"
  | "ai-influencers";

type ServiceIconTone = "talking" | "website" | "video" | "marketing" | "influencers";

const serviceIconMap: Record<
  ServiceIconId,
  { Icon: LucideIcon; tone: ServiceIconTone }
> = {
  "talking-websites": { Icon: MessageCircle, tone: "talking" },
  "custom-website-development": { Icon: LayoutTemplate, tone: "website" },
  "ai-video-creation": { Icon: Clapperboard, tone: "video" },
  "ai-marketing": { Icon: Megaphone, tone: "marketing" },
  "ai-influencers": { Icon: Sparkles, tone: "influencers" },
};

type ServiceIconProps = {
  serviceId: string;
};

export function ServiceIcon({ serviceId }: ServiceIconProps) {
  const config = serviceIconMap[serviceId as ServiceIconId];

  if (!config) {
    return null;
  }

  const { Icon, tone } = config;

  return (
    <span className={`${styles.iconWrap} ${styles[tone]}`}>
      <Icon size={28} strokeWidth={1.85} aria-hidden="true" />
    </span>
  );
}

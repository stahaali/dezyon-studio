import {
  AtSign,
  Briefcase,
  Camera,
  Clapperboard,
  Film,
  Megaphone,
  Search,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import styles from "./MarketingWhyChooseIcon.module.css";

type MarketingWhyChooseIconId =
  | "instagram"
  | "facebook"
  | "tiktok"
  | "linkedin"
  | "twitter"
  | "google-ads"
  | "video-editing"
  | "video-ads";

const iconMap: Record<MarketingWhyChooseIconId, LucideIcon> = {
  instagram: Camera,
  facebook: Users,
  tiktok: Clapperboard,
  linkedin: Briefcase,
  twitter: AtSign,
  "google-ads": Search,
  "video-editing": Film,
  "video-ads": Video,
};

type MarketingWhyChooseIconProps = {
  iconId: MarketingWhyChooseIconId;
  className?: string;
};

export function MarketingWhyChooseIcon({
  iconId,
  className = "",
}: MarketingWhyChooseIconProps) {
  const Icon = iconMap[iconId];

  return (
    <span className={`${styles.iconWrap} ${className}`.trim()} aria-hidden="true">
      <Icon size={30} strokeWidth={1.6} color="currentColor" />
    </span>
  );
}

import type { ReactNode } from "react";
import { Clapperboard, Megaphone } from "lucide-react";
import { socialIcons } from "@/components/Shared/SocialIcon";
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

const googleAdsIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
  </svg>
);

const iconMap: Record<MarketingWhyChooseIconId, ReactNode> = {
  instagram: socialIcons.Instagram,
  facebook: socialIcons.Facebook,
  tiktok: socialIcons.TikTok,
  linkedin: socialIcons.LinkedIn,
  twitter: socialIcons.Twitter,
  "google-ads": googleAdsIcon,
  "video-editing": <Clapperboard strokeWidth={1.6} aria-hidden="true" />,
  "video-ads": <Megaphone strokeWidth={1.6} aria-hidden="true" />,
};

type MarketingWhyChooseIconProps = {
  iconId: MarketingWhyChooseIconId;
  className?: string;
};

export function MarketingWhyChooseIcon({
  iconId,
  className = "",
}: MarketingWhyChooseIconProps) {
  return (
    <span className={`${styles.iconWrap} ${className}`.trim()} aria-hidden="true">
      {iconMap[iconId]}
    </span>
  );
}

import {
  Megaphone,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import styles from "./MarketingVideoReelsIcon.module.css";

type MarketingVideoReelsIconId =
  | "megaphone"
  | "users"
  | "sparkles"
  | "shield"
  | "mouse-pointer"
  | "trending-up";

const iconMap: Record<MarketingVideoReelsIconId, LucideIcon> = {
  megaphone: Megaphone,
  users: Users,
  sparkles: Sparkles,
  shield: ShieldCheck,
  "mouse-pointer": MousePointerClick,
  "trending-up": TrendingUp,
};

type MarketingVideoReelsIconProps = {
  iconId: MarketingVideoReelsIconId;
  className?: string;
  size?: "md" | "sm";
};

export function MarketingVideoReelsIcon({
  iconId,
  className = "",
  size = "md",
}: MarketingVideoReelsIconProps) {
  const Icon = iconMap[iconId];
  const isSmall = size === "sm";

  return (
    <span
      className={`${styles.iconWrap} ${isSmall ? styles.iconWrapSm : ""} ${className}`.trim()}
      aria-hidden="true"
    >
      <Icon
        size={isSmall ? 16 : 42}
        strokeWidth={isSmall ? 2 : 1.5}
        color="currentColor"
      />
    </span>
  );
}

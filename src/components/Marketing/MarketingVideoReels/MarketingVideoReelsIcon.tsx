import {
  Award,
  Eye,
  Globe,
  Magnet,
  Package,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import styles from "./MarketingVideoReelsIcon.module.css";

type MarketingVideoReelsIconId =
  | "eye"
  | "magnet"
  | "package"
  | "award"
  | "globe"
  | "shopping-cart";

const iconMap: Record<MarketingVideoReelsIconId, LucideIcon> = {
  eye: Eye,
  magnet: Magnet,
  package: Package,
  award: Award,
  globe: Globe,
  "shopping-cart": ShoppingCart,
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
        size={isSmall ? 16 : 28}
        strokeWidth={isSmall ? 2 : 1.5}
        color="currentColor"
      />
    </span>
  );
}

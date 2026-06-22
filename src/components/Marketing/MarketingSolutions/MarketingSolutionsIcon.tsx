import {
  Clapperboard,
  Megaphone,
  Palette,
  PenLine,
  Share2,
  Users,
  type LucideIcon,
} from "lucide-react";
import styles from "./MarketingSolutionsIcon.module.css";

type MarketingSolutionsIconId =
  | "reels"
  | "design"
  | "copy"
  | "social"
  | "ads"
  | "leads";

type MarketingSolutionsTone =
  | "reels"
  | "design"
  | "copy"
  | "social"
  | "ads"
  | "leads";

const iconMap: Record<
  MarketingSolutionsIconId,
  { Icon: LucideIcon; tone: MarketingSolutionsTone }
> = {
  reels: { Icon: Clapperboard, tone: "reels" },
  design: { Icon: Palette, tone: "design" },
  copy: { Icon: PenLine, tone: "copy" },
  social: { Icon: Share2, tone: "social" },
  ads: { Icon: Megaphone, tone: "ads" },
  leads: { Icon: Users, tone: "leads" },
};

type MarketingSolutionsIconProps = {
  iconId: MarketingSolutionsIconId;
};

export function MarketingSolutionsIcon({ iconId }: MarketingSolutionsIconProps) {
  const { Icon, tone } = iconMap[iconId];

  return (
    <span className={`${styles.iconWrap} ${styles[tone]}`}>
      <Icon size={24} strokeWidth={1.9} aria-hidden="true" />
    </span>
  );
}

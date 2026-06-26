import {
  Clapperboard,
  Megaphone,
  Palette,
  PenLine,
  Share2,
  Users,
  type LucideIcon,
} from "lucide-react";

type MarketingSolutionsIconId =
  | "reels"
  | "design"
  | "copy"
  | "social"
  | "ads"
  | "leads";

const iconMap: Record<MarketingSolutionsIconId, LucideIcon> = {
  reels: Clapperboard,
  design: Palette,
  copy: PenLine,
  social: Share2,
  ads: Megaphone,
  leads: Users,
};

type MarketingSolutionsIconProps = {
  iconId: MarketingSolutionsIconId;
};

export function MarketingSolutionsIcon({ iconId }: MarketingSolutionsIconProps) {
  const Icon = iconMap[iconId];

  return <Icon size={28} strokeWidth={1.85} color="#000200" aria-hidden="true" />;
}

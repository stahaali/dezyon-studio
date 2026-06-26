import {
  BarChart3,
  CalendarDays,
  Clapperboard,
  Palette,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import styles from "./MarketingWhyChooseIcon.module.css";

type MarketingWhyChooseIconId =
  | "team"
  | "ai"
  | "reels"
  | "graphics"
  | "social"
  | "leads"
  | "growth"
  | "results";

const iconMap: Record<MarketingWhyChooseIconId, LucideIcon> = {
  team: Users,
  ai: Sparkles,
  reels: Clapperboard,
  graphics: Palette,
  social: CalendarDays,
  leads: Target,
  growth: TrendingUp,
  results: BarChart3,
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

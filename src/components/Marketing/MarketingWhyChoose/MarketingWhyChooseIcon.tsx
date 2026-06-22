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

type MarketingWhyChooseTone =
  | "team"
  | "ai"
  | "reels"
  | "graphics"
  | "social"
  | "leads"
  | "growth"
  | "results";

const iconMap: Record<
  MarketingWhyChooseIconId,
  { Icon: LucideIcon; tone: MarketingWhyChooseTone }
> = {
  team: { Icon: Users, tone: "team" },
  ai: { Icon: Sparkles, tone: "ai" },
  reels: { Icon: Clapperboard, tone: "reels" },
  graphics: { Icon: Palette, tone: "graphics" },
  social: { Icon: CalendarDays, tone: "social" },
  leads: { Icon: Target, tone: "leads" },
  growth: { Icon: TrendingUp, tone: "growth" },
  results: { Icon: BarChart3, tone: "results" },
};

type MarketingWhyChooseIconProps = {
  iconId: MarketingWhyChooseIconId;
};

export function MarketingWhyChooseIcon({ iconId }: MarketingWhyChooseIconProps) {
  const { Icon, tone } = iconMap[iconId];

  return (
    <span className={`${styles.iconWrap} ${styles[tone]}`}>
      <Icon size={26} strokeWidth={1.85} aria-hidden="true" />
    </span>
  );
}

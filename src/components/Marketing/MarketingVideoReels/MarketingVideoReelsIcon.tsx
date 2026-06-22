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

type MarketingVideoReelsTone =
  | "megaphone"
  | "users"
  | "sparkles"
  | "shield"
  | "pointer"
  | "trending";

const iconMap: Record<
  MarketingVideoReelsIconId,
  { Icon: LucideIcon; tone: MarketingVideoReelsTone }
> = {
  megaphone: { Icon: Megaphone, tone: "megaphone" },
  users: { Icon: Users, tone: "users" },
  sparkles: { Icon: Sparkles, tone: "sparkles" },
  shield: { Icon: ShieldCheck, tone: "shield" },
  "mouse-pointer": { Icon: MousePointerClick, tone: "pointer" },
  "trending-up": { Icon: TrendingUp, tone: "trending" },
};

type MarketingVideoReelsIconProps = {
  iconId: MarketingVideoReelsIconId;
};

export function MarketingVideoReelsIcon({ iconId }: MarketingVideoReelsIconProps) {
  const { Icon, tone } = iconMap[iconId];

  return (
    <span className={`${styles.iconWrap} ${styles[tone]}`}>
      <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
    </span>
  );
}

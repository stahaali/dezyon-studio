import {
  talkingWebsiteFeatureTones,
  TalkingWebsiteGradientIcon,
} from "@/components/TalkingWebsite/TalkingWebsiteGradientIcon";
import {
  Calendar,
  Clock,
  Languages,
  MessageCircle,
  Mic,
  Plug,
  Users,
} from "lucide-react";

const FEATURE_ICONS = [Mic, Calendar, Users, MessageCircle, Languages, Plug, Clock] as const;

type TalkingWebsiteFeatureIconProps = {
  index: number;
};

export function TalkingWebsiteFeatureIcon({ index }: TalkingWebsiteFeatureIconProps) {
  const Icon = FEATURE_ICONS[index];
  const tone = talkingWebsiteFeatureTones[index];

  if (!Icon || !tone) {
    return null;
  }

  return <TalkingWebsiteGradientIcon icon={Icon} tone={tone} size="feature" />;
}

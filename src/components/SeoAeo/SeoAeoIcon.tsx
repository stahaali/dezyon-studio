import {
  Bot,
  Building2,
  ChartColumn,
  ChartLine,
  Code2,
  DollarSign,
  FileText,
  Gauge,
  Link2,
  ListChecks,
  MapPin,
  MousePointerClick,
  Network,
  PenTool,
  Quote,
  Search,
  Sparkles,
  Target,
  Timer,
  TrendingDown,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  TalkingWebsiteGradientIcon,
  type GradientTone,
} from "@/components/TalkingWebsite/TalkingWebsiteGradientIcon";

const ICONS: Record<string, LucideIcon> = {
  Bot,
  Building2,
  ChartColumn,
  ChartLine,
  Code2,
  DollarSign,
  FileText,
  Gauge,
  Link2,
  ListChecks,
  MapPin,
  MousePointerClick,
  Network,
  PenTool,
  Quote,
  Search,
  Sparkles,
  Target,
  Timer,
  TrendingDown,
  Users,
  Wrench,
};

export type SeoAeoIconName = keyof typeof ICONS;

const TONE_CYCLE: GradientTone[] = [
  "voice",
  "schedule",
  "leads",
  "notify",
  "language",
  "crm",
  "availability",
  "impact",
  "learn",
  "fun",
  "empathy",
];

export function seoAeoTone(index: number): GradientTone {
  return TONE_CYCLE[index % TONE_CYCLE.length];
}

type SeoAeoIconProps = {
  name: SeoAeoIconName;
  tone: GradientTone;
};

export function SeoAeoIcon({ name, tone }: SeoAeoIconProps) {
  return <TalkingWebsiteGradientIcon icon={ICONS[name]} tone={tone} size="feature" />;
}

export type AiVideoCreationPlan = {
  id: string;
  name: string;
  bestFor: string;
  features: readonly string[];
  deliveryTime?: string;
  priceRange?: string;
  cta: { label: string; href: string };
  featured?: boolean;
};

export const aiVideoCreationPlans: AiVideoCreationPlan[] = [
  {
    id: "starter",
    name: "Business Starter",
    bestFor: "Small businesses starting video marketing",
    features: [
      "AI Video Creation (Up to 10 videos/month)",
      "Basic Script-to-Video Conversion",
      "Stock Footage + AI Voiceover",
      "1 Video Style Template",
      "Basic Branding (Logo + Colors)",
      "Social Media Ready Formats (Reels/Shorts)",
      "1 Revision per video",
      "Basic Support",
    ],
    deliveryTime: "3–5 days setup",
    cta: { label: "Get Started", href: "/contact" },
    featured: false,
  },
  {
    id: "growth",
    name: "Business Growth",
    bestFor: "Growing brands focusing on consistent content",
    features: [
      "AI Video Creation (Up to 30–50 videos/month)",
      "Advanced Script + AI Content Writing",
      "Premium AI Voiceovers (Multiple tones)",
      "Custom Video Templates (Brand-based)",
      "Auto Subtitles + Captions",
      "Hooks + Viral Style Editing",
      "Stock + AI Hybrid Scenes",
      "Content Strategy Support",
      "Analytics Guidance (Engagement focused)",
      "3 Revisions per video",
    ],
    deliveryTime: "5–10 days setup",
    cta: { label: "Get Started", href: "/contact" },
    featured: true,
  },
  {
    id: "enterprise",
    name: "Business Enterprise",
    bestFor: "Agencies, franchises, high-volume content brands",
    features: [
      "Unlimited AI Video Production (Scalable system)",
      "Fully Custom Video Automation Pipeline",
      "Multi-brand Support (Franchise System)",
      "Advanced AI Script Engine (Niche trained)",
      "Premium Human-Like AI Voice Cloning",
      "API Integration (Content Scheduling Tools)",
      "Bulk Video Generation System",
      "Dedicated Video Strategist",
      "Priority Production Queue",
      "Enterprise Analytics Dashboard",
      "24/7 Priority Support",
    ],
    deliveryTime: "10–20 days setup",
    cta: { label: "Get Started", href: "/contact" },
    featured: false,
  },
];

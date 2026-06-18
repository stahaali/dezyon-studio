export type VideoEditingPlan = {
  id: string;
  name: string;
  bestFor: string;
  features: readonly string[];
  turnaroundTime?: string;
  priceRange?: string;
  cta: { label: string; href: string };
  featured?: boolean;
};

export const videoEditingPlans: VideoEditingPlan[] = [
  {
    id: "starter",
    name: "Business Starter",
    bestFor: "Small businesses starting content creation",
    features: [
      "Basic Video Editing (Up to 10 videos/month)",
      "Cuts, Transitions & Clean Edits",
      "Color Correction (Basic)",
      "Text + Simple Motion Graphics",
      "Social Media Formats (Reels, Shorts, Posts)",
      "Stock Footage Support (Limited)",
      "1 Revision per video",
      "Basic Brand Integration",
    ],
    turnaroundTime: "2–3 days per video",
    cta: { label: "Get Started", href: "/contact" },
    featured: false,
  },
  {
    id: "growth",
    name: "Business Growth",
    bestFor: "Brands needing consistent high-quality content",
    features: [
      "Advanced Video Editing (30–50 videos/month)",
      "Professional Motion Graphics",
      "Advanced Transitions + Effects",
      "Color Grading (Cinematic Level)",
      "Audio Enhancement + Sound Design",
      "Subtitles + Captions (Engagement Optimized)",
      "Thumbnail Design (Optional Add-on)",
      "Brand Style Editing System",
      "Content Optimization for Social Media",
      "3 Revisions per video",
    ],
    turnaroundTime: "24–48 hours per video",
    cta: { label: "Get Started", href: "/contact" },
    featured: true,
  },
  {
    id: "enterprise",
    name: "Business Enterprise",
    bestFor: "Agencies, franchises, high-volume content brands",
    features: [
      "High-End Video Editing (Scalable workflow)",
      "Cinematic Editing + Advanced VFX",
      "Full Motion Graphics Production",
      "Brand Consistency System (Multi-platform)",
      "Dedicated Editing Team",
      "Priority Delivery Queue",
      "Bulk Video Processing System",
      "Advanced Color Grading Suite",
      "Sound Design + Music Licensing Support",
      "Dedicated Project Manager",
      "24/7 Priority Support",
    ],
    turnaroundTime: "Priority / Same-day options available",
    cta: { label: "Get Started", href: "/contact" },
    featured: false,
  },
];

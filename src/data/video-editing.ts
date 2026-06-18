export const videoEditingHero = {
  badge: "Editing Service",
  titlePrefix: "AI-Powered Content Creation",
  titleHighlight: "& Influencer Branding",
  subtitle: "We Don't Just Edit Videos — We Build AI Brands",
  description: [
    "We help businesses, startups, coaches, agencies, and e-commerce brands grow with AI-generated content, AI influencers, video editing, voiceovers, and social media branding.",
    "From creating a complete AI personality to producing viral content, we handle everything your brand needs to stand out online.",
  ],
  cta: { label: "Get Started", href: "/contact" },
} as const;

export const videoEditingHeroVisual = {
  poster: "/assets/img/video-editing/hero-banner-poster.webp",
  video: "/assets/video/video-editing/hero-banner.webm",
  columnVideo: "/assets/img/video-editing/video-editing.mp4",
} as const;

export const videoEditingServicesIntro = {
  eyebrow: "What We Offer",
  titlePrefix: "Our AI Content ",
  titleHighlight: "Creation Services",
  description:
    "End-to-end AI content production for brands that want cinematic quality, viral reach, and consistent growth — without the overhead of a full in-house team.",
} as const;

export const videoEditingServices = [
  {
    id: "ai-influencer",
    icon: "sparkles",
    title: "AI Influencer Creation",
    intro:
      "Launch your own AI Influencer that represents your brand 24/7.",
    sections: [
      {
        label: "What We Create",
        items: [
          "AI Influencer Design",
          "AI Character Development",
          "Brand Personality Creation",
          "AI Avatar Videos",
        ],
      },
      {
        label: "Perfect for",
        items: [
          "Personal Brands",
          "E-commerce Stores",
          "Agencies",
        ],
      },
    ],
  },
  {
    id: "video-editing",
    icon: "clapperboard",
    title: "Professional Video Editing",
    intro: "High-performance editing for:",
    sections: [
      {
        label: "Formats",
        listColumns: 2,
        items: [
          "YouTube Videos",
          "Gaming Content",
          "YouTube Shorts",
          "Instagram Reels",
          "TikTok Videos",
          "Corporate Content",
        ],
      },
    ],
  },
  {
    id: "voiceovers",
    icon: "mic",
    title: "AI Voiceovers",
    intro: "Human-like voiceovers powered by ElevenLabs and advanced AI voice tools.",
    sections: [
      {
        label: "Services",
        items: [
          "AI Voice Cloning",
          "Multi-Language Voice Generation",
          "Commercial Voiceovers",
        ],
      },
      {
        label: "Benefits",
        items: [
          "Natural Human Voices",
          "Brand Voice Consistency",
          "Fast Production",
        ],
      },
    ],
  },
  {
    id: "ai-video",
    icon: "video",
    title: "AI Video Generation",
    intro:
      "Create studio-quality videos without expensive production teams using Runway, Higgsfield, Pika, Luma AI, and Kling AI.",
    sections: [
      {
        label: "We Create",
        listColumns: 2,
        items: [
          "AI Commercials",
          "Product Videos",
          "AI UGC Content",
          "Social Media Ads",
        ],
      },
    ],
  },
  {
    id: "ai-images",
    icon: "image",
    title: "AI Image Generation & Branding",
    intro:
      "Create premium brand visuals using Midjourney, Adobe Firefly, and Ideogram.",
    sections: [
      {
        label: "Deliverables",
        listColumns: 2,
        items: [
          "Brand Images",
          "Product Mockups",
          "Social Media Creatives",
          "Advertising Visuals",
        ],
      },
    ],
  },
  {
    id: "social-media",
    icon: "share",
    title: "Social Media Content Production",
    intro: "We create content optimized for Instagram, TikTok, YouTube, Facebook, and LinkedIn.",
    sections: [
      {
        label: "Content Includes",
        listColumns: 2,
        items: [
          "Reels",
          "Shorts",
          "Viral Clips",
          "Product Promotions",
        ],
      },
    ],
  },
] as const;

export const videoEditingToolsIntro = {
  titlePrefix: "AI Tools ",
  titleHighlight: "We Use",
  description:
    "Industry-leading AI and production tools we use to deliver cinematic quality, faster turnaround, and scalable content output.",
} as const;

export const videoEditingToolGroups = [
  {
    title: "Voice & Audio",
    tools: [
      { name: "ElevenLabs", href: "https://elevenlabs.io" },
      { name: "Adobe Podcast", href: "https://podcast.adobe.com" },
    ],
  },
  {
    title: "AI Video",
    tools: [
      { name: "Runway", href: "https://runwayml.com" },
      { name: "Higgsfield AI", href: "https://higgsfield.ai" },
      { name: "Pika", href: "https://pika.art" },
      { name: "Luma AI", href: "https://lumalabs.ai" },
      { name: "Kling AI", href: "https://klingai.com" },
    ],
  },
  {
    title: "Editing & Motion Graphics",
    tools: [
      {
        name: "Adobe Premiere Pro",
        href: "https://www.adobe.com/products/premiere.html",
      },
      {
        name: "Adobe After Effects",
        href: "https://www.adobe.com/products/aftereffects.html",
      },
      {
        name: "DaVinci Resolve",
        href: "https://www.blackmagicdesign.com/products/davinciresolve",
      },
      { name: "CapCut", href: "https://www.capcut.com" },
    ],
  },
  {
    title: "Design & AI Images",
    tools: [
      { name: "Midjourney", href: "https://www.midjourney.com" },
      { name: "Adobe Firefly", href: "https://firefly.adobe.com" },
      { name: "Ideogram", href: "https://ideogram.ai" },
    ],
  },
] as const;

export const videoEditingBenefitsIntro = {
  eyebrow: "Why Us",
  titlePrefix: "Why Brands ",
  titleHighlight: "Choose Us",
} as const;

export const videoEditingBenefits = [
  "AI Influencer Creation",
  "Complete Brand Building",
  "AI Voiceovers",
  "AI Commercial Production",
  "Professional Video Editing",
  "Social Media Growth Content",
  "Fast Turnaround Times",
  "High-Converting Ad Creatives",
  "Scalable Content Production",
] as const;

export const videoEditingFinalCta = {
  eyebrow: "Ready to Create?",
  title: "Get started with AI Content",
  screenImage: "/assets/img/video-editing/1.jpg",
  primaryButton: { label: "Get Started", href: "/contact" },
} as const;

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
    name: "Content Starter",
    bestFor: "Brands starting with short-form and edited content",
    features: [
      "Professional Video Editing (up to 8 videos/month)",
      "YouTube Shorts, Reels & TikTok formats",
      "Basic AI Voiceovers",
      "Captions & Subtitles",
      "Social Media Ready Exports",
      "1 Revision per video",
      "Basic Branding (Logo + Colors)",
    ],
    turnaroundTime: "2–4 days per video",
    priceRange: "Custom quote",
    cta: { label: "Get Started", href: "/contact" },
    featured: false,
  },
  {
    id: "growth",
    name: "AI Brand Builder",
    bestFor: "Coaches, agencies & e-commerce scaling with AI content",
    features: [
      "AI Influencer Creation & Character Development",
      "AI Video Generation (commercials & UGC-style)",
      "Professional Editing (up to 20 videos/month)",
      "AI Voice Cloning & Multi-Language Voiceovers",
      "AI Image & Brand Visual Production",
      "Social Media Content Strategy",
      "Viral Hooks & Short-Form Optimization",
      "3 Revisions per deliverable",
    ],
    turnaroundTime: "5–10 days setup, 3–5 days per video",
    priceRange: "Custom quote",
    cta: { label: "Get Started", href: "/contact" },
    featured: true,
  },
  {
    id: "enterprise",
    name: "Enterprise Content",
    bestFor: "High-volume brands needing scalable AI content systems",
    features: [
      "Full AI Influencer & Digital Ambassador Program",
      "Unlimited Scalable Content Production",
      "AI Commercial & Ad Creative Production",
      "Dedicated Content Strategist",
      "Multi-Platform Social Media Production",
      "Premium AI Tools Stack (Runway, ElevenLabs & more)",
      "Fast Turnaround Priority Queue",
      "High-Converting Ad Creative Optimization",
    ],
    turnaroundTime: "Custom SLA",
    priceRange: "Custom quote",
    cta: { label: "Get Started", href: "/contact" },
    featured: false,
  },
];

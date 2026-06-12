export const homePortfolioSection = {
  titlePrefix: "Our AI ",
  titleHighlight: "Portfolio",
  titleSuffix: "",
  description:
    "Explore how we help brands grow with AI-powered video, voice-driven websites, and intelligent marketing campaigns.",
  cta: { label: "View Full Portfolio", href: "/portfolio" },
} as const;

const portfolioImages = {
  aiVideo: "/assets/img/features/feature-image-061.jpg",
  talking: "/assets/img/features/feature-image-05.jpg",
  thumbnail: "/assets/video/thumbnail1.jpg",
  mobile1: "/assets/img/web-app/mobile-app-img1.jpg",
  mobile2: "/assets/img/web-app/mobile-app-img2.jpg",
  development: "/assets/img/home-capabilities/development-bg.jpg",
  seo: "/assets/img/home-capabilities/seo-bg.jpg",
  webops: "/assets/img/home-capabilities/webops-bg.jpg",
} as const;

export const homePortfolioTabs = [
  {
    id: "ai-video-creation",
    label: "AI Video Creation",
    title: "AI Video Creation",
    description:
      "Professional AI-generated videos for ads, product demos, social content, and brand storytelling — produced faster and at scale.",
    href: "/portfolio",
    projects: [
      {
        id: "video-social-ads",
        title: "Social Ad Campaign",
        image: portfolioImages.aiVideo,
        href: "/portfolio",
      },
      {
        id: "video-product-demo",
        title: "Product Demo Reel",
        image: portfolioImages.thumbnail,
        href: "/portfolio",
      },
      {
        id: "video-brand-film",
        title: "Brand Story Film",
        image: portfolioImages.talking,
        href: "/portfolio",
      },
      {
        id: "video-explainer",
        title: "AI Explainer Video",
        image: portfolioImages.mobile1,
        href: "/portfolio",
      },
    ],
  },
  {
    id: "talking-website",
    label: "Talking Website",
    title: "Talking Website",
    description:
      "Voice-enabled websites that answer questions, qualify leads, and book appointments 24/7 — turning visitors into customers through conversation.",
    href: "/talking-website",
    projects: [
      {
        id: "voice-real-estate",
        title: "Real Estate Voice Site",
        image: portfolioImages.talking,
        href: "/talking-website",
      },
      {
        id: "voice-clinic",
        title: "Clinic Booking Assistant",
        image: portfolioImages.mobile2,
        href: "/talking-website",
      },
      {
        id: "voice-agency",
        title: "Agency Lead Qualifier",
        image: portfolioImages.development,
        href: "/talking-website",
      },
      {
        id: "voice-saas",
        title: "SaaS Demo Website",
        image: portfolioImages.webops,
        href: "/talking-website",
      },
    ],
  },
  {
    id: "ai-marketing",
    label: "AI Marketing",
    title: "AI Marketing",
    description:
      "Data-driven campaigns powered by AI — smarter targeting, automated workflows, and content that converts across every channel.",
    href: "/portfolio",
    projects: [
      {
        id: "marketing-growth",
        title: "Growth Campaign Suite",
        image: portfolioImages.seo,
        href: "/portfolio",
      },
      {
        id: "marketing-automation",
        title: "Ad Automation Funnel",
        image: portfolioImages.development,
        href: "/portfolio",
      },
      {
        id: "marketing-ecommerce",
        title: "E-commerce AI Ads",
        image: portfolioImages.mobile1,
        href: "/portfolio",
      },
      {
        id: "marketing-brand",
        title: "Brand Awareness Push",
        image: portfolioImages.thumbnail,
        href: "/portfolio",
      },
    ],
  },
] as const;

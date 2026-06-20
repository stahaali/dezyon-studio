export const homePortfolioSection = {
  titlePrefix: "Our AI ",
  titleHighlight: "Portfolio",
  titleSuffix: "",
  description:
    "Explore how we help brands grow with AI-powered video, voice-driven websites, and intelligent marketing campaigns.",
  cta: { label: "View Full Portfolio", href: "/portfolio" },
} as const;

function folderImages(folder: string, files: readonly string[]) {
  return files.map((file) => `${folder}/${file}`);
}

const aiVideoImages = folderImages("/assets/img/video-creation", [
  "2.webp",
  "5.webp",
]);

const talkingWebsiteImages = folderImages("/assets/img/talking-website", [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "8.webp",
]);

const aiMarketingImages = folderImages("/assets/img/marketing", [
  "4.webp",
  "6.webp",
  "7.webp",
  "9.webp",
]);

const aiVideoTitles = [
  "Social Ad Campaign",
  "Product Demo Reel",
  "Brand Story Film",
  "AI Explainer Video",
  "UGC Style Ad",
  "Product Launch Teaser",
  "Customer Testimonial",
  "How-To Tutorial",
  "Instagram Reel Pack",
  "YouTube Pre-Roll",
  "Corporate Overview",
  "Event Highlight Reel",
  "App Promo Video",
  "Seasonal Campaign",
  "Founder Message",
  "Case Study Film",
] as const;

const talkingWebsiteTitles = [
  "Real Estate Voice Site",
  "Clinic Booking Assistant",
  "Agency Lead Qualifier",
  "SaaS Demo Website",
  "E-commerce Assistant",
  "Legal Consult Bot",
  "Hotel Reservations",
  "Fitness Studio Site",
  "Automotive Dealer",
  "Restaurant Ordering",
  "Insurance Quoter",
  "Education Portal",
  "Healthcare FAQ",
  "B2B Lead Capture",
  "Property Tour Guide",
  "Startup Pitch Site",
] as const;

const aiMarketingTitles = [
  "Growth Campaign Suite",
  "Ad Automation Funnel",
  "E-commerce AI Ads",
  "Brand Awareness Push",
  "Pulse Analytics",
  "Ledger Finance Ads",
  "Launchpad Campaign",
  "SEO Content Engine",
  "Retargeting Flow",
  "Social Campaign Hub",
  "Email AI Sequences",
  "Conversion Optimizer",
  "Paid Search Suite",
  "Influencer Match",
  "CRM Automation",
  "Performance Dashboard",
] as const;

function buildTabProjects(
  prefix: string,
  titles: readonly string[],
  images: readonly string[],
  href: string,
) {
  return images.map((image, index) => ({
    id: `${prefix}-${index + 1}`,
    title: titles[index] ?? `Project ${index + 1}`,
    image,
    alt: titles[index] ?? `Project ${index + 1}`,
    href,
  }));
}

export const homePortfolioTabs = [
  {
    id: "ai-video-creation",
    label: "AI Video Creation",
    href: "/portfolio",
    projects: buildTabProjects(
      "video",
      aiVideoTitles,
      aiVideoImages,
      "/portfolio",
    ),
  },
  {
    id: "talking-website",
    label: "Talking Website",
    href: "/talking-website",
    projects: buildTabProjects(
      "voice",
      talkingWebsiteTitles,
      talkingWebsiteImages,
      "/talking-website",
    ),
  },
  {
    id: "ai-marketing",
    label: "AI Marketing",
    href: "/portfolio",
    projects: buildTabProjects(
      "marketing",
      aiMarketingTitles,
      aiMarketingImages,
      "/portfolio",
    ),
  },
] as const;

export const homePortfolioSection = {
  titlePrefix: "Our AI ",
  titleHighlight: "Portfolio",
  titleSuffix: "",
  description:
    "Explore how we help brands grow with AI-powered video, voice-driven websites, and intelligent marketing campaigns.",
  cta: { label: "View Full Portfolio", href: "/portfolio" },
} as const;

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

const aiVideoImages = [
  unsplash("photo-1611162617474-5b21e879e113"),
  unsplash("photo-1626785774573-4b799315345d"),
  "/assets/img/features/feature-image-061.jpg",
  "/assets/video/thumbnail1.jpg",
  unsplash("photo-1574717024653-61fd2cf4d44d"),
  unsplash("photo-1611224923853-80b023f02d71"),
  unsplash("photo-1529107386315-e1a2ed48a620"),
  unsplash("photo-1516321318423-f06f85e504b3"),
  unsplash("photo-1557804506-669a67965ba0"),
  unsplash("photo-1552664730-d307ca884978"),
  unsplash("photo-1542744173-8e7e53415bb0"),
  unsplash("photo-1553877522-43269d4ea984"),
  unsplash("photo-1533750349088-cd871a92f312"),
  unsplash("photo-1600880292203-757bb62b4baf"),
  unsplash("photo-1559136555-9303baea8ebd"),
  unsplash("photo-1556761175-5973dc0f32e7"),
] as const;

const talkingWebsiteImages = [
  unsplash("photo-1587560699334-cc4ff634909a"),
  "/assets/img/features/feature-image-05.jpg",
  unsplash("photo-1600880292203-757bb62b4baf"),
  unsplash("photo-1516321318423-f06f85e504b3"),
  "/assets/img/home-capabilities/development-bg.jpg",
  "/assets/img/home-capabilities/webops-bg.jpg",
  "/assets/img/web-app/mobile-app-img1.jpg",
  "/assets/img/web-app/mobile-app-img2.jpg",
  unsplash("photo-1551434678-e076c223a692"),
  unsplash("photo-1573164713714-d95e436ab8d6"),
  unsplash("photo-1556761175-5973dc0f32e7"),
  unsplash("photo-1559136555-9303baea8ebd"),
  unsplash("photo-1553877522-43269d4ea984"),
  unsplash("photo-1557804506-669a67965ba0"),
  unsplash("photo-1552664730-d307ca884978"),
  unsplash("photo-1542744173-8e7e53415bb0"),
] as const;

const aiMarketingImages = [
  "/assets/img/home-capabilities/seo-bg.jpg",
  unsplash("photo-1547658719-da2b51169166"),
  unsplash("photo-1563986768609-322da13575f3"),
  unsplash("photo-1533750349088-cd871a92f312"),
  unsplash("photo-1551288049-bebda4e38f71"),
  unsplash("photo-1460925895917-afdab827c52f"),
  unsplash("photo-1551650975-87deedd944c3"),
  unsplash("photo-1542744173-8e7e53415bb0"),
  unsplash("photo-1553877522-43269d4ea984"),
  unsplash("photo-1557804506-669a67965ba0"),
  unsplash("photo-1552664730-d307ca884978"),
  unsplash("photo-1573164713714-d95e436ab8d6"),
  unsplash("photo-1556761175-5973dc0f32e7"),
  unsplash("photo-1529107386315-e1a2ed48a620"),
  unsplash("photo-1611224923853-80b023f02d71"),
  unsplash("photo-1559136555-9303baea8ebd"),
] as const;

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
  return titles.map((title, index) => ({
    id: `${prefix}-${index + 1}`,
    title,
    image: images[index],
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

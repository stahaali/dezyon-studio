export const HERO_ASSETS = "/assets/img/homebanner";

export const heroBannerImage = `${HERO_ASSETS}/homebanner-1.webp`;
export const heroBannerImageAlt = "Dezyon Studio digital agency hero background";

export const heroAvatars = [
  { src: `${HERO_ASSETS}/03.webp`, alt: "Member avatar" },
  { src: `${HERO_ASSETS}/02.webp`, alt: "Member avatar" },
  { src: `${HERO_ASSETS}/08.webp`, alt: "Member avatar" },
] as const;

export const LOGO_ASSETS = "/assets/img/logos";

export const heroBrands = [
  { src: `${LOGO_ASSETS}/brand-01.svg`, alt: "Capsule" },
  { src: `${LOGO_ASSETS}/brand-02.svg`, alt: "Layers" },
  { src: `${LOGO_ASSETS}/brand-03.svg`, alt: "Polymath" },
  { src: `${LOGO_ASSETS}/brand-04.svg`, alt: "Segment" },
  { src: `${LOGO_ASSETS}/brand-05.svg`, alt: "Alt+Shift" },
  { src: `${LOGO_ASSETS}/brand-06.svg`, alt: "Lightbox" },
] as const;

export const HERO_POSTER = "/assets/video/thumbnail1.jpg";
export const HERO_VIDEO = "/assets/video/video1.mp4";

export const heroRating = {
  value: "4.9",
  label: "Google rating",
} as const;

export const heroContent = {
  titlePrefix: "Meet Our",
  titleLine2: "Team For Your Business",
  typewriterPhrases: [
    "WebOps",
    "Branding & Design",
    "Talking Website",
    "Website Design",
    "Video Ads",
    "Social Marketing",
  ],
  intro:
    "See What's Stopping Your Website From Growing.",
  subtitle:
    "Enter your website URL and get an instant Website Performance Report with your overall score, SEO, Speed, Security, and User Experience analysis—plus expert recommendations to help you rank higher, load faster, and generate more leads.",
  form: {
    placeholder: "Enter a web URL for audit",
    submitLabel: "Analyze",
  },
  membersLabel: "4.6k Hardworking Members",
} as const;

export type HeroSliderImage = {
  src: string;
  alt: string;
};

export const heroSliderColumns: HeroSliderImage[][] = [
  [
    {
      src: "/assets/img/web-app/mobile-app-img1.webp",
      alt: "Nova Commerce web application preview",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      alt: "Pulse Analytics dashboard design",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      alt: "Ledger Finance fintech platform",
    },
    {
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
      alt: "Launchpad startup landing page",
    },
  ],
  [
    {
      src: "/assets/img/web-app/mobile-app-img2.webp",
      alt: "Custom web portal interface",
    },
    {
      src: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80",
      alt: "Studio Maven creative agency website",
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
      alt: "Orbit Mobile app landing page",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      alt: "SaaS analytics product showcase",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80",
      alt: "Creative agency portfolio project",
    },
    {
      src: "/assets/img/web-app/mobile-app-img1.webp",
      alt: "E-commerce web application design",
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
      alt: "Mobile app marketing website",
    },
    {
      src: "/assets/img/web-app/mobile-app-img2.webp",
      alt: "B2B portal development preview",
    },
  ],
] as const;

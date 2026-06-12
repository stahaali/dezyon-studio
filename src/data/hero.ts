export const HERO_ASSETS = "/assets/img/homebanner";

export const heroAvatars = [
  { src: `${HERO_ASSETS}/03.png`, alt: "Member avatar" },
  { src: `${HERO_ASSETS}/02.png`, alt: "Member avatar" },
  { src: `${HERO_ASSETS}/08.png`, alt: "Member avatar" },
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
  titlePrefix: "Meet Our ",
  titleHighlight: "WebOps",
  titleSuffix: " Team For Your Business",
  intro:
    "Where creators become brands and brands become businesses.",
  subtitle:
    "We design, build, and grow websites, brands, and digital products for business that want to stand out online.",
  form: {
    placeholder: "yourwebsite.com",
    submitLabel: "Search Domain",
    note: "Free website audit. Done in under 2 minutes.",
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
      src: "/assets/img/web-app/mobile-app-img1.jpg",
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
      src: "/assets/img/web-app/mobile-app-img2.jpg",
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
      src: "/assets/img/web-app/mobile-app-img1.jpg",
      alt: "E-commerce web application design",
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
      alt: "Mobile app marketing website",
    },
    {
      src: "/assets/img/web-app/mobile-app-img2.jpg",
      alt: "B2B portal development preview",
    },
  ],
] as const;

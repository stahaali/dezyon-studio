export type HeroCardPlatform = "facebook" | "instagram";

export type HeroCardVisibility = "all" | "tablet" | "desktop";

export type MarketingHeroFloatingCard = {
  id: string;
  side: "left" | "right";
  platform: HeroCardPlatform;
  image: string;
  imageAlt: string;
  profileName: string;
  profileMeta: string;
  overlayCaption?: string;
  top: string;
  inset: string;
  width: number;
  rotation: number;
  parallax: number;
  depthScale: number;
  zIndex: number;
  visibility: HeroCardVisibility;
};

export const marketingHeroFloatingCards: MarketingHeroFloatingCard[] = [
  // Left side — 3 cards
  {
    id: "left-facebook-top",
    side: "left",
    platform: "facebook",
    image: "/assets/img/smart-feature/2.webp",
    imageAlt: "Creative team collaborating in a modern digital studio",
    profileName: "Greenleaf Co.",
    profileMeta: "Sponsored",
    overlayCaption: "This is what growth looks like.",
    top: "0%",
    inset: "0%",
    width: 390,
    rotation: -5,
    parallax: 0.58,
    depthScale: 1,
    zIndex: 2,
    visibility: "tablet",
  },
  {
    id: "left-instagram-mid",
    side: "left",
    platform: "instagram",
    image: "/assets/img/smart-feature/5.webp",
    imageAlt: "Marketing professionals reviewing campaign performance",
    profileName: "nordic_home",
    profileMeta: "Paid Promotion",
    top: "32%",
    inset: "1%",
    width: 350,
    rotation: 3.5,
    parallax: 0.72,
    depthScale: 0.97,
    zIndex: 3,
    visibility: "tablet",
  },
  {
    id: "left-instagram-bottom",
    side: "left",
    platform: "instagram",
    image: "/assets/img/smart-feature/8.webp",
    imageAlt: "Brand team planning a digital growth strategy",
    profileName: "bloomstudio__",
    profileMeta: "Paid Promotion",
    top: "60%",
    inset: "0%",
    width: 330,
    rotation: -3,
    parallax: 0.88,
    depthScale: 0.95,
    zIndex: 1,
    visibility: "tablet",
  },

  // Right side — 3 cards
  {
    id: "right-instagram-top",
    side: "right",
    platform: "instagram",
    image: "/assets/img/smart-feature/1.webp",
    imageAlt: "Agency team working on AI-powered marketing solutions",
    profileName: "forge_and_frame",
    profileMeta: "Paid Promotion",
    top: "2%",
    inset: "0%",
    width: 370,
    rotation: 4.5,
    parallax: 0.6,
    depthScale: 0.98,
    zIndex: 2,
    visibility: "tablet",
  },
  {
    id: "right-instagram-mid",
    side: "right",
    platform: "instagram",
    image: "/assets/img/smart-feature/4.webp",
    imageAlt: "Creative director presenting a brand campaign concept",
    profileName: "sugarandsaw",
    profileMeta: "Paid Promotion",
    overlayCaption: "made with smart strategy and zero shortcuts.",
    top: "34%",
    inset: "1%",
    width: 400,
    rotation: -6,
    parallax: 0.8,
    depthScale: 1,
    zIndex: 4,
    visibility: "tablet",
  },
  {
    id: "right-facebook-bottom",
    side: "right",
    platform: "facebook",
    image: "/assets/img/smart-feature/7.webp",
    imageAlt: "Business team collaborating on digital marketing goals",
    profileName: "Casadelarosa Realty",
    profileMeta: "Sponsored",
    top: "58%",
    inset: "0%",
    width: 360,
    rotation: 5,
    parallax: 0.9,
    depthScale: 0.96,
    zIndex: 3,
    visibility: "tablet",
  },
];

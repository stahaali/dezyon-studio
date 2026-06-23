export type HeroCardPlatform = "facebook" | "instagram";

export type HeroCardVisibility = "all" | "tablet" | "desktop";

export const MARKETING_HERO_CARD_SIZE = {
  width: 275,
  aspectRatio: "4 / 5",
} as const;

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
  offsetX?: number;
  offsetY?: number;
  width: number;
  aspectRatio?: string;
  rotation: number;
  parallax: number;
  depthScale: number;
  zIndex: number;
  visibility: HeroCardVisibility;
};

const { width: cardWidth, aspectRatio: cardAspect } = MARKETING_HERO_CARD_SIZE;

/** 3 left + 3 right — same size, scattered, extra vertical gap */
export const marketingHeroFloatingCards: MarketingHeroFloatingCard[] = [
  {
    id: "left-top",
    side: "left",
    platform: "facebook",
    image: "/assets/img/smart-feature/2.webp",
    imageAlt: "Creative team collaborating in a modern digital studio",
    profileName: "Greenleaf Co.",
    profileMeta: "Sponsored",
    top: "4%",
    inset: "-7%",
    offsetX: -12,
    offsetY: 0,
    width: cardWidth,
    aspectRatio: cardAspect,
    rotation: 8,
    parallax: 0.42,
    depthScale: 1,
    zIndex: 1,
    visibility: "tablet",
  },
  {
    id: "left-mid",
    side: "left",
    platform: "instagram",
    image: "/assets/img/smart-feature/5.webp",
    imageAlt: "Marketing professionals reviewing campaign performance",
    profileName: "nordic_home",
    profileMeta: "Paid Promotion",
    top: "41%",
    inset: "0%",
    offsetX: 18,
    offsetY: 0,
    width: cardWidth,
    aspectRatio: cardAspect,
    rotation: -5,
    parallax: 0.55,
    depthScale: 1,
    zIndex: 2,
    visibility: "tablet",
  },
  {
    id: "left-bottom",
    side: "left",
    platform: "instagram",
    image: "/assets/img/smart-feature/8.webp",
    imageAlt: "Brand team planning a digital growth strategy",
    profileName: "bloomstudio__",
    profileMeta: "Paid Promotion",
    top: "77%",
    inset: "-5%",
    offsetX: 6,
    offsetY: 0,
    width: cardWidth,
    aspectRatio: cardAspect,
    rotation: 7,
    parallax: 0.68,
    depthScale: 1,
    zIndex: 3,
    visibility: "tablet",
  },
  {
    id: "right-top",
    side: "right",
    platform: "instagram",
    image: "/assets/img/smart-feature/1.webp",
    imageAlt: "Agency team working on AI-powered marketing solutions",
    profileName: "forge_and_frame",
    profileMeta: "Paid Promotion",
    top: "6%",
    inset: "-7%",
    offsetX: 10,
    offsetY: 0,
    width: cardWidth,
    aspectRatio: cardAspect,
    rotation: -8,
    parallax: 0.44,
    depthScale: 1,
    zIndex: 1,
    visibility: "tablet",
  },
  {
    id: "right-mid",
    side: "right",
    platform: "instagram",
    image: "/assets/img/smart-feature/4.webp",
    imageAlt: "Creative director presenting a brand campaign concept",
    profileName: "sugarandsaw",
    profileMeta: "Paid Promotion",
    top: "43%",
    inset: "1%",
    offsetX: -20,
    offsetY: 0,
    width: cardWidth,
    aspectRatio: cardAspect,
    rotation: 0,
    parallax: 0.56,
    depthScale: 1,
    zIndex: 2,
    visibility: "tablet",
  },
  {
    id: "right-bottom",
    side: "right",
    platform: "facebook",
    image: "/assets/img/smart-feature/7.webp",
    imageAlt: "Business team collaborating on digital marketing goals",
    profileName: "Casadelarosa Realty",
    profileMeta: "Sponsored",
    top: "79%",
    inset: "-4%",
    offsetX: -8,
    offsetY: 0,
    width: cardWidth,
    aspectRatio: cardAspect,
    rotation: 6,
    parallax: 0.7,
    depthScale: 1,
    zIndex: 3,
    visibility: "tablet",
  },
];

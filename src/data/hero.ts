import { flaticonIcons } from "@/data/icons";

export const HERO_ASSETS = "/assets/img/homebanner";

export type HeroIconFilter = "none" | "starWhite";

export const heroFloatingStars = [
  {
    src: `${HERO_ASSETS}/star-1.svg`,
    alt: "",
    width: 193,
    height: 216,
    className: "starOne",
    filter: "starWhite" as HeroIconFilter,
  },
  {
    src: `${HERO_ASSETS}/star-2.svg`,
    alt: "",
    width: 69,
    height: 95,
    className: "starTwo",
    filter: "starWhite" as HeroIconFilter,
  },
] as const;

export const heroFloatingThemeIcons = [
  {
    src: flaticonIcons.trophyLime,
    alt: "",
    width: 64,
    height: 64,
    className: "iconTrophy",
  },
  {
    src: flaticonIcons.locationLime,
    alt: "",
    width: 64,
    height: 64,
    className: "iconLocation",
  },
  {
    src: flaticonIcons.globeLime,
    alt: "",
    width: 64,
    height: 64,
    className: "iconGlobe",
  },
  {
    src: flaticonIcons.crownLime,
    alt: "",
    width: 64,
    height: 64,
    className: "iconCrown",
  },
  {
    src: flaticonIcons.diamondLime,
    alt: "",
    width: 64,
    height: 64,
    className: "iconDiamond",
  },
  {
    src: flaticonIcons.chatLime,
    alt: "",
    width: 64,
    height: 64,
    className: "iconChat",
  },
] as const;

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

export const HERO_POSTER = `${HERO_ASSETS}/home-01-hero-cover.webp`;
export const HERO_VIDEO = "/assets/img/media/lexend_vid.webm";

export const heroIconFilters: Record<HeroIconFilter, string> = {
  none: "",
  starWhite: "filterStarWhite",
};

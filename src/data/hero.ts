export const HERO_ASSETS = "/assets/img/homebanner";

export type HeroIconFilter = "none" | "starWhite";

export const heroFloatingIcons = [
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
  {
    src: `${HERO_ASSETS}/icon-trophy-dark.svg`,
    alt: "",
    width: 100,
    height: 100,
    className: "iconTrophy",
    filter: "none" as HeroIconFilter,
  },
  {
    src: `${HERO_ASSETS}/icon-location-dark.svg`,
    alt: "",
    width: 100,
    height: 100,
    className: "iconLocation",
    filter: "none" as HeroIconFilter,
  },
  {
    src: `${HERO_ASSETS}/icon-globe-dark.svg`,
    alt: "",
    width: 100,
    height: 100,
    className: "iconGlobe",
    filter: "none" as HeroIconFilter,
  },
  {
    src: `${HERO_ASSETS}/icon-crown-dark.svg`,
    alt: "",
    width: 100,
    height: 100,
    className: "iconCrown",
    filter: "none" as HeroIconFilter,
  },
  {
    src: `${HERO_ASSETS}/icon-diamond-dark.svg`,
    alt: "",
    width: 100,
    height: 100,
    className: "iconDiamond",
    filter: "none" as HeroIconFilter,
  },
  {
    src: `${HERO_ASSETS}/icon-chat-dark.svg`,
    alt: "",
    width: 100,
    height: 100,
    className: "iconChat",
    filter: "none" as HeroIconFilter,
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

export const heroIconFilters: Record<HeroIconFilter, string> = {
  none: "",
  starWhite: "filterStarWhite",
};

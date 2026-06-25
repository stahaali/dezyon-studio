import { servicesHero } from "@/data/services";

const MARKETING_TOOLS = "/assets/img/marketing/tools";
const INTEGRATIONS = "/assets/img/integrations";

/** Matches ServicesHero ring diameters at 768px+ (diameter / 2). */
const RING_3 = 330;
const RING_4 = 410;
const RING_5 = 500;

type FloatingIcon = {
  src: string;
  alt: string;
  angle: number;
  radius: number;
  width: number;
  height: number;
};

function placeOnRing(
  items: Array<{ src: string; alt: string }>,
  radius: number,
  startAngle: number,
): FloatingIcon[] {
  const step = 360 / items.length;

  return items.map((item, index) => ({
    ...item,
    angle: startAngle + step * index,
    radius,
    width: 44,
    height: 44,
  }));
}

function buildMarketingFloatingIcons(): FloatingIcon[] {
  return [
    ...placeOnRing(
      [
        { src: `${MARKETING_TOOLS}/adobe-premiere.svg`, alt: "Adobe Premiere Pro" },
        { src: `${MARKETING_TOOLS}/capcut.svg`, alt: "CapCut" },
        { src: `${MARKETING_TOOLS}/adobe-after-effects.svg`, alt: "Adobe After Effects" },
        { src: `${MARKETING_TOOLS}/runway.svg`, alt: "Runway" },
      ],
      RING_3,
      -135,
    ),
    ...placeOnRing(
      [
        { src: `${MARKETING_TOOLS}/luma-ai.svg`, alt: "Luma AI" },
        { src: `${MARKETING_TOOLS}/kling-ai.svg`, alt: "Kling AI" },
        { src: `${MARKETING_TOOLS}/envato.svg`, alt: "Envato" },
        { src: `${MARKETING_TOOLS}/facebook.svg`, alt: "Facebook" },
        { src: `${MARKETING_TOOLS}/tiktok.svg`, alt: "TikTok" },
      ],
      RING_4,
      -126,
    ),
    ...placeOnRing(
      [
        { src: `${MARKETING_TOOLS}/instagram.svg`, alt: "Instagram" },
        { src: `${MARKETING_TOOLS}/google-business.svg`, alt: "Google My Business" },
        { src: `${INTEGRATIONS}/tool-paypal.svg`, alt: "PayPal" },
        { src: `${INTEGRATIONS}/tool-stripe.svg`, alt: "Stripe" },
        { src: `${MARKETING_TOOLS}/higgsfield.svg`, alt: "Higgsfield AI" },
      ],
      RING_5,
      -108,
    ),
  ];
}

export const marketingHero = {
  ...servicesHero,
  bannerImage: "/assets/img/talking-website/talking-website-banner.webp",
  bannerImageAlt: "Hands holding smartphones showing social media and digital content",
  floatingIcons: buildMarketingFloatingIcons(),
} as const;

const CONTACT_ASSETS = "/assets/img/contact";

export const packagesBanner = {
  titlePrefix: "Choose the right ",
  titleHighlight: "package.",
  description:
    "Flexible plans for logos, websites, branding, and digital growth — pick what fits your business.",
  stars: {
    left: { src: `${CONTACT_ASSETS}/star-2.svg`, width: 20, height: 28 },
    right: { src: `${CONTACT_ASSETS}/star-1.svg`, width: 42, height: 47 },
  },
} as const;

export const packageCategories = [
  { id: "logo", label: "Logo" },
  { id: "website-design", label: "Website Design" },
  { id: "branding", label: "Branding" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "wordpress", label: "Wordpress" },
  { id: "shopify", label: "Shopify" },
  { id: "video-animation", label: "Video animation" },
  { id: "seo", label: "SEO" },
  { id: "smm", label: "SMM" },
  { id: "web-portal", label: "Web Portal" },
] as const;

export type PackageCategoryId = (typeof packageCategories)[number]["id"];

export interface PackagePlan {
  id: string;
  name: string;
  price: number;
  wasPrice: number;
  features: readonly string[];
  note: string;
}

const logoPlans: PackagePlan[] = [
  {
    id: "logo-special",
    name: "LOGO SPECIAL",
    price: 49,
    wasPrice: 98,
    features: [
      "2 Logo Concepts",
      "By 2 Designers",
      "3 Revisions",
      "JPG & PNG Files",
      "24–48 Hours Turnaround",
    ],
    note: "Suitable for newly formed organizations or small startups.",
  },
  {
    id: "logo-plus",
    name: "LOGO PLUS",
    price: 115,
    wasPrice: 230,
    features: [
      "4 Logo Concepts",
      "By 4 Designers",
      "6 Revisions",
      "Vector EPS & AI Files",
      "Social Media Kit",
    ],
    note: "Ideal for growing brands that need more creative options.",
  },
  {
    id: "logo-platinum",
    name: "LOGO PLATINUM",
    price: 295,
    wasPrice: 590,
    features: [
      "6 Logo Concepts",
      "By 6 Designers",
      "Unlimited Revisions",
      "Full Brand Color Palette",
      "Business Card Design",
    ],
    note: "Best for established businesses ready to elevate their identity.",
  },
  {
    id: "logo-infinite",
    name: "LOGO INFINITE",
    price: 1245,
    wasPrice: 2490,
    features: [
      "Unlimited Concepts",
      "Dedicated Design Team",
      "Unlimited Revisions",
      "Complete Brand Guidelines",
      "Stationery & Merch Design",
    ],
    note: "Built for enterprises that need a full-scale brand rollout.",
  },
  {
    id: "mascot-logo",
    name: "MASCOT LOGO",
    price: 595,
    wasPrice: 1190,
    features: [
      "Custom Mascot Character",
      "Multiple Pose Options",
      "Vector Source Files",
      "Social Media Avatars",
      "Unlimited Revisions",
    ],
    note: "Perfect for brands that want a memorable character identity.",
  },
  {
    id: "3d-logo",
    name: "3D LOGO",
    price: 254,
    wasPrice: 508,
    features: [
      "3D Logo Rendering",
      "HD PNG & JPG Exports",
      "2 Revision Rounds",
      "Transparent Background",
      "Mockup Presentation",
    ],
    note: "Great for digital-first brands and product launches.",
  },
  {
    id: "logo-combo",
    name: "LOGO COMBO",
    price: 1295,
    wasPrice: 2590,
    features: [
      "Logo + Mascot + 3D Bundle",
      "Dedicated Account Manager",
      "Unlimited Revisions",
      "Full Brand Style Guide",
      "Priority 24/7 Support",
    ],
    note: "Our most complete logo package for ambitious brands.",
  },
];

const websiteDesignPlans: PackagePlan[] = [
  {
    id: "web-starter",
    name: "WEB STARTER",
    price: 499,
    wasPrice: 998,
    features: [
      "5 Page Website",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO Setup",
      "1 Month Support",
    ],
    note: "For small businesses launching their first web presence.",
  },
  {
    id: "web-business",
    name: "WEB BUSINESS",
    price: 999,
    wasPrice: 1998,
    features: [
      "10 Page Website",
      "CMS Integration",
      "Speed Optimization",
      "Google Analytics",
      "3 Months Support",
    ],
    note: "Ideal for service businesses that need room to grow.",
  },
  {
    id: "web-premium",
    name: "WEB PREMIUM",
    price: 1999,
    wasPrice: 3998,
    features: [
      "20+ Page Website",
      "Custom UI/UX Design",
      "Advanced SEO",
      "Blog Integration",
      "6 Months Support",
    ],
    note: "For brands that want a polished, conversion-focused site.",
  },
];

const brandingPlans: PackagePlan[] = [
  {
    id: "brand-starter",
    name: "BRAND STARTER",
    price: 399,
    wasPrice: 798,
    features: [
      "Logo Design",
      "Color Palette",
      "Typography Guide",
      "Social Templates",
      "Brand PDF Guide",
    ],
    note: "Essentials for new brands finding their visual voice.",
  },
  {
    id: "brand-growth",
    name: "BRAND GROWTH",
    price: 899,
    wasPrice: 1798,
    features: [
      "Full Identity System",
      "Business Stationery",
      "Email Signature",
      "Pitch Deck Design",
      "Brand Guidelines",
    ],
    note: "For teams ready to present a cohesive brand everywhere.",
  },
  {
    id: "brand-enterprise",
    name: "BRAND ENTERPRISE",
    price: 2499,
    wasPrice: 4998,
    features: [
      "Complete Rebrand",
      "Packaging Design",
      "Marketing Collateral",
      "Brand Voice Guide",
      "Dedicated Strategist",
    ],
    note: "End-to-end branding for companies scaling nationally.",
  },
];

const ecommercePlans: PackagePlan[] = [
  {
    id: "ecom-starter",
    name: "ECOM STARTER",
    price: 799,
    wasPrice: 1598,
    features: [
      "Up to 25 Products",
      "Payment Gateway",
      "Mobile Optimized",
      "Order Notifications",
      "Basic Analytics",
    ],
    note: "Launch your first online store with confidence.",
  },
  {
    id: "ecom-pro",
    name: "ECOM PRO",
    price: 1499,
    wasPrice: 2998,
    features: [
      "Up to 100 Products",
      "Inventory Management",
      "Discount Coupons",
      "Abandoned Cart Emails",
      "SEO Product Pages",
    ],
    note: "Built for stores ready to scale sales and operations.",
  },
  {
    id: "ecom-elite",
    name: "ECOM ELITE",
    price: 2999,
    wasPrice: 5998,
    features: [
      "Unlimited Products",
      "Multi-currency Support",
      "Advanced Reporting",
      "Custom Checkout",
      "Priority Support",
    ],
    note: "High-volume merchants that need enterprise-grade tools.",
  },
];

const wordpressPlans: PackagePlan[] = [
  {
    id: "wp-basic",
    name: "WP BASIC",
    price: 399,
    wasPrice: 798,
    features: [
      "WordPress Setup",
      "Premium Theme",
      "5 Pages",
      "Plugin Configuration",
      "1 Month Support",
    ],
    note: "Quick WordPress launch for blogs and brochure sites.",
  },
  {
    id: "wp-custom",
    name: "WP CUSTOM",
    price: 999,
    wasPrice: 1998,
    features: [
      "Custom WordPress Theme",
      "10 Pages",
      "Speed & Security",
      "SEO Plugin Setup",
      "3 Months Support",
    ],
    note: "Custom-built WordPress for brands that need flexibility.",
  },
  {
    id: "wp-woo",
    name: "WP + WOOCOMMERCE",
    price: 1799,
    wasPrice: 3598,
    features: [
      "WooCommerce Store",
      "50 Products",
      "Payment Integration",
      "Shipping Setup",
      "6 Months Support",
    ],
    note: "Sell products on WordPress with a tailored storefront.",
  },
];

const shopifyPlans: PackagePlan[] = [
  {
    id: "shopify-launch",
    name: "SHOPIFY LAUNCH",
    price: 699,
    wasPrice: 1398,
    features: [
      "Shopify Theme Setup",
      "25 Products",
      "Payment Gateway",
      "Mobile Optimized",
      "Launch Checklist",
    ],
    note: "Get your Shopify store live fast.",
  },
  {
    id: "shopify-growth",
    name: "SHOPIFY GROWTH",
    price: 1299,
    wasPrice: 2598,
    features: [
      "Custom Theme Tweaks",
      "100 Products",
      "Email Marketing Setup",
      "Conversion Optimization",
      "3 Months Support",
    ],
    note: "Optimize your Shopify store for higher conversions.",
  },
  {
    id: "shopify-scale",
    name: "SHOPIFY SCALE",
    price: 2499,
    wasPrice: 4998,
    features: [
      "Headless-ready Setup",
      "Unlimited Products",
      "App Integrations",
      "Advanced Automations",
      "Dedicated Manager",
    ],
    note: "For Shopify merchants scaling to the next level.",
  },
];

const videoAnimationPlans: PackagePlan[] = [
  {
    id: "video-short",
    name: "VIDEO SHORT",
    price: 299,
    wasPrice: 598,
    features: [
      "30 Second Animation",
      "Script Assistance",
      "2 Revisions",
      "HD Export",
      "Background Music",
    ],
    note: "Short-form video for ads and social media.",
  },
  {
    id: "video-explainer",
    name: "EXPLAINER VIDEO",
    price: 799,
    wasPrice: 1598,
    features: [
      "60–90 Second Video",
      "Storyboard Included",
      "Voiceover",
      "Unlimited Revisions",
      "4K Export",
    ],
    note: "Explain your product or service with clarity and style.",
  },
  {
    id: "video-premium",
    name: "VIDEO PREMIUM",
    price: 1499,
    wasPrice: 2998,
    features: [
      "2 Minute Custom Animation",
      "Character Design",
      "Professional Voiceover",
      "Multiple Formats",
      "Dedicated Producer",
    ],
    note: "Premium motion content for campaigns and launches.",
  },
];

const seoPlans: PackagePlan[] = [
  {
    id: "seo-starter",
    name: "SEO STARTER",
    price: 299,
    wasPrice: 598,
    features: [
      "10 Keywords",
      "On-page Optimization",
      "Monthly Report",
      "Google Search Console",
      "Meta Tag Updates",
    ],
    note: "Foundation SEO for new websites.",
  },
  {
    id: "seo-growth",
    name: "SEO GROWTH",
    price: 599,
    wasPrice: 1198,
    features: [
      "25 Keywords",
      "Content Optimization",
      "Link Building",
      "Competitor Analysis",
      "Bi-weekly Reports",
    ],
    note: "Grow organic traffic with ongoing optimization.",
  },
  {
    id: "seo-enterprise",
    name: "SEO ENTERPRISE",
    price: 1299,
    wasPrice: 2598,
    features: [
      "50+ Keywords",
      "Technical SEO Audit",
      "Content Strategy",
      "Local SEO",
      "Dedicated Specialist",
    ],
    note: "Aggressive SEO for competitive markets.",
  },
];

const smmPlans: PackagePlan[] = [
  {
    id: "smm-starter",
    name: "SMM STARTER",
    price: 199,
    wasPrice: 398,
    features: [
      "2 Platforms",
      "12 Posts / Month",
      "Basic Graphics",
      "Hashtag Research",
      "Monthly Report",
    ],
    note: "Stay active on social without the daily grind.",
  },
  {
    id: "smm-growth",
    name: "SMM GROWTH",
    price: 499,
    wasPrice: 998,
    features: [
      "4 Platforms",
      "20 Posts / Month",
      "Custom Creatives",
      "Community Management",
      "Bi-weekly Reports",
    ],
    note: "Build engagement and grow your audience consistently.",
  },
  {
    id: "smm-premium",
    name: "SMM PREMIUM",
    price: 999,
    wasPrice: 1998,
    features: [
      "All Major Platforms",
      "30+ Posts / Month",
      "Video & Carousel Content",
      "Paid Ad Management",
      "Dedicated Manager",
    ],
    note: "Full social media management for ambitious brands.",
  },
];

const webPortalPlans: PackagePlan[] = [
  {
    id: "portal-starter",
    name: "PORTAL STARTER",
    price: 1999,
    wasPrice: 3998,
    features: [
      "User Login System",
      "Dashboard UI",
      "5 Core Modules",
      "Admin Panel",
      "3 Months Support",
    ],
    note: "Custom portals for teams and customer access.",
  },
  {
    id: "portal-business",
    name: "PORTAL BUSINESS",
    price: 3999,
    wasPrice: 7998,
    features: [
      "Role-based Access",
      "10 Modules",
      "API Integrations",
      "Reporting Suite",
      "6 Months Support",
    ],
    note: "Business portals with workflows and integrations.",
  },
  {
    id: "portal-enterprise",
    name: "PORTAL ENTERPRISE",
    price: 7999,
    wasPrice: 15998,
    features: [
      "Unlimited Modules",
      "Custom Workflows",
      "SSO Integration",
      "Dedicated Dev Team",
      "12 Months Support",
    ],
    note: "Enterprise-grade web portals built to your specs.",
  },
];

export const packagePlansByCategory: Record<PackageCategoryId, PackagePlan[]> = {
  logo: logoPlans,
  "website-design": websiteDesignPlans,
  branding: brandingPlans,
  ecommerce: ecommercePlans,
  wordpress: wordpressPlans,
  shopify: shopifyPlans,
  "video-animation": videoAnimationPlans,
  seo: seoPlans,
  smm: smmPlans,
  "web-portal": webPortalPlans,
};

export const packagesActions = {
  chatHref: "https://wa.me/15732407509",
  orderHref: "/contact",
} as const;

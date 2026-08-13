const CONTACT_ASSETS = "/assets/img/contact";

export const packagesBanner = {
  titlePrefix: "Choose The Right ",
  titleHighlight: "Package.",
  description:
    "Flexible plans for logos, websites, branding, and digital growth — pick what fits your business.",
  stars: {
    left: {
      src: `${CONTACT_ASSETS}/star-2.svg`,
      width: 20,
      height: 28,
      alt: "Decorative star accent",
    },
    right: {
      src: `${CONTACT_ASSETS}/star-1.svg`,
      width: 42,
      height: 47,
      alt: "Decorative star accent",
    },
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
  priceSubtitle?: string;
  hideWasPrice?: boolean;
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
    id: "startup-website",
    name: "STARTUP WEBSITE",
    price: 249,
    wasPrice: 470,
    features: [
      "5 Page Website",
      "Custom Layout Design",
      "Contact/Query Form",
      "3 Banner Designs",
      "5 Stock Photos",
      "FREE Favicon Design",
      "FREE Google Friendly Sitemap",
      "Unlimited Revisions",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "professional-website",
    name: "PROFESSIONAL WEBSITE",
    price: 699,
    wasPrice: 1299,
    features: [
      "Up to 10 Unique Pages Website",
      "CMS / Admin Panel Integration",
      "5+ Stock Photos & Banner Designs",
      "FREE Social Media Integration",
      "FREE Favicon Design",
      "FREE Google Friendly Sitemap",
      "Unlimited Revisions",
      "Cross-Browser Compatible",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "elite-website",
    name: "ELITE WEBSITE",
    price: 999,
    wasPrice: 1999,
    features: [
      "Up to 15 Unique Pages Website",
      "Custom Media, Interactive & Dynamic Design",
      "Customized WordPress or PHP Development",
      "Interactive Sliding Banners",
      "Up to 10 Custom Made Banner Designs",
      "10 Stock Images",
      "Unlimited Revisions",
      "Content Management System",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "silver-website",
    name: "SILVER WEBSITE",
    price: 1599,
    wasPrice: 2999,
    features: [
      "Up to 20 Unique Pages Website",
      "Custom Media, Interactive, Dynamic & High-End Design",
      "Customized WordPress or PHP Development",
      "Fully Mobile Responsive",
      "Interactive Sliding Banners",
      "Up to 15 Custom Made Banner Designs",
      "15 Stock Images",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "business-website",
    name: "BUSINESS WEBSITE",
    price: 2499,
    wasPrice: 4799,
    features: [
      "25 Pages Website",
      "Custom Media, Interactive, Dynamic & High-End Design",
      "Customized WordPress or PHP Development",
      "Fully Mobile Responsive",
      "Interactive Sliding Banners",
      "Up to 15 Custom Made Banner Designs",
      "15 Stock Images",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "platinum-website",
    name: "PLATINUM WEBSITE",
    price: 4499,
    wasPrice: 8999,
    features: [
      "Unlimited Pages Website",
      "30-60 Sec Business Specific Explainer Video",
      "Custom Media, Interactive, Dynamic & High-End Design",
      "Customized WordPress or PHP Development",
      "Fully Mobile Responsive",
      "Interactive Sliding Banners",
      "Up to 15 Custom Made Banner Designs",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
];

const brandingPlans: PackagePlan[] = [
  {
    id: "branding-startup",
    name: "BRANDING STARTUP",
    price: 495,
    wasPrice: 990,
    features: [
      "Logo Design",
      "8 Unique Logo Concepts",
      "FREE Icon",
      "FREE Grayscale Copy",
      "Unlimited Revisions",
      "100% Ownership Right",
      "AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats",
      "Print Media",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "branding-plus",
    name: "BRANDING PLUS",
    price: 995,
    wasPrice: 1990,
    features: [
      "Logo Design",
      "12 Unique Logo Concepts",
      "FREE Icon",
      "FREE Grayscale Copy",
      "Unlimited Revisions",
      "100% Ownership Right",
      "AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats",
      "Print Material",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "branding-classic",
    name: "BRANDING CLASSIC",
    price: 1495,
    wasPrice: 2990,
    features: [
      "Logo Design",
      "12 Unique Logo Concepts",
      "FREE Icon",
      "FREE Grayscale Copy",
      "Unlimited Revisions",
      "100% Ownership Right",
      "AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats",
      "Print Material",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "branding-ultimate",
    name: "BRANDING ULTIMATE",
    price: 1995,
    wasPrice: 3990,
    features: [
      "Logo Design",
      "Infinite Unique Logo Concepts",
      "FREE Icon",
      "FREE Grayscale Copy",
      "Unlimited Revisions",
      "100% Ownership Right",
      "AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats",
      "Print Material",
    ],
    note: "Suitable for potential banner startups and brand revamp for companies.",
  },
];

const ecommercePlans: PackagePlan[] = [
  {
    id: "beginners-ecommerce",
    name: "BEGINNERS E-COMMERCE",
    price: 999,
    wasPrice: 1799,
    features: [
      "E-Commerce Website Design and Development",
      "Customized Theme Based Design",
      "7 Banner Designs",
      "Sliding Banner",
      "7 Stock Photos",
      "Unlimited Revisions",
      "Hover Effects",
      "Up to 100 Products",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "corporate-ecommerce",
    name: "CORPORATE E-COMMERCE",
    price: 1799,
    wasPrice: 3299,
    features: [
      "E-Commerce Website Design and Development",
      "Customized Tailor-Made Design",
      "Professional, Modern, Unique Design",
      "10 Banner Designs",
      "Sliding Banner",
      "10 Stock Photos",
      "Unlimited Revisions",
      "Special Hover Effects",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "elite-ecommerce",
    name: "ELITE E-COMMERCE",
    price: 3699,
    wasPrice: 7199,
    features: [
      "E-Commerce Website Design and Development",
      "Customized Tailor-Made Design",
      "Professional, Modern, Interactive, Dynamic, Unique Design",
      "User-Friendly Navigation",
      "15 Banner Designs",
      "Sliding Banner",
      "15 Stock Photos",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "custom-ecommerce-marketplace",
    name: "CUSTOM E-COMMERCE MARKETPLACE PACKAGE",
    price: 6999,
    wasPrice: 13399,
    features: [
      "E-Commerce Website Design and Development",
      "Customized Tailor-Made Design",
      "Professional, Modern, Interactive, Dynamic, Unique Design",
      "User-Friendly Navigation",
      "20 Banner Designs",
      "Sliding Banner",
      "20 Stock Photos",
    ],
    note: "Suitable for potential up-and-coming startups and brand concepts for companies.",
  },
];

const wordpressPlans: PackagePlan[] = [
  {
    id: "wordpress-startup",
    name: "WORDPRESS STARTUP PACKAGE",
    price: 234,
    wasPrice: 458,
    features: [
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "48 to 72 hours TAT",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "wordpress-professional",
    name: "WORDPRESS PROFESSIONAL WEBSITE PACKAGE",
    price: 655,
    wasPrice: 1300,
    features: [
      "10 Unique Pages Website",
      "CMS / Admin Panel Support",
      "8 Stock Images",
      "5 Banner Designs",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "48 to 72 hours TAT",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "wordpress-elite",
    name: "WORDPRESS ELITE WEBSITE PACKAGE",
    price: 1255,
    wasPrice: 2500,
    features: [
      "Upto 15 Unique Pages Website",
      "Conceptual and Dynamic Website",
      "Mobile Responsive",
      "Online Reservation/Appointment Tool (Optional)",
      "Online Payment Integration (Optional)",
      "Custom Forms",
      "Lead Capturing Form (Optional)",
      "Striking Hover Effects",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "wordpress-corporate",
    name: "WORDPRESS CORPORATE WEBSITE PACKAGE",
    price: 1955,
    wasPrice: 3900,
    features: [
      "15 to 20 Pages Website",
      "Custom Made, Interactive, Dynamic & High End Design",
      "Custom WP (or) Custom PHP Development",
      "1 jQuery Slider Banner",
      "Up to 10 Custom Made Banner Designs",
      "10 Stock Images",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "wordpress-business",
    name: "WORDPRESS BUSINESS WEBSITE PACKAGE",
    price: 2455,
    wasPrice: 4900,
    features: [
      "15 Seconds 2D Explainer Video",
      "Voice - Over & Sound Effects",
      "Professional Script Writing",
      "Storyboard",
      "SEO Meta Tags",
      "15 to 20 Pages Website",
      "Custom Made, Interactive, Dynamic & High End Design",
    ],
    note: "Suitable for potential owner-startups and brand revamps for companies.",
  },
];

const shopifyPlans: PackagePlan[] = [
  {
    id: "shopify-starter",
    name: "SHOPIFY STARTER PACKAGE",
    price: 499,
    wasPrice: 798,
    features: [
      "Custom designed Homepage (1x concepts)",
      "5 Custom designed inner pages",
      "Upto 25 to 50 Products",
      "Upto 7 Categories",
      "Content Management System",
      "Sales & Inventory Management",
      "Mini Shopping Cart Integration",
      "Payment Gateway Integration",
    ],
    note: "Suitable for potential space-ups and brand revamps for companies.",
  },
  {
    id: "shopify-professional",
    name: "SHOPIFY PROFESSIONAL PACKAGE",
    price: 995,
    wasPrice: 1990,
    features: [
      "Custom designed Homepage (2x concepts)",
      "10 Custom designed inner pages",
      "Interactive and Dynamic Website Design",
      "Upto 50 - 250 Products",
      "Upto 10 Categories",
      "15 Premium Stock Photos",
      "3 Promotional Banners",
      "Landing Page Design",
    ],
    note: "Suitable for potential space-ups and brand revamps for companies.",
  },
  {
    id: "professional-shopify",
    name: "PROFESSIONAL SHOPIFY PACKAGE",
    price: 1395,
    wasPrice: 1995,
    features: [
      "Customized Design",
      "Up-To 500 Products",
      "Content Management System (CMS)",
      "Full Shopping Cart Integration",
      "Payment Module Integration",
      "Easy Product Search",
      "Product Reviews",
      "5 Promotional Banners",
    ],
    note: "Suitable for potential space-ups and brand revamps for companies.",
  },
  {
    id: "shopify-business",
    name: "SHOPIFY BUSINESS PACKAGE",
    price: 2695,
    wasPrice: 5390,
    features: [
      "Custom designed Homepage (3x concepts)",
      "20 Custom designed inner pages",
      "Interactive and Dynamic Website Design",
      "Upto 250 - 1000 Products",
      "Upto 20 Categories",
      "25 Premium Stock Photos",
      "10 Promotional Banners",
      "2 Landing Pages Design",
    ],
    note: "Suitable for potential space-ups and brand revamps for companies.",
  },
  {
    id: "shopify-enterprise",
    name: "SHOPIFY ENTERPRISE PACKAGE",
    price: 4994,
    wasPrice: 9988,
    features: [
      "Custom designed Homepage (5x concepts)",
      "Unlimited Custom designed inner pages",
      "Custom Made Interactive, Dynamic & User Friendly Design",
      "High End UI/UX",
      "Custom Coding & Development",
      "Marketplace Development (Optional)",
      "Content Management System",
    ],
    note: "Suitable for potential space-ups and brand revamps for companies.",
  },
];

const videoAnimationPlans: PackagePlan[] = [
  {
    id: "teaser-intro-video",
    name: "TEASER/INTRO VIDEO",
    price: 149,
    wasPrice: 299,
    features: [
      "10 Seconds Video",
      "Professional Script",
      "Sample Theme",
      "Storyboard",
      "Custom Artwork",
      "Animation",
      "Professional Voice - Over & Sound Effects",
      "1 week Delivery",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "startup-video",
    name: "STARTUP VIDEO",
    price: 199,
    wasPrice: 399,
    features: [
      "30s Duration - HD 1080",
      "Professional Script",
      "Storyboard",
      "Sample Themes",
      "Custom Setting, Characters & Graphics",
      "Animation Effects & Visualization",
      "Voice - Over & Sound Effects (All accents) (M/F)",
      "Unlimited Revisions",
    ],
    note: "Suitable for newly formed organizations, or small incubated startups.",
  },
  {
    id: "classic-video",
    name: "CLASSIC VIDEO",
    price: 399,
    wasPrice: 799,
    features: [
      "60 Second Video - HD 1080",
      "Professional Script",
      "Sample Theme",
      "Storyboard",
      "Animation",
      "Voice - Over & Sound Effects",
      "3 weeks Delivery",
      "Unlimited Revisions",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "premium-video",
    name: "PREMIUM VIDEO",
    price: 699,
    wasPrice: 1399,
    features: [
      "90 Second Video - HD 1080",
      "Professional Script",
      "Sample Theme",
      "Storyboard",
      "Animation",
      "Voice - Over & Sound Effects",
      "5 weeks Delivery",
      "Unlimited Revisions",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "deluxe-video",
    name: "DELUXE VIDEO",
    price: 899,
    wasPrice: 1799,
    features: [
      "120 Second Video - HD 1080",
      "Professional Script",
      "Sample Theme",
      "Storyboard",
      "Animation",
      "Voice - Over & Sound Effects",
      "Unlimited Revisions",
    ],
    note: "Suitable for potential upscale startups and brand revamps for companies.",
  },
];

const seoPlans: PackagePlan[] = [
  {
    id: "seo-startup",
    name: "STARTUP PLAN PACKAGE",
    price: 360,
    wasPrice: 700,
    features: [
      "Website & Technical SEO Audit",
      "10 Selected Keywords Targeting",
      "Keyword Research & Mapping",
      "On-Page Optimization",
      "Meta Tags Creation",
      "FAQ Schema Markup (AEO)",
      "AI Answer Optimization (Basic)",
      "SEO Roadmap",
      "Blog Creation",
    ],
    note: "Suitable for newly formed businesses",
  },
  {
    id: "seo-scaling",
    name: "SCALING PLAN PACKAGE",
    price: 760,
    wasPrice: 1400,
    features: [
      "Business Analysis",
      "Competitor Analysis",
      "35 Selected Keywords Targeting",
      "15 Pages Keyword Targeted",
      "Webpage Optimization",
      "Meta Tags Creation",
      "Full Schema Markup (FAQ, Article, HowTo)",
      "AI Citation Tracking (ChatGPT, Perplexity, Gemini)",
      "Local SEO (Google Business Profile)",
    ],
    note: "Suitable for growing businesses",
  },
  {
    id: "seo-venture",
    name: "VENTURE PLAN PACKAGE",
    price: 1210,
    wasPrice: 1999,
    features: [
      "Business Analysis",
      "Consumer Analysis",
      "Competitor Analysis",
      "60+ Selected Keywords Targeting",
      "30 Pages Keyword Targeted",
      "Webpage Optimization",
      "Advanced Schema & Knowledge Graph Optimization",
      "Full AI Visibility Strategy (AEO across all platforms)",
      "Monthly AI Citation & Share-of-Voice Report",
    ],
    note: "Suitable for scaling & multi-location businesses",
  },
];

const webPortalPlans: PackagePlan[] = [
  {
    id: "web-portal-beginner",
    name: "BEGINNER KIT",
    price: 4595,
    wasPrice: 9190,
    features: [
      "Personalized designed Homepages (Two Concepts)",
      "Unlimited Custom-designed Inner pages.",
      "Personalized, Interactive, Vibrant & User Friendly Design",
      "Premium UI/UX",
      "Specialized Coding & Development",
      "Unlimited Premium Stock Photos",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "web-portal-expert",
    name: "EXPERT PACKAGE",
    price: 7595,
    wasPrice: 15190,
    features: [
      "Unlimited uniquely designed inner pages",
      "Individualized, Engaging, Lively & User-Centric Designs",
      "Premium UI/UX",
      "Uniquely Crafted Coding & Development",
      "Content Management System",
      "Sales & Inventory Management",
      "Vast Products",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "web-portal-corporate",
    name: "CORPORATE PLAN",
    price: 9995,
    wasPrice: 19990,
    features: [
      "Tailored Design & Development from beginning to end.",
      "Dating Portal, Job Portal, Professional Network Portal, Social Network Portal, Restaurant Portal, Medical Portal, Enterprise Portal (Any One)",
      "Unique, User Centric, Engaging, Pulsating, Premium UI Design",
      "Limitless Banner Designs",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
];

export const packageCategoryMeta: Record<
  PackageCategoryId,
  { titlePrefix: string; titleHighlight: string; description: string }
> = {
  logo: {
    titlePrefix: "Logo ",
    titleHighlight: "Packages.",
    description:
      "Choose a logo package that fits your brand — from startup concepts to full identity rollouts.",
  },
  "website-design": {
    titlePrefix: "Website Design ",
    titleHighlight: "Packages.",
    description:
      "Custom website design plans for startups, growing teams, and enterprise brands.",
  },
  branding: {
    titlePrefix: "Branding ",
    titleHighlight: "Packages.",
    description:
      "Complete branding packages with logo concepts, ownership rights, and print-ready assets.",
  },
  ecommerce: {
    titlePrefix: "E-Commerce ",
    titleHighlight: "Packages.",
    description:
      "Online store packages with tailored design, product setup, and conversion-focused layouts.",
  },
  wordpress: {
    titlePrefix: "Wordpress ",
    titleHighlight: "Packages.",
    description:
      "WordPress website packages from quick launches to high-end corporate builds.",
  },
  shopify: {
    titlePrefix: "Shopify ",
    titleHighlight: "Packages.",
    description:
      "Shopify store packages for product catalogs, payments, and scalable e-commerce growth.",
  },
  "video-animation": {
    titlePrefix: "Video Animation ",
    titleHighlight: "Packages.",
    description:
      "Explainer and promo video packages with script, storyboard, animation, and voice-over.",
  },
  seo: {
    titlePrefix: "SEO ",
    titleHighlight: "Packages.",
    description:
      "Search engine optimization plans with audits, keyword targeting, and on-page optimization.",
  },
  "web-portal": {
    titlePrefix: "Web Portal ",
    titleHighlight: "Packages.",
    description:
      "Custom web portal packages for job boards, networks, marketplaces, and enterprise platforms.",
  },
};

export function getPricingCategoryPath(_categoryId: PackageCategoryId) {
  return "/plans-and-pricing";
}

export function isPackageCategoryId(value: string): value is PackageCategoryId {
  return packageCategories.some((category) => category.id === value);
}

export const packagePlansByCategory: Record<PackageCategoryId, PackagePlan[]> = {
  logo: logoPlans,
  "website-design": websiteDesignPlans,
  branding: brandingPlans,
  ecommerce: ecommercePlans,
  wordpress: wordpressPlans,
  shopify: shopifyPlans,
  "video-animation": videoAnimationPlans,
  seo: seoPlans,
  "web-portal": webPortalPlans,
};

export const packagesActions = {
  chatHref: "https://wa.me/15732407509",
  orderHref: "/contact",
} as const;

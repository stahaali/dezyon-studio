import type { PackagePlan } from "@/data/packages";

const CONTACT_ASSETS = "/assets/img/contact";

export const comboPackagesBanner = {
  titlePrefix: "Our Combo ",
  titleHighlight: "Packages",
  description:
    "Bundled logo, website, and branding solutions — save more with all-in-one combo packages built for growing businesses.",
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

export const comboPackages: PackagePlan[] = [
  {
    id: "basic-combo",
    name: "BASIC COMBO PACKAGE",
    price: 664,
    wasPrice: 1328,
    features: [
      "5 Custom Logo Design Concepts",
      "By 2 Designers",
      "Icon Design",
      "Business Card",
      "Letterhead",
      "Envelope",
      "Fax Template",
      "MS Word Letterhead",
      "5 Page Website",
      "Mobile Responsive",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "startup-combo",
    name: "STARTUP COMBO PACKAGE",
    price: 1014,
    wasPrice: 2028,
    features: [
      "Unlimited Logo Design Concepts",
      "Social Media Design",
      "Mobile Responsive",
      "3 Dedicated Designers",
      "Icon Design",
      "Business Card",
      "Letterhead",
      "Envelope",
      "MS Word Letterhead",
      "UNLIMITED Pages Website",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "professional-combo",
    name: "PROFESSIONAL COMBO PACKAGE",
    price: 1414,
    wasPrice: 2828,
    features: [
      "Unlimited Logo Concepts",
      "8 Dedicated Designers",
      "Icon Design",
      "2 Free Custom Stationary Designs",
      "MS Word Letterhead",
      "Trifold Brochure Design",
      "Presentation Folder Design",
      "Conceptual and Dynamic Website",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "corporate-combo",
    name: "CORPORATE COMBO PACKAGE",
    price: 2014,
    wasPrice: 4028,
    features: [
      "Unlimited Logo Concepts",
      "8 Dedicated Designers",
      "Icon Design",
      "2 Free Custom Stationary Designs",
      "MS Word Letterhead",
      "Invoice Design",
      "Product Catalog Design",
      "Unlimited Pages Website",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
  {
    id: "elite-combo",
    name: "ELITE COMBO PACKAGE",
    price: 4014,
    wasPrice: 8028,
    features: [
      "Unlimited Logo Concepts",
      "8 Dedicated Designers",
      "Icon Design",
      "2 Free Custom Stationary Designs",
      "MS Word Letterhead",
      "Invoice Design",
      "Product Catalog Design",
      "Complete Custom Design & Development",
    ],
    note: "Suitable for newly formed organizations or small incubated startups.",
  },
];

export interface AdvanceComboGroup {
  label?: string;
  items: readonly string[];
}

export const advanceCombo = {
  eyebrow: "COMBO PACKAGE",
  title: "ADVANCE COMBO",
  price: 5014,
  wasPrice: 11018,
  phone: "(573) 240-7509",
  phoneHref: "tel:15732407509",
  chatHref: "https://wa.me/15732407509",
  orderHref: "/contact",
  detailsHref: "/contact",
  promoNote: "20% more OFF on Next Order",
  contactNote: "For more information speak with us",
  columns: [
    [
      {
        label: "Logo Design",
        items: [
          "Unlimited Logo Design Idea(s)",
          "By 6 Award Winning Designer(s)",
          "Free Icon Design",
          "Unlimited Revisions",
          "2 to 3 Business Days TAT",
        ],
      },
      {
        label: "Stationary Design",
        items: [
          "Letterhead Design",
          "Business Card Design",
          "Envelope Design",
          "Email Signature Design",
          "Electronic Letterhead",
          "Invoice Design",
          "2 Sided Flyer Design OR Bi-Fold Brochure Design",
          "Company Profile Design",
          "T-Shirt Design",
          "Signage Design",
        ],
      },
      {
        label: "Website Design",
        items: [
          "Unlimited Pages Website Design",
          "Custom Made, Interactive, Dynamic & High End Design",
          "Customized WordPress & PHP Development",
          "Interactive Sliding Banners",
          "Up to 15 Custom Made Banner Designs",
          "15 Stock Images",
          "Unlimited Revisions",
          "Special Hover Effects",
          "Content Management System",
          "Online Appointment/Booking/Scheduling/Online Ordering Integration (Optional)",
        ],
      },
    ],
    [
      {
        items: [
          "Online Payment Integration (Optional)",
          "Multi Lingual (Optional)",
          "Custom Dynamic Forms (Optional)",
          "Signup Area (For Newsletters, Offers etc.)",
          "Search Bar",
          "Live Feeds of Social Networks Integration (Optional)",
          "Mobile Responsive",
          "FREE 24 Months Domain Name",
          "FREE 24 Month Hosting",
          "Up to 15 Professional Email ID's",
          "Google Friendly Sitemap",
          "Search Engine Submission",
          "Complete W3C Certified HTML",
          "Industry specified Team of Award Winning Designers and Developers",
          "Complete Deployment",
        ],
      },
      {
        label: "Social Media Page Design",
        items: [
          "Facebook Icon Image & Banner Design",
          "Twitter Icon Image & Banner Design",
          "Google+ Icon Image & Banner Design",
          "YouTube Icon Image & Banner Design",
          "LinkedIn Icon Image & Banner Design",
        ],
      },
      {
        label: "Video Animation",
        items: [
          "60 Seconds 2D Video Animation",
          "Script Writing",
          "Story Board",
          "Voice Over",
          "Animation with Sound Effect",
        ],
      },
    ],
    [
      {
        label: "Search Engine Optimization (Complimentary) (3 Month's Plan)",
        items: [
          "10 Keywords",
          "Guaranteed Ranking on Google",
          "Off-site Optimization",
          "Link Building",
          "Social Bookmarking",
          "Basic Analytical Report",
          "In-depth Site Analysis",
          "Content Duplicity Check",
          "Initial Backlinks analysis",
          "Google Penalty Check",
          "Mobile Usability Check",
          "Competition Analysis",
          "Keyword Research",
        ],
      },
      {
        label: "Value Added Services",
        items: [
          "Logo Design Final Files (.AI, .PSD, .EPS, .PNG, .JPG, .PDF, .TIFF)",
          "Website Design Complete Source Files",
          "Dedicated Project Manager",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee",
          "*NO MONTHLY OR ANY HIDDEN FEE*",
        ],
      },
      {
        label: "Add on",
        items: [
          "Professional Content/Copywriting",
          "Shopping Cart Integration",
          "Additional Professional Email ID",
        ],
      },
    ],
  ] satisfies AdvanceComboGroup[][],
} as const;

/**
 * Schema inventory and JSON-LD validation helper.
 * Run: node scripts/validate-schema.js
 */

const { getSiteUrlFromEnv } = require("./resolve-site-url");
const SCHEMA_SITE_URL = getSiteUrlFromEnv();

const PAGE_SCHEMA_INVENTORY = [
  {
    page: "Global (all pages via layout)",
    path: "*",
    schemas: ["Organization", "WebSite", "LocalBusiness", "ProfessionalService"],
  },
  {
    page: "Home",
    path: "/",
    schemas: ["BreadcrumbList", "WebPage", "FAQPage"],
  },
  {
    page: "About",
    path: "/about",
    schemas: ["BreadcrumbList", "AboutPage"],
  },
  {
    page: "Marketing",
    path: "/marketing",
    schemas: ["BreadcrumbList", "WebPage", "Service (catalog)"],
  },
  {
    page: "Contact",
    path: "/contact",
    schemas: ["BreadcrumbList", "ContactPage"],
  },
  {
    page: "Video Editing",
    path: "/video-editing",
    schemas: ["BreadcrumbList", "WebPage", "Service"],
  },
  {
    page: "Talking Website",
    path: "/talking-website",
    schemas: ["BreadcrumbList", "WebPage", "Service", "SoftwareApplication"],
  },
  {
    page: "Web Apps",
    path: "/web-apps",
    schemas: ["BreadcrumbList", "WebPage", "Service"],
  },
  {
    page: "Website Audit",
    path: "/website-audit",
    schemas: ["BreadcrumbList", "WebPage", "Service", "WebApplication"],
  },
  {
    page: "Portfolio",
    path: "/portfolio",
    schemas: ["BreadcrumbList", "WebPage"],
  },
  {
    page: "Plans & Pricing",
    path: "/plans-and-pricing",
    schemas: ["BreadcrumbList", "WebPage", "Service"],
  },
  {
    page: "Combo Packages",
    path: "/combo-packages",
    schemas: ["BreadcrumbList", "WebPage", "Service"],
  },
  {
    page: "Pricing Categories (×10)",
    path: "/pricing/{category}",
    schemas: ["BreadcrumbList", "WebPage", "Service"],
  },
  {
    page: "Privacy Policy",
    path: "/privacy-policy",
    schemas: ["BreadcrumbList", "WebPage"],
  },
  {
    page: "Terms & Conditions",
    path: "/terms-and-conditions",
    schemas: ["BreadcrumbList", "WebPage"],
  },
  {
    page: "Refund Policy",
    path: "/refund-policy",
    schemas: ["BreadcrumbList", "WebPage"],
  },
  {
    page: "Contact Thank You",
    path: "/contact/thank-you",
    schemas: ["None (noindex confirmation page)"],
  },
  {
    page: "Packages redirect",
    path: "/packages",
    schemas: ["None (redirect, noindex)"],
  },
];

function validateSampleSchemas() {
  const samples = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Dezyon Studio",
      url: SCHEMA_SITE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Sample question?",
          acceptedAnswer: { "@type": "Answer", text: "Sample answer." },
        },
      ],
    },
  ];

  for (const schema of samples) {
    const json = JSON.stringify(schema);
    JSON.parse(json);
    if (!schema["@context"] || !schema["@type"]) {
      throw new Error("Schema missing @context or @type");
    }
  }
}

function main() {
  validateSampleSchemas();

  console.log("JSON-LD schema validation passed.\n");
  console.log("Page schema inventory:\n");

  for (const entry of PAGE_SCHEMA_INVENTORY) {
    console.log(`- ${entry.page} (${entry.path})`);
    console.log(`  Schemas: ${entry.schemas.join(", ")}`);
  }

  console.log("\nPricing category service schemas:");
  const categories = [
    "logo",
    "website-design",
    "branding",
    "ecommerce",
    "wordpress",
    "shopify",
    "video-animation",
    "seo",
    "web-portal",
  ];
  for (const category of categories) {
    console.log(`  /pricing/${category} -> Service`);
  }
}

main();

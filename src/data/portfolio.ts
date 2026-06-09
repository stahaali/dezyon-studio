const CONTACT_ASSETS = "/assets/img/contact";

export const portfolioBanner = {
  titlePrefix: "Our creative ",
  titleHighlight: "portfolio.",
  description:
    "Explore selected websites and digital experiences crafted for brands that want to stand out online.",
  stars: {
    left: { src: `${CONTACT_ASSETS}/star-2.svg`, width: 20, height: 28 },
    right: { src: `${CONTACT_ASSETS}/star-1.svg`, width: 42, height: 47 },
  },
} as const;

export const portfolioGrid = {
  titlePrefix: "Featured ",
  titleHighlight: "projects",
  titleSuffix: "",
  description:
    "A curated selection of websites, brands, and digital products we have designed and built.",
} as const;

export const portfolioProjects = [
  {
    id: "nova-commerce",
    title: "Nova Commerce",
    category: "E-commerce",
    image: "/assets/img/features/feature-image-01.jpg",
    href: "#",
  },
  {
    id: "pulse-analytics",
    title: "Pulse Analytics",
    category: "SaaS Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
  {
    id: "studio-maven",
    title: "Studio Maven",
    category: "Creative Agency",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
  {
    id: "orbit-mobile",
    title: "Orbit Mobile",
    category: "App Landing",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
  {
    id: "ledger-finance",
    title: "Ledger Finance",
    category: "Fintech",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
  {
    id: "launchpad-startup",
    title: "Launchpad",
    category: "Startup",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
] as const;

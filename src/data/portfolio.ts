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
  previews: [
    {
      id: "preview-1",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=80",
      alt: "Analytics dashboard website preview",
      tilt: -7,
      position: "one",
    },
    {
      id: "preview-2",
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=640&q=80",
      alt: "Mobile website interface preview",
      tilt: 5,
      position: "two",
    },
    {
      id: "preview-3",
      src: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=640&q=80",
      alt: "Creative agency website preview",
      tilt: -4,
      position: "three",
    },
    {
      id: "preview-4",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&q=80",
      alt: "SaaS product website preview",
      tilt: 8,
      position: "four",
    },
    {
      id: "preview-5",
      src: "https://images.unsplash.com/photo-1499951360447-b19be8fe36f5?auto=format&fit=crop&w=640&q=80",
      alt: "E-commerce website preview",
      tilt: -6,
      position: "five",
    },
    {
      id: "preview-6",
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=640&q=80",
      alt: "Startup landing page preview",
      tilt: 4,
      position: "six",
    },
  ],
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
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe36f5?auto=format&fit=crop&w=900&q=80",
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

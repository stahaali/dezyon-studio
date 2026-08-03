const TEAM_ASSETS = "/assets/img/team";

export const homeGrowthTeamSection = {
  titlePrefix: "Meet Your ",
  titleHighlight: "AI",
  titleSuffix: " Growth Team",
  subtitle:
    "A team of AI experts, strategists, and creative minds working together to scale your brand beyond limits.",
} as const;

export const homeGrowthTeamMembers = [
  {
    id: "social",
    role: "Social Media Strategist",
    tagline: "Growing Brands Organically & Paid",
    highlights: ["Social Media Expert", "250+ Campaigns Run"],
    image: `${TEAM_ASSETS}/team-05.webp`,
    imageAlt: "Social media strategist portrait",
  },
  {
    id: "founder",
    role: "Founder & Growth Director",
    tagline: "Strategy. Innovation. Growth.",
    highlights: ["8+ Years Experience", "500+ Projects"],
    image: `${TEAM_ASSETS}/team-01.webp`,
    imageAlt: "Founder and growth director portrait",
  },
  {
    id: "website",
    role: "AI Website Architect",
    tagline: "Building Smart, High-Converting Websites",
    highlights: ["Web Development Expert", "200+ Websites Built"],
    image: `${TEAM_ASSETS}/team-09.jpg`,
    imageAlt: "AI website architect portrait",
  },
  {
    id: "automation",
    role: "Automation Expert",
    tagline: "Automating Workflows, Maximizing Results",
    highlights: ["AI Automation Specialist", "100+ Automations Built"],
    image: `${TEAM_ASSETS}/team-04.webp`,
    imageAlt: "Automation expert portrait",
  },
  {
    id: "video",
    role: "AI Video Specialist",
    tagline: "Creating Scroll-Stopping AI Videos",
    highlights: ["AI Video Ads Expert", "300+ Videos Created"],
    image: `${TEAM_ASSETS}/team-02.webp`,
    imageAlt: "AI video specialist portrait",
  },
] as const;

export const homeGrowthTeamCta = {
  logoSrc: "/assets/img/logo-1-322.webp",
  logoAlt: "Dezyon Studio",
  titlePrefix: "Ready to ",
  titleHighlight: "Grow",
  titleSuffix: " Your Business?",
  subtitle: "Let our AI team create magic for your brand.",
  buttonLabel: "Start Your Project",
  buttonHref: "/contact",
} as const;

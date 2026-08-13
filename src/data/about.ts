import { flaticonIcons } from "@/data/icons";

const ABOUT_ASSETS = "/assets/img/about";
const TEAM_ASSETS = "/assets/img/team";
const PROCESS_ASSETS = "/assets/img/process";

export const aboutHero = {
  titlePrefix: "Welcome to Dezyon ",
  titleHighlight: "Studio",
  description:
    "Dezyon Studio is a modern digital agency focused on transforming how businesses grow in the online world. We don't just build websites or create content—we design intelligent digital systems powered by AI that help brands attract, engage, and convert customers more effectively.",
  tagline: "Transform Your Brand with AI-Powered Digital Solutions.",
  bannerImageAlt: "Dezyon Studio team and workspace hero background",
} as const;

export const aboutShowcase = {
  left: {
    image: `${ABOUT_ASSETS}/hero-about-01.webp`,
    illustration: {
      src: `${ABOUT_ASSETS}/hand-pencil.svg`,
      width: 140,
      height: 281,
      alt: "Decorative hand-with-pencil illustration",
    },
  },
  right: {
    image: `${ABOUT_ASSETS}/hero-about-02.webp`,
    illustration: {
      src: `${ABOUT_ASSETS}/empathing.svg`,
      width: 212,
      height: 175,
      alt: "Decorative empathy illustration",
    },
  },
} as const;

export const aboutHelps = {
  title: {
    prefix: "We Build Intelligent",
    highlight: "Digital Solutions",
  },
  paragraphs: [
    "Dezyon Studio - Where creators become brands and brands become businesses. Where AI Meets Creativity to Build Future-Ready Businesses Dezyon Studio is a modern digital agency focused on transforming how businesses grow in the online world.",
  ],
  features: [
    { label: "Creative Visual Storytelling", tone: "impact" },
    { label: "High-Quality Production", tone: "fun" },
    { label: "Professional Video Editing", tone: "learn" },
    { label: "Modern Video Equipment", tone: "schedule" },
  ] as const,
  visuals: {
    image: `${ABOUT_ASSETS}/about-helps.webp`,
    imageAlt:
      "Digital strategist working on a laptop with an analytics dashboard",
  },
} as const;

export const aboutStats = [
  { value: "2014", label: "Lexend founded." },
  { value: "50", label: "Hardworking group." },
  { value: "100k", label: "Document workflows." },
] as const;

export const aboutValues = [
  {
    iconId: "impact",
    title: "Make An Impact",
    description:
      "We're building something big. Something that has the power to change the trajectory of any sized business for the better.",
  },
  {
    iconId: "learn",
    title: "Learn",
    description:
      "Dezyon Studio are masters of their craft. Even though we're all experts in our respective fields, we always make time to expand our minds.",
  },
  {
    iconId: "fun",
    title: "Have Fun",
    description:
      "We work hard and play harder. We believe in the importance of celebrating wins big or small, for the business or individuals.",
  },
  {
    iconId: "empathy",
    title: "Empathy",
    description:
      "We strive to be empathetic to every customer and colleague and by doing so we can provide a better experience for all.",
  },
] as const;

export const aboutFloatingIcons = [
  { src: `${ABOUT_ASSETS}/star-1.svg`, className: "starOne", width: 32, height: 32 },
  { src: `${ABOUT_ASSETS}/star-2.svg`, className: "starTwo", width: 24, height: 24 },
  { src: flaticonIcons.trophyLime, className: "iconTrophy", width: 56, height: 56 },
  { src: flaticonIcons.globeLime, className: "iconGlobe", width: 56, height: 56 },
  { src: flaticonIcons.crownLime, className: "iconCrown", width: 56, height: 56 },
  { src: flaticonIcons.diamondLime, className: "iconDiamond", width: 56, height: 56 },
  { src: flaticonIcons.thinkingLime, className: "iconThinking", width: 56, height: 56 },
  { src: flaticonIcons.messageLime, className: "iconMessage", width: 56, height: 56 },
] as const;

export const aboutTestimonials = [
  {
    quote:
      "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
    name: "Mark Zellers",
    role: "CEO, Co-Founder.",
    avatar: `${TEAM_ASSETS}/team-01.webp`,
  },
  {
    quote:
      "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
    name: "Natalia Larsson",
    role: "Director of Sales",
    avatar: `${TEAM_ASSETS}/team-06.webp`,
  },
  {
    quote:
      "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder just outstanding!",
    name: "Sarah Edrissi",
    role: "Lead Marketing",
    avatar: `${TEAM_ASSETS}/team-07.webp`,
  },
] as const;

export const aboutTeamMembers = [
  { name: "Mark Zellers", role: "Founder & CEO", image: `${TEAM_ASSETS}/team-01.webp` },
  { name: "John Zellers", role: "Co-Founder", image: `${TEAM_ASSETS}/team-02.webp` },
  { name: "Kim Yun Son", role: "Engineering Manager", image: `${TEAM_ASSETS}/team-03.webp` },
  { name: "André Garcia", role: "Product Manager", image: `${TEAM_ASSETS}/team-04.webp` },
  { name: "Peter Lary", role: "UX Researcher", image: `${TEAM_ASSETS}/team-05.webp` },
  { name: "Henry Matt", role: "Customer Success", image: `${TEAM_ASSETS}/team-06.webp` },
  { name: "Natalia", role: "Lead of Fun", image: `${TEAM_ASSETS}/team-07.webp` },
  { name: "Larry", role: "Director of Joy", image: `${TEAM_ASSETS}/team-08.webp` },
] as const;

export const aboutTimeline = [
  {
    year: "2014",
    description: "Where the idea come up of Lexend :)",
    image: `${PROCESS_ASSETS}/timeline-01.webp`,
  },
  {
    year: "2015",
    description:
      "Launched our first business that can be created in minutes, build meaningful relationships.",
    image: `${PROCESS_ASSETS}/timeline-02.webp`,
  },
  {
    year: "2016",
    description: "Opened our new office in Toronto, CA",
    image: `${PROCESS_ASSETS}/timeline-03.webp`,
  },
  {
    year: "2019",
    description:
      "Moved to Silicon Valley whereas now we can focus on building out to help our employees.",
    image: `${PROCESS_ASSETS}/timeline-04.webp`,
    active: true,
  },
  {
    year: "2020",
    description: "Opened a new office in London, UK.",
    image: `${PROCESS_ASSETS}/timeline-05.webp`,
  },
  {
    year: "Today",
    description: "Top-rated software solution for service suppliers.",
    image: `${PROCESS_ASSETS}/timeline-06.webp`,
  },
] as const;

export const aboutChoose = {
  title: "Why brands choose Dezyon Studio?",
  cards: [
    {
      id: "services",
      variant: "light" as const,
      title: "Every service you need to grow, all in one place",
      description:
        "Where creative design meets AI, built for brands that want to scale. Websites, video, marketing, and everything in between—alongside intelligent tools that save time, sharpen your presence, and keep every channel on-brand.",
      video: {
        src: "https://assets.elements.envato.com/apps/storefront/categories.compressed-da70d422014faf4cd1a0.webm",
        width: 412,
        height: 217,
        alt: "Creative services and digital assets showcase",
      },
      cta: null,
    },
    {
      id: "ai-tools",
      variant: "light" as const,
      title: "AI tools built for how you actually work",
      description:
        "From AI video and voice-driven websites to intelligent marketing campaigns—we build systems that save time, scale output, and keep your brand consistent across every channel.",
      video: {
        src: "https://assets.elements.envato.com/apps/storefront/assets.compressed-927e2a8084f1868f310b.webm",
        width: 412,
        height: 217,
        alt: "AI-powered creative tools in action",
      },
      cta: null,
    },
    {
      id: "partnership",
      variant: "light" as const,
      title: "The best value in one partnership",
      description:
        "One team for strategy, design, video, and growth—so you spend less time coordinating vendors and more time building your business.",
      video: {
        src: "https://assets.elements.envato.com/apps/storefront/unlimited.compressed-d5c358ace72cad376519.webm",
        width: 412,
        height: 217,
        alt: "Dezyon Studio partnership and growth showcase",
      },
      cta: { label: "Start now", href: "/contact" },
    },
  ],
} as const;

export const aboutCareers = {
  title: "We're looking for people who share our vision!",
  description: "Have what it takes to be one of us.",
  cta: { label: "View current openings", href: "/contact" },
  illustrations: {
    left: {
      src: `${ABOUT_ASSETS}/thinking.svg`,
      width: 233,
      height: 236,
      alt: "Person thinking illustration",
    },
    right: {
      src: `${ABOUT_ASSETS}/send-message.svg`,
      width: 240,
      height: 215,
      alt: "Send message illustration",
    },
    stars: [
      {
        src: `${ABOUT_ASSETS}/star-1.svg`,
        width: 32,
        height: 32,
        alt: "Decorative star accent",
      },
      {
        src: `${ABOUT_ASSETS}/star-2.svg`,
        width: 24,
        height: 24,
        alt: "Decorative star accent",
      },
    ],
  },
} as const;

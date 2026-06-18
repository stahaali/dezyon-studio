import { flaticonIcons } from "@/data/icons";

const ABOUT_ASSETS = "/assets/img/about";
const ABOUT_MEDIA = "/assets/about";

export const aboutHero = {
  titlePrefix: "Welcome to Dezyon ",
  titleHighlight: "Studio",
  description:
    "Dezyon Studio is a modern digital agency focused on transforming how businesses grow in the online world. We don't just build websites or create content—we design intelligent digital systems powered by AI that help brands attract, engage, and convert customers more effectively.",
  tagline: "Transform Your Brand with AI-Powered Digital Solutions.",
} as const;

export const aboutShowcase = {
  left: {
    image: `${ABOUT_ASSETS}/hero-about-01.jpg`,
    illustration: {
      src: `${ABOUT_ASSETS}/hand-pencil.svg`,
      width: 140,
      height: 281,
    },
  },
  right: {
    image: `${ABOUT_ASSETS}/hero-about-02.jpg`,
    illustration: {
      src: `${ABOUT_ASSETS}/empathing.svg`,
      width: 212,
      height: 175,
    },
  },
} as const;

export const aboutHelps = {
  title: {
    prefix: "We Build Intelligent",
    highlight: "Digital Solutions",
  },
  paragraphs: [
    "Dezyon Studio - Where creators become brands and brands become businesses. Where AI Meets Creativity to Build Future-Ready Businesses Dezyon Studio is a modern digital agency focused on transforming how businesses grow in the online world. We don’t just build websites or create content—we design intelligent digital systems powered by AI that help brands attract, engage, and convert customers more effectively. In a world where attention is everything, we help businesses stand out with solutions that are not only visually powerful but also smart and interactive. We specialize in Custom Website Development, Talking Website, AI Video Creation, AI Receptionist Systems, and Professional Video Editing, AI Video Reels & Business Branding Ads"
  ],
  illustration: {
    src: `${ABOUT_ASSETS}/walking.svg`,
    width: 224,
    height: 226,
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
      "Lexend team are masters of their craft. Even though we're all experts in our respective fields, we always make time to expand our minds.",
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
    avatar: `${ABOUT_MEDIA}/team-01.jpg`,
  },
  {
    quote:
      "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
    name: "Natalia Larsson",
    role: "Director of Sales",
    avatar: `${ABOUT_MEDIA}/team-06.jpg`,
  },
  {
    quote:
      "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder just outstanding!",
    name: "Sarah Edrissi",
    role: "Lead Marketing",
    avatar: `${ABOUT_MEDIA}/team-07.jpg`,
  },
] as const;

export const aboutTeamMembers = [
  { name: "Mark Zellers", role: "Founder & CEO", image: `${ABOUT_MEDIA}/team-01.jpg` },
  { name: "John Zellers", role: "Co-Founder", image: `${ABOUT_MEDIA}/team-02.jpg` },
  { name: "Kim Yun Son", role: "Engineering Manager", image: `${ABOUT_MEDIA}/team-03.jpg` },
  { name: "André Garcia", role: "Product Manager", image: `${ABOUT_MEDIA}/team-04.jpg` },
  { name: "Peter Lary", role: "UX Researcher", image: `${ABOUT_MEDIA}/team-05.jpg` },
  { name: "Henry Matt", role: "Customer Success", image: `${ABOUT_MEDIA}/team-06.jpg` },
  { name: "Natalia", role: "Lead of Fun", image: `${ABOUT_MEDIA}/team-07.jpg` },
  { name: "Larry", role: "Director of Joy", image: `${ABOUT_MEDIA}/team-08.jpg` },
] as const;

export const aboutTimeline = [
  {
    year: "2014",
    description: "Where the idea come up of Lexend :)",
    image: `${ABOUT_MEDIA}/timeline-01.jpg`,
  },
  {
    year: "2015",
    description:
      "Launched our first business that can be created in minutes, build meaningful relationships.",
    image: `${ABOUT_MEDIA}/timeline-02.jpg`,
  },
  {
    year: "2016",
    description: "Opened our new office in Toronto, CA",
    image: `${ABOUT_MEDIA}/timeline-03.jpg`,
  },
  {
    year: "2019",
    description:
      "Moved to Silicon Valley whereas now we can focus on building out to help our employees.",
    image: `${ABOUT_MEDIA}/timeline-04.jpg`,
    active: true,
  },
  {
    year: "2020",
    description: "Opened a new office in London, UK.",
    image: `${ABOUT_MEDIA}/timeline-05.jpg`,
  },
  {
    year: "Today",
    description: "Top-rated software solution for service suppliers.",
    image: `${ABOUT_MEDIA}/timeline-06.jpg`,
  },
] as const;

export const aboutCareers = {
  title: "We're looking for people who share our vision!",
  description: "Have what it takes to be one of us.",
  cta: { label: "View current openings", href: "/contact" },
  illustrations: {
    left: { src: `${ABOUT_ASSETS}/thinking.svg`, width: 233, height: 236 },
    right: { src: `${ABOUT_ASSETS}/send-message.svg`, width: 240, height: 215 },
    stars: [
      { src: `${ABOUT_ASSETS}/star-1.svg`, width: 32, height: 32 },
      { src: `${ABOUT_ASSETS}/star-2.svg`, width: 24, height: 24 },
    ],
  },
} as const;

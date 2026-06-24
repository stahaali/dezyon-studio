export const talkingWebsiteHero = {
  badge: "AI-Powered Voice Sales",
  titlePrefix: "Talking ",
  titleHighlight: "Website",
  subtitle: "Your Website That Speaks, Engages & Converts",
  description: [
    "Imagine a website that doesn't just display information—it actively talks to your visitors, answers questions, guides customers, and helps generate leads around the clock.",
  ],
  ctas: {
    primary: { label: "Get Started" },
  },
  bannerImage: "/assets/img/talking-website/talking-website-banner.webp",
  bannerImageAlt: "Team collaborating around a talking website project",
} as const;

export const talkingWebsiteTaglines = [
  "A Website That Talks Back.",
  "Your Best Salesperson Lives On Your Website.",
  "Turn Visitors Into Customers Through Conversation.",
] as const;

export const talkingWebsiteStepsIntro =
  "Hi! I'm your AI guide. Let me walk you through how your Talking Website works:" as const;

export const talkingWebsiteSteps = [
  {
    step: 1,
    title: "Visitor Lands On Website",
    message: "Someone visits your site — I'm already online and ready to greet them.",
  },
  {
    step: 2,
    title: "Click To Talk Button",
    message: "They tap Talk — and I start a natural voice conversation instantly.",
  },
  {
    step: 3,
    title: "AI Voice Assistant Responds",
    message: "I answer questions, explain your services, and keep them engaged.",
  },
  {
    step: 4,
    title: "WhatsApp & Email Notifications",
    message: "I ask the right questions and capture qualified lead details.",
  },
  {
    step: 5,
    title: "Appointment Booking",
    message: "I book meetings on the spot — no waiting, no back-and-forth.",
  },
  {
    step: 6,
    title: "Automated Follow-Up",
    message: "I send follow-ups automatically so no lead ever slips away.",
  },
] as const;

export const talkingWebsiteFeatures = [
  "Real-Time Voice Conversations",
  "Appointment Scheduling",
  "Lead Qualification",
  "WhatsApp & Email Notifications",
  "Multi-Language Support",
  "CRM Integration",
  "24/7 Availability",
] as const;

export const talkingWebsiteUseCases = [
  "Real Estate",
  "Law Firms",
  "Clinics",
  "Home Services",
  "Agencies",
  "E-commerce",
  "SaaS Companies",
] as const;

export const talkingWebsitePricing = [
  {
    id: "starter",
    name: "Starter",
    price: "$99",
    priceNote: "/ Month",
    description: "Perfect for small businesses.",
    features: [
      "100 AI Call Minutes Included",
      "Lead Capture",
      "Google Sheets Integration",
      "Call Summaries",
      "Basic AI Call Handling",
      "Contact Form Automation",
      "Email Notifications",
      "24/7 Availability",
    ],
    cta: { label: "Get Started", href: "/contact" },
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "$299",
    priceNote: "/ Month",
    description: "For growing businesses needing automation.",
    features: [
      "500 AI Call Minutes Included",
      "WhatsApp Integration",
      "Email Integration",
      "Appointment Booking",
      "Lead Qualification",
      "SMS & Follow-Up Automation",
      "CRM Lead Delivery",
      "Google Calendar Integration",
      "Advanced Conversation Flows",
    ],
    cta: { label: "Get Started", href: "/contact" },
    featured: true,
  },
  {
    id: "business",
    name: "Business",
    price: "$599",
    priceNote: "/ Month",
    description: "For high-volume businesses and agencies.",
    features: [
      "1,500 AI Call Minutes Included",
      "Custom Admin Portal",
      "Live Call Transfers",
      "Advanced Automations",
      "Multi-Location Support",
      "Team Management",
      "CRM Integration",
      "API Access",
      "White-Label Option",
      "Dedicated Support",
    ],
    cta: { label: "Get Started", href: "/contact" },
    featured: false,
  },
] as const;

export const talkingWebsiteBenefitsIntro =
  "Let me tell you why businesses choose us — here's why a Talking Website is worth it:" as const;

export const talkingWebsiteBenefits = [
  {
    title: "Higher Conversion Rates",
    description: "Guide visitors through voice — turn passive browsers into booked calls.",
    stat: "↑ 40%",
  },
  {
    title: "Faster Response Time",
    description: "Instant AI replies in seconds, not hours. No queue, no wait.",
    stat: "< 3s",
  },
  {
    title: "Reduced Staffing Cost",
    description: "Handle routine inquiries automatically and free your team for high-value work.",
    stat: "−60%",
  },
  {
    title: "Never Miss Leads",
    description: "Capture every visitor 24/7 — nights, weekends, and holidays included.",
    stat: "24/7",
  },
  {
    title: "Scale Without Hiring",
    description: "Grow traffic and conversations without adding headcount or overhead.",
    stat: "∞",
  },
] as const;

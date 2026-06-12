import { footerContact } from "@/data/site";
import { flaticonIcons } from "@/data/icons";

const CONTACT_ASSETS = "/assets/img/contact";

export const contactBanner = {
  titlePrefix: "Let's get in ",
  titleHighlight: "Touch.",
  description:
    "Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly.",
  stars: {
    left: { src: `${CONTACT_ASSETS}/star-2.svg`, width: 20, height: 28 },
    right: { src: `${CONTACT_ASSETS}/star-1.svg`, width: 42, height: 47 },
  },
} as const;

export const contactHero = {
  testimonial: {
    quote:
      "This software simplifies the website building process, making it a breeze to manage our online presence.",
    name: "David Larry",
    role: "Founder & CEO",
    image: `${CONTACT_ASSETS}/hero-contact.jpg`,
  },
  intro:
    "Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.",
  fields: {
    name: "Full name",
    email: "Your email",
    subject: "Subject",
    message: "Your message...",
  },
  submitLabel: "Send message",
  emailNote: "Or drop us a message via",
  emailLink: { label: "email", href: `mailto:${footerContact.email}` },
} as const;

export const contactReach = {
  titlePrefix: "Other Ways To ",
  titleHighlight: "Reach",
  titleSuffix: " Us",
  items: [
    {
      icon: flaticonIcons.locationLime,
      title: "Visit Us",
      description: "17418 Moreton Ln, Spring, TX 77379",
      link: {
        label: "View on maps",
        href: "https://maps.app.goo.gl/48gTfeRFbjdxpAiK9",
      },
    },
    {
      icon: flaticonIcons.chatLime,
      title: "Via Chat",
      description: "Get instant answers.",
      link: { label: "Let's chat", href: "#" },
    },
    {
      icon: flaticonIcons.internetLime,
      title: "Report Issue",
      description: "Get priority support.",
      link: { label: "Send report", href: "#" },
    },
    {
      icon: flaticonIcons.communityLime,
      title: "Our Community",
      description: "Connect with users.",
      link: { label: "Join us now", href: "#" },
    },
  ],
} as const;

export const contactFaq = {
  titlePrefix: "Frequently Asked ",
  titleHighlight: "Questions",
  titleSuffix: "",
  items: [
    {
      question: "What services does Dezyon Studio offer?",
      blocks: [
        {
          type: "paragraph",
          parts: [
            {
              kind: "text",
              value:
                "Dezyon Studio is a full-service digital agency specializing in Logo Design, Branding, Website Development, Mobile App Development, Video Animation, Digital Marketing, and AI-Powered Solutions (including AI Chatbots, AI Receptionists, and AI Video Ads). We help businesses create modern, high-performing websites and strong brands.",
            },
          ],
        },
      ],
    },
    {
      question: "What type of businesses do you work with?",
      blocks: [
        {
          type: "paragraph",
          parts: [
            {
              kind: "text",
              value:
                "We work with small businesses to ambitious brands that want to stand out online. Our ideal clients include e-commerce stores, personal brands, and growth-focused companies.",
            },
          ],
        },
      ],
    },
    {
      question: "What is your project process?",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { kind: "text", value: "Our process typically includes:" },
          ],
        },
        {
          type: "list",
          items: [
            "Initial consultation (understanding your requirements)",
            "Strategy and proposal",
            "Design concepts and approvals",
            "Development with revisions",
            "Launch and ongoing support",
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              kind: "text",
              value:
                "We believe in a transparent and collaborative approach.",
            },
          ],
        },
      ],
    },
    {
      question: "How long does a project take?",
      blocks: [
        {
          type: "paragraph",
          parts: [
            {
              kind: "text",
              value: "Timelines vary depending on project scope:",
            },
          ],
        },
        {
          type: "list",
          items: [
            "Logo & Branding: 1–3 weeks",
            "Full Website: 4–8 weeks",
            "Mobile App: 8–16 weeks",
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              kind: "text",
              value:
                "A detailed timeline is provided in the project proposal.",
            },
          ],
        },
      ],
    },
    {
      question: "Do you create custom designs?",
      blocks: [
        {
          type: "paragraph",
          parts: [
            {
              kind: "text",
              value:
                "Yes. Every project is fully custom. We take time to understand your brand values, audience, and goals to create unique and effective designs.",
            },
          ],
        },
      ],
    },
    {
      question: "What AI services do you offer?",
      blocks: [
        {
          type: "paragraph",
          parts: [{ kind: "text", value: "We provide:" }],
        },
        {
          type: "list",
          items: [
            "AI Chatbots & AI Receptionists",
            "AI Video Ads",
            "AI Automation tools to improve business efficiency",
          ],
        },
      ],
    },
    {
      question: "How much do your services cost?",
      blocks: [
        {
          type: "paragraph",
          parts: [
            {
              kind: "text",
              value:
                "Pricing depends on the scope and complexity of the project. We offer flexible packages tailored to different needs. Please contact us for a custom quote.",
            },
          ],
        },
      ],
    },
    {
      question: "Do you allow revisions?",
      blocks: [
        {
          type: "paragraph",
          parts: [
            {
              kind: "text",
              value:
                "Yes. Our standard packages include multiple revision rounds so you get exactly what you want.",
            },
          ],
        },
      ],
    },
    {
      question: "Which countries do you serve?",
      blocks: [
        {
          type: "paragraph",
          parts: [
            {
              kind: "text",
              value:
                "We work with clients globally. Our offices are located in USA (Texas) and Canada.",
            },
          ],
        },
      ],
    },
    {
      question: "How can I contact you?",
      blocks: [
        {
          type: "list",
          items: [
            "Phone (USA): +1 346-421-2554",
            "Phone (Canada): +1 226-501-0914",
            "Email: hello@dezyonstudio.com",
          ],
        },
        {
          type: "paragraph",
          parts: [
            { kind: "text", value: "Contact Form: " },
            {
              kind: "link",
              label: "dezyonstudio.com/contact/",
              href: "/contact/",
            },
          ],
        },
      ],
    },
    {
      question: "Can I see your previous work?",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { kind: "text", value: "Yes! Visit our " },
            { kind: "link", label: "Portfolio page", href: "/portfolio/" },
            { kind: "text", value: " to view our latest projects." },
          ],
        },
      ],
    },
    {
      question: "How experienced is your team?",
      blocks: [
        {
          type: "paragraph",
          parts: [
            {
              kind: "text",
              value:
                "Our team consists of experienced designers, developers, and digital marketers who are passionate about delivering high-quality, results-driven solutions.",
            },
          ],
        },
      ],
    },
  ],
} as const;

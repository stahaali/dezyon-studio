export type CompareCellValue = boolean | string;

export type CompareFeature = {
  id: string;
  label: string;
  tooltip?: string;
  values: CompareCellValue[];
};

export type CompareFeatureGroup = {
  id: string;
  title?: string;
  features: CompareFeature[];
};

export type CompareFeatureCategory = {
  id: string;
  title: string;
  badge?: string;
  groups: CompareFeatureGroup[];
};

export type CompareModalPlan = {
  id: string;
  name: string;
  priceLabel: string;
};

export const compareModalPlans: CompareModalPlan[] = [
  { id: "core", name: "Core", priceLabel: "Annually: $20 | Monthly: $30" },
  { id: "advanced", name: "Advanced", priceLabel: "Annually: $25 | Monthly: $35" },
  { id: "ultra", name: "Ultra", priceLabel: "Annually: $35 | Monthly: $45" },
  { id: "ce-bundle", name: "CE Bundle", priceLabel: "Contact us for pricing" },
];

export function getCellValueForPlan(
  values: CompareCellValue[],
  planIndex: number
): CompareCellValue {
  if (values.length === 0) return false;
  return values[Math.min(planIndex, values.length - 1)] ?? false;
}

export const compareFeatureCategories: CompareFeatureCategory[] = [
  {
    id: "cloud-phone",
    title: "Cloud phone system",
    groups: [
      {
        id: "cloud-phone-core",
        features: [
          {
            id: "local-numbers",
            label: "Local business phone numbers",
            tooltip: "Get a local number in the area code of your choice.",
            values: [true, true, true, true],
          },
          {
            id: "toll-free",
            label: "Toll-free numbers",
            values: [false, true, true, true],
          },
          {
            id: "internet-fax",
            label: "Unlimited internet fax",
            values: [true, true, true, true],
          },
          {
            id: "auto-receptionist",
            label: "Auto-receptionist",
            values: [true, true, true, true],
          },
          {
            id: "multi-level-attendant",
            label: "Multi-level auto attendant",
            values: [false, true, true, true],
          },
          {
            id: "call-forwarding",
            label: "Call forwarding",
            values: [true, true, true, true],
          },
          {
            id: "call-recording",
            label: "On-demand call recording",
            values: [false, true, true, true],
          },
          {
            id: "business-sms",
            label: "Business SMS",
            values: ["250 sms/mo", "1,000 sms/mo", "Unlimited", "Unlimited"],
          },
          {
            id: "voicemail-to-email",
            label: "Voicemail to email",
            values: [true, true, true, true],
          },
        ],
      },
    ],
  },
  {
    id: "unified-comms",
    title: "Unified communications",
    groups: [
      {
        id: "unified-core",
        features: [
          {
            id: "team-messaging",
            label: "Team messaging and file sharing",
            tooltip: "Chat, share files, and collaborate in one place.",
            values: [true, true, true, true],
          },
          {
            id: "video-meetings",
            label: "Video meetings",
            values: ["Up to 100", "Up to 200", "Up to 200", "Up to 200"],
          },
          {
            id: "screen-sharing",
            label: "Screen sharing",
            values: [true, true, true, true],
          },
          {
            id: "call-to-video",
            label: "Convert phone calls to video meetings",
            tooltip: "Switch from an audio call to a video meeting instantly.",
            values: [false, true, true, true],
          },
          {
            id: "meeting-recording",
            label: "Meeting recording",
            values: [false, true, true, true],
          },
          {
            id: "cloud-storage",
            label: "Cloud storage for recordings",
            values: [false, "100 GB", "Unlimited", "Unlimited"],
          },
        ],
      },
    ],
  },
  {
    id: "automation-intelligence",
    title: "Automation and Intelligence",
    badge: "New AI capabilities",
    groups: [
      {
        id: "ai-video-assistant",
        title: "Personal AI Assistant for Video",
        features: [
          {
            id: "transcribe-meetings",
            label: "Transcribe meetings",
            tooltip: "Automatically generate meeting transcripts.",
            values: [false, true, true, true],
          },
          {
            id: "closed-captioning",
            label: "Provides closed captioning",
            values: [false, true, true, true],
          },
          {
            id: "meeting-summary",
            label: "AI meeting summary",
            values: [false, false, true, true],
          },
        ],
      },
      {
        id: "ai-phone-assistant",
        title: "Personal AI Assistant for Phone",
        features: [
          {
            id: "call-notes",
            label: "AI-generated call notes",
            values: [false, false, true, true],
          },
          {
            id: "call-summary",
            label: "AI call summary",
            values: [false, false, "Add-on option", true],
          },
        ],
      },
    ],
  },
  {
    id: "customer-engagement",
    title: "Customer Engagement",
    groups: [
      {
        id: "sms-booster",
        title: "Business SMS Booster",
        features: [
          {
            id: "shared-sms",
            label: "Shared SMS inbox",
            values: [false, "Add-on option", true, true],
          },
          {
            id: "reply-templates",
            label: "Company reply templates",
            values: [false, true, true, true],
          },
        ],
      },
      {
        id: "call-queue",
        title: "Call Queue Booster",
        features: [
          {
            id: "call-queues",
            label: "Call queues",
            values: [false, true, true, true],
          },
          {
            id: "queue-analytics",
            label: "Analytics",
            values: [false, false, true, true],
          },
        ],
      },
    ],
  },
  {
    id: "administration",
    title: "Administration",
    groups: [
      {
        id: "admin-core",
        features: [
          {
            id: "user-management",
            label: "User and permission management",
            values: [true, true, true, true],
          },
          {
            id: "single-sign-on",
            label: "Single sign-on (SSO)",
            values: [false, false, true, true],
          },
          {
            id: "audit-trail",
            label: "Admin audit trail",
            values: [false, true, true, true],
          },
          {
            id: "device-management",
            label: "Device management",
            values: [true, true, true, true],
          },
          {
            id: "multi-site",
            label: "Multi-site management",
            values: [false, false, true, true],
          },
        ],
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    groups: [
      {
        id: "analytics-core",
        features: [
          {
            id: "calling-reports",
            label: "Calling reports",
            tooltip: "View call volume, duration, and quality metrics.",
            values: [true, true, true, true],
          },
          {
            id: "adoption-analytics",
            label: "Adoption analytics",
            values: [false, true, true, true],
          },
          {
            id: "quality-of-service",
            label: "Quality of service reports",
            values: [false, false, true, true],
          },
          {
            id: "historical-reporting",
            label: "Historical reporting",
            values: [false, true, true, true],
          },
          {
            id: "custom-reports",
            label: "Custom reports",
            values: [false, false, "Add-on price", true],
          },
        ],
      },
    ],
  },
  {
    id: "platform-customization",
    title: "Platform & workflow customization",
    groups: [
      {
        id: "platform-core",
        features: [
          {
            id: "developer-platform",
            label: "Developer platform and access to APIs",
            values: [false, true, true, true],
          },
          {
            id: "teams-integration",
            label: "Integrated telephony for Microsoft Teams",
            values: [false, true, true, true],
          },
          {
            id: "popular-integrations",
            label: "Popular integrations including Office 365, Google, Slack, and more",
            values: [true, true, true, true],
          },
          {
            id: "workflow-builder",
            label: "Workflow builder",
            values: [false, false, true, true],
          },
          {
            id: "custom-apps",
            label: "Custom app integrations",
            values: [false, false, false, true],
          },
        ],
      },
    ],
  },
];

export function getCompareFeatureCategories() {
  return compareFeatureCategories;
}

import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import { SITE_NAME } from "@/lib/constants";

export type VapiLeadData = {
  name?: string;
  email?: string;
  phone?: string;
  business_type?: string;
  service_interest?: string;
  budget?: string;
  timeline?: string;
};

export type VapiCallLeadDataPayload = {
  call_lead_data?: Partial<VapiLeadData> | null;
};

type VapiCallEmailInput = {
  leadData: VapiLeadData;
  summary?: string;
  transcript?: string;
};

export type VapiCallEmailResult = {
  success: boolean;
  error?: string;
  businessEmailSent?: boolean;
  customerEmailSent?: boolean;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function toOptionalString(value: unknown): string | undefined {
  if (value === null || value === undefined) {
    return undefined;
  }

  const normalized = String(value).trim();
  return normalized.length > 0 ? normalized : undefined;
}

export function extractLeadData(
  structuredData?: VapiCallLeadDataPayload | null,
): VapiLeadData {
  const raw = structuredData?.call_lead_data ?? {};

  return {
    name: toOptionalString(raw.name),
    email: toOptionalString(raw.email),
    phone: toOptionalString(raw.phone),
    business_type: toOptionalString(raw.business_type),
    service_interest: toOptionalString(raw.service_interest),
    budget: toOptionalString(raw.budget),
    timeline: toOptionalString(raw.timeline),
  };
}

function formatField(label: string, value: string | undefined): string {
  if (!value) {
    return "";
  }

  return `<tr>
    <td style="padding:8px 12px;font-weight:600;vertical-align:top;width:160px;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;">${escapeHtml(value)}</td>
  </tr>`;
}

export function isValidCustomerEmail(email: string | undefined): email is string {
  if (!email) {
    return false;
  }

  return EMAIL_PATTERN.test(email);
}

export function buildVapiBusinessEmailHtml({
  leadData,
  summary,
  transcript,
}: VapiCallEmailInput): string {
  const fields = [
    formatField("Name", leadData.name),
    formatField("Email", leadData.email),
    formatField("Phone", leadData.phone),
    formatField("Business Type", leadData.business_type),
    formatField("Service Interest", leadData.service_interest),
    formatField("Budget", leadData.budget),
    formatField("Timeline", leadData.timeline),
  ].filter(Boolean);

  const summaryBlock = summary
    ? `<h3 style="margin:24px 0 8px;font-size:16px;">Call Summary</h3>
       <p style="margin:0;white-space:pre-wrap;">${escapeHtml(summary)}</p>`
    : "";

  const transcriptBlock = transcript
    ? `<h3 style="margin:24px 0 8px;font-size:16px;">Transcript</h3>
       <p style="margin:0;white-space:pre-wrap;">${escapeHtml(transcript)}</p>`
    : "";

  return `<div style="font-family:Arial,Helvetica,sans-serif;color:#111;line-height:1.5;">
    <h2 style="margin:0 0 16px;font-size:20px;">New Voice Agent Lead</h2>
    <table style="border-collapse:collapse;width:100%;max-width:720px;">
      <tbody>${fields.join("")}</tbody>
    </table>
    ${summaryBlock}
    ${transcriptBlock}
  </div>`;
}

export function buildVapiCustomerEmailHtml({
  leadData,
  summary,
}: VapiCallEmailInput): string {
  const customerName = leadData.name;
  const greeting = customerName
    ? `Hi ${escapeHtml(customerName)},`
    : "Hi there,";
  const serviceInterest = leadData.service_interest ?? "your project";
  const summaryBlock = summary
    ? `<div style="margin:20px 0;padding:16px 18px;background:#f6f8f4;border-left:4px solid #92e13a;border-radius:8px;">
         <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#42931e;text-transform:uppercase;letter-spacing:0.04em;">What we discussed</p>
         <p style="margin:0;white-space:pre-wrap;color:#222;">${escapeHtml(summary)}</p>
       </div>`
    : "";

  return `<div style="font-family:Arial,Helvetica,sans-serif;color:#111;line-height:1.6;max-width:640px;">
    <p style="margin:0 0 16px;font-size:18px;font-weight:700;color:#000200;">${SITE_NAME}</p>
    <p style="margin:0 0 16px;">${greeting}</p>
    <p style="margin:0 0 16px;">Thank you for calling ${SITE_NAME}. We really appreciate you taking the time to speak with our voice assistant, Lara.</p>
    ${summaryBlock}
    <p style="margin:24px 0 0;">Our team will reach out to you shortly to discuss <strong>${escapeHtml(serviceInterest)}</strong>.</p>
    <p style="margin:16px 0 0;color:#555;">Warm regards,<br />The ${SITE_NAME} Team</p>
  </div>`;
}

function buildVapiBusinessEmailText({
  leadData,
  summary,
  transcript,
}: VapiCallEmailInput): string {
  return [
    `Name: ${leadData.name ?? "N/A"}`,
    `Email: ${leadData.email ?? "N/A"}`,
    `Phone: ${leadData.phone ?? "N/A"}`,
    `Business Type: ${leadData.business_type ?? "N/A"}`,
    `Service Interest: ${leadData.service_interest ?? "N/A"}`,
    `Budget: ${leadData.budget ?? "N/A"}`,
    `Timeline: ${leadData.timeline ?? "N/A"}`,
    "",
    "Call Summary:",
    summary ?? "N/A",
    "",
    "Transcript:",
    transcript ?? "N/A",
  ].join("\n");
}

function buildVapiCustomerEmailText({
  leadData,
  summary,
}: VapiCallEmailInput): string {
  const customerName = leadData.name;
  const greeting = customerName ? `Hi ${customerName},` : "Hi there,";
  const serviceInterest = leadData.service_interest ?? "your project";

  return [
    greeting,
    "",
    `Thank you for calling ${SITE_NAME}. We really appreciate you taking the time to speak with our voice assistant, Lara.`,
    "",
    summary ? `What we discussed:\n\n${summary}` : "",
    "",
    `Our team will reach out to you shortly to discuss ${serviceInterest}.`,
    "",
    "Warm regards,",
    `The ${SITE_NAME} Team`,
  ]
    .filter(Boolean)
    .join("\n");
}

function getSmtpPassword(): string {
  return (
    process.env.SMTP_PASS?.trim() ||
    process.env.SMTP_PASSWORD?.trim() ||
    ""
  );
}

function getBusinessEmail(): string {
  return process.env.TO_EMAIL?.trim() || "";
}

function createMailTransporter():
  | { transporter: Transporter; from: string }
  | { transporter: null; error: string } {
  const smtpPass = getSmtpPassword();
  const smtpUser = process.env.SMTP_USER?.trim() || "";
  const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.hostinger.com";
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const useSsl = Number(smtpPort) === 465;

  if (!smtpPass || !smtpUser) {
    return { transporter: null, error: "smtp_not_configured" };
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: useSsl,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const fromEmail = process.env.MAIL_FROM?.trim() || smtpUser;
  const fromName = process.env.MAIL_FROM_NAME?.trim() || SITE_NAME;

  return {
    transporter,
    from: `"${fromName}" <${fromEmail}>`,
  };
}

async function sendMailMessage(
  transporter: Transporter,
  from: string,
  options: {
    to: string;
    subject: string;
    text: string;
    html: string;
  },
): Promise<void> {
  await transporter.sendMail({
    from,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });
}

export async function sendVapiCallEndEmail(
  input: VapiCallEmailInput,
): Promise<VapiCallEmailResult> {
  const businessEmail = getBusinessEmail();
  const mailConfig = createMailTransporter();

  if (!businessEmail) {
    return { success: false, error: "to_email_not_configured" };
  }

  if (!mailConfig.transporter) {
    return { success: false, error: mailConfig.error };
  }

  const { transporter, from } = mailConfig;
  const { leadData } = input;
  const summary = input.summary?.trim();
  const transcript = input.transcript?.trim();

  const emailInput: VapiCallEmailInput = {
    leadData,
    summary,
    transcript,
  };

  let businessEmailSent = false;
  let customerEmailSent = false;

  try {
    await sendMailMessage(transporter, from, {
      to: businessEmail,
      subject: `New Lead - ${leadData.name ?? "Unknown"} - Dezyon Voice Agent`,
      text: buildVapiBusinessEmailText(emailInput),
      html: buildVapiBusinessEmailHtml(emailInput),
    });
    businessEmailSent = true;
  } catch (error) {
    console.error("Business email failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "business_email_failed",
      businessEmailSent: false,
      customerEmailSent: false,
    };
  }

  const customerEmail = leadData.email;

  if (!isValidCustomerEmail(customerEmail)) {
    console.log(
      "No valid customer email found — sent internal email only",
    );
    return {
      success: true,
      businessEmailSent,
      customerEmailSent: false,
    };
  }

  try {
    await sendMailMessage(transporter, from, {
      to: customerEmail,
      subject: "Thanks for your call with Dezyon Studio!",
      text: buildVapiCustomerEmailText(emailInput),
      html: buildVapiCustomerEmailHtml(emailInput),
    });
    customerEmailSent = true;
  } catch (error) {
    console.error("Customer email failed:", error);
  }

  return {
    success: true,
    businessEmailSent,
    customerEmailSent,
  };
}

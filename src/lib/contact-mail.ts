import nodemailer from "nodemailer";

function parseRecipientEmails(value: string | undefined): string[] {
  if (!value) {
    return [];
  }

  return [...new Set(
    value
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email.length > 0),
  )];
}

export async function sendContactNotification(
  subject: string,
  body: string,
  replyTo: string,
): Promise<{ success: boolean; error?: string }> {
  const recipients = parseRecipientEmails(process.env.RECIPIENT_EMAIL);
  const fromEmail = process.env.MAIL_FROM?.trim() || "hello@dezyonstudio.com";
  const fromName = process.env.MAIL_FROM_NAME?.trim() || "Dezyon Studio";
  const smtpUser = process.env.SMTP_USER?.trim() || fromEmail;
  const smtpPass = process.env.SMTP_PASSWORD?.trim() || "";

  if (recipients.length === 0) {
    return { success: false, error: "no_recipients" };
  }

  if (!smtpPass) {
    return { success: false, error: "smtp_not_configured" };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: (process.env.SMTP_ENCRYPTION || "ssl") === "ssl",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: recipients.join(", "),
      replyTo,
      subject,
      text: body,
    });

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "smtp_send_failed";
    return { success: false, error: message };
  }
}

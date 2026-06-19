import { connection } from "next/server";
import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/contact-mail";
import { ensureContactsTable, getDb, isDbConfigured } from "@/lib/db";
import {
  getServerRecaptchaSecret,
  verifyRecaptchaToken,
} from "@/lib/recaptcha-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  full_name?: string;
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  recaptcha_token?: string;
};

export async function POST(request: Request) {
  await connection();

  try {
    const body = (await request.json()) as ContactPayload;
    const fullName = String(body.full_name ?? body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();
    const recaptchaToken = String(body.recaptcha_token ?? "").trim();

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const recaptchaSecret = getServerRecaptchaSecret(
      request.headers.get("host") ?? "",
    );

    if (!recaptchaSecret) {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA is not configured on the server." },
        { status: 500 },
      );
    }

    if (!(await verifyRecaptchaToken(recaptchaToken, recaptchaSecret))) {
      return NextResponse.json(
        { success: false, message: "Please complete the reCAPTCHA verification." },
        { status: 400 },
      );
    }

    if (!isDbConfigured()) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Database is not configured. Add DB_HOST, DB_USER, DB_PASSWORD, and DB_NAME to .env.local.",
        },
        { status: 500 },
      );
    }

    await ensureContactsTable();
    const db = getDb();
    const [result] = await db.execute(
      "INSERT INTO contacts (full_name, email, subject, message) VALUES (?, ?, ?, ?)",
      [fullName, email, subject, message],
    );

    const insertId =
      typeof result === "object" && result !== null && "insertId" in result
        ? Number(result.insertId)
        : 0;

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    const mailSubject = `New Contact Form Submission - ${subject}`;
    const mailBody = `Full Name: ${fullName}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}\nTimestamp: ${timestamp}`;

    const mailResult = await sendContactNotification(mailSubject, mailBody, email);
    if (!mailResult.success) {
      console.warn("[contact] Email notification failed:", mailResult.error);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
        id: insertId,
        mail_sent: true,
      },
      { status: 201 },
    );
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to process your request. Please try again later.";

    return NextResponse.json(
      {
        success: false,
        message: message.includes("ECONNREFUSED") || message.includes("ENOTFOUND")
          ? "Could not connect to the database. On local dev, set DB_HOST to your Hostinger MySQL host from hPanel."
          : "Could not save your message. Please try again later.",
      },
      { status: 500 },
    );
  }
}

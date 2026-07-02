import { connection } from "next/server";
import { NextResponse } from "next/server";
import {
  extractLeadData,
  sendVapiCallEndEmail,
  type VapiCallLeadDataPayload,
} from "@/lib/vapi-call-mail";

type VapiEndOfCallMessage = {
  type?: string;
  transcript?: string;
  summary?: string;
  analysis?: {
    structuredData?: VapiCallLeadDataPayload;
  };
};

type VapiWebhookBody = {
  message?: VapiEndOfCallMessage;
};

function methodNotAllowed() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export function GET() {
  return methodNotAllowed();
}

export function PUT() {
  return methodNotAllowed();
}

export function PATCH() {
  return methodNotAllowed();
}

export function DELETE() {
  return methodNotAllowed();
}

export async function POST(request: Request) {
  await connection();

  try {
    const body = (await request.json()) as VapiWebhookBody;
    const message = body.message;

    if (!message || message.type !== "end-of-call-report") {
      return NextResponse.json({ success: true, received: true, skipped: true });
    }

    const leadData = extractLeadData(message.analysis?.structuredData);

    const mailResult = await sendVapiCallEndEmail({
      leadData,
      summary: message.summary,
      transcript: message.transcript,
    });

    if (!mailResult.success) {
      return NextResponse.json(
        {
          success: false,
          received: true,
          email_sent: false,
          error: mailResult.error,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, received: true });
  } catch (error) {
    console.error("[vapi-callend] Webhook error:", error);
    const message =
      error instanceof Error ? error.message : "Unable to process webhook";

    return NextResponse.json(
      { success: false, received: false, error: message },
      { status: 500 },
    );
  }
}

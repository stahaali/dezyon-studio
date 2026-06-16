import { NextResponse } from "next/server";
import { saveAuditReport } from "@/lib/audit-dev-store";
import { runWebsiteAudit } from "@/lib/pagespeed-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const url = typeof body?.url === "string" ? body.url : "";

    const report = await runWebsiteAudit(url);
    saveAuditReport(report);

    return NextResponse.json({ success: true, report });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to analyze website.";
    const status = message.includes("API key") ? 500 : 400;
    return NextResponse.json({ success: false, message }, { status });
  }
}

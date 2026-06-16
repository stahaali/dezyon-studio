import { NextResponse } from "next/server";
import { getAuditReport } from "@/lib/audit-dev-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const reportId = new URL(request.url).searchParams.get("id")?.trim() ?? "";

  if (!reportId) {
    return NextResponse.json(
      { success: false, message: "Report id is required." },
      { status: 400 }
    );
  }

  const report = getAuditReport(reportId);

  if (!report) {
    return NextResponse.json(
      { success: false, message: "Report not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, report });
}

import { NextResponse } from "next/server";
import { getAuditHistory } from "@/lib/audit-dev-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const limitParam = new URL(request.url).searchParams.get("limit");
  const limit = Math.min(20, Math.max(1, Number(limitParam) || 10));

  return NextResponse.json({
    success: true,
    history: getAuditHistory(limit),
  });
}

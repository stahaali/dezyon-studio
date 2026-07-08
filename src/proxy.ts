import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { CANONICAL_SITE_ORIGIN } from "@/lib/site-url";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  if (!host?.toLowerCase().startsWith("www.")) {
    return NextResponse.next();
  }

  const destination = new URL(request.url);
  destination.protocol = "https:";
  destination.host = CANONICAL_SITE_ORIGIN.replace(/^https?:\/\//, "");

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except Next.js internals and static files.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|eot)$).*)",
  ],
};

import { redirect } from "next/navigation";
import { createPageAlternates, createPageMetadata, PAGE_SEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...createPageMetadata("services"),
  alternates: createPageAlternates(PAGE_SEO.services.path),
};

export default function ServicesRedirectPage() {
  redirect("/marketing");
}

import { BookPublishingContent } from "@/components/BookPublishing/BookPublishingContent";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageAlternates, createPageMetadata, PAGE_SEO } from "@/lib/seo";
import { SERVICE_PAGE_DEFINITIONS } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...createPageMetadata("bookPublishing"),
  alternates: createPageAlternates(PAGE_SEO.bookPublishing.path),
};

export default function BookPublishingPage() {
  const bookPublishingSeo = PAGE_SEO.bookPublishing;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Book Publishing", path: "/book-publishing" },
        ]}
        title={bookPublishingSeo.title}
        description={bookPublishingSeo.description}
        path={bookPublishingSeo.path}
        services={SERVICE_PAGE_DEFINITIONS["/book-publishing"]}
      />
      <BookPublishingContent />
    </>
  );
}

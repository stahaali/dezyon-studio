import { WebsiteSalespersonPost } from "@/components/Blog/WebsiteSalespersonPost/WebsiteSalespersonPost";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { buildPageSeoMetadata, PAGE_SEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageSeoMetadata("blogWebsiteSalesperson");

export default function WebsiteSalespersonBlogPage() {
  const seo = PAGE_SEO.blogWebsiteSalesperson;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          {
            name: "Your Website Isn't a Brochure",
            path: "/blog/your-website-isnt-a-brochure",
          },
        ]}
        title={seo.title}
        description={seo.description}
        path={seo.path}
      />
      <WebsiteSalespersonPost />
    </>
  );
}

import { getPricingCategoryPath } from "@/data/packages";
import { buildCanonicalUrl, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Packages",
  description: "Browse Dezyon Studio design and development packages.",
  keywords: ["design packages", "website packages", "Dezyon Studio pricing"],
  path: "/packages",
  noIndex: true,
});

export default function PackagesPage() {
  const redirectUrl = buildCanonicalUrl(getPricingCategoryPath("logo"));

  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${redirectUrl}`} />
      <p>
        Redirecting to{" "}
        <a href={redirectUrl}>logo pricing packages</a>...
      </p>
    </>
  );
}

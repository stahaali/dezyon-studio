import type { NextConfig } from "next";

const isStaticExport = process.env.BUILD_STATIC === "true";
const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const } : {}),
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/webp"],
    unoptimized: true,
  },
  async rewrites() {
    if (!isDev) {
      return [];
    }

    return [
      { source: "/api/pagespeed.php", destination: "/api/pagespeed" },
      { source: "/api/audit-report.php", destination: "/api/audit-report" },
      { source: "/api/audit-history.php", destination: "/api/audit-history" },
      { source: "/api/contact.php", destination: "/api/contact" },
    ];
  },
};

export default nextConfig;

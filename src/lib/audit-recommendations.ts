import type { AuditRecommendation, WebsiteAuditReport } from "@/types/website-audit";

function pushRecommendation(
  list: AuditRecommendation[],
  item: AuditRecommendation
) {
  if (!list.some((entry) => entry.id === item.id)) {
    list.push(item);
  }
}

export function buildAuditRecommendations(
  report: WebsiteAuditReport
): AuditRecommendation[] {
  const recommendations: AuditRecommendation[] = [];
  const mobile = report.mobile;
  const desktop = report.desktop;

  if ((mobile.performance.score ?? 100) < 70) {
    pushRecommendation(recommendations, {
      id: "perf-mobile",
      priority: "high",
      category: "Performance",
      title: "Improve mobile performance score",
      description:
        "Mobile performance is below 70. Compress images, defer non-critical JavaScript, and reduce server response time to improve Core Web Vitals.",
    });
  }

  if ((desktop.performance.score ?? 100) < 70) {
    pushRecommendation(recommendations, {
      id: "perf-desktop",
      priority: "high",
      category: "Performance",
      title: "Improve desktop performance score",
      description:
        "Desktop performance can be improved by optimizing assets, enabling caching, and reducing render-blocking resources.",
    });
  }

  if (mobile.performance.lcp && mobile.performance.lcp.includes("s")) {
    const lcpValue = parseFloat(mobile.performance.lcp);
    if (!Number.isNaN(lcpValue) && lcpValue > 2.5) {
      pushRecommendation(recommendations, {
        id: "lcp-mobile",
        priority: "high",
        category: "Performance",
        title: "Reduce Largest Contentful Paint (LCP)",
        description:
          "LCP is above 2.5s on mobile. Optimize hero images, preload key assets, and improve server/CDN delivery.",
      });
    }
  }

  const seoIssues = [...mobile.seo.issues, ...desktop.seo.issues].filter(
    (issue) => !issue.passed
  );

  for (const issue of seoIssues) {
    pushRecommendation(recommendations, {
      id: `seo-${issue.id}`,
      priority: "high",
      category: "SEO",
      title: `Fix: ${issue.title}`,
      description: issue.description,
    });
  }

  const a11yIssues = [...mobile.accessibility.issues, ...desktop.accessibility.issues].filter(
    (issue) => !issue.passed
  );

  for (const issue of a11yIssues.slice(0, 5)) {
    pushRecommendation(recommendations, {
      id: `a11y-${issue.id}`,
      priority: "medium",
      category: "Accessibility",
      title: `Fix: ${issue.title}`,
      description: issue.description,
    });
  }

  if (mobile.technical.unusedCss || desktop.technical.unusedCss) {
    pushRecommendation(recommendations, {
      id: "unused-css",
      priority: "medium",
      category: "Technical",
      title: "Remove unused CSS",
      description:
        "Unused CSS increases page weight. Split styles by route and purge unused rules to speed up rendering.",
    });
  }

  if (mobile.technical.unusedJavaScript || desktop.technical.unusedJavaScript) {
    pushRecommendation(recommendations, {
      id: "unused-js",
      priority: "medium",
      category: "Technical",
      title: "Reduce unused JavaScript",
      description:
        "Ship less JavaScript by code-splitting, lazy-loading components, and removing legacy bundles.",
    });
  }

  if (mobile.technical.imageOptimization.length > 0) {
    pushRecommendation(recommendations, {
      id: "image-opt",
      priority: "medium",
      category: "Technical",
      title: "Optimize images",
      description:
        "Serve images in modern formats (WebP/AVIF), use responsive sizes, and compress large media files.",
    });
  }

  const bpIssues = [...mobile.bestPractices.issues, ...desktop.bestPractices.issues].filter(
    (issue) => !issue.passed
  );

  for (const issue of bpIssues.slice(0, 4)) {
    pushRecommendation(recommendations, {
      id: `bp-${issue.id}`,
      priority: issue.id.includes("https") ? "high" : "medium",
      category: "Best Practices",
      title: `Fix: ${issue.title}`,
      description: issue.description,
    });
  }

  return recommendations.slice(0, 12);
}

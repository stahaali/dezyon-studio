const fs = require("fs");
const path = require("path");
const { getSiteUrlFromEnv } = require("./resolve-site-url");

const outDir = path.join(process.cwd(), "out");
const siteUrl = getSiteUrlFromEnv();

if (!fs.existsSync(outDir)) {
  console.warn("[build-info] out/ folder not found. Skipping BUILD.txt.");
  process.exit(0);
}

function findCssChunksWithMarker(marker) {
  const chunksDir = path.join(outDir, "_next", "static", "chunks");
  if (!fs.existsSync(chunksDir)) {
    return [];
  }

  return fs
    .readdirSync(chunksDir)
    .filter((file) => file.endsWith(".css"))
    .filter((file) => {
      const content = fs.readFileSync(path.join(chunksDir, file), "utf8");
      return content.includes(marker);
    })
    .map((file) => `_next/static/chunks/${file}`);
}

function getHtmlCssLinks(pagePath) {
  const htmlPath = path.join(outDir, pagePath, "index.html");
  if (!fs.existsSync(htmlPath)) {
    return [];
  }

  const html = fs.readFileSync(htmlPath, "utf8");
  return [...new Set(
    [...html.matchAll(/\/_next\/static\/chunks\/[^"'\s]+\.css/g)].map(
      (match) => match[0].replace(/^\//, "")
    )
  )];
}

const buildTime = new Date().toISOString();
const pricingCssChunks = findCssChunksWithMarker("PlansAndPricing-module");
const pricingPageCss = getHtmlCssLinks("plans-and-pricing");

const buildInfo = [
  `Build time: ${buildTime}`,
  "",
  "IMPORTANT: .module.css files are NOT uploaded separately.",
  "Next.js compiles them into hashed files inside _next/static/chunks/.",
  "",
  "PlansAndPricing.module.css is inside:",
  ...pricingCssChunks.map((file) => `- ${file}`),
  "",
  "plans-and-pricing page loads these CSS files:",
  ...pricingPageCss.map((file) => `- ${file}`),
  "",
  "Upload ALL files inside out/ to public_html (replace old files).",
  "Required folders: _next/, assets/, api/, and every page folder.",
  "",
  "After upload, verify on live:",
  `- ${siteUrl}/BUILD.txt (must show this build time)`,
  ...(pricingCssChunks[0]
    ? [`- ${siteUrl}/${pricingCssChunks[0]} (must open, not 404)`]
    : []),
  "",
  "Live CSS check: open the pricing CSS URL and search for planCard + height:auto",
].join("\n");

fs.writeFileSync(path.join(outDir, "BUILD.txt"), buildInfo, "utf8");
console.log("[build-info] Wrote out/BUILD.txt");
console.log(`[build-info] Build time: ${buildTime}`);

if (pricingCssChunks.length > 0) {
  console.log(
    "[build-info] PlansAndPricing.module.css compiled into:",
    pricingCssChunks.join(", ")
  );
  console.log(
    `[build-info] Live verify: ${siteUrl}/${pricingCssChunks[0]}`
  );
} else {
  console.warn(
    "[build-info] WARNING: PlansAndPricing CSS chunk not found in out/_next/static/chunks/"
  );
}

console.log("[build-info] Upload the entire out/ folder to Hostinger public_html.");
console.log("[build-info] The _next folder is required — do not skip it.");

const configPath = path.join(outDir, "api", "config.php");
if (!fs.existsSync(configPath)) {
  console.warn(
    "[build-info] No out/api/config.php — contact form and audit API need DB credentials in .env before Hostinger deploy."
  );
  console.warn(
    "[build-info] Add DB_HOST, DB_USER, DB_PASSWORD, DB_NAME to .env, then rebuild."
  );
} else {
  console.log("[build-info] Verified out/api/config.php");
}

const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");

if (!fs.existsSync(outDir)) {
  console.warn("[build-info] out/ folder not found. Skipping BUILD.txt.");
  process.exit(0);
}

const buildInfo = [
  `Build time: ${new Date().toISOString()}`,
  "Upload ALL files inside out/ to public_html (replace old files).",
  "Check this file on live site: https://dezyonstudio.com/BUILD.txt",
].join("\n");

fs.writeFileSync(path.join(outDir, "BUILD.txt"), buildInfo, "utf8");
console.log("[build-info] Wrote out/BUILD.txt");

const configPath = path.join(outDir, "api", "config.php");
if (!fs.existsSync(configPath)) {
  console.error(
    "[build-info] MISSING out/api/config.php — contact form will fail on live server."
  );
  console.error(
    "[build-info] Copy public/api/config.example.php to public/api/config.php and rebuild."
  );
  process.exit(1);
}

console.log("[build-info] Verified out/api/config.php");

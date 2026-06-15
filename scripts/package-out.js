const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = process.cwd();
const outDir = path.join(root, "out");

if (!fs.existsSync(outDir)) {
  console.error("[package-out] out/ not found. Run: npm run build");
  process.exit(1);
}

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const zipName = `dezyon-out-${stamp}.zip`;
const zipPath = path.join(root, zipName);

if (process.platform === "win32") {
  execSync(
    `powershell -NoProfile -Command "Compress-Archive -Path '${outDir}\\*' -DestinationPath '${zipPath}' -Force"`,
    { stdio: "inherit" }
  );
} else {
  execSync(`cd "${outDir}" && zip -r "${zipPath}" .`, { stdio: "inherit" });
}

console.log(`[package-out] Created ${zipName}`);
console.log("[package-out] Hostinger: upload zip to public_html, extract, replace all files.");
console.log("[package-out] Then open https://dezyonstudio.com/BUILD.txt and confirm the new build time.");

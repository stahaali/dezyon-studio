/**
 * Rewrites root-absolute asset paths in static export HTML to depth-relative
 * paths so CSS/JS/images resolve via file:// and nested routes alike.
 *
 * out/index.html          → ./_next/...  ./assets/...
 * out/seo/index.html      → ../_next/... ../assets/...
 * out/blog/foo/index.html → ../../_next/...
 *
 * Leaves https:// and other absolute URLs untouched.
 */
const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");

if (!fs.existsSync(outDir)) {
  console.warn("[fix-relative-paths] out/ not found. Skipping.");
  process.exit(0);
}

function walkHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_next" || entry.name === "api") continue;
      walkHtmlFiles(full, files);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(full);
    }
  }
  return files;
}

function relativePrefix(htmlFile) {
  const relDir = path.relative(outDir, path.dirname(htmlFile));
  if (!relDir || relDir === ".") {
    return "./";
  }
  const depth = relDir.split(path.sep).filter(Boolean).length;
  return "../".repeat(depth);
}

function rewriteContent(html, prefix) {
  let next = html;

  // href="/_next/...", src="/_next/...", content="/_next/..."
  next = next.replace(
    /(=\s*["'])\/(_next\/)/g,
    (_, quote, asset) => `${quote}${prefix}${asset}`,
  );

  // Same for /assets/... (public folder)
  next = next.replace(
    /(=\s*["'])\/(assets\/)/g,
    (_, quote, asset) => `${quote}${prefix}${asset}`,
  );

  // CSS url(/_next/...) or url(/assets/...)
  next = next.replace(
    /(url\(\s*["']?)\/(_next\/|assets\/)/g,
    (_, start, asset) => `${start}${prefix}${asset}`,
  );

  // Inline JS string literals that point at site-root assets
  next = next.replace(
    /(["'`])\/(_next\/)/g,
    (_, quote, asset) => `${quote}${prefix}${asset}`,
  );
  next = next.replace(
    /(["'`])\/(assets\/)/g,
    (_, quote, asset) => `${quote}${prefix}${asset}`,
  );

  return next;
}

const htmlFiles = walkHtmlFiles(outDir);
let changed = 0;

for (const file of htmlFiles) {
  const prefix = relativePrefix(file);
  const original = fs.readFileSync(file, "utf8");
  const updated = rewriteContent(original, prefix);

  if (updated !== original) {
    fs.writeFileSync(file, updated, "utf8");
    changed += 1;
  }
}

console.log(
  `[fix-relative-paths] Rewrote asset paths in ${changed}/${htmlFiles.length} HTML files.`,
);

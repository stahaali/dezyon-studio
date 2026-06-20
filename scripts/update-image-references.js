const fs = require("fs/promises");
const path = require("path");

const MANIFEST_PATH = path.join(process.cwd(), "scripts", "image-webp-manifest.json");
const TARGET_DIRS = [
  path.join(process.cwd(), "src"),
  path.join(process.cwd(), "public"),
  path.join(process.cwd(), "scripts"),
];

const TEXT_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".css",
  ".json",
  ".html",
  ".md",
  ".php",
]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next" || entry.name === "out") {
        continue;
      }
      files.push(...(await walk(fullPath)));
      continue;
    }

    if (TEXT_EXTENSIONS.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

function applyReplacements(content, replacements) {
  let next = content;
  const sortedKeys = Object.keys(replacements).sort((a, b) => b.length - a.length);

  for (const oldPath of sortedKeys) {
    next = next.split(oldPath).join(replacements[oldPath]);
  }

  return next;
}

async function main() {
  const replacements = JSON.parse(await fs.readFile(MANIFEST_PATH, "utf8"));
  let updatedFiles = 0;

  for (const dir of TARGET_DIRS) {
    try {
      await fs.access(dir);
    } catch {
      continue;
    }

    const files = await walk(dir);

    for (const filePath of files) {
      if (path.basename(filePath) === "image-webp-manifest.json") {
        continue;
      }

      const original = await fs.readFile(filePath, "utf8");
      const updated = applyReplacements(original, replacements);

      if (updated !== original) {
        await fs.writeFile(filePath, updated);
        updatedFiles += 1;
        console.log(`Updated ${path.relative(process.cwd(), filePath)}`);
      }
    }
  }

  console.log(`\nUpdated ${updatedFiles} files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

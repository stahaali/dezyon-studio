const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const ASSET_ROOTS = [
  { dir: path.join(process.cwd(), "public", "assets", "img"), prefix: "/assets/img" },
  { dir: path.join(process.cwd(), "public", "assets", "about"), prefix: "/assets/about" },
];
const MANIFEST_PATH = path.join(process.cwd(), "scripts", "image-webp-manifest.json");
const WEBP_QUALITY = 82;
const RASTER_EXT = /\.(jpe?g|png)$/i;

function toWebPath(relativePath, prefix) {
  return `${prefix}/${relativePath.split(path.sep).join("/")}`;
}

function buildReplacementKeys(relativePath, prefix) {
  const parsed = path.parse(relativePath);
  const webpRelative = path.join(parsed.dir, `${parsed.name}.webp`);
  const webpPath = toWebPath(webpRelative, prefix);

  const keys = new Set();
  for (const ext of [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]) {
    keys.add(toWebPath(path.join(parsed.dir, `${parsed.name}${ext}`), prefix));
  }

  return { webpRelative, webpPath, keys: [...keys] };
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    if (RASTER_EXT.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertImage(inputPath, outputPath) {
  const image = sharp(inputPath, { failOn: "none" });
  const metadata = await image.metadata();

  if (metadata.hasAlpha) {
    await image.webp({ quality: WEBP_QUALITY, alphaQuality: 90 }).toFile(outputPath);
    return;
  }

  await image.webp({ quality: WEBP_QUALITY }).toFile(outputPath);
}

async function collectRasterFiles() {
  const files = [];

  for (const { dir, prefix } of ASSET_ROOTS) {
    try {
      await fs.access(dir);
    } catch {
      continue;
    }

    const rasterFiles = await walk(dir);
    for (const filePath of rasterFiles) {
      files.push({
        inputPath: filePath,
        rootDir: dir,
        prefix,
        relativePath: path.relative(dir, filePath),
      });
    }
  }

  return files;
}

async function main() {
  const rasterFiles = await collectRasterFiles();
  const replacements = {};
  try {
    Object.assign(replacements, JSON.parse(await fs.readFile(MANIFEST_PATH, "utf8")));
  } catch {
    // No previous manifest.
  }
  let converted = 0;
  let savedBytes = 0;

  console.log(`Found ${rasterFiles.length} raster images under public/assets`);

  for (const { inputPath, rootDir, prefix, relativePath } of rasterFiles) {
    const { webpRelative, webpPath, keys } = buildReplacementKeys(relativePath, prefix);
    const outputPath = path.join(rootDir, webpRelative);

    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    const before = (await fs.stat(inputPath)).size;
    await convertImage(inputPath, outputPath);
    const after = (await fs.stat(outputPath)).size;

    for (const key of keys) {
      replacements[key] = webpPath;
    }

    try {
      await fs.unlink(inputPath);
    } catch (error) {
      if (error && error.code === "EBUSY") {
        console.warn(`! Could not delete ${prefix}/${relativePath} (file in use). WebP created.`);
      } else {
        throw error;
      }
    }
    converted += 1;
    savedBytes += Math.max(0, before - after);

    console.log(
      `✓ ${prefix}/${relativePath} → ${webpRelative} (${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB)`,
    );
  }

  await fs.writeFile(MANIFEST_PATH, JSON.stringify(replacements, null, 2));

  console.log(`\nConverted ${converted} images.`);
  console.log(`Estimated savings: ${Math.round(savedBytes / 1024)}KB`);
  console.log(`Manifest: ${MANIFEST_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

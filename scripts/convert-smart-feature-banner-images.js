const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const SMART_FEATURE_DIR = path.join(
  process.cwd(),
  "public",
  "assets",
  "img",
  "smart-feature",
);
const WEBP_QUALITY = 78;
const MAX_WIDTH = 960;

async function compressToWebp(inputPath, outputPath) {
  const metadata = await sharp(inputPath, { failOn: "none" }).metadata();
  let pipeline = sharp(inputPath, { failOn: "none" });

  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    });
  }

  if (metadata.hasAlpha) {
    await pipeline
      .webp({ quality: WEBP_QUALITY, alphaQuality: 85, effort: 6 })
      .toFile(outputPath);
    return;
  }

  await pipeline.webp({ quality: WEBP_QUALITY, effort: 6 }).toFile(outputPath);
}

async function main() {
  let processed = 0;
  let savedBytes = 0;

  for (let index = 1; index <= 9; index += 1) {
    const inputPath = path.join(SMART_FEATURE_DIR, `${index}.jpeg`);
    const outputPath = path.join(SMART_FEATURE_DIR, `${index}.webp`);

    try {
      await fs.access(inputPath);
    } catch {
      console.warn(`! Skipping missing file: ${index}.jpeg`);
      continue;
    }

    const before = (await fs.stat(inputPath)).size;
    await compressToWebp(inputPath, outputPath);
    const after = (await fs.stat(outputPath)).size;

    try {
      await fs.unlink(inputPath);
    } catch (error) {
      console.warn(`! Could not delete ${index}.jpeg: ${error.message}`);
    }

    processed += 1;
    savedBytes += Math.max(0, before - after);

    console.log(
      `✓ ${index}.jpeg (${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB)`,
    );
  }

  console.log(`\nProcessed ${processed} images.`);
  console.log(`Estimated savings: ${Math.round(savedBytes / 1024)}KB`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

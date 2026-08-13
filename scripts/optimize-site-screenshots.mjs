import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR = "public/assets/img/mocks";
const OUTPUT_DIR = "public/assets/img/sites";
const TARGET_WIDTH = 480;

const OUTPUT_NAMES = {
  "dezyonstudioinc.store.jpg": "dezyon-studio.webp",
  "ecommerce.dezyonstudioinc.store.jpg": "ecommerce.webp",
  "dssolar.dezyonstudioinc.store.jpg": "solar.webp",
  "immigration.dezyonstudioinc.store.jpg": "immigration.webp",
  "roofing.dezyonstudioinc.store.jpg": "roofing.webp",
};

await mkdir(OUTPUT_DIR, { recursive: true });

const sources = await readdir(SOURCE_DIR);

for (const [sourceName, outputName] of Object.entries(OUTPUT_NAMES)) {
  if (!sources.includes(sourceName)) {
    console.warn(`missing source: ${sourceName}`);
    continue;
  }

  const sourcePath = path.join(SOURCE_DIR, sourceName);
  const outputPath = path.join(OUTPUT_DIR, outputName);

  await sharp(sourcePath)
    .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(outputPath);

  const { size } = await stat(outputPath);
  const meta = await sharp(outputPath).metadata();
  console.log(
    `${outputName} ${meta.width}x${meta.height} ${(size / 1024).toFixed(1)} KB`,
  );
}

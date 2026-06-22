const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const MARKETING_DIR = path.join(process.cwd(), "public", "assets", "img", "marketing");
const STAGING_DIR = path.join(process.cwd(), ".cache", "marketing-webp");
const MANIFEST_PATH = path.join(process.cwd(), "scripts", "image-webp-manifest.json");
const PREFIX = "/assets/img/marketing";
const WEBP_QUALITY = 78;
const MAX_WIDTH = 1280;
const RASTER_EXT = /\.(jpe?g|png|webp)$/i;

function buildReplacementKeys(relativePath) {
  const parsed = path.parse(relativePath);
  const webpPath = `${PREFIX}/${parsed.dir ? `${parsed.dir.replace(/\\/g, "/")}/` : ""}${parsed.name}.webp`;
  const keys = new Set();

  for (const ext of [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG", ".webp"]) {
    keys.add(
      `${PREFIX}/${parsed.dir ? `${parsed.dir.replace(/\\/g, "/")}/` : ""}${parsed.name}${ext}`,
    );
  }

  return { webpPath, keys: [...keys] };
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

async function compressToWebp(inputPath) {
  const metadata = await sharp(inputPath, { failOn: "none" }).metadata();
  let pipeline = sharp(inputPath, { failOn: "none" });

  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    });
  }

  if (metadata.hasAlpha) {
    return pipeline.webp({ quality: WEBP_QUALITY, alphaQuality: 85, effort: 6 }).toBuffer();
  }

  return pipeline.webp({ quality: WEBP_QUALITY, effort: 6 }).toBuffer();
}

async function copyStagedFiles(stagingDir, targetDir) {
  const stagedFiles = await walk(stagingDir);

  for (const stagedPath of stagedFiles) {
    const relativePath = path.relative(stagingDir, stagedPath);
    const targetPath = path.join(targetDir, relativePath);
    const buffer = await fs.readFile(stagedPath);

    await fs.mkdir(path.dirname(targetPath), { recursive: true });

    try {
      await fs.rm(targetPath, { force: true });
      await fs.writeFile(targetPath, buffer);
    } catch (error) {
      if (error?.code === "EBUSY" || error?.code === "UNKNOWN" || error?.code === "EPERM") {
        console.warn(`! Could not replace ${relativePath.replace(/\\/g, "/")} (file in use).`);
        continue;
      }

      throw error;
    }
  }
}

async function main() {
  await fs.rm(STAGING_DIR, { recursive: true, force: true });
  await fs.mkdir(STAGING_DIR, { recursive: true });

  const files = await walk(MARKETING_DIR);
  const replacements = {};

  try {
    Object.assign(replacements, JSON.parse(await fs.readFile(MANIFEST_PATH, "utf8")));
  } catch {
    // No previous manifest.
  }

  let processed = 0;
  let savedBytes = 0;

  console.log(`Found ${files.length} raster images in public/assets/img/marketing`);

  for (const inputPath of files) {
    const relativePath = path.relative(MARKETING_DIR, inputPath);
    const parsed = path.parse(relativePath);
    const stagedPath = path.join(STAGING_DIR, parsed.dir, `${parsed.name}.webp`);

    await fs.mkdir(path.dirname(stagedPath), { recursive: true });

    const before = (await fs.stat(inputPath)).size;
    const outputBuffer = await compressToWebp(inputPath);
    await fs.writeFile(stagedPath, outputBuffer);
    const after = outputBuffer.length;

    const { webpPath, keys } = buildReplacementKeys(relativePath);
    for (const key of keys) {
      replacements[key] = webpPath;
    }

    processed += 1;
    savedBytes += Math.max(0, before - after);

    console.log(
      `✓ ${PREFIX}/${relativePath.replace(/\\/g, "/")} (${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB)`,
    );
  }

  await copyStagedFiles(STAGING_DIR, MARKETING_DIR);

  for (const inputPath of files) {
    const relativePath = path.relative(MARKETING_DIR, inputPath);
    const parsed = path.parse(relativePath);
    const ext = parsed.ext.toLowerCase();

    if (ext !== ".webp") {
      try {
        await fs.unlink(inputPath);
        console.log(`✓ removed source ${relativePath.replace(/\\/g, "/")}`);
      } catch (error) {
        if (error?.code === "EBUSY") {
          console.warn(`! Could not delete ${relativePath} (file in use).`);
        } else {
          throw error;
        }
      }
    }
  }

  await fs.rm(STAGING_DIR, { recursive: true, force: true });
  await fs.writeFile(MANIFEST_PATH, JSON.stringify(replacements, null, 2));

  console.log(`\nProcessed ${processed} images.`);
  console.log(`Estimated savings: ${Math.round(savedBytes / 1024)}KB`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

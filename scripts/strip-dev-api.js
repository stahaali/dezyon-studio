const fs = require("fs");
const path = require("path");

const apiDir = path.join(__dirname, "..", "src", "app", "api");
const backupDir = path.join(__dirname, "..", ".cache", "dev-api-backup");
const mode = process.argv[2];

function moveAside(source, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });

  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }

  try {
    fs.renameSync(source, dest);
    return;
  } catch (error) {
    if (error.code !== "EPERM" && error.code !== "EBUSY" && error.code !== "EXDEV") {
      throw error;
    }
  }

  try {
    fs.cpSync(source, dest, { recursive: true });
    fs.rmSync(source, { recursive: true, force: true });
  } catch (error) {
    console.error(
      "Could not move src/app/api aside for the static build.",
    );
    console.error(
      "Stop `npm run dev`, close files under src/app/api, then run `npm run build` again.",
    );
    throw error;
  }
}

if (mode === "--remove") {
  if (!fs.existsSync(apiDir)) {
    process.exit(0);
  }

  moveAside(apiDir, backupDir);
  console.log("Moved src/app/api aside for static export build.");
  process.exit(0);
}

if (mode === "--restore") {
  if (fs.existsSync(backupDir) && !fs.existsSync(apiDir)) {
    moveAside(backupDir, apiDir);
    console.log("Restored src/app/api after static export build.");
  }
  process.exit(0);
}

console.error("Usage: node scripts/strip-dev-api.js --remove|--restore");
process.exit(1);

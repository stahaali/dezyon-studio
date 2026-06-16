const fs = require("fs");
const path = require("path");

const apiDir = path.join(__dirname, "..", "src", "app", "api");
const backupDir = path.join(__dirname, "..", ".cache", "dev-api-backup");
const mode = process.argv[2];

if (mode === "--remove") {
  if (!fs.existsSync(apiDir)) {
    process.exit(0);
  }

  fs.mkdirSync(path.dirname(backupDir), { recursive: true });

  if (fs.existsSync(backupDir)) {
    fs.rmSync(backupDir, { recursive: true, force: true });
  }

  fs.renameSync(apiDir, backupDir);
  console.log("Moved src/app/api aside for static export build.");
  process.exit(0);
}

if (mode === "--restore") {
  if (fs.existsSync(backupDir) && !fs.existsSync(apiDir)) {
    fs.renameSync(backupDir, apiDir);
    console.log("Restored src/app/api after static export build.");
  }
  process.exit(0);
}

console.error("Usage: node scripts/strip-dev-api.js --remove|--restore");
process.exit(1);

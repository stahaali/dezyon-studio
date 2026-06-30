const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const env = {};

  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    env[key] = value;
  }

  return env;
}

process.env.BUILD_STATIC = "true";

const projectRoot = path.join(__dirname, "..");

for (const envFile of [".env", ".env.local"]) {
  const loaded = loadEnv(path.join(projectRoot, envFile));
  for (const [key, value] of Object.entries(loaded)) {
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");

execSync(`node "${nextBin}" build`, {
  stdio: "inherit",
  env: process.env,
  cwd: projectRoot,
});

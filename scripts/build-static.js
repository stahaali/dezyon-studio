const { execSync } = require("child_process");
const path = require("path");

process.env.BUILD_STATIC = "true";

const projectRoot = path.join(__dirname, "..");
const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");

execSync(`node "${nextBin}" build`, {
  stdio: "inherit",
  env: process.env,
  cwd: projectRoot,
});

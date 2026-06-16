process.env.BUILD_STATIC = "true";
require("child_process").execSync("next build", {
  stdio: "inherit",
  env: process.env,
});

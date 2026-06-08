const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const lockFile = path.join(process.cwd(), ".next", "dev", "lock");

function removeLockFile() {
  if (!fs.existsSync(lockFile)) return;

  try {
    fs.unlinkSync(lockFile);
    console.log("[clean-dev] Removed stale .next/dev/lock");
  } catch (error) {
    console.warn("[clean-dev] Could not remove lock file:", error.message);
  }
}

function killPort(port) {
  if (process.platform === "win32") {
    try {
      const output = execSync(
        `netstat -ano | findstr :${port}`,
        { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] }
      );

      const pids = new Set(
        output
          .split("\n")
          .map((line) => line.trim().split(/\s+/).pop())
          .filter((pid) => pid && /^\d+$/.test(pid) && pid !== "0")
      );

      for (const pid of pids) {
        try {
          execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
          console.log(`[clean-dev] Killed process ${pid} on port ${port}`);
        } catch {
          // Process may already be gone
        }
      }
    } catch {
      // No process on port
    }
    return;
  }

  try {
    execSync(`npx kill-port ${port}`, { stdio: "ignore" });
    console.log(`[clean-dev] Freed port ${port}`);
  } catch {
    // Port already free
  }
}

removeLockFile();
killPort(PORT);

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

function killPort(port) {
  if (process.platform !== "win32") {
    try {
      execSync(`npx kill-port ${port}`, { stdio: "ignore" });
    } catch {
      // Port already free
    }
    return;
  }

  try {
    const output = execSync(`netstat -ano | findstr :${port}`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    });

    const pids = new Set(
      output
        .split("\n")
        .map((line) => line.trim().split(/\s+/).pop())
        .filter((pid) => pid && /^\d+$/.test(pid) && pid !== "0")
    );

    for (const pid of pids) {
      try {
        execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
        console.log(`[clean-build] Stopped dev process ${pid} on port ${port}`);
      } catch {
        // Process may already be gone
      }
    }
  } catch {
    // No process on port
  }
}

function removePath(targetPath) {
  if (!fs.existsSync(targetPath)) {
    return;
  }

  try {
    fs.rmSync(targetPath, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
    console.log(`[clean-build] Removed ${path.basename(targetPath)}`);
  } catch (error) {
    console.warn(
      `[clean-build] Could not remove ${path.basename(targetPath)}:`,
      error.message
    );
  }
}

const root = process.cwd();
const lockFile = path.join(root, ".next", "dev", "lock");

killPort(PORT);

if (fs.existsSync(lockFile)) {
  try {
    fs.unlinkSync(lockFile);
    console.log("[clean-build] Removed .next/dev/lock");
  } catch {
    // Ignore lock cleanup errors
  }
}

removePath(path.join(root, ".next"));
removePath(path.join(root, "out"));

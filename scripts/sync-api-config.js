const fs = require("fs");
const path = require("path");

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
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

function phpString(value) {
  return `'${String(value).replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
}

function buildConfigPhp(env) {
  const host = env.DB_HOST || "localhost";
  const user = env.DB_USER || "";
  const pass = env.DB_PASSWORD || "";
  const name = env.DB_NAME || "";
  const recipient = env.RECIPIENT_EMAIL || "hello@dezyonstudio.com, staha086@gmail.com, sc.rma.786@gmail.com, allahfinal@hotmail.com";
  const recaptchaSecret = env.RECAPTCHA_SECRET_KEY || "";
  const mailFrom = env.MAIL_FROM || "hello@dezyonstudio.com";
  const mailFromName = env.MAIL_FROM_NAME || "Dezyon Studio";
  const smtpHost = env.SMTP_HOST || "smtp.hostinger.com";
  const smtpPort = env.SMTP_PORT || "465";
  const smtpEncryption = env.SMTP_ENCRYPTION || "ssl";
  const smtpUser = env.SMTP_USER || mailFrom;
  const smtpPass = env.SMTP_PASSWORD || "";

  if (!user || !pass || !name) {
    throw new Error(
      "Missing DB_USER, DB_PASSWORD, or DB_NAME in .env file."
    );
  }

  if (!smtpPass) {
    console.warn(
      "[sync-api-config] SMTP_PASSWORD is empty. Contact form emails will NOT be delivered until you set it."
    );
  }

  return `<?php
return [
    'db_host' => ${phpString(host)},
    'db_user' => ${phpString(user)},
    'db_pass' => ${phpString(pass)},
    'db_name' => ${phpString(name)},
    'recipient_email' => ${phpString(recipient)},
    'recaptcha_secret' => ${phpString(recaptchaSecret)},
    'mail_from' => ${phpString(mailFrom)},
    'mail_from_name' => ${phpString(mailFromName)},
    'smtp_host' => ${phpString(smtpHost)},
    'smtp_port' => ${Number(smtpPort) || 465},
    'smtp_encryption' => ${phpString(smtpEncryption)},
    'smtp_user' => ${phpString(smtpUser)},
    'smtp_pass' => ${phpString(smtpPass)},
];
`;
}

const envCandidates = [
  path.join(process.cwd(), ".env"),
  path.join(process.cwd(), ".env.local"),
];

let env = {};

for (const envPath of envCandidates) {
  const loaded = loadEnv(envPath);
  if (loaded) {
    env = { ...env, ...loaded };
  }
}

if (Object.keys(env).length === 0) {
  console.error("[sync-api-config] .env or .env.local file not found.");
  process.exit(1);
}

console.log("[sync-api-config] Loaded environment from .env + .env.local");

const configPhp = buildConfigPhp(env);
const publicConfigPath = path.join(process.cwd(), "public", "api", "config.php");

fs.mkdirSync(path.dirname(publicConfigPath), { recursive: true });
fs.writeFileSync(publicConfigPath, configPhp, "utf8");
console.log("[sync-api-config] Wrote public/api/config.php from .env");

const outConfigPath = path.join(process.cwd(), "out", "api", "config.php");
if (fs.existsSync(path.join(process.cwd(), "out"))) {
  fs.mkdirSync(path.dirname(outConfigPath), { recursive: true });
  fs.writeFileSync(outConfigPath, configPhp, "utf8");
  console.log("[sync-api-config] Wrote out/api/config.php from .env");
}

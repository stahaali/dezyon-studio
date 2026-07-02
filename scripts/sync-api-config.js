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
  const user = env.DB_USER || "u527758351_dezyonstudio";
  const pass = env.DB_PASSWORD || "";
  const name = env.DB_NAME || "u527758351_dezyonstudio";
  const recipient = env.RECIPIENT_EMAIL || "hello@dezyonstudio.com, staha086@gmail.com";
  const recaptchaSecret = env.RECAPTCHA_SECRET_KEY || "";
  const mailFrom = env.MAIL_FROM || "hello@dezyonstudio.com";
  const mailFromName = env.MAIL_FROM_NAME || "Dezyon Studio";
  const smtpHost = env.SMTP_HOST || "smtp.hostinger.com";
  const smtpPort = env.SMTP_PORT || "465";
  const smtpEncryption = env.SMTP_ENCRYPTION || "ssl";
  const smtpUser = env.SMTP_USER || mailFrom;
  const smtpPass = env.SMTP_PASSWORD || "";
  const pagespeedApiKey = env.PAGESPEED_API_KEY || "";

  if (!pagespeedApiKey && (!user || !pass || !name)) {
    throw new Error(
      "Missing PAGESPEED_API_KEY or DB_USER, DB_PASSWORD, and DB_NAME in .env file."
    );
  }

  if (!pass) {
    console.warn(
      "[sync-api-config] DB_PASSWORD is empty. Contact form and audit history need it on Hostinger."
    );
  }

  if (!pagespeedApiKey) {
    console.warn(
      "[sync-api-config] PAGESPEED_API_KEY is empty. Website audit will not work on live."
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
    'pagespeed_api_key' => ${phpString(pagespeedApiKey)},
];
`;
}

const envCandidates = [
  path.join(process.cwd(), ".env"),
  path.join(process.cwd(), ".env.local"),
];

const envVarKeys = [
  "DB_HOST",
  "DB_USER",
  "DB_PASSWORD",
  "DB_NAME",
  "RECIPIENT_EMAIL",
  "RECAPTCHA_SECRET_KEY",
  "MAIL_FROM",
  "MAIL_FROM_NAME",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_ENCRYPTION",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "PAGESPEED_API_KEY",
];

let env = {};

for (const envPath of envCandidates) {
  const loaded = loadEnv(envPath);
  if (loaded) {
    env = { ...env, ...loaded };
  }
}

for (const key of envVarKeys) {
  if (process.env[key] && !env[key]) {
    env[key] = process.env[key];
  }
}

function writeRecaptchaSiteKeyFile() {
  const recaptchaSiteKey = (env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "").trim();
  if (!recaptchaSiteKey) {
    console.warn(
      "[sync-api-config] NEXT_PUBLIC_RECAPTCHA_SITE_KEY is empty. Contact form reCAPTCHA will not work."
    );
    return;
  }

  const payload = `${JSON.stringify({ siteKey: recaptchaSiteKey }, null, 2)}\n`;
  const publicRecaptchaPath = path.join(
    process.cwd(),
    "public",
    "recaptcha-site-key.json"
  );

  fs.writeFileSync(publicRecaptchaPath, payload, "utf8");
  console.log("[sync-api-config] Wrote public/recaptcha-site-key.json");

  const outRecaptchaPath = path.join(process.cwd(), "out", "recaptcha-site-key.json");
  if (fs.existsSync(path.join(process.cwd(), "out"))) {
    fs.writeFileSync(outRecaptchaPath, payload, "utf8");
    console.log("[sync-api-config] Wrote out/recaptcha-site-key.json");
  }
}

writeRecaptchaSiteKeyFile();

const isVercel = Boolean(process.env.VERCEL);

if (Object.keys(env).length === 0) {
  if (isVercel || process.env.CI) {
    console.warn(
      "[sync-api-config] No .env on Vercel/CI — skipping config.php (static deploy only)."
    );
    process.exit(0);
  }

  console.error("[sync-api-config] .env or .env.local file not found.");
  process.exit(1);
}

let configPhp;

try {
  configPhp = buildConfigPhp(env);
} catch (error) {
  console.warn(`[sync-api-config] ${error.message}`);
  console.warn(
    "[sync-api-config] Skipping config.php — add DB_USER, DB_PASSWORD, and DB_NAME to .env for contact form / audit API."
  );
  process.exit(0);
}

const envSource = fs.existsSync(envCandidates[0]) || fs.existsSync(envCandidates[1])
  ? ".env + .env.local + process.env"
  : "process.env";
console.log(`[sync-api-config] Loaded environment from ${envSource}`);

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

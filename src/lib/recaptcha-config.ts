const PRODUCTION_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() ?? "";

// Google's public test key — fallback when no site key in .env.local
const DEVELOPMENT_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

export const RECAPTCHA_SITE_KEY =
  PRODUCTION_SITE_KEY ||
  (process.env.NODE_ENV === "development" ? DEVELOPMENT_SITE_KEY : "");

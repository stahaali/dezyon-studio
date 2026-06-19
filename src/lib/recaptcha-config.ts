import {
  isLocalRecaptchaHost,
  RECAPTCHA_TEST_SITE_KEY,
} from "@/lib/recaptcha-keys";

const PRODUCTION_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() ?? "";

export const RECAPTCHA_SITE_KEY =
  PRODUCTION_SITE_KEY ||
  (process.env.NODE_ENV === "development" ? RECAPTCHA_TEST_SITE_KEY : "");

export function getClientRecaptchaSiteKey(): string {
  if (typeof window !== "undefined" && isLocalRecaptchaHost(window.location.hostname)) {
    return RECAPTCHA_TEST_SITE_KEY;
  }

  return RECAPTCHA_SITE_KEY;
}

export const RECAPTCHA_TEST_SITE_KEY =
  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
export const RECAPTCHA_TEST_SECRET_KEY =
  "6LeIxAcTAAAAAGG-vFI1TnRWxM0IB3T3c725jg1";

export function isLocalRecaptchaHost(hostname: string): boolean {
  return hostname === "localhost" || hostname === "127.0.0.1";
}

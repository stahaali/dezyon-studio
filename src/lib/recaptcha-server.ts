import {
  isLocalRecaptchaHost,
  RECAPTCHA_TEST_SECRET_KEY,
} from "@/lib/recaptcha-keys";

export function getServerRecaptchaSecret(host = ""): string {
  const envSecret = process.env.RECAPTCHA_SECRET_KEY?.trim() || "";
  if (envSecret) {
    return envSecret;
  }

  const hostname = host.split(":")[0] ?? "";

  if (isLocalRecaptchaHost(hostname)) {
    return RECAPTCHA_TEST_SECRET_KEY;
  }

  return "";
}

export async function verifyRecaptchaToken(
  token: string,
  secret: string,
): Promise<boolean> {
  if (!token || !secret) {
    return false;
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });

  const result = (await response.json()) as { success?: boolean };

  return result.success === true;
}

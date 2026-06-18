export const VAPI_ASSISTANT_ID = "658aeb5f-a896-4e98-97ce-8a4640211be8";

export const VAPI_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY?.trim() ?? "";

/** E.164 number from Vapi dashboard (e.g. +13464212554) — used for transferCall destinations */
export const VAPI_PHONE_NUMBER =
  process.env.NEXT_PUBLIC_VAPI_PHONE_NUMBER?.trim() ?? "";

export function isVapiConfigured() {
  return Boolean(VAPI_PUBLIC_KEY && VAPI_ASSISTANT_ID);
}

export function isVapiTransferConfigured() {
  return isVapiConfigured() && Boolean(VAPI_PHONE_NUMBER);
}

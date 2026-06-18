export const SIMLI_API_KEY =
  process.env.NEXT_PUBLIC_SIMLI_API_KEY?.trim() ?? "";

export const SIMLI_FACE_ID =
  process.env.NEXT_PUBLIC_SIMLI_FACE_ID?.trim() ??
  "5514e24d-6086-46a3-ace4-6a7264e5cb7c";

export function isSimliConfigured() {
  return Boolean(SIMLI_API_KEY && SIMLI_FACE_ID);
}

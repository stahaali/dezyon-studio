"use client";

import Vapi from "@vapi-ai/web";
import { isVapiConfigured, VAPI_PUBLIC_KEY } from "@/lib/vapi-config";

let vapiClient: Vapi | null = null;

export function getVapiClient() {
  if (!isVapiConfigured()) {
    return null;
  }

  vapiClient ??= new Vapi(VAPI_PUBLIC_KEY);
  return vapiClient;
}

export function resetVapiClient() {
  vapiClient = null;
}

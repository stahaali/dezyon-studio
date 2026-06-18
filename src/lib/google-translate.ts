export const TRANSLATOR_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "hi", label: "Hindi" },
  { code: "ur", label: "Urdu" },
  { code: "ar", label: "Arabic" },
  { code: "zh-CN", label: "Chinese" },
  { code: "pt", label: "Portuguese" },
] as const;

const TRANSLATOR_SCRIPT_ID = "google-translate-script";
const TRANSLATOR_ELEMENT_ID = "google_translate_element";
const TRANSLATOR_LOAD_TIMEOUT_MS = 12000;
const TRANSLATOR_STORAGE_KEY = "dezyon-translator-language";
const DEFAULT_LANGUAGE_CODE = "en";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            autoDisplay?: boolean;
          },
          elementId: string
        ) => void;
      };
    };
  }
}

let translateReadyPromise: Promise<void> | null = null;
let translateInitialized = false;

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function waitForTranslateApi(timeoutMs = 10000) {
  const startedAt = Date.now();

  while (!window.google?.translate?.TranslateElement) {
    if (Date.now() - startedAt >= timeoutMs) {
      return false;
    }

    await wait(50);
  }

  return true;
}

function canSetCookieDomain() {
  const hostname = window.location.hostname;
  return hostname !== "localhost" && hostname !== "127.0.0.1";
}

function isSupportedLanguageCode(code: string): code is (typeof TRANSLATOR_LANGUAGES)[number]["code"] {
  return TRANSLATOR_LANGUAGES.some((language) => language.code === code);
}

function readStoredLanguageCode(): string | null {
  try {
    const stored = localStorage.getItem(TRANSLATOR_STORAGE_KEY);
    return stored && isSupportedLanguageCode(stored) ? stored : null;
  } catch {
    return null;
  }
}

function writeStoredLanguageCode(code: string) {
  try {
    localStorage.setItem(TRANSLATOR_STORAGE_KEY, code);
  } catch {
    // ignore storage failures
  }
}

function parseGoogTransCookie(): string | null {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!match?.[1]) {
    return null;
  }

  return decodeURIComponent(match[1]).trim();
}

function getTargetLanguageFromGoogTrans(value: string): string {
  const segments = value.split("/").filter(Boolean);
  if (!segments.length) {
    return DEFAULT_LANGUAGE_CODE;
  }

  const target = segments[segments.length - 1];
  if (!target || target === "auto") {
    return DEFAULT_LANGUAGE_CODE;
  }

  return target;
}

function isPageTranslatedByGoogle(): boolean {
  return (
    document.documentElement.classList.contains("translated-ltr") ||
    document.documentElement.classList.contains("translated-rtl")
  );
}

export function getActiveLanguageCode(): string {
  if (typeof document === "undefined") {
    return DEFAULT_LANGUAGE_CODE;
  }

  const storedLanguage = readStoredLanguageCode();
  if (storedLanguage) {
    return storedLanguage;
  }

  const googTrans = parseGoogTransCookie();
  if (!googTrans) {
    return DEFAULT_LANGUAGE_CODE;
  }

  const target = getTargetLanguageFromGoogTrans(googTrans);
  if (!target || target === DEFAULT_LANGUAGE_CODE) {
    return DEFAULT_LANGUAGE_CODE;
  }

  return isSupportedLanguageCode(target) ? target : DEFAULT_LANGUAGE_CODE;
}

function clearTranslateCookies() {
  const expires = "Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = `googtrans=;path=/;expires=${expires}`;

  if (canSetCookieDomain()) {
    document.cookie = `googtrans=;path=/;domain=${window.location.hostname};expires=${expires}`;
  }
}

export function setTranslateCookie(lang: string) {
  writeStoredLanguageCode(lang);

  if (lang === DEFAULT_LANGUAGE_CODE) {
    clearTranslateCookies();
    return;
  }

  const value = `/en/${lang}`;
  document.cookie = `googtrans=${value};path=/`;

  if (canSetCookieDomain()) {
    document.cookie = `googtrans=${value};path=/;domain=${window.location.hostname}`;
  }
}

function initGoogleTranslate() {
  if (translateInitialized || typeof document === "undefined") {
    return;
  }

  let element = document.getElementById(TRANSLATOR_ELEMENT_ID);
  if (!element) {
    element = document.createElement("div");
    element.id = TRANSLATOR_ELEMENT_ID;
    element.className = "notranslate";
    element.setAttribute("aria-hidden", "true");
    element.style.cssText =
      "position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";
    document.body.appendChild(element);
  }

  if (!window.google?.translate?.TranslateElement || element.childElementCount > 0) {
    return;
  }

  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: TRANSLATOR_LANGUAGES.map((language) => language.code).join(
        ","
      ),
      autoDisplay: false,
    },
    TRANSLATOR_ELEMENT_ID
  );

  translateInitialized = true;
}

async function loadGoogleTranslateScript() {
  if (window.google?.translate?.TranslateElement) {
    initGoogleTranslate();
    return;
  }

  await new Promise<void>((resolve) => {
    let settled = false;

    const settle = () => {
      if (!settled) {
        settled = true;
        resolve();
      }
    };

    const finish = async () => {
      const apiReady = await waitForTranslateApi(8000);
      if (apiReady) {
        initGoogleTranslate();
      }
      settle();
    };

    window.googleTranslateElementInit = finish;

    const timeoutId = window.setTimeout(settle, TRANSLATOR_LOAD_TIMEOUT_MS);

    const existingScript = document.getElementById(
      TRANSLATOR_SCRIPT_ID
    ) as HTMLScriptElement | null;

    if (existingScript) {
      void finish().finally(() => {
        window.clearTimeout(timeoutId);
      });
      return;
    }

    const script = document.createElement("script");
    script.id = TRANSLATOR_SCRIPT_ID;
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => {
      window.clearTimeout(timeoutId);
      settle();
    };
    document.head.appendChild(script);
  });
}

export function ensureTranslatorDefaults(): void {
  if (typeof document === "undefined") {
    return;
  }

  const storedLanguage = readStoredLanguageCode();
  if (!storedLanguage) {
    writeStoredLanguageCode(DEFAULT_LANGUAGE_CODE);

    if (parseGoogTransCookie()) {
      clearTranslateCookies();
    }

    if (isPageTranslatedByGoogle()) {
      window.location.reload();
    }

    return;
  }

  if (storedLanguage !== DEFAULT_LANGUAGE_CODE) {
    return;
  }

  if (parseGoogTransCookie()) {
    clearTranslateCookies();
  }

  if (isPageTranslatedByGoogle()) {
    window.location.reload();
  }
}

export function preloadGoogleTranslate(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (!translateReadyPromise) {
    translateReadyPromise = loadGoogleTranslateScript().catch(() => undefined);
  }

  return translateReadyPromise;
}

export async function applyLanguage(lang: string): Promise<void> {
  setTranslateCookie(lang);
  void preloadGoogleTranslate();
  window.location.reload();
}

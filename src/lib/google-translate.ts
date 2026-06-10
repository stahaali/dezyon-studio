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

export function getActiveLanguageCode(): string {
  if (typeof document === "undefined") {
    return "en";
  }

  const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
  return match?.[1] || "en";
}

function clearTranslateCookies() {
  const expires = "Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = `googtrans=;path=/;expires=${expires}`;
  document.cookie = `googtrans=;path=/;domain=${window.location.hostname};expires=${expires}`;
}

export function setTranslateCookie(lang: string) {
  if (lang === "en") {
    clearTranslateCookies();
    return;
  }

  const value = `/en/${lang}`;
  document.cookie = `googtrans=${value};path=/`;
  document.cookie = `googtrans=${value};path=/;domain=${window.location.hostname}`;
}

function initGoogleTranslate() {
  if (translateInitialized || typeof document === "undefined") {
    return;
  }

  let element = document.getElementById(TRANSLATOR_ELEMENT_ID);
  if (!element) {
    element = document.createElement("div");
    element.id = TRANSLATOR_ELEMENT_ID;
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
      includedLanguages: TRANSLATOR_LANGUAGES.map((language) => language.code).join(","),
      autoDisplay: false,
    },
    TRANSLATOR_ELEMENT_ID
  );

  translateInitialized = true;
}

export function preloadGoogleTranslate(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.google?.translate?.TranslateElement) {
    initGoogleTranslate();
    return Promise.resolve();
  }

  if (translateReadyPromise) {
    return translateReadyPromise;
  }

  translateReadyPromise = new Promise<void>((resolve) => {
    const finish = () => {
      initGoogleTranslate();
      resolve();
    };

    window.googleTranslateElementInit = finish;

    const existingScript = document.getElementById(
      TRANSLATOR_SCRIPT_ID
    ) as HTMLScriptElement | null;

    if (existingScript) {
      if (window.google?.translate?.TranslateElement) {
        finish();
      } else {
        existingScript.addEventListener("load", finish, { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.id = TRANSLATOR_SCRIPT_ID;
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", finish, { once: true });
    document.head.appendChild(script);
  });

  return translateReadyPromise;
}

export function applyLanguage(lang: string) {
  setTranslateCookie(lang);
  window.location.reload();
}

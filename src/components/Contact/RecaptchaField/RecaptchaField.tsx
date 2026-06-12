"use client";

import { useEffect, useRef } from "react";
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha-config";
import styles from "./RecaptchaField.module.css";

type RecaptchaFieldProps = {
  widgetKey: number;
  onChange: (token: string) => void;
};

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        parameters: {
          sitekey: string;
          theme?: "light" | "dark";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
        }
      ) => number;
      reset: (widgetId?: number) => void;
    };
    onRecaptchaLoad?: () => void;
  }
}

let recaptchaScriptPromise: Promise<void> | null = null;

function loadRecaptchaScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.grecaptcha?.render) {
    return Promise.resolve();
  }

  if (recaptchaScriptPromise) {
    return recaptchaScriptPromise;
  }

  recaptchaScriptPromise = new Promise((resolve, reject) => {
    window.onRecaptchaLoad = () => resolve();

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src*="recaptcha/api.js"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA script."));
    document.head.appendChild(script);
  });

  return recaptchaScriptPromise;
}

export function RecaptchaField({ widgetKey, onChange }: RecaptchaFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const onChangeRef = useRef(onChange);

  onChangeRef.current = onChange;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !RECAPTCHA_SITE_KEY) {
      return;
    }

    let cancelled = false;

    const mountWidget = async () => {
      try {
        await loadRecaptchaScript();
        if (cancelled || !containerRef.current || !window.grecaptcha?.render) {
          return;
        }

        containerRef.current.innerHTML = "";
        widgetIdRef.current = null;

        widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: "dark",
          callback: (token) => onChangeRef.current(token),
          "expired-callback": () => onChangeRef.current(""),
        });
      } catch {
        onChangeRef.current("");
      }
    };

    void mountWidget();

    return () => {
      cancelled = true;
      widgetIdRef.current = null;
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [widgetKey]);

  if (!RECAPTCHA_SITE_KEY) {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <div ref={containerRef} className={styles.widget} />
    </div>
  );
}

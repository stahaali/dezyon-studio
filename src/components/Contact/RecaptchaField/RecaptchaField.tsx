"use client";

import { useEffect, useRef, useState } from "react";
import { getClientRecaptchaSiteKey } from "@/lib/recaptcha-config";
import { isLocalRecaptchaHost } from "@/lib/recaptcha-keys";
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
  const [siteKey, setSiteKey] = useState("");
  const [siteKeyReady, setSiteKeyReady] = useState(false);
  const [loadError, setLoadError] = useState("");

  onChangeRef.current = onChange;

  useEffect(() => {
    let cancelled = false;

    const loadSiteKey = async () => {
      if (
        typeof window !== "undefined" &&
        isLocalRecaptchaHost(window.location.hostname)
      ) {
        setSiteKey(getClientRecaptchaSiteKey());
        setSiteKeyReady(true);
        setLoadError("");
        return;
      }

      try {
        const response = await fetch("/recaptcha-site-key.json", { cache: "no-store" });
        if (response.ok) {
          const data = (await response.json()) as { siteKey?: string };
          const nextSiteKey = data.siteKey?.trim();
          if (!cancelled && nextSiteKey) {
            setSiteKey(nextSiteKey);
            setSiteKeyReady(true);
            setLoadError("");
            return;
          }
        }
      } catch {
        // Fall back to build-time key below.
      }

      if (!cancelled) {
        const fallbackKey = getClientRecaptchaSiteKey().trim();
        setSiteKey(fallbackKey);
        setSiteKeyReady(true);
        if (!fallbackKey) {
          setLoadError(
            "Verification could not load. Upload recaptcha-site-key.json or rebuild with NEXT_PUBLIC_RECAPTCHA_SITE_KEY."
          );
        }
      }
    };

    void loadSiteKey();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !siteKey || !siteKeyReady) {
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
          sitekey: siteKey,
          theme: "dark",
          callback: (token) => onChangeRef.current(token),
          "expired-callback": () => onChangeRef.current(""),
        });
      } catch {
        onChangeRef.current("");
        if (!cancelled) {
          setLoadError("Verification failed to load. Please refresh the page.");
        }
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
  }, [widgetKey, siteKey, siteKeyReady]);

  if (!siteKeyReady) {
    return <p className={styles.status}>Loading verification...</p>;
  }

  if (loadError || !siteKey) {
    return <p className={styles.error}>{loadError || "Verification is unavailable."}</p>;
  }

  return (
    <div className={styles.wrap}>
      {loadError ? <p className={styles.error}>{loadError}</p> : null}
      <div ref={containerRef} className={styles.widget} />
    </div>
  );
}

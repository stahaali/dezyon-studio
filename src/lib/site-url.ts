/** Single canonical origin for metadata, sitemap, schema, and redirects (no www, no trailing slash). */
export const CANONICAL_SITE_ORIGIN = "https://dezyonstudio.com";

export function resolveBaseUrl(_value?: string): string {
  return CANONICAL_SITE_ORIGIN;
}

export function getBaseUrl(): string {
  return CANONICAL_SITE_ORIGIN;
}

/** @deprecated Use CANONICAL_SITE_ORIGIN */
export const BASE_URL = CANONICAL_SITE_ORIGIN;

const CANONICAL_SITE_ORIGIN = "https://dezyonstudio.com";

function resolveBaseUrl() {
  return CANONICAL_SITE_ORIGIN;
}

function getSiteUrlFromEnv() {
  return CANONICAL_SITE_ORIGIN;
}

module.exports = {
  CANONICAL_SITE_ORIGIN,
  resolveBaseUrl,
  getSiteUrlFromEnv,
};

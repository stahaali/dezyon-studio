import type {
  AuditCheckItem,
  AuditDetailHeading,
  AuditDetailRow,
  AuditDetails,
  AuditTableSection,
} from "@/types/audit-details";

type LighthouseHeading = {
  key?: string;
  label?: string;
  valueType?: string;
  displayUnit?: string;
  subItemsHeading?: { key?: string; valueType?: string; label?: string };
};

type LighthouseDetails = {
  type?: string;
  headings?: LighthouseHeading[];
  items?: Array<Record<string, unknown>> | Record<string, { label?: string; value?: boolean }>;
};

const SKIP_DETAIL_TYPES = new Set(["filmstrip", "screenshot", "treemap-data"]);

function parseHeadings(headings: LighthouseHeading[]): AuditDetailHeading[] {
  return headings
    .filter((heading) => heading.key && heading.label && heading.valueType)
    .map((heading) => ({
      key: heading.key as string,
      label: heading.label as string,
      valueType: heading.valueType as string,
      displayUnit: heading.displayUnit,
      subItemsHeading: heading.subItemsHeading?.key
        ? {
            key: heading.subItemsHeading.key,
            valueType: heading.subItemsHeading.valueType ?? "text",
            label: heading.subItemsHeading.label,
          }
        : undefined,
    }));
}

function flattenValue(value: unknown, key?: string): string | number | boolean | null {
  if (value === null || value === undefined) {
    return null;
  }

  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  }

  if (typeof value !== "object") {
    return String(value);
  }

  const obj = value as Record<string, unknown>;

  if (obj.type === "node") {
    return String(obj.nodeLabel || obj.snippet || obj.selector || "Element");
  }

  if (obj.type === "source-location" && typeof obj.url === "string") {
    const line = typeof obj.line === "number" ? `:${obj.line}` : "";
    const column = typeof obj.column === "number" ? `:${obj.column}` : "";
    return `${obj.url}${line}${column}`;
  }

  if (obj.type === "text" && obj.value !== undefined) {
    return String(obj.value);
  }

  if (key === "node") {
    return String(obj.snippet || obj.nodeLabel || obj.selector || "Element");
  }

  return JSON.stringify(value);
}

function sanitizeSubItems(value: unknown): AuditDetailRow[] {
  if (!value || typeof value !== "object") {
    return [];
  }

  const subItems = value as { items?: Array<Record<string, unknown>> };
  if (!Array.isArray(subItems.items)) {
    return [];
  }

  return subItems.items
    .map((item) => sanitizeRow(item))
    .filter((item): item is AuditDetailRow => item !== null);
}

function sanitizeRow(item: Record<string, unknown>): AuditDetailRow | null {
  const row: AuditDetailRow = {};

  for (const [key, value] of Object.entries(item)) {
    if (key === "subItems") {
      const subRows = sanitizeSubItems(value);
      if (subRows.length > 0) {
        row.__subItems = subRows;
      }
      continue;
    }

    if (value === null || value === undefined) {
      row[key] = null;
      continue;
    }

    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      row[key] = value;
      continue;
    }

    const flattened = flattenValue(value, key);
    if (flattened !== null) {
      row[key] = flattened;
    }
  }

  return Object.keys(row).length > 0 ? row : null;
}

function sanitizeItems(items: Array<Record<string, unknown>>): AuditDetailRow[] {
  return items.map((item) => sanitizeRow(item)).filter((item): item is AuditDetailRow => item !== null);
}

function extractChecklist(details: LighthouseDetails): AuditDetails | undefined {
  if (details.type !== "checklist" || !details.items || Array.isArray(details.items)) {
    return undefined;
  }

  const checks: AuditCheckItem[] = Object.values(details.items)
    .map((item) => ({
      label: String(item.label ?? ""),
      passed: Boolean(item.value),
    }))
    .filter((item) => item.label.length > 0);

  if (checks.length === 0) {
    return undefined;
  }

  return {
    type: details.type,
    variant: "checklist",
    checks,
  };
}

function extractListTables(details: LighthouseDetails): AuditDetails | undefined {
  if (details.type !== "list" || !Array.isArray(details.items)) {
    return undefined;
  }

  const tables: AuditTableSection[] = details.items
    .filter((section) => section.type === "table" && Array.isArray(section.headings))
    .map((section) => {
      const headings = parseHeadings(section.headings as LighthouseHeading[]);
      const items = Array.isArray(section.items)
        ? sanitizeItems(section.items as Array<Record<string, unknown>>)
        : [];

      return { headings, items };
    })
    .filter((section) => section.headings.length > 0 && section.items.length > 0);

  if (tables.length === 0) {
    return undefined;
  }

  return {
    type: details.type,
    variant: "list",
    tables,
  };
}

function extractTable(details: LighthouseDetails): AuditDetails | undefined {
  if (!details.headings?.length || !Array.isArray(details.items) || details.items.length === 0) {
    return undefined;
  }

  const headings = parseHeadings(details.headings);
  const items = sanitizeItems(details.items as Array<Record<string, unknown>>);

  if (headings.length === 0 || items.length === 0) {
    return undefined;
  }

  return {
    type: details.type,
    variant: "table",
    headings,
    items,
  };
}

export function extractAuditDetails(details?: LighthouseDetails): AuditDetails | undefined {
  if (!details) {
    return undefined;
  }

  if (details.type && SKIP_DETAIL_TYPES.has(details.type)) {
    return undefined;
  }

  return (
    extractChecklist(details) ??
    extractListTables(details) ??
    extractTable(details)
  );
}

export function formatAuditBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KiB`;
  return `${(bytes / 1048576).toFixed(2)} MiB`;
}

export function formatDurationMs(ms: number): string {
  if (ms <= 0) return "None";

  const seconds = ms / 1000;
  if (seconds < 60) return `${Math.round(seconds)} s`;

  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.round(minutes)} m`;

  const hours = minutes / 60;
  if (hours < 24) return `${Math.round(hours)} h`;

  const days = hours / 24;
  if (days < 365) return `${Math.round(days)} d`;

  return `${Math.round(days / 365)} y`;
}

export function formatAuditCell(
  valueType: string,
  value: string | number | boolean | null,
  headingKey?: string,
  displayUnit?: string
): string {
  if (value === null || value === undefined) {
    return "—";
  }

  if (valueType === "bytes") {
    return formatAuditBytes(Number(value));
  }

  if (
    valueType === "ms" &&
    (displayUnit === "duration" || headingKey?.toLowerCase().includes("cachelifetime"))
  ) {
    return formatDurationMs(Number(value));
  }

  if (valueType === "timespanMs" || valueType === "ms") {
    return `${Math.round(Number(value)).toLocaleString()} ms`;
  }

  if (valueType === "numeric") {
    return Number(value).toLocaleString(undefined, { maximumFractionDigits: 3 });
  }

  if (valueType === "url" || valueType === "link") {
    return String(value);
  }

  if (valueType === "node" || valueType === "code" || valueType === "text") {
    return String(value);
  }

  if (typeof value === "number") {
    return value.toLocaleString();
  }

  return String(value);
}

export function getHostname(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return "Other";
  }
}

export function formatPsiRequestUrl(url: string): string {
  const hostname = getHostname(url);

  try {
    const parsed = new URL(url);
    const path = parsed.pathname + parsed.search;
    const shortPath = path.length > 42 ? `…${path.slice(-40)}` : path || hostname;
    return `${shortPath} (${hostname})`;
  } catch {
    const short = url.length > 42 ? `…${url.slice(-40)}` : url;
    return short;
  }
}

export function isRightAlignedHeading(valueType: string): boolean {
  return ["bytes", "timespanMs", "ms", "numeric"].includes(valueType);
}

export function isSummableHeading(valueType: string, key?: string): boolean {
  return isRightAlignedHeading(valueType) && !key?.toLowerCase().includes("cachelifetime");
}

export function isThirdPartyUrl(url: string, pageHostname: string): boolean {
  if (!url || !pageHostname) {
    return false;
  }

  try {
    const host = new URL(url).hostname;
    return host !== pageHostname && !host.endsWith(`.${pageHostname}`);
  } catch {
    return false;
  }
}

export type DomainGroup = {
  hostname: string;
  isThirdParty: boolean;
  items: AuditDetailRow[];
  totals: Record<string, number>;
};

export function groupRowsByDomain(
  items: AuditDetailRow[],
  pageHostname: string,
  headings: AuditDetailHeading[]
): DomainGroup[] | null {
  const urlHeading = headings.find((heading) => heading.valueType === "url");
  if (!urlHeading) {
    return null;
  }

  const numericKeys = headings
    .filter((heading) => isSummableHeading(heading.valueType, heading.key))
    .map((heading) => heading.key);

  const groups = new Map<string, DomainGroup>();

  for (const item of items) {
    const url = String(item[urlHeading.key] ?? "");
    const hostname = getHostname(url);
    const existing =
      groups.get(hostname) ??
      {
        hostname,
        isThirdParty: isThirdPartyUrl(url, pageHostname),
        items: [],
        totals: Object.fromEntries(numericKeys.map((key) => [key, 0])),
      };

    existing.items.push(item);

    for (const key of numericKeys) {
      const value = item[key];
      if (typeof value === "number") {
        existing.totals[key] = (existing.totals[key] ?? 0) + value;
      }
    }

    groups.set(hostname, existing);
  }

  return [...groups.values()].sort((left, right) => {
    if (left.isThirdParty !== right.isThirdParty) {
      return left.isThirdParty ? 1 : -1;
    }
    return left.hostname.localeCompare(right.hostname);
  });
}

export function parseAuditDescription(
  description: string
): Array<{ type: "text" | "link"; value: string; href?: string }> {
  const normalized = description.replace(
    /<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/gi,
    "[$2]($1)"
  );

  const parts: Array<{ type: "text" | "link"; value: string; href?: string }> = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(normalized)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", value: normalized.slice(lastIndex, match.index) });
    }

    parts.push({ type: "link", value: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < normalized.length) {
    parts.push({ type: "text", value: normalized.slice(lastIndex) });
  }

  if (parts.length === 0) {
    parts.push({ type: "text", value: normalized });
  }

  return parts;
}

export function getAuditSubItems(row: AuditDetailRow): AuditDetailRow[] {
  const subItems = row.__subItems;
  return Array.isArray(subItems) ? subItems : [];
}

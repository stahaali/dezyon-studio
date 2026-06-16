export type AuditDetailHeading = {
  key: string;
  label: string;
  valueType: string;
  displayUnit?: string;
  subItemsHeading?: {
    key: string;
    valueType: string;
    label?: string;
  };
};

export type AuditDetailRow = Record<string, string | number | boolean | null | AuditDetailRow[]>;

export type AuditTableSection = {
  headings: AuditDetailHeading[];
  items: AuditDetailRow[];
};

export type AuditCheckItem = {
  label: string;
  passed: boolean;
};

export type AuditDetails = {
  type?: string;
  variant: "table" | "list" | "checklist";
  headings?: AuditDetailHeading[];
  items?: AuditDetailRow[];
  tables?: AuditTableSection[];
  checks?: AuditCheckItem[];
};

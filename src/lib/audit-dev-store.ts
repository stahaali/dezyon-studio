import type { AuditHistoryItem, WebsiteAuditReport } from "@/types/website-audit";

const reports = new Map<string, WebsiteAuditReport>();
const historyOrder: string[] = [];

export function saveAuditReport(report: WebsiteAuditReport) {
  reports.set(report.id, report);
  historyOrder.unshift(report.id);
  if (historyOrder.length > 20) {
    const removed = historyOrder.pop();
    if (removed) reports.delete(removed);
  }
}

export function getAuditReport(reportId: string): WebsiteAuditReport | null {
  return reports.get(reportId) ?? null;
}

export function getAuditHistory(limit = 10): AuditHistoryItem[] {
  return historyOrder.slice(0, limit).flatMap((id) => {
    const report = reports.get(id);
    if (!report) return [];

    return [
      {
        id: report.id,
        url: report.url,
        analyzedAt: report.analyzedAt,
        mobileScore: report.mobile.performance.score,
        desktopScore: report.desktop.performance.score,
      },
    ];
  });
}

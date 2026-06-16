"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AlertCircle,
  Info,
  Link2,
  Monitor,
  Smartphone,
  Users,
} from "lucide-react";
import {
  AuditReportSections,
  CategoryScoreNav,
} from "@/components/WebsiteAudit/AuditSections";
import { ScoreRing } from "@/components/WebsiteAudit/ScoreRing";
import {
  analyzeWebsite,
  fetchAuditReport,
  getShareUrl,
  normalizeUrl,
} from "@/lib/website-audit-api";
import type { AuditStrategy, WebsiteAuditReport } from "@/types/website-audit";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./WebsiteAuditTool.module.css";

export function WebsiteAuditTool() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [url, setUrl] = useState("");
  const [activeStrategy, setActiveStrategy] = useState<AuditStrategy>("mobile");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<WebsiteAuditReport | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");

  const requestIdRef = useRef(0);
  const handledUrlRef = useRef<string | null>(null);
  const skipNextUrlEffect = useRef(false);
  const reportRef = useRef<WebsiteAuditReport | null>(null);
  reportRef.current = report;

  const runAnalysis = useCallback(async (targetUrl: string, force = false) => {
    const trimmed = targetUrl.trim();
    if (!trimmed) {
      setError("Please enter a website URL.");
      return;
    }

    let normalized = trimmed;
    try {
      normalized = normalizeUrl(trimmed);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please enter a valid website URL.");
      return;
    }

    if (!force && handledUrlRef.current === normalized && reportRef.current) {
      return;
    }

    const requestId = ++requestIdRef.current;

    setHasStarted(true);
    setLoading(true);
    setError(null);
    setReport(null);
    handledUrlRef.current = normalized;

    try {
      skipNextUrlEffect.current = true;
      router.replace(`/website-audit/?url=${encodeURIComponent(normalized)}`, {
        scroll: false,
      });

      const result = await analyzeWebsite(normalized);
      if (requestId !== requestIdRef.current) {
        return;
      }

      setReport(result);
      setUrl(result.url);
    } catch (err) {
      if (requestId !== requestIdRef.current) {
        return;
      }

      handledUrlRef.current = null;
      setError(err instanceof Error ? err.message : "Analysis failed.");
    } finally {
      if (requestId === requestIdRef.current) {
        setLoading(false);
      }
    }
  }, [router]);

  const runAnalysisRef = useRef(runAnalysis);
  runAnalysisRef.current = runAnalysis;

  useEffect(() => {
    const initialUrl = searchParams.get("url");
    const reportId = searchParams.get("report");

    if (reportId) {
      setHasStarted(true);
      setLoading(true);
      setError(null);

      fetchAuditReport(reportId)
        .then((loaded) => {
          setReport(loaded);
          setUrl(loaded.url);
          handledUrlRef.current = loaded.url;
        })
        .catch((err) => {
          setError(err instanceof Error ? err.message : "Unable to load shared report.");
        })
        .finally(() => setLoading(false));
      return;
    }

    if (skipNextUrlEffect.current) {
      skipNextUrlEffect.current = false;
      return;
    }

    if (!initialUrl) {
      return;
    }

    const decoded = decodeURIComponent(initialUrl);
    if (handledUrlRef.current === decoded) {
      return;
    }

    setUrl(decoded);
    void runAnalysisRef.current(decoded);
  }, [searchParams]);

  const activeData = report
    ? activeStrategy === "mobile"
      ? report.mobile
      : report.desktop
    : null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    handledUrlRef.current = null;
    await runAnalysis(url, true);
  };

  const handleCopyLink = async () => {
    if (!report) {
      return;
    }

    const shareUrl = getShareUrl(report.id);
    await navigator.clipboard.writeText(shareUrl);
    setCopyState("copied");
    window.setTimeout(() => setCopyState("idle"), 2000);
  };

  const handleCategoryNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const reportDate = report
    ? new Date(report.analyzedAt).toLocaleString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      })
    : null;

  const showReportShell = hasStarted || loading || Boolean(report);

  return (
    <div className={styles.page}>
      {showReportShell ? (
        <div className={styles.pageHeadingWrap}>
          <h2
            className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.pageTitle}`}
          >
            Inspection <span className={styles.wordHighlight}>Report</span>
          </h2>
        </div>
      ) : null}

      <div className={styles.auditTopBar}>
        <div className={styles.auditTopBarInner}>
          {reportDate ? <p className={styles.reportMeta}>Report from {reportDate}</p> : <span />}
          {showReportShell ? (
            <button
              type="button"
              className={styles.headerActionBtn}
              onClick={handleCopyLink}
              disabled={!report || loading}
            >
              <Link2 size={16} />
              {copyState === "copied" ? "Copied" : "Copy Link"}
            </button>
          ) : null}
        </div>
      </div>

      <div className={styles.searchStrip}>
        <div className={styles.searchStripInner}>
          <form
            onSubmit={handleSubmit}
            className={`${styles.searchCard} ${
              report && !loading ? styles.searchCardSuccess : ""
            }`.trim()}
          >
            <input
              type="text"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="Enter a web page audit"
              className={styles.urlInput}
              aria-label="Enter a web page audit"
              suppressHydrationWarning
            />
            <button
              type="submit"
              disabled={loading}
              className={`${styles.analyzeBtn} ${
                report && !loading ? styles.analyzeBtnSuccess : ""
              }`.trim()}
            >
              {loading ? (
                <span className={styles.waitingText}>
                  waiting
                  <span className={styles.waitingDots} aria-hidden="true">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </span>
                </span>
              ) : (
                "Analyze"
              )}
            </button>
          </form>
        </div>
      </div>

      {error ? (
        <div className={styles.inner}>
          <div className={styles.errorBox}>
            <AlertCircle size={20} className="shrink-0" />
            <p>{error}</p>
          </div>
        </div>
      ) : null}

      {showReportShell ? (
        <div id="audit-report" className={`${styles.inner} ${styles.innerFlush}`}>
          <div className={styles.reportCard}>
            <div className={styles.deviceTabs}>
              {(["mobile", "desktop"] as AuditStrategy[]).map((strategy) => (
                <button
                  key={strategy}
                  type="button"
                  onClick={() => setActiveStrategy(strategy)}
                  className={`${styles.deviceTab} ${
                    activeStrategy === strategy ? styles.deviceTabActive : ""
                  }`.trim()}
                >
                  {strategy === "mobile" ? <Smartphone size={18} /> : <Monitor size={18} />}
                  {strategy === "mobile" ? "Mobile" : "Desktop"}
                </button>
              ))}
            </div>

            <div className={styles.cruxSection}>
              <div className={styles.cruxHeader}>
                <h3 className={styles.sectionTitle}>
                  <span className={styles.sectionIcon}>
                    <Users size={16} />
                  </span>
                  Discover what your real users are experiencing
                </h3>
                <span className={styles.noData}>
                  <Info size={14} />
                  No Data
                </span>
              </div>
              <p className={styles.cruxDesc}>
                The Chrome User Experience Report does not have sufficient real-world speed data for
                this page.
              </p>
            </div>

            <div className={styles.diagnoseSection}>
              <h3 className={styles.diagnoseTitle}>Diagnose performance issues</h3>

              <div className={styles.scoreGrid}>
                <ScoreRing
                  score={activeData?.performance.score ?? null}
                  label="Performance"
                  size="lg"
                  theme="dark"
                  loading={loading}
                />
                <ScoreRing
                  score={activeData?.accessibility.score ?? null}
                  label="Accessibility"
                  size="lg"
                  theme="dark"
                  loading={loading}
                />
                <ScoreRing
                  score={activeData?.bestPractices.score ?? null}
                  label="Best Practices"
                  size="lg"
                  theme="dark"
                  loading={loading}
                />
                <ScoreRing
                  score={activeData?.seo.score ?? null}
                  label="SEO"
                  size="lg"
                  theme="dark"
                  loading={loading}
                />
              </div>
            </div>

            {loading ? (
              <p className={styles.loadingInline}>
                Running mobile and desktop Lighthouse audits in parallel. Heavy sites may take 1–2
                minutes — please keep this tab open.
              </p>
            ) : null}

            {report && activeData && !loading ? (
              <>
                <CategoryScoreNav data={activeData} onNavigate={handleCategoryNavigate} />
                <AuditReportSections data={activeData} pageUrl={report.url} />
              </>
            ) : null}
          </div>
        </div>
      ) : (
        <div className={styles.inner}>
          <div className={styles.heroEmpty}>
            <h1 className={styles.heroTitle}>Make your web pages fast on all devices</h1>
            <p className={styles.heroText}>
              Enter a URL above to analyze performance, accessibility, SEO, and best practices.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

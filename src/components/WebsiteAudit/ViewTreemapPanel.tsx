"use client";

import { useMemo, useState } from "react";
import { LayoutGrid, X } from "lucide-react";
import type { FilmstripFrame, TreemapNode } from "@/types/website-audit";
import styles from "./WebsiteAuditTool.module.css";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KiB`;
  return `${(bytes / 1048576).toFixed(2)} MiB`;
}

function shortName(name: string): string {
  try {
    const url = new URL(name);
    const path = url.pathname.split("/").pop() || url.pathname;
    return path || url.hostname;
  } catch {
    const parts = name.split("/");
    return parts[parts.length - 1] || name;
  }
}

function TreemapGrid({ nodes }: { nodes: TreemapNode[] }) {
  const totalBytes = useMemo(
    () => nodes.reduce((sum, node) => sum + node.resourceBytes, 0),
    [nodes]
  );

  const colors = ["#1a73e8", "#34a853", "#fbbc04", "#ea4335", "#9334e6", "#00acc1", "#ff6d00"];

  return (
    <div className={styles.treemapGrid}>
      {nodes.map((node, index) => {
        const unusedPercent =
          node.resourceBytes > 0
            ? Math.round((node.unusedBytes / node.resourceBytes) * 100)
            : 0;

        return (
          <div
            key={node.name}
            className={styles.treemapCell}
            style={{
              flexGrow: Math.max(node.resourceBytes, 1),
              backgroundColor: colors[index % colors.length],
            }}
            title={`${node.name} — ${formatBytes(node.resourceBytes)}`}
          >
            <span className={styles.treemapCellName}>{shortName(node.name)}</span>
            <span className={styles.treemapCellSize}>{formatBytes(node.resourceBytes)}</span>
            {node.unusedBytes > 0 ? (
              <span className={styles.treemapCellUnused}>{unusedPercent}% unused</span>
            ) : null}
          </div>
        );
      })}
      <p className={styles.treemapGridMeta}>Total script weight: {formatBytes(totalBytes)}</p>
    </div>
  );
}

function TreemapModal({
  nodes,
  onClose,
}: {
  nodes: TreemapNode[];
  onClose: () => void;
}) {
  return (
    <div className={styles.treemapModalBackdrop} onClick={onClose} role="presentation">
      <div
        className={styles.treemapModal}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Script treemap"
      >
        <div className={styles.treemapModalHeader}>
          <h3>Script Treemap</h3>
          <button type="button" className={styles.treemapModalClose} onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>
        <TreemapGrid nodes={nodes} />
      </div>
    </div>
  );
}

export function ViewTreemapPanel({
  filmstrip,
  treemap,
}: {
  filmstrip: FilmstripFrame[];
  treemap: TreemapNode[];
}) {
  const [treemapOpen, setTreemapOpen] = useState(false);

  if (filmstrip.length === 0 && treemap.length === 0) {
    return null;
  }

  return (
    <div className={styles.viewTreemapPanel}>
      {treemap.length > 0 ? (
        <button
          type="button"
          className={styles.viewTreemapBtn}
          onClick={() => setTreemapOpen(true)}
        >
          <LayoutGrid size={18} />
          View Treemap
        </button>
      ) : null}

      {filmstrip.length > 0 ? (
        <div className={styles.filmstrip} aria-label="Page load filmstrip">
          {filmstrip.map((frame) => (
            <div key={frame.timing} className={styles.filmstripFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={frame.data} alt={`Page at ${frame.timing}ms`} className={styles.filmstripImg} />
            </div>
          ))}
        </div>
      ) : null}

      {treemapOpen ? <TreemapModal nodes={treemap} onClose={() => setTreemapOpen(false)} /> : null}
    </div>
  );
}

"use client";

import { useMemo } from "react";
import type { TreemapNode } from "@/types/website-audit";
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

export function ScriptTreemap({ nodes }: { nodes: TreemapNode[] }) {
  const totalBytes = useMemo(
    () => nodes.reduce((sum, node) => sum + node.resourceBytes, 0),
    [nodes]
  );

  if (nodes.length === 0) {
    return null;
  }

  return (
    <div className={styles.treemapWrap}>
      <div className={styles.treemapBars}>
        {nodes.slice(0, 16).map((node) => {
          const widthPercent = Math.max(
            (node.resourceBytes / totalBytes) * 100,
            node.resourceBytes > 0 ? 4 : 0
          );
          const unusedPercent =
            node.resourceBytes > 0
              ? Math.round((node.unusedBytes / node.resourceBytes) * 100)
              : 0;

          return (
            <div
              key={node.name}
              className={styles.treemapBar}
              style={{ flexGrow: widthPercent }}
              title={`${node.name} — ${formatBytes(node.resourceBytes)} (${unusedPercent}% unused)`}
            >
              <span className={styles.treemapBarUsed} />
              {node.unusedBytes > 0 ? (
                <span
                  className={styles.treemapBarUnused}
                  style={{ width: `${unusedPercent}%` }}
                />
              ) : null}
            </div>
          );
        })}
      </div>

      <ul className={styles.treemapList}>
        {nodes.slice(0, 12).map((node) => {
          const unusedPercent =
            node.resourceBytes > 0
              ? Math.round((node.unusedBytes / node.resourceBytes) * 100)
              : 0;

          return (
            <li key={node.name} className={styles.treemapItem}>
              <div className={styles.treemapItemMain}>
                <span className={styles.treemapItemName} title={node.name}>
                  {shortName(node.name)}
                </span>
                <span className={styles.treemapItemSize}>{formatBytes(node.resourceBytes)}</span>
              </div>
              {node.unusedBytes > 0 ? (
                <span className={styles.treemapItemUnused}>
                  {formatBytes(node.unusedBytes)} unused ({unusedPercent}%)
                </span>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

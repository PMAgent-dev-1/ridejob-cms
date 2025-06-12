"use client";

import { useEffect } from "react";

/**
 * Loads the Stagewise toolbar only once and only in the browser
 * during development builds.
 */
export default function StagewiseToolbarLoader() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    if (typeof window === "undefined") return;
    // Avoid double-init in Fast Refresh
    const w = window as any;
    if (w.__STAGEWISE_LOADED || document.getElementById('stagewise-companion-anchor')) return;

    // mark early to avoid race conditions
    w.__STAGEWISE_LOADED = true;

    (async () => {
      const { initToolbar } = await import("@stagewise/toolbar");
      initToolbar({ plugins: [] });
    })();
  }, []);

  return null;
} 
"use client";

import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { StagewiseToolbar } from "@stagewise/toolbar-next";

const stagewiseConfig = {
  plugins: [],
};

export function StagewiseWrapper() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    const rootElement = document.getElementById("stagewise-root");
    if (rootElement && !rootElement.hasChildNodes()) {
      const root = createRoot(rootElement);
      root.render(<StagewiseToolbar config={stagewiseConfig} />);
    }
  }, []);

  return null;
} 
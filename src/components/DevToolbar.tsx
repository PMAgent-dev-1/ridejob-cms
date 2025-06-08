"use client";

import dynamic from 'next/dynamic';
import React from 'react';

const StagewiseToolbarWithNoSSR = dynamic<{ config: any }>(
  () =>
    import('@stagewise/toolbar-react').then((mod) => mod.StagewiseToolbar),
  { ssr: false },
);

const stagewiseConfig = {
  plugins: [],
};

export function DevToolbar() {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return <StagewiseToolbarWithNoSSR config={stagewiseConfig} />;
} 
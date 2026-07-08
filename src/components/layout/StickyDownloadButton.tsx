"use client";

import { useState } from "react";
import Link from "next/link";
import { DownloadIcon } from "@/components/ui/icons";

export function StickyDownloadButton() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/15 bg-elevated/95 px-4 py-3 backdrop-blur-xl sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold-light">
            <DownloadIcon className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-cream">Get the Dg Club App</p>
            <p className="text-xs text-cream/50">Faster, smoother, exclusive rewards</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/download-app/"
            className="rounded-lg bg-gold px-3.5 py-2 text-xs font-semibold text-base"
          >
            Install
          </Link>
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => setDismissed(true)}
            className="px-1 text-cream/60"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

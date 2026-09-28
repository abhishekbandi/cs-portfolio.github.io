"use client";

import { useState } from "react";
import { HoverLift } from "@/components/hover-lift";

export function TenxColorSwatch({ hex, light }: { hex: string; light: boolean }) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access denied — no feedback needed beyond the unclicked state.
    }
  }

  return (
    <HoverLift>
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Copy color ${hex}`}
        className="flex h-32 w-32 cursor-pointer items-center justify-center rounded-full sm:h-40 sm:w-40"
        style={{ backgroundColor: hex }}
      >
        <span
          className={`text-sm font-medium sm:text-base ${
            light ? "text-[#061032]" : "text-white"
          }`}
        >
          {copied ? "Copied!" : hex.replace("#", "")}
        </span>
      </button>
    </HoverLift>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { getCaseStudyTheme } from "@/lib/projects";

// Keeps `document.documentElement`'s data-theme in sync with the route on
// every client-side navigation: case study pages are pinned to their fixed
// theme, everywhere else falls back to the user's stored light/dark choice.
// useLayoutEffect (not useEffect) so this resolves before paint, matching
// the pre-hydration script in app/layout.tsx.
export function ThemeManager() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const fixedTheme = getCaseStudyTheme(pathname);
    if (fixedTheme) {
      root.setAttribute("data-theme", fixedTheme);
      return;
    }

    let stored: string | null = null;
    try {
      stored = localStorage.getItem("theme");
    } catch {}
    root.setAttribute("data-theme", stored ?? "light");
  }, [pathname]);

  return null;
}

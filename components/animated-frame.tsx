"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const CORNER = "absolute h-4 w-4";

export function AnimatedFrame({
  children,
  accent = "currentColor",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  accent?: string;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`group relative p-8 ${className}`}
      style={{ "--frame-accent": accent } as React.CSSProperties}
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <motion.rect
          x="0.5"
          y="0.5"
          width="99%"
          height="99%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-border transition-colors duration-300 group-hover:text-[var(--frame-accent)]"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeInOut", delay }}
        />
      </svg>

      <motion.span
        className={`${CORNER} top-0 left-0 border-t-2 border-l-2`}
        style={{ borderColor: accent }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.3, delay: delay + 0.9 }}
      />
      <motion.span
        className={`${CORNER} top-0 right-0 border-t-2 border-r-2`}
        style={{ borderColor: accent }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.3, delay: delay + 0.9 }}
      />
      <motion.span
        className={`${CORNER} bottom-0 left-0 border-b-2 border-l-2`}
        style={{ borderColor: accent }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.3, delay: delay + 0.9 }}
      />
      <motion.span
        className={`${CORNER} right-0 bottom-0 border-r-2 border-b-2`}
        style={{ borderColor: accent }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.3, delay: delay + 0.9 }}
      />

      <div className="relative">{children}</div>
    </div>
  );
}

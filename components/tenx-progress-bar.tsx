"use client";

import { motion } from "framer-motion";

export function TenxProgressBar({ active, color }: { active: boolean; color: string }) {
  if (!active) {
    return <span className="h-1.5 flex-1 rounded-full bg-border" />;
  }

  return (
    <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "left", backgroundColor: color }}
        className="block h-full w-full rounded-full"
      />
    </span>
  );
}

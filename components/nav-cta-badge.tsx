"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function NavCtaBadge() {
  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      className="fixed right-6 bottom-6 z-50"
    >
      <Link href="/contact" aria-label="Let’s talk">
        <motion.div
          whileHover={{ scale: 1.12, rotate: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="flex h-14 w-14 flex-col items-center justify-center gap-0.5 rounded-full text-center text-[10px] leading-none font-bold tracking-wide text-white uppercase shadow-lg"
          style={{ backgroundColor: "#FF5D64" }}
        >
          <span>Let’s</span>
          <span>Talk</span>
        </motion.div>
      </Link>
    </motion.div>
  );
}

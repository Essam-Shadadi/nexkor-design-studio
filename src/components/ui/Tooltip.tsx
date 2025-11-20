"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Tooltip({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: -6 }}
            exit={{ opacity: 0, y: -4 }}
            className="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 text-xs rounded-md bg-black text-white shadow"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

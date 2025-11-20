"use client";

import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right";
}

export function Drawer({
  open,
  onClose,
  children,
  side = "right",
}: DrawerProps) {
  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className={`fixed top-0 ${side === "right" ? "right-0" : "left-0"} h-full w-80 bg-white dark:bg-nk-charcoal z-50 p-6 shadow-xl`}
            initial={{ x: side === "right" ? 300 : -300 }}
            animate={{ x: 0 }}
            exit={{ x: side === "right" ? 300 : -300 }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

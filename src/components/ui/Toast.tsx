"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

type ToastContextValue = {
  push: (message: string, type?: ToastType) => void;
};

const ToastContext = createContext<ToastContextValue>({
  // no-op default for safety
  push: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [mounted, setMounted] = useState(false);

  // Ensure server and initial client render match
  useEffect(() => {
    setMounted(true);
  }, []);

  const push = (message: string, type: ToastType = "info") => {
    setToasts((prev) => [...prev, { id: Date.now(), message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ push }}>
      {children}

      {mounted &&
        typeof window !== "undefined" &&
        createPortal(
          <div className="fixed bottom-4 right-4 space-y-2 z-50">
            <AnimatePresence>
              {toasts.map((t) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className={`px-4 py-2 rounded-xl text-sm shadow-xl
                    ${
                      t.type === "success"
                        ? "bg-nk-green text-white"
                        : t.type === "error"
                        ? "bg-red-600 text-white"
                        : "bg-gray-800 text-white"
                    }`}
                >
                  {t.message}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

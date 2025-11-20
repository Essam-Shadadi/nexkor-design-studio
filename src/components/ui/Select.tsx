"use client";

import { SelectHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}

export function Select({ id, label, hint, error, className, children, ...props }: SelectProps) {
  const hintId = hint && id ? `${id}-hint` : undefined;
  const errorId = error && id ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="space-y-1">
      {label && id && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
        </label>
      )}

      <select
        id={id}
        className={clsx(
          "block w-full rounded-xl border bg-white px-3 py-2 text-sm shadow-sm",
          "focus:border-nk-blue focus:ring-2 focus:ring-nk-blue/30",
          "dark:bg-nk-charcoal dark:border-gray-700 dark:text-nk-gray",
          error &&
            "border-red-500 focus:border-red-500 focus:ring-red-500/40 dark:border-red-500",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        {...props}
      >
        {children}
      </select>

      {hint && (
        <p id={hintId} className="text-xs text-gray-500">
          {hint}
        </p>
      )}

      {error && (
        <p id={errorId} className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

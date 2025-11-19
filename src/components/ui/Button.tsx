"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const base =
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-nk-blue disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-nk-blue text-white hover:bg-nk-blue/90 dark:hover:bg-nk-blue/80",
  secondary:
    "bg-nk-gray text-nk-charcoal hover:bg-gray-300 dark:bg-nk-charcoal dark:text-nk-gray dark:hover:bg-gray-700",
  ghost:
    "bg-transparent text-nk-charcoal hover:bg-gray-100 dark:text-nk-gray dark:hover:bg-white/10",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 dark:hover:bg-red-500",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        loading && "opacity-70 cursor-wait",
        className
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && (
        <span className="animate-spin rounded-full border-2 border-white/40 border-t-white w-4 h-4 mr-2"></span>
      )}

      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}

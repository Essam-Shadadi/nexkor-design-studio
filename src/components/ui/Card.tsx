import clsx from "clsx";
import { ReactNode } from "react";

export function Card({ className, ...props }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={clsx(
        "rounded-2xl border bg-white dark:bg-nk-charcoal/60 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: { className?: string; children: ReactNode }) {
  return <div className={clsx("px-6 py-4 border-b", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={clsx("px-6 py-4", className)} {...props} />;
}

export function CardFooter({ className, ...props }: { className?: string; children: ReactNode }) {
  return <div className={clsx("px-6 py-4 border-t", className)} {...props} />;
}

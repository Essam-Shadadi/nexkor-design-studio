import clsx from "clsx";
import { ReactNode } from "react";

export function Grid({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={clsx("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {children}
    </div>
  );
}

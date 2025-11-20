import clsx from "clsx";
import { ReactNode } from "react";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={clsx("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </div>
  );
}

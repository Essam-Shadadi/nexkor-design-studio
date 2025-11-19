import clsx from "clsx";

type BadgeVariant = "gray" | "blue" | "green" | "yellow" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const badgeBase =
  "inline-flex items-center rounded-full text-xs font-medium px-2 py-0.5";

const badgeVariants: Record<BadgeVariant, string> = {
  gray: "bg-nk-gray text-nk-charcoal",
  blue: "bg-nk-blue/15 text-nk-blue",
  green: "bg-nk-green/20 text-nk-green",
  yellow: "bg-nk-yellow/20 text-nk-yellow",
  outline:
    "border border-nk-gray/50 text-nk-charcoal dark:text-nk-gray dark:border-gray-600",
};

export function Badge({ children, variant = "gray", className }: BadgeProps) {
  return (
    <span className={clsx(badgeBase, badgeVariants[variant], className)}>
      {children}
    </span>
  );
}

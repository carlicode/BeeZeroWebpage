import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light" | "yellow";
  size?: "sm" | "md";
}

const variantStyles = {
  dark: "bg-brand-black text-white",
  light: "bg-white text-brand-black border border-brand-gray-dark",
  yellow: "bg-brand-yellow text-brand-black",
};

export function Card({
  children,
  className,
  variant = "dark",
  size = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        size === "md" ? "p-6 md:p-8" : "p-5 md:p-6",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}

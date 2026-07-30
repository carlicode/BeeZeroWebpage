import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "dark";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: "sm" | "md";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand-yellow-dark text-brand-black hover:brightness-95",
  secondary:
    "bg-brand-black text-white hover:bg-brand-black/90 border border-brand-black",
  outline:
    "bg-transparent text-brand-black border-2 border-brand-black hover:bg-brand-black hover:text-white",
  dark: "bg-brand-black text-white hover:bg-brand-black/90",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  disabled,
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center rounded-2xl font-bold uppercase tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-50",
    size === "md" ? "px-6 py-3 text-sm" : "px-5 py-2.5 text-xs",
  );

  const combined = cn(baseStyles, variantStyles[variant], className);

  if (href && !disabled) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combined}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

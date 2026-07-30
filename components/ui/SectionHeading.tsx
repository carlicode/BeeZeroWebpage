import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  dark?: boolean;
  size?: "md" | "lg";
}

export function SectionHeading({
  children,
  subtitle,
  className,
  align = "center",
  dark = false,
  size = "lg",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        size === "lg" ? "mb-10" : "mb-6",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      <h2
        className={cn(
          "font-bold leading-tight",
          size === "lg"
            ? "text-2xl md:text-3xl lg:text-4xl"
            : "text-xl md:text-2xl lg:text-3xl",
          dark ? "text-white" : "text-brand-black",
        )}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-3xl text-base leading-relaxed md:text-lg",
            align === "center" && "mx-auto",
            dark ? "text-white/80" : "text-brand-black/70",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

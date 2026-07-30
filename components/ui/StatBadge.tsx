"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatBadgeProps {
  value: string;
  label: string;
  className?: string;
  durationMs?: number;
}

interface ParsedStat {
  prefix: string;
  suffix: string;
  target: number;
  separator: string;
}

function parseStatValue(raw: string): ParsedStat {
  const match = raw.match(/^([^\d]*)([\d.,\s]*\d)([^\d]*)$/);

  if (!match) {
    return { prefix: "", suffix: raw, target: 0, separator: "" };
  }

  const [, prefix, numeric, suffix] = match;
  const digitsOnly = numeric.replace(/\D/g, "");
  const separator = numeric.includes(".")
    ? "."
    : numeric.includes(" ")
      ? " "
      : "";

  return {
    prefix,
    suffix,
    target: parseInt(digitsOnly, 10) || 0,
    separator,
  };
}

function formatNumber(n: number, separator: string) {
  const rounded = Math.round(n).toString();
  if (!separator) return rounded;
  return rounded.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export function StatBadge({
  value,
  label,
  className,
  durationMs = 1600,
}: StatBadgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const [display, setDisplay] = useState(
    () => `${parsed.prefix}${formatNumber(0, parsed.separator)}${parsed.suffix}`,
  );
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { prefix, suffix, target, separator } = parseStatValue(value);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || target === 0) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / durationMs, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);

            setDisplay(`${prefix}${formatNumber(current, separator)}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center text-center", className)}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow">
        <span className="text-lg text-brand-black">★</span>
      </div>
      <p className="text-2xl font-bold tabular-nums text-white md:text-3xl">
        {display}
      </p>
      <p className="mt-1 text-sm text-white/80 md:text-base">{label}</p>
    </div>
  );
}

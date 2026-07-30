"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AssetImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  placeholderIcon?: React.ReactNode;
}

export function AssetImage({
  src,
  alt,
  width,
  height,
  className,
  fill,
  sizes,
  priority,
  placeholderIcon,
}: AssetImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-brand-gray text-brand-black/40",
          fill ? "absolute inset-0" : "",
          className,
        )}
        style={!fill && width && height ? { width, height } : undefined}
        aria-label={alt}
      >
        {placeholderIcon ?? (
          <span className="text-xs font-medium uppercase tracking-wider">
            {alt}
          </span>
        )}
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        className={cn("object-cover", className)}
        priority={priority}
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 400}
      height={height ?? 300}
      className={className}
      priority={priority}
      onError={() => setHasError(true)}
    />
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-[100] transition-colors duration-300",
          isHome && !isScrolled &&
            "bg-gradient-to-b from-black/90 via-black/50 to-transparent",
          isHome && isScrolled && "bg-brand-black",
          !isHome && "bg-brand-black",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center px-6 py-5 md:px-10",
            isHome ? "justify-end" : "justify-between",
          )}
        >
          {!isHome && (
            <Link href="/" className="block shrink-0" aria-label="Ir al inicio">
              <Image
                src="/images/shared/logo.png"
                alt="Bee Zero"
                width={800}
                height={567}
                className="h-10 w-auto md:h-12"
                priority
              />
            </Link>
          )}

          <nav aria-label="Principal">
            <ul className="flex items-center gap-4 md:gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const itemClass = cn(
                  "text-xs font-bold uppercase leading-none tracking-wider text-white md:text-sm",
                  item.disabled && "cursor-default",
                  isActive && !item.disabled && "underline underline-offset-4",
                );

                return (
                  <li key={item.label} className={itemClass}>
                    {item.disabled ? (
                      item.label
                    ) : (
                      <Link
                        href={item.href}
                        className="contents hover:text-brand-yellow-dark"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

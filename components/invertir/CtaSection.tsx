import Image from "next/image";
import Link from "next/link";
import { ctaBanner } from "@/lib/data";

export function CtaSection() {
  return (
    <section className="relative -mt-16 md:-mt-20">
      {/* Plomo hasta ~la mitad del rectángulo negro; blanco desde ahí hacia abajo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[#EFEFEF] md:h-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-36 bottom-0 bg-white md:top-40"
        aria-hidden
      />

      <div className="relative z-10 px-6 pb-20 md:px-10 md:pb-28">
        <div className="relative mx-auto max-w-4xl rounded-[58px] bg-brand-black px-8 pb-12 pt-12 text-center md:px-16">
          <div className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-brand-black md:-top-16">
            <Image
              src="/icons/home/icon-invertir.png"
              alt="Bee Zero"
              fill
              sizes="96px"
              className="object-contain p-2 translate-y-6"
            />
          </div>

          <h2 className="mb-10 mt-4 text-2xl font-bold leading-tight text-white md:mt-5 md:text-3xl lg:text-4xl">
            ¿Estás listo para{" "}
            <span className="text-brand-yellow-dark">multiplicar</span>
            <br />
            <span className="text-brand-yellow-dark">el valor</span> de tus
            ahorros?
          </h2>

          <Link
            href={ctaBanner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-lg font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-80"
          >
            {ctaBanner.buttonLabel}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25 text-sm text-white">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

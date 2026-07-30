import Image from "next/image";

export function InvertirHeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center bg-brand-black px-6 pb-16 pt-[calc(var(--header-height)+2rem)] md:px-10 md:pb-24 md:pt-[calc(var(--header-height)+3rem)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="invertir-hero-glow absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-brand-yellow/10 blur-3xl" />
        <div className="invertir-hero-glow absolute bottom-1/4 left-0 h-56 w-56 rounded-full bg-brand-yellow-dark/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="invertir-hero-enter-left leading-tight" style={{ animationDelay: "0.1s" }}>
            <span className="block text-4xl font-bold text-brand-yellow-dark md:text-5xl lg:text-6xl">
              Invierte
            </span>
            <span className="mt-2 block text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              y da valor a tus ahorros
            </span>
          </h1>
          <p
            className="invertir-hero-enter-left mt-6 text-base leading-relaxed text-white/80 md:text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            Con fractional ownership, inviertes para ayudarnos a fortalecer
            nuestra flota, sin asumir el costo ni la operación. Así, tu
            inversión genera ingresos por transporte o última milla, y en 5
            años obtienes un beneficio del 150%.
          </p>
        </div>

        <div
          className="invertir-hero-illustration relative aspect-[519/426] w-full max-w-lg justify-self-center lg:justify-self-end"
          style={{ animationDelay: "0.2s" }}
        >
          <Image
            src="/images/invertir/hero-illustration.webp"
            alt="Ilustración de inversión con monedas"
            fill
            sizes="(max-width: 1024px) 100vw, 512px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

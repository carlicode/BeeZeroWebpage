import Image from "next/image";

export function DriversHeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center bg-brand-black px-6 pb-16 pt-[calc(var(--header-height)+2rem)] md:px-10 md:pb-24 md:pt-[calc(var(--header-height)+3rem)]">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="leading-tight">
            <span className="block text-3xl font-bold text-brand-yellow-dark md:text-4xl lg:text-5xl">
              Trabaja como driver
            </span>
            <span className="mt-2 block text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              y genera tus propios ingresos
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Conduce una de nuestras abejitas y genera ingresos con el
            respaldo de Bee Zero. Te brindamos capacitación, acompañamiento y
            acceso a una fuente de trabajo estable.
          </p>
        </div>

        <div className="relative aspect-[518/261] w-full max-w-lg justify-self-center lg:justify-self-end">
          <Image
            src="/images/drivers/hero-illustration.webp"
            alt="Driver de Bee Zero"
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

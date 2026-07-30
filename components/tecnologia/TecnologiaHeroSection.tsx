export function TecnologiaHeroSection() {
  return (
    <section className="relative flex min-h-[60dvh] items-center bg-brand-black px-6 pb-16 pt-[calc(var(--header-height)+2rem)] md:px-10 md:pb-20 md:pt-[calc(var(--header-height)+3rem)]">
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <h1 className="leading-tight">
          <span className="block text-3xl font-bold text-brand-yellow-dark md:text-4xl lg:text-5xl">
            Tecnología
          </span>
          <span className="mt-2 block text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            propia para operar con eficiencia
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          Desarrollamos nuestras propias plataformas para centralizar la
          operación, acompañar a nuestras drivers y dar visibilidad a
          nuestros clientes en cada etapa del servicio.
        </p>
      </div>
    </section>
  );
}

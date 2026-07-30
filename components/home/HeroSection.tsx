import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero-car.webp"
          alt="Auto eléctrico Bee Zero"
          fill
          priority
          sizes="100vw"
          className="hero-image-enter object-cover object-bottom"
        />
      </div>

      {/*
        Capa 2a: degradado negro izquierda → transparente derecha.
        Alto: cambia h-[65%] (50%=h-1/2 · 100%=h-full). Ancho: w-[45%]
      */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-0 h-[89%] w-[40%] bg-gradient-to-r from-black to-transparent"
        aria-hidden
      />

      {/*
        Capa 2b: degradado negro arriba → transparente abajo (mitad del hero).
        Ancho desktop: cambia md:w-[51%] (ej. md:w-[70%]
      */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-0 h-1/2 w-full bg-gradient-to-b from-black to-transparent md:w-full"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-start px-6 pb-20 pt-16 md:px-10 md:pt-20">
        <div className="relative mb-8 h-16 w-56 md:h-20 md:w-64">
          <Image
            src="/images/shared/logo.png"
            alt="Bee Zero"
            fill
            sizes="(max-width: 768px) 224px, 256px"
            className="object-contain object-left"
          />
        </div>

        <h1 className="max-w-xl text-2xl font-normal leading-tight text-white md:text-3xl lg:text-4xl">
          La primera y más grande
          <br />
          <span className="font-bold">flota de vehículos </span>
          <span className="font-bold text-brand-yellow-dark">100%</span>
          <br />
          <span className="font-bold text-brand-yellow-dark">eléctricos</span> al servicio de
          <br />
          los bolivianos.
        </h1>
      </div>
    </section>
  );
}

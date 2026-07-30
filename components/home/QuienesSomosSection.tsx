import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function QuienesSomosSection() {
  return (
    <section className="-mt-12 bg-white px-6 pb-16 pt-4 md:-mt-16 md:px-10 md:pb-20 md:pt-6">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal from="left">
          <div className="relative mx-auto aspect-[4/3] w-full max-h-[300px] md:max-h-[340px]">
            <Image
              src="/images/home/quienes-somos-illustration.webp"
              alt="Ilustración Bee Zero"
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-contain"
            />
          </div>
        </Reveal>

        <Reveal from="right" delayMs={120}>
          <div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            ¿Quiénes somos?
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-brand-black/80 md:text-lg">
            <p>
              Somos una empresa de movilidad sostenible que conecta personas,
              empresas y tecnología para ofrecer soluciones de transporte y
              logística de última milla con cero emisiones.
            </p>
            <p>
              A través de un modelo innovador,{" "}
              <span className="font-bold">
                facilitamos el acceso a vehículos eléctricos como herramienta
                de trabajo,
              </span>{" "}
              generando empleo digno para mujeres conductoras e impulsando una
              transición hacia una movilidad más eficiente, inclusiva y
              sostenible.
            </p>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

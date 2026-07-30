import { Check } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { tecnologiaSistemas } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TecnologiaSistemasSection() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-20 md:gap-28">
        {tecnologiaSistemas.map((sistema, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={sistema.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal
                from={isReversed ? "right" : "left"}
                className={cn(
                  "relative aspect-[1100/733] w-full",
                  isReversed && "lg:order-2",
                )}
              >
                <Image
                  src={sistema.image}
                  alt={sistema.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-contain"
                />
              </Reveal>

              <Reveal
                from={isReversed ? "left" : "right"}
                delayMs={120}
                className={cn(isReversed && "lg:order-1")}
              >
                <h2 className="text-2xl font-bold leading-tight text-brand-black md:text-3xl">
                  {sistema.name}
                </h2>
                <p className="mt-1 text-base font-medium text-brand-black/70 md:text-lg">
                  {sistema.tagline}
                </p>
                <p className="mt-5 text-base leading-relaxed text-brand-black/80 md:text-lg">
                  {sistema.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {sistema.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm leading-relaxed text-brand-black md:text-base"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow">
                        <Check className="h-3 w-3 text-brand-black" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}

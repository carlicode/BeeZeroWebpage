import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { beneficios } from "@/lib/data";

export function BeneficiosSection() {
  return (
    <section className="bg-[#EFEFEF] px-6 pt-20 pb-40 md:px-10 md:pt-28 md:pb-56">
      <div className="mx-auto max-w-7xl">
        <SectionHeading align="center">
          <span className="text-brand-yellow-dark">Beneficios</span> que te
          darán confianza
        </SectionHeading>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {beneficios.map((beneficio, index) => (
            <article key={index} className="text-center">
              <div className="relative mx-auto mb-6 h-16 w-16">
                <Image
                  src={beneficio.icon}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <p className="text-lg leading-relaxed text-brand-black">
                <span className="font-bold">{beneficio.highlight}</span>
                {beneficio.rest}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

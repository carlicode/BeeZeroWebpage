import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { driversBeneficios } from "@/lib/data";

export function DriversBeneficiosSection() {
  return (
    <section className="bg-brand-gray px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading align="center">
          Los beneficios que te ofrecemos
        </SectionHeading>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {driversBeneficios.map((beneficio, index) => (
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
              <p className="text-base leading-relaxed text-brand-black md:text-lg">
                {beneficio.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

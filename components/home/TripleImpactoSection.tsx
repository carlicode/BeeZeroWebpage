import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatBadge } from "@/components/ui/StatBadge";
import { impactStats } from "@/lib/data";

export function TripleImpactoSection() {
  return (
    <section className="bg-brand-black px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative mx-auto mb-16 h-[140px] w-full max-w-2xl md:h-[220px]">
          <Image
            src="/images/home/triple-impacto-diagram.webp"
            alt="Triple impacto: ambiental, económico y social"
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-contain"
          />
        </div>

        <SectionHeading
          dark
          subtitle="Cada kilómetro que recorrido reduce emisiones, genera empleo local y entrega retornos reales a quienes invierten en el cambio."
        >
          Generamos{" "}
          <span className="text-brand-yellow-dark">triple impacto</span> real
          y medible
        </SectionHeading>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {impactStats.map((stat) => (
            <StatBadge key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

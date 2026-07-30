import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamMembers } from "@/lib/data";

export function EquipoSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading align="center">
          Las personas que impulsan el cambio
        </SectionHeading>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="text-center">
              <div className="relative mx-auto mb-6 h-40 w-40">
                <Image
                  src="/images/home/team-shape.png"
                  alt=""
                  fill
                  sizes="160px"
                  className="object-contain"
                />
                {member.image && (
                  <div className="absolute inset-x-0 bottom-0 h-[85%] overflow-hidden rounded-t-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="160px"
                      className="object-cover object-top"
                    />
                  </div>
                )}
              </div>

              <h3 className="text-sm font-bold uppercase tracking-wide">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-bold uppercase text-brand-yellow-dark">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/70">
                {member.bio}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-4xl text-center text-base font-semibold italic leading-relaxed md:text-lg">
          Cada Bee que ves en las calles es el resultado del trabajo de un
          equipo comprometido: líderes, operadores y más de 25 conductoras que
          impulsan una movilidad con propósito.
        </p>
      </div>
    </section>
  );
}

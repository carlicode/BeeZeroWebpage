import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formasUnirte } from "@/lib/data";

export function TresFormasSection() {
  return (
    <section className="bg-brand-yellow px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading align="center" size="md" className="text-brand-black">
          3 formas de unirte a nuestro propósito
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {formasUnirte.map((forma) => (
            <Card
              key={forma.id}
              variant="dark"
              size="sm"
              className="group flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30"
            >
              <div className="relative mb-4 h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Image
                  src={forma.icon}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              <h3 className="mb-3 text-lg font-bold leading-snug">
                <span className="text-brand-yellow-dark">
                  {forma.titleHighlight}
                </span>{" "}
                {forma.titleRest}
              </h3>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-white/80">
                {forma.description}
              </p>

              {forma.href ? (
                <Button
                  href={forma.href}
                  variant="primary"
                  size="sm"
                  className="w-fit"
                >
                  Conocer más
                </Button>
              ) : (
                <Button variant="primary" size="sm" className="w-fit" disabled>
                  Conocer más
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

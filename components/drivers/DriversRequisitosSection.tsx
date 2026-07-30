import { Check } from "lucide-react";
import { driversRequisitos } from "@/lib/data";

export function DriversRequisitosSection() {
  return (
    <section className="bg-brand-yellow-dark px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-center lg:gap-12">
          <h2 className="text-2xl font-bold leading-tight text-brand-black md:text-3xl lg:text-4xl">
            Requisitos para postular
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {driversRequisitos.map((requisito, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-black">
                  <Check className="h-7 w-7 text-brand-yellow-dark" />
                </div>
                <p className="text-sm font-medium leading-relaxed text-brand-black md:text-base">
                  {requisito}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

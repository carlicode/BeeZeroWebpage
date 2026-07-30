import { ultimaMillaIdealPara } from "@/lib/data";

export function UltimaMillaIdealParaSection() {
  return (
    <section className="bg-white px-6 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-5xl bg-brand-yellow-dark px-6 py-4 md:px-8 md:py-5">
        <p className="mb-4 text-center text-lg font-semibold text-brand-black md:text-xl">
          Ideal para:
        </p>
        <div className="flex flex-nowrap items-center justify-center gap-2 overflow-x-auto md:gap-3">
          {ultimaMillaIdealPara.map((tag) => (
            <span
              key={tag}
              className="whitespace-nowrap bg-white/50 px-4 py-1.5 text-sm font-medium text-brand-black md:text-base"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

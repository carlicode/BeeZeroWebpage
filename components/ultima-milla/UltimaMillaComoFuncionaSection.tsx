"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ultimaMillaComoFuncionaSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

const STEP_DELAY_MS = 320;
const LINE_DURATION_MS = 1400;

export function UltimaMillaComoFuncionaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading align="center">
          ¿Cómo funciona nuestro servicio?
        </SectionHeading>

        <div ref={sectionRef} className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 overflow-hidden md:block">
            <div className="h-full w-full bg-brand-yellow/20" />
            <div
              className={cn(
                "absolute inset-y-0 left-0 w-full origin-left bg-brand-yellow motion-reduce:transition-none",
                visible ? "scale-x-100" : "scale-x-0",
              )}
              style={{
                transitionProperty: "transform",
                transitionDuration: `${LINE_DURATION_MS}ms`,
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </div>

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {ultimaMillaComoFuncionaSteps.map((step, index) => {
              const stepDelay = 180 + index * STEP_DELAY_MS;

              return (
                <div
                  key={step.step}
                  className={cn(
                    "relative text-center transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none",
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0",
                  )}
                  style={{ transitionDelay: `${stepDelay}ms` }}
                >
                  <div
                    className={cn(
                      "relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow text-lg font-bold text-brand-black transition-transform duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none",
                      visible ? "scale-100" : "scale-75",
                    )}
                    style={{ transitionDelay: `${stepDelay + 80}ms` }}
                  >
                    {step.step}
                  </div>

                  {index < ultimaMillaComoFuncionaSteps.length - 1 && (
                    <ArrowRight
                      className={cn(
                        "como-funciona-arrow absolute -right-3 top-6 hidden h-5 w-5 text-brand-yellow md:block",
                        visible && "is-visible",
                      )}
                      style={{
                        transitionDelay: `${stepDelay + 220}ms`,
                        animationDelay: `${stepDelay + 700}ms`,
                      }}
                      aria-hidden
                    />
                  )}

                  <h3 className="mb-3 text-base font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-black/70">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

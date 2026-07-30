"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { formatNumber, type InvestmentResult } from "@/lib/calculadora";
import { CalculadoraConfetti } from "./CalculadoraConfetti";

interface CalculadoraResultModalProps {
  open: boolean;
  result: InvestmentResult | null;
  onClose: () => void;
  onRecalculate: () => void;
}

export function CalculadoraResultModal({
  open,
  result,
  onClose,
  onRecalculate,
}: CalculadoraResultModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open || !result) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="calculadora-modal-title"
    >
      <button
        type="button"
        className="calculadora-modal-backdrop absolute inset-0 bg-black/65 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Cerrar ventana"
      />

      <div className="calculadora-modal-panel relative w-full max-w-lg overflow-hidden rounded-3xl border-2 border-white bg-brand-yellow p-6 pt-10 shadow-2xl md:p-8 md:pt-10">
        <CalculadoraConfetti />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-brand-black/10 p-1.5 text-brand-black transition-colors hover:bg-brand-black/20"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-10 text-center">
          <p className="text-3xl" aria-hidden>
            🎉
          </p>
          <h3
            id="calculadora-modal-title"
            className="mt-3 text-xl font-bold leading-snug text-brand-black md:text-2xl"
          >
            ¡Felicidades!
          </h3>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-brand-black/75 md:text-base">
            Este es el primer paso para asegurar tu inversión.
          </p>
        </div>

        <p className="relative z-10 mt-6 text-center text-base font-bold text-brand-black md:text-lg">
          Si inviertes {formatNumber(result.initialAmount)} USD obtienes:
        </p>

        <div className="relative z-10 mt-4 grid grid-cols-2 gap-3 md:gap-4">
          <div className="rounded-2xl bg-brand-black px-3 py-5 text-center text-white">
            <p className="flex flex-wrap items-baseline justify-center gap-1">
              <span className="text-2xl font-extrabold md:text-3xl">
                {formatNumber(result.monthlyReturn)}
              </span>
              <span className="text-xs font-bold text-white/60">USD</span>
            </p>
            <p className="mt-2 text-xs leading-snug text-white/70 md:text-sm">
              como cuota mensual
            </p>
          </div>

          <div className="rounded-2xl bg-brand-black px-3 py-5 text-center text-white">
            <p className="flex flex-wrap items-baseline justify-center gap-1">
              <span className="text-2xl font-extrabold md:text-3xl">
                {formatNumber(result.profitMargin)}
              </span>
              <span className="text-xs font-bold text-white/60">USD</span>
            </p>
            <p className="mt-2 text-xs leading-snug text-white/70 md:text-sm">
              ganados sobre tu inversión, en 5 años
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onRecalculate}
          className="relative z-10 mx-auto mt-6 block w-fit rounded-full border-2 border-brand-black px-8 py-3 text-sm font-bold uppercase tracking-wide text-brand-black transition-colors hover:bg-brand-black hover:text-brand-yellow-dark"
        >
          Calcular otro monto
        </button>
      </div>
    </div>
  );
}

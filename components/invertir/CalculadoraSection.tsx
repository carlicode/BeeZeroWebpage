"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  MIN_INVESTMENT_AMOUNT,
  calculateInvestment,
  formatUSD,
} from "@/lib/calculadora";
import { CalculadoraResultModal } from "./CalculadoraResultModal";

export function CalculadoraSection() {
  const inputRef = useRef<HTMLInputElement>(null);
  const caretDigitsRef = useRef<number | null>(null);

  const [digits, setDigits] = useState("");
  const [result, setResult] = useState<ReturnType<
    typeof calculateInvestment
  > | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const amount = digits ? Number(digits) : 0;
  const formattedValue = digits ? Number(digits).toLocaleString("es-BO") : "";

  useLayoutEffect(() => {
    const input = inputRef.current;
    const digitsBeforeCaret = caretDigitsRef.current;
    if (!input || digitsBeforeCaret === null) return;

    let seen = 0;
    let position = formattedValue.length;
    for (let i = 0; i < formattedValue.length; i += 1) {
      if (/\d/.test(formattedValue[i])) seen += 1;
      if (seen === digitsBeforeCaret) {
        position = i + 1;
        break;
      }
    }
    if (digitsBeforeCaret === 0) position = 0;

    input.setSelectionRange(position, position);
    caretDigitsRef.current = null;
  }, [formattedValue]);

  function handleCalculate() {
    if (amount < MIN_INVESTMENT_AMOUNT) {
      setError(
        `Ingresa un monto mínimo de ${formatUSD(MIN_INVESTMENT_AMOUNT)}.`,
      );
      setResult(null);
      setShowModal(false);
      return;
    }

    const calculated = calculateInvestment(amount);

    if (!calculated) {
      setError("No se pudo calcular con el monto ingresado.");
      setResult(null);
      setShowModal(false);
      return;
    }

    setError(null);
    setResult(calculated);
    setShowModal(true);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const caretPosition = e.target.selectionStart ?? e.target.value.length;
    const digitsBeforeCaret = (
      e.target.value.slice(0, caretPosition).match(/\d/g) ?? []
    ).length;

    const newDigits = e.target.value.replace(/\D/g, "").slice(0, 9);

    caretDigitsRef.current = digitsBeforeCaret;
    setDigits(newDigits);
    setResult(null);
    setShowModal(false);
    setError(null);
  }

  return (
    <section className="bg-brand-yellow px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Calcula el potencial de tu inversión
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-brand-black/70">
          Simula tu inversión y conoce una estimación del rendimiento mensual
          que podrías obtener al financiar la expansión de la flota de Bee
          Zero.
        </p>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-white bg-brand-yellow p-6 md:p-8">
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
            <div className="relative mx-auto h-24 w-20 md:mx-0">
              <Image
                src="/images/invertir/calculadora-icon.png"
                alt="Calculadora Bee Zero"
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>

            <div className="text-left">
              <label
                htmlFor="investment-amount"
                className="mb-3 block text-center text-lg font-bold text-white md:text-left"
              >
                ¿Cuánto deseas invertir?
              </label>

              <div className="relative">
                <input
                  ref={inputRef}
                  id="investment-amount"
                  type="text"
                  inputMode="numeric"
                  value={formattedValue}
                  onChange={handleInputChange}
                  placeholder="Monto mayor a 5.000"
                  className="w-full rounded-2xl border-0 bg-white/45 px-4 py-4 pr-16 text-center text-2xl font-normal text-brand-black outline-none focus:ring-2 focus:ring-brand-black/20"
                />
                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-base font-bold text-brand-black/50">
                  USD
                </span>
              </div>

              <p className="mt-2 text-center text-sm italic text-brand-black/60 md:text-left">
                Los resultados son referenciales y pueden variar.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              variant="dark"
              type="button"
              onClick={handleCalculate}
              className="min-w-[200px] rounded-2xl px-10 py-3 text-brand-yellow-dark"
            >
              Calcular
            </Button>
          </div>

          {error && (
            <p className="mt-4 text-sm font-medium text-red-700">{error}</p>
          )}
        </div>
      </div>

      <CalculadoraResultModal
        open={showModal}
        result={result}
        onClose={() => setShowModal(false)}
        onRecalculate={() => {
          setShowModal(false);
          setDigits("");
          setResult(null);
          setError(null);
          requestAnimationFrame(() => inputRef.current?.focus());
        }}
      />
    </section>
  );
}

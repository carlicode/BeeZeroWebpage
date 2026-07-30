import { BeneficiosSection } from "@/components/invertir/BeneficiosSection";
import { CalculadoraSection } from "@/components/invertir/CalculadoraSection";
import { ComoFuncionaSection } from "@/components/invertir/ComoFuncionaSection";
import { CtaSection } from "@/components/invertir/CtaSection";
import { FaqSection } from "@/components/invertir/FaqSection";
import { InvertirHeroSection } from "@/components/invertir/InvertirHeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invertir | Bee Zero",
  description:
    "Invierte y da valor a tus ahorros con el modelo de fractional ownership de Bee Zero. Calcula el potencial de tu inversión.",
};

export default function InvertirPage() {
  return (
    <>
      <InvertirHeroSection />
      <ComoFuncionaSection />
      <CalculadoraSection />
      <BeneficiosSection />
      <CtaSection />
      <FaqSection />
    </>
  );
}

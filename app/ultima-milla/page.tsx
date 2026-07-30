import { FaqSection } from "@/components/invertir/FaqSection";
import { UltimaMillaBeneficiosSection } from "@/components/ultima-milla/UltimaMillaBeneficiosSection";
import { UltimaMillaComoFuncionaSection } from "@/components/ultima-milla/UltimaMillaComoFuncionaSection";
import { UltimaMillaCtaSection } from "@/components/ultima-milla/UltimaMillaCtaSection";
import { UltimaMillaHeroSection } from "@/components/ultima-milla/UltimaMillaHeroSection";
import { UltimaMillaIdealParaSection } from "@/components/ultima-milla/UltimaMillaIdealParaSection";
import { ultimaMillaFaqItems } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Última milla | Bee Zero",
  description:
    "Delega transporte y logística de última milla con la flota eléctrica de Bee Zero. Entregas ágiles, sostenibles y adaptadas a tu operación.",
};

export default function UltimaMillaPage() {
  return (
    <>
      <UltimaMillaHeroSection />
      <UltimaMillaBeneficiosSection />
      <UltimaMillaIdealParaSection />
      <UltimaMillaComoFuncionaSection />
      <UltimaMillaCtaSection />
      <FaqSection items={ultimaMillaFaqItems} defaultOpenIndex={3} />
    </>
  );
}

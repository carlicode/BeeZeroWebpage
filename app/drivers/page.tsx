import { FaqSection } from "@/components/invertir/FaqSection";
import { DriversBeneficiosSection } from "@/components/drivers/DriversBeneficiosSection";
import { DriversComoFuncionaSection } from "@/components/drivers/DriversComoFuncionaSection";
import { DriversCtaSection } from "@/components/drivers/DriversCtaSection";
import { DriversHeroSection } from "@/components/drivers/DriversHeroSection";
import { DriversRequisitosSection } from "@/components/drivers/DriversRequisitosSection";
import { driversFaqItems } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivers | Bee Zero",
  description:
    "Trabaja como driver con Bee Zero, conduce una de nuestras abejitas eléctricas y genera tus propios ingresos con capacitación y acompañamiento continuo.",
};

export default function DriversPage() {
  return (
    <>
      <DriversHeroSection />
      <DriversBeneficiosSection />
      <DriversRequisitosSection />
      <DriversComoFuncionaSection />
      <DriversCtaSection />
      <FaqSection items={driversFaqItems} defaultOpenIndex={3} />
    </>
  );
}

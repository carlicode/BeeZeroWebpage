import { TecnologiaCtaSection } from "@/components/tecnologia/TecnologiaCtaSection";
import { TecnologiaHeroSection } from "@/components/tecnologia/TecnologiaHeroSection";
import { TecnologiaSistemasSection } from "@/components/tecnologia/TecnologiaSistemasSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tecnología | Bee Zero",
  description:
    "Conoce Beezy, BeeTracked y Beezy Clients: las plataformas propias con las que Bee Zero centraliza su operación, acompaña a sus drivers y da visibilidad a sus clientes.",
};

export default function TecnologiaPage() {
  return (
    <>
      <TecnologiaHeroSection />
      <TecnologiaSistemasSection />
      <TecnologiaCtaSection />
    </>
  );
}

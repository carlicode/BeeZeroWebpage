import { EquipoSection } from "@/components/home/EquipoSection";
import { HeroSection } from "@/components/home/HeroSection";
import { QuienesSomosSection } from "@/components/home/QuienesSomosSection";
import { TresFormasSection } from "@/components/home/TresFormasSection";
import { TripleImpactoSection } from "@/components/home/TripleImpactoSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuienesSomosSection />
      <TresFormasSection />
      <TripleImpactoSection />
      <EquipoSection />
    </>
  );
}

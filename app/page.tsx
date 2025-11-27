'use client';

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Portfolio } from "@/components/Portfolio";
import { SubsidiariesSection } from "@/components/SubsidiariesSection";
import { EconomicZonesSection } from "@/components/EconomicZonesSection";
import { SustainabilitySection } from "@/components/SustainabilitySection";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { LoadingProvider } from "@/context/LoadingContext";

export default function Home() {
  return (
    <LoadingProvider>
      <PageLoader />
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <HeroSection />
        <AboutSection />
        <ImpactSection />
        <SubsidiariesSection />
        <EconomicZonesSection />
        <ServicesSection />
        <Portfolio />
        <SustainabilitySection />
        <Footer />
      </main>
    </LoadingProvider>
  );
}

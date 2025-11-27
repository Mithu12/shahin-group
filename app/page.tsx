import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <main className="grow">
        <HeroSection />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

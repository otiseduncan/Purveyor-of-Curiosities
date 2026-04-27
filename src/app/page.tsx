import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { NewFindsSection } from "@/components/sections/NewFindsSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { OneAvailableSection } from "@/components/sections/OneAvailableSection";
import { ClaimedArchiveSection } from "@/components/sections/ClaimedArchiveSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal text-ivory">
      <div className="pointer-events-none fixed inset-0 opacity-50 [background-image:radial-gradient(circle_at_15%_15%,rgba(196,154,74,0.17),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(47,93,80,0.2),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(164,90,58,0.12),transparent_30%)]" />

      <Header />
      <HeroSection />
      <NewFindsSection />
      <CategoriesSection />
      <ProcessSection />
      <OneAvailableSection />
      <ClaimedArchiveSection />
      <Footer />
    </main>
  );
}
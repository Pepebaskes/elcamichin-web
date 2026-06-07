import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HistoriaSection } from "./components/HistoriaSection";
import { EspecialidadesSection } from "./components/EspecialidadesSection";
import { BebidasSection } from "./components/BebidasSection";
import { GallerySection } from "./components/GallerySection";
import { SloganSection } from "./components/SloganSection";
import { LocationContactSection } from "./components/LocationContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HistoriaSection />
        <EspecialidadesSection />
        <BebidasSection />
        <GallerySection />
        <SloganSection />
        <LocationContactSection />
      </main>
      <Footer />
    </div>
  );
}
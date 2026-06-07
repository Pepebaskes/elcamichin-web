import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HistoriaSection } from "./components/HistoriaSection";
import { EspecialidadesSection } from "./components/EspecialidadesSection";
import { MusicaEnVivoSection } from "./components/MusicaEnVivoSection";
import { BebidasSection } from "./components/BebidasSection";
import { ClientesSection } from "./components/ClientesSection";
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
        <MusicaEnVivoSection />
        <BebidasSection />
        <ClientesSection />
        <GallerySection />
        <SloganSection />
        <LocationContactSection />
      </main>
      <Footer />
    </div>
  );
}

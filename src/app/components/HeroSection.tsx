import { motion } from "motion/react";
import { MapPin, Utensils } from "lucide-react";
import { Button } from "./Button";
import { images } from "../config/images";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images.hero})`,
          backgroundAttachment: "fixed"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={images.heroLogo}
            alt="El Cami-Chin, productos del mar y río"
            className="w-[min(82vw,30rem)] max-h-[40vh] object-contain mx-auto mb-8 drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.p
            className="sr-only"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Productos del mar y río
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            "El que visita El Grullo y no visitó El Cami-Chin no conoció El Grullo"
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("#especialidades")}
            >
              <Utensils className="w-5 h-5" />
              Ver especialidades
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#ubicacion")}
            >
              <MapPin className="w-5 h-5" />
              Cómo llegar
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

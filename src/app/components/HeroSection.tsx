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
    <section
      id="inicio"
      className="relative flex min-h-screen min-h-[100svh] items-center justify-center overflow-hidden pt-24"
    >
      <img
        src={images.hero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/55 md:from-black/70 md:via-black/60 md:to-black/70" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative mx-auto mb-8 w-[min(82vw,30rem)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={images.heroLogo}
              alt="El Cami-Chin®, productos del mar y río"
              className="max-h-[40vh] w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-[3%] top-[4%] text-xl font-bold leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] sm:text-2xl md:text-3xl"
            >
              ®
            </span>
          </motion.div>

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
            "El que visita El Grullo y no visitó El Cami-Chin® no conoció El Grullo"
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

      </div>
    </section>
  );
}

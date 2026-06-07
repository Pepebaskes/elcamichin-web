import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./Button";
import { images } from "../config/images";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.78)", "rgba(255, 255, 255, 0.93)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Historia", href: "#historia" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Galería", href: "#galeria" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Contacto", href: "#contacto" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center shrink-0"
          >
            <motion.img
              src={images.logo}
              alt="El Cami-Chin Logo"
              className="h-20 md:h-24 w-32 md:w-40 object-contain object-left cursor-pointer drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]"
              whileHover={{ scale: 1.05 }}
              animate={{
                filter: [
                  "brightness(1) drop-shadow(0 0 0px rgba(220, 38, 38, 0))",
                  "brightness(1.1) drop-shadow(0 0 8px rgba(220, 38, 38, 0.3))",
                  "brightness(1) drop-shadow(0 0 0px rgba(220, 38, 38, 0))"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              onClick={() => scrollToSection("#inicio")}
            />
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            <Button
              variant="primary"
              size="md"
              onClick={() => window.open("tel:3212873897", "_self")}
            >
              <Phone className="w-4 h-4" />
              Llamar ahora
            </Button>
          </nav>

          <button
            className="lg:hidden text-gray-700 hover:text-red-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 space-y-3"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => window.open("tel:3212873897", "_self")}
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}

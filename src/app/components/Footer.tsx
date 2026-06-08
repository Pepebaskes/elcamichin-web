import { motion } from "motion/react";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { images } from "../config/images";

export function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1DwJx2QAvr/?mibextid=wwXIfr",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/elcamichinelgrullo?igsh=MWZ4cnl1cnFiMXBqdQ==",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="relative mx-auto mb-4 w-40 md:mx-0">
              <img
                src={images.heroLogo}
                alt="Logotipo de El Cami-Chin®"
                className="h-24 w-40 object-contain"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1 text-base font-bold leading-none text-white"
              >
                ®
              </span>
            </div>
            <p className="text-xl text-red-400 italic mb-2">Tradición y sabor desde 1988</p>
            <p className="text-gray-400">El sabor auténtico de El Grullo, Jalisco</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-xl mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-red-400" />
                <p>Narciso Mendoza #182</p>
              </div>
              <p className="text-sm">El Grullo, Jalisco</p>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-red-400" />
                <div>
                  <p>(321) 387 3897</p>
                  <p>(321) 100 7681</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-xl mb-4">Síguenos</h3>
            <div className="flex gap-4 justify-center md:justify-end">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 pt-8 text-center text-gray-400"
        >
          <p>&copy; MR 2015 El Cami "Chin"®. Todos los derechos reservados por Jorge Alberto Castillo Peña y Mirna Mirella Martín Del Campo.</p>
          <p className="mt-2 text-sm italic">
            "El que visita El Grullo y no visitó El Cami-Chin® no conoció El Grullo"
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

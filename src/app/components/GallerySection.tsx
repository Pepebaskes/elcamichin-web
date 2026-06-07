import { motion } from "motion/react";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { images } from "../config/images";

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems = [
    { src: images.chacalesVerdes, name: "Chacales Entomatados" },
    { src: images.molcajete, name: "Molcajete Mar y Tierra" },
    { src: images.chacalesDiabla, name: "Chacales a la diabla" },
    { src: images.ostiones, name: "Ostiones Rockefeller" },
    { src: images.tostadas, name: "Tostadas de Marlin" },
    { src: images.chacalesFrescos, name: "Chacales frescos" },
    { src: images.tacosCamaron, name: "Chicharrón de pescado" },
    { src: images.molcajeteQueso, name: "Molcajete gratinado" },
    
    { src: images.cocteles, name: "Jugo de Chacal" },
    { src: images.fachada, name: "Nuestro restaurante" }
  ];

  return (
    <section id="galeria" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Un vistazo a nuestros platillos y ambiente">
          Galería
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.img
                    src={item.src}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center"
                  >
                    <div className="p-6 text-white text-center w-full">
                      <p className="text-xl">{item.name}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

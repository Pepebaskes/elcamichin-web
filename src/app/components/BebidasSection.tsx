import { motion } from "motion/react";
import { SectionTitle } from "./SectionTitle";
import { images } from "../config/images";

export function BebidasSection() {
  const bebidas = [
    {
      name: "Clericot de durazno",
      description: "Refrescante y frutal, perfecto para acompañar tus mariscos",
      image: images.clericot
    },
    {
      name: "Penca verde",
      description: "Bebida tradicional fresca y natural",
      image: images.pencaVerde
    },
    {
      name: "Micheladas",
      description: "Preparadas con nuestro toque especial",
      image: images.michelada
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle centered subtitle="Bebidas preparadas para acompañar el sabor del mar">
          Frescura en cada sorbo
        </SectionTitle>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {bebidas.map((bebida, index) => {
            return (
              <motion.div
                key={bebida.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[4/5] overflow-hidden"
                >
                  <img
                    src={bebida.image}
                    alt={bebida.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3 text-gray-800">{bebida.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{bebida.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl">
            <p className="text-xl md:text-2xl text-gray-700 italic">
              "El complemento perfecto para tu experiencia marina"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

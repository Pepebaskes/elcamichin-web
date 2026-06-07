import { motion } from "motion/react";
import { Heart, Users } from "lucide-react";
import { images } from "../config/images";

const customerImages = [
  {
    src: images.clientesCelebracion,
    alt: "Cliente celebrando una ocasión especial en El Cami-Chin",
  },
  {
    src: images.clientesPlatillos,
    alt: "Clientes disfrutando los platillos de El Cami-Chin",
  },
  {
    src: images.clientesEquipo,
    alt: "Clientes acompañados por el equipo de El Cami-Chin",
  },
  {
    src: images.clientesBrindis,
    alt: "Clientes compartiendo bebidas en El Cami-Chin",
  },
];

export function ClientesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-red-600">
            <Users className="h-5 w-5" />
            <span className="font-semibold uppercase tracking-wider">
              Quienes nos visitan
            </span>
          </div>
          <h2 className="text-4xl text-gray-800 md:text-5xl">
            Momentos que se quedan en la mesa
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Familias, amigos y visitantes han hecho de El Cami-Chin un punto
            de encuentro para comer bien, celebrar y volver a compartir.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {customerImages.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`overflow-hidden rounded-2xl ${
                index % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/5] lg:mt-8"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover object-center"
              />
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex items-center justify-center gap-3 text-center text-lg text-gray-700"
        >
          <Heart className="h-5 w-5 fill-red-600 text-red-600" />
          <p>Gracias por hacernos parte de sus momentos.</p>
        </motion.div>
      </div>
    </section>
  );
}

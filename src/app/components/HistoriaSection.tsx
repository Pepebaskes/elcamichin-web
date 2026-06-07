import { motion } from "motion/react";
import { images } from "../config/images";
import { SectionTitle } from "./SectionTitle";

export function HistoriaSection() {
  return (
    <section
      id="historia"
      className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          centered
          subtitle="Una historia familiar que comenzó en El Grullo y sigue viva en cada platillo"
        >
          Nuestra Historia
        </SectionTitle>

        <div className="mt-14 grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="min-w-0 space-y-6 text-left text-base leading-relaxed text-gray-700 sm:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              El Cami-Chin nace en el año{" "}
              <span className="font-semibold text-red-600">1988</span> en El
              Grullo, Jalisco, cuando el señor Jorge Castillo Gómez, mejor
              conocido como <span className="italic">“El Chin”</span>, comienza
              la venta de jugo de chacal en este mismo lugar donde se encuentra
              situado nuestro restaurante.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Gracias al gusto que tenemos por servir y a la unión familiar,
              hemos ido creciendo durante ya{" "}
              <span className="font-semibold text-red-600">36 años</span>,
              sirviendo platillos de carnes y mariscos con el sabor inigualable
              de la casa, siendo nuestro platillo estrella los{" "}
              <span className="font-semibold">chacales de río</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Nuestro secreto es la{" "}
              <span className="font-semibold text-red-600">
                calidad de nuestros productos
              </span>
              , comprando siempre los insumos más frescos del mercado
              directamente de productores locales. Además, todos nuestros
              platillos son preparados al momento, cuidando siempre la receta
              de la casa.
            </motion.p>
          </div>

          <motion.figure
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="min-w-0 w-full"
          >
            <div className="aspect-[3/2] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src={images.fachada}
                alt="Fachada del restaurante El Cami-Chin en El Grullo, Jalisco"
                className="h-full w-full object-contain"
              />
            </div>
            <figcaption className="px-4 pt-5 text-center">
              <p className="text-xl font-semibold text-gray-800">
                Nuestro restaurante
              </p>
              <p className="mt-1 text-sm text-gray-600">
                El mismo lugar donde comenzó nuestra historia.
              </p>
            </figcaption>
          </motion.figure>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex w-full min-w-0 items-center gap-3 sm:gap-8"
        >
          <span className="h-px flex-1 bg-red-200" aria-hidden="true" />
          <p className="min-w-0 text-center text-xl italic text-red-700 sm:shrink-0 sm:text-2xl md:text-3xl">
            Tradición desde 1988
          </p>
          <span className="h-px flex-1 bg-red-200" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}

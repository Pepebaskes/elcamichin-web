import { motion } from "motion/react";
import { CalendarDays, MessageCircle, Music2 } from "lucide-react";
import { images } from "../config/images";
import { Button } from "./Button";

const whatsappUrl =
  "https://wa.me/523211007681?text=Hola%2C%20quisiera%20saber%20cu%C3%A1ndo%20ser%C3%A1%20la%20pr%C3%B3xima%20presentaci%C3%B3n%20de%20m%C3%BAsica%20en%20vivo.";

export function MusicaEnVivoSection() {
  return (
    <section className="overflow-hidden bg-gray-950 py-20 text-white md:py-28">
      <div className="container mx-auto grid min-w-0 items-center gap-12 px-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="min-w-0"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-600/15 px-4 py-2 text-sm font-semibold text-red-300">
            <Music2 className="h-4 w-4" />
            Sabor, tradición y ambiente
          </div>

          <h2 className="text-4xl leading-tight md:text-5xl">
            Música en vivo para disfrutar la sobremesa
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300">
            En fechas especiales, El Cami-Chin
            <sup className="ml-0.5 text-[0.6em] font-semibold">®</sup> se llena
            de música y momentos para compartir. Disfruta nuestros platillos
            mientras vives un ambiente cercano, alegre y muy de nuestra tierra.
          </p>

          <div className="mt-7 grid gap-4 text-gray-200 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Music2 className="mt-1 h-5 w-5 shrink-0 text-red-400" />
              <p>Presentaciones y momentos musicales especiales.</p>
            </div>
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-red-400" />
              <p>Consulta las próximas fechas antes de tu visita.</p>
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="mt-8"
            onClick={() =>
              window.open(whatsappUrl, "_blank", "noopener,noreferrer")
            }
          >
            <MessageCircle className="h-5 w-5" />
            Consultar próxima presentación
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4"
        >
          <div className="col-span-2 aspect-[16/8] overflow-hidden rounded-3xl">
            <img
              src={images.musicaMariachi}
              alt="Mariachi tocando en vivo en El Cami-Chin®"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={images.musicaClientes}
              alt="Cliente disfrutando la música en El Cami-Chin®"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={images.musicaVivo}
              alt="Músicos durante una presentación en El Cami-Chin®"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

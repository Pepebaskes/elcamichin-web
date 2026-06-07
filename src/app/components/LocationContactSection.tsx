import { motion } from "motion/react";
import {
  CarFront,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { Button } from "./Button";
import { SectionTitle } from "./SectionTitle";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Narciso+Mendoza+182+El+Grullo+Jalisco";
const whatsappUrl =
  "https://wa.me/523211007681?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20El%20Cami-Chin.";

export function LocationContactSection() {
  return (
    <section
      id="ubicacion"
      className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          centered
          subtitle="Consulta nuestra dirección, estacionamiento y la mejor ruta para llegar"
        >
          Encuéntranos
        </SectionTitle>

        <div className="mt-14 grid min-w-0 items-stretch gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="grid min-w-0 gap-6">
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-red-100 bg-white p-6 shadow-lg sm:p-8"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50">
                  <MapPin className="h-6 w-6 text-red-600" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                    Cómo llegar
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Información de ubicación
                  </h3>
                </div>
              </div>

              <dl className="space-y-5 text-gray-700">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Dirección
                  </dt>
                  <dd className="mt-1 text-lg">
                    Narciso Mendoza #182
                    <br />
                    El Grullo, Jalisco
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Teléfonos
                  </dt>
                  <dd className="mt-1 text-lg">
                    (321) 387 3897
                    <br />
                    (321) 100 7681
                  </dd>
                </div>
              </dl>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-700"
              >
                <Navigation className="h-5 w-5" />
                Abrir en Google Maps
              </a>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100">
                  <CarFront className="h-6 w-6 text-gray-700" />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Contamos con estacionamiento
                  </h3>
                  <p className="mt-2 leading-relaxed text-gray-600">
                    Disponemos de estacionamiento para que tu visita sea más
                    cómoda desde tu llegada.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="min-h-[360px] min-w-0 overflow-hidden rounded-3xl bg-white shadow-xl sm:min-h-[440px] lg:min-h-0"
          >
            <iframe
              title="Ubicación de El Cami-Chin en Google Maps"
              src="https://www.google.com/maps?q=Narciso+Mendoza+182,+El+Grullo,+Jalisco,+Mexico&z=17&output=embed"
              className="h-full min-h-[360px] w-full border-0 sm:min-h-[440px] lg:min-h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        <motion.div
          id="contacto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <h3 className="mb-8 text-3xl text-gray-800">Contáctanos</h3>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open("tel:3213873897", "_self")}
            >
              <Phone className="h-5 w-5" />
              Llamar
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                window.open(whatsappUrl, "_blank", "noopener,noreferrer")
              }
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(mapsUrl, "_blank")}
            >
              <Navigation className="h-5 w-5" />
              Google Maps
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

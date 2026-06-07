import { motion } from "motion/react";
import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Button } from "./Button";
import { Card } from "./Card";
import { SectionTitle } from "./SectionTitle";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Narciso+Mendoza+182+El+Grullo+Jalisco";
const whatsappUrl =
  "https://wa.me/523211007681?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20El%20Cami-Chin.";

export function LocationContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Narciso Mendoza #182, El Grullo, Jalisco",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      title: "Teléfonos",
      content: "(321) 387 3897 • (321) 100 7681",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section
      id="ubicacion"
      className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <SectionTitle centered>Encuéntranos</SectionTitle>

        <div className="mb-12 mt-16 grid gap-8 md:grid-cols-2">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={info.title} delay={index * 0.1}>
                <div className="p-8 text-center">
                  <div
                    className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${info.color}`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-2xl text-gray-800">{info.title}</h3>
                  <p className="text-lg text-gray-600">{info.content}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          <div className="aspect-[4/3] w-full sm:aspect-video">
            <iframe
              title="Ubicación de El Cami-Chin en Google Maps"
              src="https://www.google.com/maps?q=Narciso+Mendoza+182,+El+Grullo,+Jalisco,+Mexico&z=17&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-3 px-5 py-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="font-semibold text-gray-800">El Cami-Chin</p>
              <p className="text-sm text-gray-600">
                Narciso Mendoza #182, El Grullo, Jalisco
              </p>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-red-600 transition-colors hover:text-red-700"
            >
              Abrir mapa completo
            </a>
          </div>
        </motion.div>

        <motion.div
          id="contacto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="mb-8 text-3xl text-gray-800">Contáctanos</h3>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open("tel:3212873897", "_self")}
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

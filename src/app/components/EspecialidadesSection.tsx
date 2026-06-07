import { motion } from "motion/react";
import { Flame, Leaf, Fish, Star } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { Card } from "./Card";
import { Button } from "./Button";
import { images } from "../config/images";

export function EspecialidadesSection() {
  const estilos = [
    {
      name: "A la diabla",
      icon: Flame,
      description: "Picante intenso con nuestra salsa especial",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Entomatados",
      icon: Leaf,
      description: "Nuestra especialidad, lo que nos hace tan conocidos",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Zarandeados",
      icon: Fish,
      description: "A la parrilla con especias de la casa",
      color: "from-yellow-500 to-amber-500"
    },
    {
      name: "Al natural",
      icon: Star,
      description: "El sabor auténtico del chacal de río",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="especialidades" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="El sabor que hizo tradición desde 1988">
          Chacales de Río
        </SectionTitle>

        <div className="mt-16 grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <img
              src={images.chacalesVerdes}
              alt="Chacales en salsa verde"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl mb-2">Chacales entomatados</h3>
                <p className="text-sm">Nuestra especialidad de la casa</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <img
              src={images.chacalesDiabla}
              alt="Chacales a la diabla"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl mb-2">Chacales a la diabla</h3>
                <p className="text-sm">Para los amantes del picante</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {estilos.map((estilo, index) => {
            const Icon = estilo.icon;
            return (
              <Card key={estilo.name} delay={index * 0.1}>
                <div className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${estilo.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl mb-2 text-gray-800">{estilo.name}</h4>
                  <p className="text-gray-600 text-sm">{estilo.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              window.open(
                "https://wa.me/523211007681?text=Hola%2C%20quisiera%20preguntar%20por%20la%20disponibilidad%20de%20chacales.",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            Preguntar disponibilidad
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

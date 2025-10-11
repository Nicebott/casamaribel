import { Building2, Bike, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Alquiler de Apartamentos",
    description:
      "Apartamentos completamente equipados con vista al mar y todas las comodidades para tu estadía perfecta.",
    color: "text-primary",
  },
  {
    icon: Bike,
    title: "Alquiler de Fourwheels",
    description: "Explora Las Terrenas con nuestros fourwheels modernos y bien mantenidos. Aventura garantizada.",
    color: "text-secondary",
  },
  {
    icon: Scale,
    title: "Servicios Jurídicos",
    description:
      "Asesoría legal profesional para constitución de empresas, transferencias de propiedades y residencias.",
    color: "text-primary",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nuestros Servicios
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Todo lo que necesitas para disfrutar de Las Terrenas en un solo lugar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10">
                  <service.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${service.color}`} />
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

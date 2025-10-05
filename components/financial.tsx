import { Card, CardContent } from "@/components/ui/card"
import { FileText, Building2, Home, Users } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Constitución de Empresa",
    description: "Asesoría completa para la creación y registro de tu empresa en República Dominicana.",
  },
  {
    icon: Users,
    title: "Sociedades Comerciales",
    description: "Gestión y constitución de sociedades comerciales con respaldo legal profesional.",
  },
  {
    icon: Home,
    title: "Transferencias de Propiedades",
    description: "Trámites seguros y eficientes para la compra, venta y transferencia de inmuebles.",
  },
  {
    icon: FileText,
    title: "Residencias",
    description: "Asesoría integral para obtener tu residencia temporal o permanente en RD.",
  },
]

export function Financial() {
  return (
    <section id="juridico" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Servicios Jurídicos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Asesoría legal profesional para residentes, inversionistas y empresarios en Las Terrenas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-primary text-white border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                ¿Necesitas asesoría legal personalizada?
              </h3>
              <p className="text-lg mb-6 text-white/90">
                Nuestro equipo de profesionales está listo para ayudarte con tus trámites legales
              </p>
              <a
                href="https://wa.me/18296974277?text=Hola%2C%20necesito%20información%20sobre%20servicios%20jurídicos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Contactar Asesor Legal
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

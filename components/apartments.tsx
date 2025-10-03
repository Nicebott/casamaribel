import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Maximize, Wifi, Wind, Waves } from "lucide-react"

const apartments = [
  {
    name: "Suite Paraíso",
    image: "/luxury-beach-apartment-interior-caribbean-modern.jpg",
    beds: 2,
    baths: 2,
    size: "85m²",
    price: "$120",
    features: ["WiFi", "A/C", "Vista al Mar"],
  },
  {
    name: "Estudio Tropical",
    image: "/cozy-studio-apartment-tropical-beach-decor.jpg",
    beds: 1,
    baths: 1,
    size: "45m²",
    price: "$75",
    features: ["WiFi", "A/C", "Balcón"],
  },
  {
    name: "Penthouse Maribel",
    image: "/luxury-penthouse-ocean-view-caribbean-terrace.jpg",
    beds: 3,
    baths: 3,
    size: "150m²",
    price: "$250",
    features: ["WiFi", "A/C", "Vista Panorámica"],
  },
]

export function Apartments() {
  return (
    <section id="apartamentos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Apartamentos Disponibles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Espacios diseñados para tu comodidad con las mejores vistas de Las Terrenas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {apartments.map((apt, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={apt.image || "/placeholder.svg"}
                  alt={apt.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full font-bold">
                  {apt.price}/noche
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  {apt.name}
                </h3>

                <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span className="text-sm">{apt.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span className="text-sm">{apt.baths}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span className="text-sm">{apt.size}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {apt.features.map((feature, i) => (
                    <span key={i} className="inline-flex items-center gap-1 bg-accent px-3 py-1 rounded-full text-sm">
                      {feature === "WiFi" && <Wifi className="w-3 h-3" />}
                      {feature === "A/C" && <Wind className="w-3 h-3" />}
                      {(feature.includes("Vista") || feature.includes("Mar")) && <Waves className="w-3 h-3" />}
                      {feature}
                    </span>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">Reservar Ahora</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

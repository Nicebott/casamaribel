"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Maximize, Wifi, Wind, Waves } from "lucide-react"
import { ApartmentModal } from "./apartment-modal"
import { useState } from "react"

const apartments = [
  {
    name: "Apartamento A",
    image: "/luxury-beach-apartment-interior-caribbean-modern.avif",
    images: [
      "/luxury-beach-apartment-interior-caribbean-modern.avif",
      "/modern-kitchen-caribbean-apartment.avif",
      "/luxury-bedroom-ocean-view.jpg",
      "/spacious-bathroom-modern-design.avif",
    ],
    beds: 2,
    baths: 1,
    size: "60m²",
    price: "$120",
    features: ["WiFi", "A/C", "1 min de la playa"],
    description:
      "Hermoso apartamento de 2 habitaciones a solo 1 minuto de la playa. Perfecto para parejas o familias pequeñas que buscan comodidad cerca del mar Caribe en Las Terrenas.",
    amenities: [
      "Cocina equipada",
      "TV por cable",
      "Estacionamiento",
      "Capacidad 4 personas",
      "WiFi de alta velocidad",
      "Aire acondicionado",
      "A 1 minuto de la playa",
    ],
  },
  {
    name: "Apartamento B",
    image: "/cozy-studio-apartment-tropical-beach-decor.jpeg",
    images: [
      "/cozy-studio-apartment-tropical-beach-decor.jpeg",
      "/studio-apartment-kitchenette.avif",
      "/cozy-bedroom-tropical-style.avif",
      "/modern-bathroom-compact.avif",
    ],
    beds: 1,
    baths: 1,
    size: "50m²",
    price: "$75",
    features: ["WiFi", "A/C", "1 min de la playa"],
    description:
      "Acogedor apartamento de 1 habitación a solo 1 minuto de la playa. Ideal para parejas o viajeros solitarios que buscan comodidad y cercanía al mar.",
    amenities: [
      "Cocina equipada",
      "TV por cable",
      "Balcón privado",
      "Capacidad 2 personas",
      "WiFi de alta velocidad",
      "Aire acondicionado",
      "A 1 minuto de la playa",
    ],
  },
  {
    name: "Apartamento D",
    image: "/luxury-penthouse-ocean-view-caribbean-terrace.jpg",
    images: [
      "/luxury-penthouse-ocean-view-caribbean-terrace.jpg",
      "/luxury-penthouse-living-room-ocean-view.avif",
      "/master-bedroom-luxury-caribbean.jpg",
      "/gourmet-kitchen-modern-penthouse.jpg",
      "/rooftop-terrace-ocean-view.avif",
    ],
    beds: 1,
    baths: 1,
    size: "50m²",
    price: "$80",
    features: ["WiFi", "A/C", "Balcón"],
    description:
      "Apartamento de 1 habitación con diseño moderno y todas las comodidades. Perfecto para parejas que buscan un espacio acogedor y funcional.",
    amenities: [
      "Cocina equipada",
      "TV por cable",
      "Balcón privado",
      "Capacidad 2 personas",
      "WiFi de alta velocidad",
      "Aire acondicionado",
    ],
  },
]

export function Apartments() {
  const [selectedApartment, setSelectedApartment] = useState<(typeof apartments)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleReserveClick = (apartment: (typeof apartments)[0]) => {
    setSelectedApartment(apartment)
    setIsModalOpen(true)
  }

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
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold shadow-lg">
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
                      {(feature.includes("Vista") || feature.includes("Mar") || feature.includes("Playa")) && (
                        <Waves className="w-3 h-3" />
                      )}
                      {feature}
                    </span>
                  ))}
                </div>

                <Button onClick={() => handleReserveClick(apt)} className="w-full bg-primary hover:bg-primary/90">
                  Ver Detalles y Reservar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ApartmentModal apartment={selectedApartment} open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  )
}

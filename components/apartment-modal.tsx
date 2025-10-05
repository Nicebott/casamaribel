"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Maximize, Wifi, Wind, Waves, MapPin, Users, Utensils, Tv, Car } from "lucide-react"
import { useState } from "react"

interface ApartmentModalProps {
  apartment: {
    name: string
    images: string[]
    beds: number
    baths: number
    size: string
    price: string
    features: string[]
    description: string
    amenities: string[]
  } | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ApartmentModal({ apartment, open, onOpenChange }: ApartmentModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!apartment) return null

  const handleReserve = () => {
    const message = `Hola! Me interesa reservar el ${apartment.name}. Me gustaría obtener más información sobre disponibilidad y precios.`
    const whatsappUrl = `https://wa.me/18296974277?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % apartment.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            {apartment.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Galería de imágenes */}
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={apartment.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${apartment.name} - Imagen ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full font-bold">
                {apartment.price}/noche
              </div>
            </div>

            {apartment.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Imagen anterior"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Siguiente imagen"
                >
                  →
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {apartment.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Información básica */}
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5" />
              <span>
                {apartment.beds} {apartment.beds === 1 ? "Habitación" : "Habitaciones"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5" />
              <span>
                {apartment.baths} {apartment.baths === 1 ? "Baño" : "Baños"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="w-5 h-5" />
              <span>{apartment.size}</span>
            </div>
          </div>

          {/* Descripción */}
          <div>
            <h3 className="text-xl font-bold mb-2">Descripción</h3>
            <p className="text-muted-foreground leading-relaxed">{apartment.description}</p>
          </div>

          {/* Características principales */}
          <div>
            <h3 className="text-xl font-bold mb-3">Características Principales</h3>
            <div className="flex flex-wrap gap-2">
              {apartment.features.map((feature, i) => (
                <span key={i} className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                  {feature === "WiFi" && <Wifi className="w-4 h-4" />}
                  {feature === "A/C" && <Wind className="w-4 h-4" />}
                  {(feature.includes("Vista") || feature.includes("Mar")) && <Waves className="w-4 h-4" />}
                  {feature.includes("Balcón") && <MapPin className="w-4 h-4" />}
                  {feature.includes("Panorámica") && <Waves className="w-4 h-4" />}
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Amenidades adicionales */}
          <div>
            <h3 className="text-xl font-bold mb-3">Amenidades</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {apartment.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground">
                  {amenity.includes("Cocina") && <Utensils className="w-4 h-4" />}
                  {amenity.includes("TV") && <Tv className="w-4 h-4" />}
                  {amenity.includes("Estacionamiento") && <Car className="w-4 h-4" />}
                  {amenity.includes("Capacidad") && <Users className="w-4 h-4" />}
                  {amenity.includes("WiFi") && <Wifi className="w-4 h-4" />}
                  {amenity.includes("Aire") && <Wind className="w-4 h-4" />}
                  <span className="text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botón de reserva */}
          <Button onClick={handleReserve} className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
            Reservar Ahora por WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

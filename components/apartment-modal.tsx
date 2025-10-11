"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Bed,
  Bath,
  Maximize,
  Wifi,
  Wind,
  Waves,
  MapPin,
  Users,
  Utensils,
  Tv,
  Car,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
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
    available?: boolean
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            {apartment.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6">
          {/* Galería de imágenes */}
          <div className="relative">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
              <img
                src={apartment.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${apartment.name} - Imagen ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-secondary text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-sm sm:text-base">
                {apartment.price}/noche
              </div>
            </div>

            {apartment.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 sm:p-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-110"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 sm:p-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-110"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                  {apartment.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all shadow-md ${
                        index === currentImageIndex ? "bg-white scale-125" : "bg-white/60 hover:bg-white/80"
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Información básica */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-muted-foreground text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>
                {apartment.beds} {apartment.beds === 1 ? "Habitación" : "Habitaciones"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>
                {apartment.baths} {apartment.baths === 1 ? "Baño" : "Baños"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{apartment.size}</span>
            </div>
          </div>

          {/* Descripción */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Descripción</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{apartment.description}</p>
          </div>

          {/* Características principales */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3">Características Principales</h3>
            <div className="flex flex-wrap gap-2">
              {apartment.features.map((feature, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-accent px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm"
                >
                  {feature === "WiFi" && <Wifi className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {feature === "A/C" && <Wind className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {(feature.includes("Vista") || feature.includes("Mar")) && (
                    <Waves className="w-3 h-3 sm:w-4 sm:h-4" />
                  )}
                  {feature.includes("Balcón") && <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {feature.includes("Panorámica") && <Waves className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Amenidades adicionales */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3">Amenidades</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
              {apartment.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                  {amenity.includes("Cocina") && <Utensils className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {amenity.includes("TV") && <Tv className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {amenity.includes("Estacionamiento") && <Car className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {amenity.includes("Capacidad") && <Users className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {amenity.includes("WiFi") && <Wifi className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {amenity.includes("Aire") && <Wind className="w-3 h-3 sm:w-4 sm:h-4" />}
                  <span className="text-xs sm:text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botón de reserva */}
          {apartment.available !== false ? (
            <Button
              onClick={handleReserve}
              className="w-full bg-primary hover:bg-primary/90 text-base sm:text-lg py-5 sm:py-6"
            >
              Reservar Ahora por WhatsApp
            </Button>
          ) : (
            <div className="w-full bg-red-100 text-red-800 text-center py-5 sm:py-6 rounded-lg font-semibold text-base sm:text-lg">
              Este apartamento no está disponible actualmente
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

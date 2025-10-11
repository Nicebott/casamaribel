"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/beautiful-beach-las-terrenas-dominican-republic-tu.jpg"
          alt="Las Terrenas Beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary/30 mb-2 sm:mb-4">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-white">Las Terrenas, República Dominicana</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 text-balance px-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Casa Maribel
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 text-pretty leading-relaxed max-w-3xl mx-auto px-2">
            Tu destino perfecto en el paraíso caribeño. Alquiler de apartamentos, fourwheels y servicios financieros.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
              onClick={() => scrollToSection("apartamentos")}
            >
              Ver Apartamentos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
              onClick={() => scrollToSection("contacto")}
            >
              Contactar Ahora
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}

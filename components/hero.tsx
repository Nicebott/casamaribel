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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/beautiful-beach-las-terrenas-dominican-republic-tu.jpg" alt="Las Terrenas Beach" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">Las Terrenas, República Dominicana</span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Casa Maribel
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
            Tu destino perfecto en el paraíso caribeño. Alquiler de apartamentos, fourwheels y servicios financieros.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto"
              onClick={() => scrollToSection("apartamentos")}
            >
              Ver Apartamentos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 h-auto"
              onClick={() => scrollToSection("contacto")}
            >
              Contactar Ahora
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Gauge, Shield, Fuel } from "lucide-react"

const vehicles = [
  {
    name: "Fourwheel Locin 300cc",
    image: "/modern-atv-fourwheel-beach-adventure-red.jpg",
    capacity: "2 personas",
    power: "300cc",
    brand: "Locin",
    price: "$35",
    features: ["Seguro incluido", "Gasolina incluida", "Casco incluido"],
  },
  {
    name: "Fourwheel Locin 300cc",
    image: "/powerful-atv-fourwheel-tropical-terrain-blue.jpg",
    capacity: "2 personas",
    power: "300cc",
    brand: "Locin",
    price: "$35",
    features: ["Seguro incluido", "Gasolina incluida", "Casco incluido"],
  },
]

export function Fourwheels() {
  const handleRentClick = (vehicle: (typeof vehicles)[0]) => {
    const message = `Hola! Me interesa alquilar el ${vehicle.name} (${vehicle.brand} ${vehicle.power}) por ${vehicle.price}/día. ¿Está disponible?`
    const whatsappUrl = `https://wa.me/18296974277?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="fourwheels" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Alquiler de Fourwheels
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explora cada rincón de Las Terrenas con nuestros vehículos todo terreno Locin 300cc
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold shadow-lg">
                  {vehicle.price}/día
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  {vehicle.name}
                </h3>
                <p className="text-muted-foreground mb-4">Marca: {vehicle.brand}</p>

                <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Gauge className="w-4 h-4" />
                    <span className="text-sm">{vehicle.power}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {vehicle.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      {feature.includes("Seguro") && <Shield className="w-4 h-4 text-primary" />}
                      {feature.includes("Gasolina") && <Fuel className="w-4 h-4 text-primary" />}
                      {!feature.includes("Seguro") && !feature.includes("Gasolina") && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button onClick={() => handleRentClick(vehicle)} className="w-full bg-primary hover:bg-primary/90">
                  Alquilar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

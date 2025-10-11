import { Facebook, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Casa Maribel
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Tu hogar en el paraíso caribeño. Servicios de calidad en Las Terrenas, República Dominicana.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#apartamentos" className="hover:text-background transition-colors">
                  Apartamentos
                </a>
              </li>
              <li>
                <a href="#fourwheels" className="hover:text-background transition-colors">
                  Fourwheels
                </a>
              </li>
              <li>
                <a href="#financiero" className="hover:text-background transition-colors">
                  Servicios Financieros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Información</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#contacto" className="hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:ferminmaribel@casamaribel.com.do"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Casa Maribel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

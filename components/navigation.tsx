"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-serif font-bold text-primary hover:text-primary/80 transition-colors"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Casa Maribel
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("apartamentos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Apartamentos
            </button>
            <button
              onClick={() => scrollToSection("fourwheels")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Fourwheels
            </button>
            <button
              onClick={() => scrollToSection("financiero")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Financiero
            </button>
            <Button onClick={() => scrollToSection("contacto")} className="bg-secondary hover:bg-secondary/90">
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("apartamentos")}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Apartamentos
              </button>
              <button
                onClick={() => scrollToSection("fourwheels")}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Fourwheels
              </button>
              <button
                onClick={() => scrollToSection("financiero")}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Financiero
              </button>
              <div className="px-4">
                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="w-full bg-secondary hover:bg-secondary/90"
                >
                  Contacto
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

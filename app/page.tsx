import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Apartments } from "@/components/apartments"
import { Fourwheels } from "@/components/fourwheels"
import { Financial } from "@/components/financial"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Apartments />
      <Fourwheels />
      <Financial />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

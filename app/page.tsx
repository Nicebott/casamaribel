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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Casa Maribel",
    description:
      "Alquiler de apartamentos frente al mar en Playa Las Ballenas, Las Terrenas, Samaná, República Dominicana",
    image: "https://casamaribel.com/luxury-beach-apartment-interior-caribbean-modern.jpg",
    "@id": "https://casamaribel.com",
    url: "https://casamaribel.com",
    telephone: "+1-809-000-0000",
    priceRange: "$85 - $150",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Playa Las Ballenas",
      addressLocality: "Las Terrenas",
      addressRegion: "Samaná",
      addressCountry: "DO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.3333,
      longitude: -69.5333,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: ["https://www.facebook.com/casamaribel", "https://www.instagram.com/casamaribel"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Apartamentos disponibles",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Accommodation",
            name: "Apartamento A - Penthouse de Lujo",
            description: "Penthouse de lujo con vista al mar, 2 habitaciones, 2 baños",
            image: "https://casamaribel.com/luxury-penthouse-ocean-view-caribbean-terrace.jpg",
          },
          price: "100",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Accommodation",
            name: "Apartamento B - Suite Caribeña",
            description: "Suite caribeña con balcón privado, 1 habitación, 1 baño",
            image: "https://casamaribel.com/luxury-beach-apartment-interior-caribbean-modern.jpg",
          },
          price: "85",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
    </>
  )
}

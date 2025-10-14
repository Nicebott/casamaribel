import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Casa Maribel - Alquiler de Apartamentos en Las Terrenas | Playa Las Ballenas",
  description:
    "Alquiler de apartamentos a 1 minuto de Playa Las Ballenas, Las Terrenas, Samaná. Fourwheels y servicios jurídicos disponibles. Reserva tu apartamento de lujo en República Dominicana.",
  keywords: [
    "alquiler apartamentos Las Terrenas",
    "apartamentos Playa Las Ballenas",
    "alquiler Las Terrenas",
    "apartamentos Samaná",
    "fourwheels Las Terrenas",
    "alquiler República Dominicana",
    "apartamentos frente al mar",
    "Casa Maribel",
    "vacaciones Las Terrenas",
    "alquiler turístico Samaná",
    "renta apartamentos Las Terrenas",
    "hospedaje Las Terrenas",
    "apartamentos amueblados Las Terrenas",
    "alquiler vacacional República Dominicana",
    "apartamentos turísticos Samaná",
    "renta fourwheels Las Terrenas",
    "alquiler ATV Las Terrenas",
    "servicios jurídicos República Dominicana",
    "apartamentos cerca playa Las Terrenas",
    "alojamiento Las Terrenas",
    "renta corta estancia Las Terrenas",
    "apartamentos equipados Las Terrenas",
    "turismo Las Terrenas",
    "playa Las Ballenas apartamentos",
  ],
  authors: [{ name: "Casa Maribel" }],
  creator: "Casa Maribel",
  publisher: "Casa Maribel",
  metadataBase: new URL("https://casamaribel.com.do"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://casamaribel.com.do",
    title: "Casa Maribel - Alquiler de Apartamentos en Las Terrenas",
    description:
      "Alquiler de apartamentos a 1 minuto de Playa Las Ballenas, Las Terrenas, Samaná. Reserva tu apartamento de lujo en República Dominicana.",
    siteName: "Casa Maribel",
    images: [
      {
        url: "/luxury-beach-apartment-interior-caribbean-modern.jpg",
        width: 1200,
        height: 630,
        alt: "Apartamentos de lujo en Las Terrenas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Maribel - Alquiler de Apartamentos en Las Terrenas",
    description: "Alquiler de apartamentos a 1 minuto de Playa Las Ballenas, Las Terrenas, Samaná.",
    images: ["/luxury-beach-apartment-interior-caribbean-modern.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.jpg", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.jpg", sizes: "180x180", type: "image/png" }],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${playfair.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

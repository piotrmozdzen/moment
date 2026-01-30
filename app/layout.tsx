import type { Metadata } from 'next'
import { Montserrat, Caveat, Knewave, Instrument_Serif, Playfair_Display, Square_Peg } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import Script from 'next/script'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ["400", "500", "600", "700", "900"],
})
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat'
})
const knewave = Knewave({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-knewave'
})
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument',
  style: ['normal', 'italic']
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})
const squarePeg = Square_Peg({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-square-peg'
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Tailwind CSS", "Server Components", "Radix UI"],
  authors: [
    {
      name: "Moment Drink Bar",
      url: "https://moment-drinkbar.pl",
    },
  ],
  creator: "Moment Drink Bar",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@moment_drinkbar",
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  verification: {
    google: "oGeFrc-pTKJeN022wUhyGhIcRhOfBDQc5crsbxWknkY",
  },
}

import { Toaster } from 'sonner'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PSL6DF8G');
        `}
      </Script>
      <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": siteConfig.name,
          "description": siteConfig.description,
          "url": siteConfig.url,
          "telephone": siteConfig.contact.phone,
          "email": siteConfig.contact.email,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lublin",
            "addressRegion": "Lubelskie",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.2465,
            "longitude": 22.5684
          },
          "sameAs": [
            siteConfig.links.facebook,
            siteConfig.links.instagram
          ],
          "image": `${siteConfig.url}/og.jpg`,
          "priceRange": "$$"
        })}
      </Script>
      <body className={cn("min-h-screen bg-background font-sans antialiased", montserrat.variable, caveat.variable, knewave.variable, instrumentSerif.variable, playfair.variable, squarePeg.variable)}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSL6DF8G"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
        </div>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}

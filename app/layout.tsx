import type { Metadata } from 'next'
import { Inter, Montserrat, Caveat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ["400", "700", "900"],
})
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat'
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
      name: "Acme Corp",
      url: "https://acme-example.com",
    },
  ],
  creator: "Acme Corp",
  openGraph: {
    type: "website",
    locale: "en_US",
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
    creator: "@acme",
  },
  icons: {
    icon: "/favicon.ico",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, montserrat.variable, caveat.variable)}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { SEO } from '@/lib/constants'
import JsonLd from '@/components/ui/JsonLd'

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-cormorant',
    display: 'swap',
})

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-dm-sans',
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL(SEO.url),
    title: SEO.title,
    description: SEO.description,
    keywords: SEO.keywords,
    authors: [{ name: 'Carpintería JJ' }],
    creator: 'Carpintería JJ',
    publisher: 'Carpintería JJ',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'es_CO',
        title: 'Carpintería JJ | Muebles a Medida en Medellín',
        description: SEO.description,
        siteName: 'Carpintería JJ',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Carpintería JJ – Muebles a medida en Medellín, Colombia' }],
        url: SEO.url,
    },
    alternates: { canonical: SEO.url },
    robots: { index: true, follow: true },
}

/**
 * Layout maestro de Next.js (RootLayout).
 *
 * Envuelve toda la aplicación, inicializando:
 *  - Variables de fuentes CSS (Cormorant Garamond & DM Sans).
 *  - Configuración global HTML `lang="es"`.
 *  - Metadatos SEO aplicados a la etiqueta `<head>`.
 *  - Smooth scrolling entre secciones.
 *
 * @param children - Elementos React que serán renderizados, típicamente `page.tsx`.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
            <head>
                <JsonLd />
            </head>
            <body className="font-body bg-cream text-wood antialiased">{children}</body>
        </html>
    )
}

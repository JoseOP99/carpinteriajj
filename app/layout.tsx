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
    icons: {
        icon: [
            { url: '/Logo.png', sizes: '32x32', type: 'image/png' },
            { url: '/Logo.png', sizes: '192x192', type: 'image/png' },
        ],
        apple: [
            { url: '/Logo.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcut: '/Logo.png',
    },
    manifest: '/manifest.json',
    openGraph: {
        type: 'website',
        locale: 'es_CO',
        title: 'Carpintería JJ | Muebles a Medida Premium en Medellín',
        description: SEO.description,
        siteName: 'Carpintería JJ',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Carpintería JJ – Muebles a medida en Medellín, Colombia' }],
        url: SEO.url,
    },
    twitter: {
        card: 'summary_large_image',
        title: SEO.title,
        description: SEO.description,
        images: ['/og-image.png'],
    },
    alternates: { canonical: SEO.url },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
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
import DynamicBackground from '@/components/layout/DynamicBackground'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
            <head>
                <JsonLd />
            </head>
            <body className="font-body bg-cream text-wood antialiased selection:bg-gold/30 selection:text-gold">
                <DynamicBackground />
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    )
}

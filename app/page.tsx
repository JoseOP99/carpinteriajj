import dynamic from 'next/dynamic'
import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'

// Lazy load sections below-the-fold para optimizar LCP/FCP
const GallerySection = dynamic(() => import('@/components/sections/GallerySection'), {
    loading: () => (
        <section className="py-24 md:py-36 bg-cream-warm" aria-label="Cargando galería">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="h-8 w-48 bg-cream-dark/30 rounded mx-auto animate-pulse" />
            </div>
        </section>
    ),
})

const InspirationSection = dynamic(() => import('@/components/sections/InspirationSection'), {
    loading: () => (
        <section className="py-24 md:py-36 bg-cream" aria-label="Cargando inspiración">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="h-8 w-48 bg-cream-dark/30 rounded mx-auto animate-pulse" />
            </div>
        </section>
    ),
})

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
    loading: () => (
        <section className="py-24 md:py-36" aria-label="Cargando contacto">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="h-8 w-48 bg-cream-dark/30 rounded mx-auto animate-pulse" />
            </div>
        </section>
    ),
})

const Footer = dynamic(() => import('@/components/layout/Footer'))
const WhatsAppButton = dynamic(() => import('@/components/ui/WhatsAppButton'), { ssr: false })

/**
 * HomePage — Punto de entrada de la landing page de Carpintería JJ.
 *
 * Optimizaciones:
 * - Componentes above-the-fold (Header, Hero, About, Services) cargan de inmediato
 * - Componentes below-the-fold (Gallery, Inspiration, Contact, Footer) son dynamic imports
 * - WhatsAppButton es client-only (no SSR) para reducir hydration cost
 */
export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <GallerySection />
                <InspirationSection />
                <ContactSection />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    )
}

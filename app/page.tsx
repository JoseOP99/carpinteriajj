import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import GallerySection from '@/components/sections/GallerySection'
import InspirationSection from '@/components/sections/InspirationSection'
import ContactSection from '@/components/sections/ContactSection'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

/**
 * HomePage — Punto de entrada de la landing page de Carpintería JJ.
 * Solo importa y ensambla secciones. Cero lógica de UI aquí.
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

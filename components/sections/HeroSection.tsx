'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MessageCircle, ChevronDown } from 'lucide-react'
import { WHATSAPP_URL, COMPANY_INFO } from '@/lib/constants'

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
}

/**
 * `HeroSection`
 *
 * Sección principal (*Above the Fold*) a pantalla completa.
 *
 * **Características:**
 * - Utiliza una imagen de fondo de alto rendimiento (`next/image` con `priority`).
 * - Incorpora overlay dinámico y texturas sutiles de madera mediante CSS puré.
 * - Animaciones orquestadas (Stagger) mediante `framer-motion`.
 * - Incluye CTAs clave hacia WhatsApp y Galería.
 *
 * @component
 * @returns React.JSX.Element
 */
export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 md:pb-24 pt-32"
            aria-label="Sección principal de Carpintería JJ"
        >
            {/* Background Image */}
            <Image
                src="/hero-bg.png"
                alt="Cocina integral de lujo fabricada a medida por Carpintería JJ en Medellín, Colombia"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
            />

            {/* Overlay Extra Oscuro */}
            <div className="absolute inset-0 bg-black/80" />

            {/* Textura vertical sutil */}
            <div
                className="absolute inset-0 wood-texture opacity-40 mix-blend-overlay"
                style={{
                    backgroundImage:
                        'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(196,132,58,0.04) 2px, rgba(196,132,58,0.04) 4px)',
                }}
                aria-hidden="true"
            />

            {/* Contenido */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center md:items-start gap-4 max-w-3xl text-center md:text-left mx-auto md:mx-0"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants}>
                        <span className="section-badge text-xs bg-wood-dark/50 backdrop-blur-md border-gold/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden="true" />
                            {COMPANY_INFO.city} · Muebles a Medida
                        </span>
                    </motion.div>

                    {/* H1 */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mt-2"
                    >
                        Donde la madera <br className="hidden sm:block" />
                        <span className="text-gradient-wood">se convierte en arte</span>
                    </motion.h1>

                    {/* Descripción */}
                    <motion.p
                        variants={itemVariants}
                        className="font-body text-base sm:text-lg text-cream/90 max-w-xl leading-relaxed mt-2"
                    >
                        Más de <span className="text-gold font-semibold">{COMPANY_INFO.experience}</span> transformando hogares en{' '}
                        <span className="text-gold font-semibold">{COMPANY_INFO.city}</span>. Madera sólida, MDF y aglomerados de alta calidad. {COMPANY_INFO.projects} que hablan por nosotros.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto"
                    >
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp w-full sm:w-auto justify-center text-base px-8 py-4 rounded-xl shadow-lg shadow-green-900/30"
                            aria-label="Cotizar por WhatsApp con Carpintería JJ"
                        >
                            <MessageCircle size={20} aria-hidden="true" />
                            Cotizar por WhatsApp
                        </a>
                        <a
                            href="#galeria"
                            className="btn-outline w-full sm:w-auto justify-center text-cream border-cream/50 hover:bg-cream/10 px-8 py-4 rounded-xl text-base bg-wood-dark/30 backdrop-blur-sm"
                            aria-label="Ver proyectos de Carpintería JJ"
                        >
                            Ver Proyectos
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Flecha animada hacia abajo */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
            >
                <ChevronDown size={32} className="text-cream/50" />
            </motion.div>
        </section>
    )
}

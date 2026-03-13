'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, Star } from 'lucide-react'
import { WHATSAPP_URL, COMPANY_INFO } from '@/lib/constants'

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
}

/**
 * `HeroSection`
 *
 * Sección principal (*Above the Fold*) a pantalla completa.
 * El fondo negro/oscuro es manejado por `DynamicBackground` en el layout.
 *
 * @component
 * @returns React.JSX.Element
 */
export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 md:pb-28 pt-32"
            aria-label="Sección principal de Carpintería JJ"
        >
            {/* Overlay negro para garantizar legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

            {/* Contenido */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center md:items-start gap-5 max-w-3xl text-center md:text-left mx-auto md:mx-0"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-widest uppercase text-gold border border-gold/40 rounded-full px-4 py-1.5 bg-black/30 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden="true" />
                            {COMPANY_INFO.city} · Muebles a Medida
                        </span>
                    </motion.div>

                    {/* H1 */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mt-1"
                    >
                        Donde la madera{' '}
                        <br className="hidden sm:block" />
                        <span className="text-gradient-wood">se convierte en arte</span>
                    </motion.h1>

                    {/* Descripción */}
                    <motion.p
                        variants={itemVariants}
                        className="font-body text-base sm:text-lg text-white/80 max-w-xl leading-relaxed"
                    >
                        Más de{' '}
                        <span className="text-gold font-semibold">{COMPANY_INFO.experience}</span>{' '}
                        transformando hogares en{' '}
                        <span className="text-gold font-semibold">{COMPANY_INFO.city}</span>.
                        Madera sólida, MDF y aglomerados de alta calidad.{' '}
                        {COMPANY_INFO.projects} que hablan por nosotros.
                    </motion.p>

                    {/* Rating social proof */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-2"
                    >
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className="text-gold fill-gold" aria-hidden="true" />
                            ))}
                        </div>
                        <span className="font-body text-sm text-white/70">
                            +200 familias satisfechas en Medellín
                        </span>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto"
                    >
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp w-full sm:w-auto justify-center text-base px-8 py-4 rounded-xl shadow-xl shadow-green-900/30 hover:shadow-green-900/50"
                            aria-label="Cotizar por WhatsApp con Carpintería JJ"
                        >
                            <MessageCircle size={20} aria-hidden="true" />
                            Cotizar por WhatsApp
                        </a>
                        <a
                            href="#galeria"
                            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 hover:border-white/60 px-8 py-4 rounded-xl text-base bg-white/5 backdrop-blur-sm transition-all duration-300 font-body font-medium"
                            aria-label="Ver proyectos de Carpintería JJ"
                        >
                            Ver Proyectos
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Flecha animada hacia abajo */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
            >
                <span className="font-body text-[10px] tracking-widest uppercase text-white/40">Explorar</span>
                <ChevronDown size={28} className="text-white/50" />
            </motion.div>
        </section>
    )
}

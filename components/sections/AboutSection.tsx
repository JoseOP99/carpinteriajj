'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Award, Hammer } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

const VALUES = [
    `${COMPANY_INFO.experience} de experiencia en Medellín`,
    'Madera sólida, MDF y aglomerados de alta calidad',
    'Diseño personalizado — ningún proyecto igual',
    'Tiempos de entrega cumplidos',
    'Garantía en materiales y acabados',
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
}

/**
 * `AboutSection`
 *
 * Sección "Sobre Nosotros" que introduce a la marca y a la fundadora/experiencia.
 *
 * **Características:**
 * - Layout grid asimétrico (55% texto, 45% composiciones de imagen).
 * - Uso intensivo de *framer-motion* para revelado progresivo (Stagger Children).
 * - Elementos flotantes decorativos para métricas (experiencia, proyectos).
 *
 * @component
 * @returns React.JSX.Element
 */
export default function AboutSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="nosotros" className="py-20 md:py-32 bg-cream-warm" aria-label="Sobre Carpintería JJ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header de sección */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-badge mb-4">Nuestra Historia</span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-wood mt-4">
                        Artesanos de{' '}
                        <span className="text-gradient-wood">corazón</span>
                    </h2>
                </motion.div>

                {/* Grid asimétrico: texto 55% / imagen 45% */}
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
                    {/* Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="gold-line">
                            <h3 className="font-display text-2xl text-wood font-bold mb-4">La historia de José Ortiz</h3>
                            <p className="font-body text-lg text-wood/80 leading-relaxed mb-6">
                                Detrás de <strong className="text-wood font-semibold">Carpintería JJ</strong> está el talento y dedicación de <strong>José Ortiz</strong>.
                                Nacido en <span className="text-wood font-semibold">Tuchín, Córdoba</span> —cuna del emblemático sombrero vueltiao—, José lleva en la sangre el arte de crear con las manos.
                            </p>
                            <p className="font-body text-base text-wood/70 leading-relaxed mb-8">
                                Con más de <span className="text-gold font-semibold">25 años</span> de trayectoria como carpintero independiente,
                                ha consolidado su taller en el barrio <strong>Manrique</strong>. Su maestría no solo ha transformado hogares en Medellín,
                                sino que ha sido solicitada para proyectos exclusivos en <strong>Córdoba, Cartagena, Pereira y otras ciudades</strong> de Colombia.
                            </p>
                        </div>

                        {/* Valores con CheckCircle */}
                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            className="space-y-3"
                            aria-label="Valores y características de Carpintería JJ"
                        >
                            {VALUES.map((value) => (
                                <motion.li
                                    key={value}
                                    variants={itemVariants}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle size={20} className="text-gold flex-shrink-0" aria-hidden="true" />
                                    <span className="font-body text-wood/80">{value}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Imagen / Placeholder con cards flotantes */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="order-1 lg:order-2 relative"
                    >
                        {/* Imagen real del taller con next/image */}
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                            <Image
                                src="/taller.png"
                                alt="José Ortiz, maestro ebanista de Carpintería JJ en su taller de Medellín"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                quality={85}
                            />
                            {/* Overlay decorativo */}
                            <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/50 to-transparent" />
                        </div>

                        {/* Card flotante inferior-izquierda: 25+ años */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute -bottom-5 -left-5 bg-cream rounded-xl p-4 shadow-xl border border-cream-dark"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                                    <Award size={20} className="text-gold" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="font-display text-2xl font-bold text-wood leading-none">25+</p>
                                    <p className="font-body text-xs text-wood/60">Años de experiencia</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card flotante superior-derecha: 500+ proyectos */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="absolute -top-5 -right-5 bg-wood text-cream rounded-xl p-4 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                                    <Hammer size={20} className="text-gold" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="font-display text-2xl font-bold text-cream leading-none">500+</p>
                                    <p className="font-body text-xs text-cream/60">Proyectos terminados</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

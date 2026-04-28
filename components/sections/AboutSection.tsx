'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Award, Hammer, Heart, Star, MapPin } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

const VALUES = [
    `${COMPANY_INFO.experience} de experiencia en Medellín`,
    'Madera sólida, MDF y aglomerados de alta calidad',
    'Diseño personalizado — ningún proyecto igual',
    'Tiempos de entrega cumplidos',
    'Garantía en materiales y acabados',
]

// Trabajos destacados (rota imágenes hero)
const WORK_IMAGES = [
    { src: '/hero.png', alt: 'Cocina integral artesanal en Medellín' },
    { src: '/hero (2).png', alt: 'Mueble a medida elegante de Carpintería JJ' },
    { src: '/hero (3).png', alt: 'Closet personalizado en madera premium' },
    { src: '/hero (4).png', alt: 'Detalle de carpintería artesanal' },
    { src: '/hero (5).png', alt: 'Diseño de interiores con muebles a medida' },
    { src: '/hero (6).png', alt: 'Trabajo de carpintería profesional' },
    { src: '/hero (7).png', alt: 'Muebles premium para hogares' },
    { src: '/hero (8).png', alt: 'Acabados de calidad Carpintería JJ' },
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
 * `AboutSection` - Versión Premium con carrusel de trabajos y badges animados
 */
export default function AboutSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [currentImage, setCurrentImage] = useState(0)

    // Crossfade automático entre trabajos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % WORK_IMAGES.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section
            id="nosotros"
            className="relative py-24 md:py-36 overflow-hidden"
            aria-label="Sobre Carpintería JJ"
        >
            {/* Background con mesh gradient cálido */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-warm via-cream to-cream-light" />
            <div className="absolute inset-0 mesh-gradient opacity-60" />
            <div className="absolute inset-0 grid-pattern opacity-30" />

            {/* Orbes decorativos */}
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold/15 blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-wood/10 blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header de sección */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="section-badge mb-4 inline-block"
                    >
                        <Heart size={12} className="inline mr-1" /> Nuestra Historia
                    </motion.span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-wood-dark mt-4">
                        Artesanos de{' '}
                        <span className="text-shimmer-gold">corazón</span>
                    </h2>
                    <div className="section-divider w-32 mx-auto my-6" />
                    <p className="font-body text-wood/70 max-w-2xl mx-auto mt-4 text-base md:text-lg">
                        Más de dos décadas creando piezas únicas con{' '}
                        <span className="text-gold font-semibold">pasión y dedicación</span>
                    </p>
                </motion.div>

                {/* Grid asimétrico: texto 55% / carrusel 45% */}
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
                    {/* Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="gold-line">
                            <h3 className="font-display text-2xl md:text-3xl text-wood-dark font-bold mb-4">
                                Tradición artesanal en cada pieza
                            </h3>
                            <p className="font-body text-lg text-wood/85 leading-relaxed mb-6">
                                Detrás de <strong className="text-gold font-semibold">Carpintería JJ</strong> hay un equipo de
                                maestros ebanistas con raíces en la tradición artesanal colombiana. Llevamos en la sangre el
                                arte de crear con las manos, transformando madera en piezas únicas.
                            </p>
                            <p className="font-body text-base text-wood/70 leading-relaxed mb-8">
                                Con más de <span className="text-gold font-semibold">25 años de trayectoria</span>,
                                hemos consolidado nuestro taller en el barrio <strong className="text-wood-dark">Manrique, Medellín</strong>.
                                Nuestra maestría ha transformado hogares no solo en Medellín, sino también en
                                <strong className="text-wood-dark"> Córdoba, Cartagena, Pereira y otras ciudades</strong> de Colombia.
                            </p>
                        </div>

                        {/* Valores con CheckCircle - Animación stagger */}
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
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-7 h-7 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/25 transition-colors duration-300">
                                        <CheckCircle size={16} className="text-gold" aria-hidden="true" />
                                    </div>
                                    <span className="font-body text-wood/80 group-hover:text-wood-dark transition-colors">
                                        {value}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Carrusel de trabajos con cards animadas */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="order-1 lg:order-2 relative"
                    >
                        {/* Galería de trabajos con crossfade */}
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-wood/30 group">
                            {/* Border glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 via-wood/20 to-gold/30 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative rounded-3xl overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImage}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                                        className="relative w-full aspect-[4/3]"
                                    >
                                        <Image
                                            src={WORK_IMAGES[currentImage].src}
                                            alt={WORK_IMAGES[currentImage].alt}
                                            fill
                                            className="object-cover object-center"
                                            sizes="(max-width: 1024px) 100vw, 45vw"
                                            quality={85}
                                            priority={currentImage === 0}
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Overlay decorativo */}
                                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/60 via-transparent to-transparent pointer-events-none" />

                                {/* Indicadores del carrusel */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                    {WORK_IMAGES.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImage(idx)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                                idx === currentImage
                                                    ? 'w-8 bg-gold'
                                                    : 'w-1.5 bg-white/40 hover:bg-white/60'
                                            }`}
                                            aria-label={`Ver trabajo ${idx + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Label del trabajo */}
                                <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                                    <span className="bg-black/40 backdrop-blur-md text-white text-xs font-body font-semibold px-3 py-1.5 rounded-full border border-white/20">
                                        Nuestros Trabajos
                                    </span>
                                    <span className="bg-gold/90 backdrop-blur-md text-white text-xs font-body font-bold px-3 py-1.5 rounded-full shadow-lg">
                                        {currentImage + 1} / {WORK_IMAGES.length}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Card flotante: 25+ años (con float animation) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-cream-dark/50 z-20"
                            style={{
                                animation: 'glassFloat 3s ease-in-out infinite',
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/30">
                                    <Award size={22} className="text-white" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="font-display text-3xl font-bold text-wood-dark leading-none">25+</p>
                                    <p className="font-body text-xs text-wood/60 mt-1">Años de experiencia</p>
                                </div>
                            </div>
                            {/* Badge pulsante */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold rounded-full animate-ping" />
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold rounded-full" />
                        </motion.div>

                        {/* Card flotante: 500+ proyectos (con float animation reverse) */}
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.7, type: 'spring' }}
                            whileHover={{ scale: 1.05, y: 5 }}
                            className="absolute -top-6 -right-6 bg-wood-dark text-cream rounded-2xl p-5 shadow-2xl shadow-wood/40 z-20 border border-gold/30"
                            style={{
                                animation: 'glassFloat 3s ease-in-out infinite reverse',
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gold/25 flex items-center justify-center backdrop-blur-sm">
                                    <Hammer size={22} className="text-gold" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="font-display text-3xl font-bold text-cream leading-none">+500</p>
                                    <p className="font-body text-xs text-cream/60 mt-1">Proyectos terminados</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card flotante derecha: Rating con stars */}
                        <motion.div
                            initial={{ opacity: 0, x: 30, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.9, type: 'spring' }}
                            whileHover={{ scale: 1.05, x: -5 }}
                            className="absolute top-1/2 -right-4 bg-cream-warm/95 backdrop-blur-xl rounded-2xl p-3 shadow-xl border border-gold/30 hidden sm:block z-20"
                        >
                            <div className="flex items-center gap-1 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} className="text-gold fill-gold" />
                                ))}
                            </div>
                            <p className="font-display text-lg font-bold text-wood-dark leading-none">5.0</p>
                            <p className="font-body text-[10px] text-wood/60">+200 familias</p>
                        </motion.div>

                        {/* Card flotante izquierda: Ubicación */}
                        <motion.div
                            initial={{ opacity: 0, x: -30, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 1, type: 'spring' }}
                            whileHover={{ scale: 1.05, x: 5 }}
                            className="absolute top-1/4 -left-4 bg-gold/90 backdrop-blur-xl rounded-2xl p-3 shadow-xl text-white hidden sm:block z-20"
                        >
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-white" />
                                <div>
                                    <p className="font-body text-[10px] uppercase tracking-wider opacity-80">Taller</p>
                                    <p className="font-body text-xs font-bold">Manrique, Medellín</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

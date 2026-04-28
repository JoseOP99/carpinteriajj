'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, ChevronDown, Star, Sparkles, Award, Users, Hammer } from 'lucide-react'
import { WHATSAPP_URL, COMPANY_INFO } from '@/lib/constants'
import { useRef } from 'react'

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
    },
}

const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: 'backOut' },
    },
}

/**
 * `HeroSection` - Versión Premium con animaciones dramáticas
 */
export default function HeroSection() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 200])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-20 md:pb-32 pt-32"
            aria-label="Sección principal de Carpintería JJ"
        >
            {/* Aurora overlay decorativo */}
            <div className="aurora-overlay" />

            {/* Overlay gradient para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40" />

            {/* Decoración SVG: línea diagonal premium */}
            <svg
                className="absolute top-1/4 right-0 w-48 h-48 opacity-20 pointer-events-none"
                viewBox="0 0 200 200"
                aria-hidden="true"
            >
                <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="url(#goldGradient)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0, rotate: 0 }}
                    animate={{ pathLength: 1, rotate: 360 }}
                    transition={{ pathLength: { duration: 2 }, rotate: { duration: 30, repeat: Infinity, ease: 'linear' } }}
                />
                <defs>
                    <linearGradient id="goldGradient">
                        <stop offset="0%" stopColor="#C4843A" />
                        <stop offset="100%" stopColor="#D4A060" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Contenido principal con parallax */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center md:items-start gap-6 max-w-4xl text-center md:text-left mx-auto md:mx-0"
                >
                    {/* Badge Premium con glow */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-widest uppercase text-gold border border-gold/50 rounded-full px-5 py-2.5 bg-white/5 backdrop-blur-xl glow-border">
                            <Sparkles size={14} className="text-gold animate-pulse" aria-hidden="true" />
                            {COMPANY_INFO.city} · Muebles a Medida Artesanales
                        </span>
                    </motion.div>

                    {/* H1 con efecto shimmer dorado */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.95] mt-2"
                    >
                        <span className="block">Carpintería</span>
                        <span className="block text-shimmer-gold">Artesanal</span>
                        <span className="block text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-light italic">
                            Premium en Medellín
                        </span>
                    </motion.h1>

                    {/* Línea decorativa */}
                    <motion.div
                        variants={itemVariants}
                        className="h-px w-32 bg-gradient-to-r from-gold via-gold-light to-transparent"
                    />

                    {/* Descripción con highlights */}
                    <motion.p
                        variants={itemVariants}
                        className="font-body text-base sm:text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed"
                    >
                        Más de{' '}
                        <span className="text-gold font-semibold">{COMPANY_INFO.experience}</span>{' '}
                        transformando hogares en{' '}
                        <span className="text-gold font-semibold">{COMPANY_INFO.city}</span>.
                        Madera sólida, MDF y aglomerados de alta calidad.{' '}
                        <span className="text-gold-light">{COMPANY_INFO.projects}</span> que hablan por nosotros.
                    </motion.p>

                    {/* Stats Cards Glassmorphic Flotantes */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-md sm:max-w-2xl mt-2"
                    >
                        {[
                            { icon: Award, value: '+25', label: 'Años exp.' },
                            { icon: Hammer, value: '+500', label: 'Proyectos' },
                            { icon: Users, value: '+200', label: 'Familias' },
                        ].map((stat, i) => {
                            const Icon = stat.icon
                            return (
                                <motion.div
                                    key={stat.label}
                                    variants={statsVariants}
                                    custom={i}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="flex flex-col items-center gap-1 p-3 sm:p-4 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/15 hover:border-gold/50 transition-all duration-300 hover-glow-gold"
                                >
                                    <Icon size={20} className="text-gold" aria-hidden="true" />
                                    <span className="font-display text-xl sm:text-2xl font-bold text-white">
                                        {stat.value}
                                    </span>
                                    <span className="font-body text-[10px] sm:text-xs uppercase tracking-wider text-white/60">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    {/* Rating social proof con stars animadas */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-3 mt-2"
                    >
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 1.5 + i * 0.1, type: 'spring', stiffness: 200 }}
                                >
                                    <Star size={16} className="text-gold fill-gold drop-shadow-[0_0_8px_rgba(196,132,58,0.5)]" aria-hidden="true" />
                                </motion.div>
                            ))}
                        </div>
                        <span className="font-body text-sm text-white/70">
                            <strong className="text-white">5.0</strong> · +200 familias satisfechas
                        </span>
                    </motion.div>

                    {/* CTAs Premium con efectos magnéticos */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-magnetic relative inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white font-body font-bold px-8 py-4 rounded-xl shadow-2xl shadow-green-900/40 hover:shadow-green-500/30 transition-all duration-300 group overflow-hidden"
                            aria-label="Cotizar por WhatsApp con Carpintería JJ"
                        >
                            <MessageCircle size={22} aria-hidden="true" className="relative z-10 group-hover:rotate-12 transition-transform" />
                            <span className="relative z-10">Cotizar Ahora</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            href="#galeria"
                            className="btn-magnetic relative inline-flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-white/40 text-white hover:border-gold px-8 py-4 rounded-xl text-base bg-white/5 backdrop-blur-xl transition-all duration-300 font-body font-bold hover:bg-white/10 group overflow-hidden"
                            aria-label="Ver proyectos de Carpintería JJ"
                        >
                            <span className="relative z-10">Ver Portafolio</span>
                            <ChevronDown size={20} aria-hidden="true" className="relative z-10 group-hover:translate-y-1 transition-transform" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Indicador scroll animado */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                aria-hidden="true"
            >
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1">Descubrir</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-1 h-2 rounded-full bg-gold"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

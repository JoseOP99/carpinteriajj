'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Facebook, Instagram, MessageCircle, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'
import { WHATSAPP_URL, SOCIAL_LINKS, SCHEDULE, COMPANY_INFO } from '@/lib/constants'

const HERO_IMAGES = [
    '/hero.png',
    '/hero (2).png',
    '/hero (3).png',
    '/hero (4).png',
    '/hero (5).png',
    '/hero (6).png',
    '/hero (7).png',
    '/hero (8).png',
]

/**
 * `ContactSection`
 *
 * Sección de contacto con fondo semi-transparente sobre las imágenes hero en transición.
 */
export default function ContactSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    // Crossfade del fondo hero
    const [currentIndex, setCurrentIndex] = useState(3) // Empieza en una diferente al hero principal
    const [nextIndex, setNextIndex] = useState(4)
    const [transitioning, setTransitioning] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            const next = (currentIndex + 1) % HERO_IMAGES.length
            setNextIndex(next)
            setTransitioning(true)
            const swapTimer = setTimeout(() => {
                setCurrentIndex(next)
                setTransitioning(false)
            }, 2000)
            return () => clearTimeout(swapTimer)
        }, 7000)
        return () => clearInterval(timer)
    }, [currentIndex])

    return (
        <section
            id="contacto"
            className="relative py-16 md:py-24 text-cream overflow-hidden"
            aria-label="Contacto y ubicación de Carpintería JJ"
        >
            {/* Fondo: imágenes hero en crossfade */}
            <div className="absolute inset-0 z-0">
                {/* Imagen base */}
                <div className="absolute inset-0">
                    <Image
                        src={HERO_IMAGES[currentIndex]}
                        alt="Fondo contacto"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        quality={60}
                        style={{ opacity: 0.35 }}
                    />
                </div>
                {/* Imagen siguiente en crossfade */}
                {transitioning && (
                    <motion.div
                        key={HERO_IMAGES[nextIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.35 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={HERO_IMAGES[nextIndex]}
                            alt="Fondo contacto"
                            fill
                            className="object-cover"
                            sizes="100vw"
                            quality={60}
                        />
                    </motion.div>
                )}
                {/* Overlay madera semi-transparente — tono cálido */}
                <div className="absolute inset-0 bg-wood/80" />
            </div>

            {/* Contenido */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

                    {/* Columna Info */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -28 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-widest uppercase text-gold border border-gold/40 rounded-full px-4 py-1.5 mb-5">
                            Contáctanos
                        </span>

                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4 leading-tight">
                            ¿Listo para transformar
                            <br />
                            <span className="text-gradient-wood">tu espacio?</span>
                        </h2>

                        <p className="font-body text-cream/70 text-base mb-7 leading-relaxed">
                            Sin formularios, sin esperas.{' '}
                            <strong className="text-gold">Respondemos en menos de 2 horas.</strong>
                        </p>

                        {/* WhatsApp CTA */}
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-body font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-900/30 mb-5"
                            aria-label="Solicitar información por WhatsApp"
                        >
                            <MessageCircle size={20} aria-hidden="true" />
                            Solicitar información por WhatsApp
                        </a>

                        {/* Redes Sociales */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-7">
                            <a
                                href={SOCIAL_LINKS.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 border border-cream/25 text-cream hover:bg-cream/10 px-5 py-3 rounded-xl text-sm font-body font-medium transition-all duration-300"
                                aria-label="Visitar Facebook de Carpintería JJ"
                            >
                                <Facebook size={16} aria-hidden="true" />
                                Facebook
                            </a>
                            <a
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 border border-cream/25 text-cream hover:bg-cream/10 px-5 py-3 rounded-xl text-sm font-body font-medium transition-all duration-300"
                                aria-label="Visitar Instagram de Carpintería JJ"
                            >
                                <Instagram size={16} aria-hidden="true" />
                                Instagram
                            </a>
                        </div>

                        {/* Dirección y Horarios */}
                        <div className="space-y-3 border-t border-cream/10 pt-5">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                                <div>
                                    <p className="font-body text-sm font-semibold text-cream/90">Dirección</p>
                                    <p className="font-body text-sm text-cream/55">{COMPANY_INFO.address}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock size={18} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                                <div>
                                    <p className="font-body text-sm font-semibold text-cream/90">Horarios de atención</p>
                                    <p className="font-body text-sm text-cream/55">{SCHEDULE.weekdays}</p>
                                    <p className="font-body text-sm text-cream/55">{SCHEDULE.saturday}</p>
                                    <p className="font-body text-sm text-cream/35">{SCHEDULE.sunday}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Columna Mapa */}
                    <motion.div
                        initial={{ opacity: 0, x: 28 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="rounded-2xl overflow-hidden border border-cream/15 shadow-2xl">
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Carpinter%C3%ADa%20JJ,%20Cl%2070A%20%23%2043-32,%20Medell%C3%ADn,%20Antioquia+(Carpinter%C3%ADa%20JJ)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                                width="100%"
                                height="380"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Carpintería JJ en Medellín, Antioquia, Colombia"
                                aria-label="Mapa de ubicación de Carpintería JJ en Medellín"
                            />
                        </div>
                        <p className="font-body text-xs text-cream/40 text-center mt-2.5">
                            Medellín, Antioquia, Colombia · Atendemos toda el área metropolitana
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

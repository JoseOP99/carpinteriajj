'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Facebook, Instagram, MessageCircle, MapPin, Clock } from 'lucide-react'
import { WHATSAPP_URL, SOCIAL_LINKS, SCHEDULE, COMPANY_INFO } from '@/lib/constants'

/**
 * `ContactSection`
 *
 * Sección de contacto final (Footer-pre). Combina la información clave de contacto
 * (dirección, horarios, WhatsApp CTA) junto con un Google Maps incrustado.
 *
 * **Características:**
 * - Layout asimétrico 2 columnas responsivo.
 * - Mapa interactivo perezoso (`loading="lazy"`).
 * - Animaciones de entrada condicionadas por el scroll (Intersection Observer).
 *
 * @component
 * @returns React.JSX.Element
 */
export default function ContactSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="contacto"
            className="py-20 md:py-32 bg-wood text-cream"
            aria-label="Contacto y ubicación de Carpintería JJ"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Columna Info */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="inline-flex items-center gap-2 text-sm font-body font-medium tracking-widest uppercase text-gold border border-gold/40 rounded-full px-4 py-1.5 mb-6">
                            Contáctanos
                        </span>

                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4 leading-tight">
                            ¿Listo para transformar
                            <br />
                            <span className="text-gradient-wood">tu espacio?</span>
                        </h2>

                        <p className="font-body text-cream/70 text-lg mb-8 leading-relaxed">
                            Sin formularios, sin esperas.{' '}
                            <strong className="text-gold">Respondemos en menos de 2 horas.</strong>
                        </p>

                        {/* WhatsApp CTA */}
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-body font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-900/30 mb-6"
                            aria-label="Solicitar información por WhatsApp"
                        >
                            <MessageCircle size={22} aria-hidden="true" />
                            Solicitar información por WhatsApp
                        </a>

                        {/* Redes Sociales */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-8">
                            <a
                                href={SOCIAL_LINKS.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 btn-outline border-cream/30 text-cream hover:bg-cream/10 rounded-xl py-3 justify-center"
                                aria-label="Visitar Facebook de Carpintería JJ"
                            >
                                <Facebook size={18} aria-hidden="true" />
                                Facebook
                            </a>
                            <a
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 btn-outline border-cream/30 text-cream hover:bg-cream/10 rounded-xl py-3 justify-center"
                                aria-label="Visitar Instagram de Carpintería JJ"
                            >
                                <Instagram size={18} aria-hidden="true" />
                                Instagram
                            </a>
                        </div>

                        {/* Dirección y Horarios */}
                        <div className="space-y-4 border-t border-cream/10 pt-6">
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                                <div>
                                    <p className="font-body text-sm font-semibold text-cream/90">Dirección</p>
                                    <p className="font-body text-sm text-cream/60">{COMPANY_INFO.address}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock size={20} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                                <div>
                                    <p className="font-body text-sm font-semibold text-cream/90">Horarios de atención</p>
                                    <p className="font-body text-sm text-cream/60">{SCHEDULE.weekdays}</p>
                                    <p className="font-body text-sm text-cream/60">{SCHEDULE.saturday}</p>
                                    <p className="font-body text-sm text-cream/40">{SCHEDULE.sunday}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Columna Mapa */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="rounded-2xl overflow-hidden border border-cream/10 shadow-2xl">
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Carpinter%C3%ADa%20JJ,%20Cl%2070A%20%23%2043-32,%20Medell%C3%ADn,%20Antioquia+(Carpinter%C3%ADa%20JJ)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                                width="100%"
                                height="420"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Carpintería JJ en Medellín, Antioquia, Colombia"
                                aria-label="Mapa de ubicación de Carpintería JJ en Medellín"
                            />
                        </div>
                        <p className="font-body text-xs text-cream/40 text-center mt-3">
                            Medellín, Antioquia, Colombia · Atendemos toda el área metropolitana
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

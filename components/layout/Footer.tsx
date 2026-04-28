'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
    Facebook,
    Instagram,
    MessageCircle,
    Clock,
    MapPin,
    Phone,
    Mail,
    ArrowUp,
    Heart,
    Award,
    Hammer
} from 'lucide-react'
import { SOCIAL_LINKS, SCHEDULE, COMPANY_INFO, NAV_LINKS, WHATSAPP_URL } from '@/lib/constants'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-gradient-to-b from-wood-dark via-[#1a1410] to-[#0a0806] text-cream overflow-hidden" role="contentinfo">
            {/* Fondo decorativo: orbes y mesh gradient */}
            <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-wood-warm/10 blur-3xl pointer-events-none" />

            {/* Línea decorativa superior */}
            <div className="relative h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

            {/* Sección CTA superior */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
                        ¿Listo para crear tu{' '}
                        <span className="text-shimmer-gold">proyecto único</span>?
                    </h3>
                    <p className="font-body text-cream/60 max-w-2xl mx-auto mb-6">
                        Contáctanos hoy y recibe una asesoría personalizada sin costo.
                    </p>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-body font-bold px-8 py-4 rounded-xl shadow-2xl shadow-green-900/30 hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300 group"
                        aria-label="Cotizar por WhatsApp"
                    >
                        <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                        Cotizar por WhatsApp
                    </a>
                </motion.div>

                {/* Divider con efecto */}
                <div className="section-divider w-32 mx-auto mb-12" />

                {/* Grid principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Columna 1 — Marca con descripción */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-1"
                    >
                        <div className="flex items-center gap-3 mb-4 group">
                            <div className="relative">
                                <Image
                                    src="/Logo.png"
                                    alt="Logo Carpintería JJ"
                                    width={48}
                                    height={48}
                                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                                />
                                <div className="absolute inset-0 bg-gold/30 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <span className="font-display text-2xl text-shimmer-gold font-bold">
                                Carpintería JJ
                            </span>
                        </div>

                        <p className="font-body text-sm leading-relaxed text-cream/65 mb-5">
                            Transformamos espacios con muebles a medida de calidad premium.
                            <span className="text-gold font-semibold"> +25 años</span> de experiencia
                            en Medellín y toda Colombia.
                        </p>

                        {/* Stats compactos */}
                        <div className="flex gap-4 mb-5">
                            <div className="flex items-center gap-2">
                                <Award size={16} className="text-gold" />
                                <span className="font-body text-xs text-cream/70">+500 Proyectos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Heart size={16} className="text-gold" />
                                <span className="font-body text-xs text-cream/70">+200 Familias</span>
                            </div>
                        </div>

                        {/* Redes sociales premium */}
                        <div className="flex gap-2.5">
                            <motion.a
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-green-500/15 hover:bg-green-500 text-green-400 hover:text-white rounded-xl transition-all duration-300 backdrop-blur-sm border border-green-500/20 hover:border-green-500"
                                aria-label="WhatsApp de Carpintería JJ"
                            >
                                <MessageCircle size={18} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-gradient-to-br from-purple-500/15 to-pink-500/15 hover:from-purple-500 hover:to-pink-500 text-pink-400 hover:text-white rounded-xl transition-all duration-300 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500"
                                aria-label="Instagram de Carpintería JJ"
                            >
                                <Instagram size={18} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href={SOCIAL_LINKS.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-blue-500/15 hover:bg-blue-500 text-blue-400 hover:text-white rounded-xl transition-all duration-300 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500"
                                aria-label="Facebook de Carpintería JJ"
                            >
                                <Facebook size={18} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Columna 2 — Navegación */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="font-display text-cream text-lg font-bold mb-5 flex items-center gap-2">
                            <span className="w-1 h-5 bg-gradient-to-b from-gold to-gold-dark rounded-full" />
                            Navegación
                        </h4>
                        <nav aria-label="Navegación del pie de página">
                            <ul className="space-y-2.5">
                                {NAV_LINKS.map(({ label, href }) => (
                                    <li key={href}>
                                        <a
                                            href={href}
                                            className="font-body text-sm text-cream/60 hover:text-gold transition-all duration-300 flex items-center gap-2 group"
                                        >
                                            <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300" />
                                            <span>{label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>

                    {/* Columna 3 — Servicios */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="font-display text-cream text-lg font-bold mb-5 flex items-center gap-2">
                            <span className="w-1 h-5 bg-gradient-to-b from-gold to-gold-dark rounded-full" />
                            Servicios
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                'Cocinas Integrales',
                                'Closets Personalizados',
                                'Puertas y Ventanas',
                                'Muebles a Medida',
                                'Salas Entretenimiento',
                                'Camas y Dormitorios',
                            ].map((service) => (
                                <li key={service}>
                                    <a
                                        href="#servicios"
                                        className="font-body text-sm text-cream/60 hover:text-gold transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <Hammer size={12} className="text-gold/50 group-hover:text-gold transition-colors" />
                                        <span>{service}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Columna 4 — Contacto */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h4 className="font-display text-cream text-lg font-bold mb-5 flex items-center gap-2">
                            <span className="w-1 h-5 bg-gradient-to-b from-gold to-gold-dark rounded-full" />
                            Contacto
                        </h4>
                        <div className="space-y-4">
                            {/* Dirección */}
                            <div className="flex items-start gap-3 group">
                                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                                    <MapPin size={16} className="text-gold" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="font-body text-xs font-semibold text-cream/80 mb-0.5">Dirección</p>
                                    <p className="font-body text-xs text-cream/55">{COMPANY_INFO.address}</p>
                                </div>
                            </div>

                            {/* Teléfono */}
                            <a
                                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                                className="flex items-start gap-3 group hover:text-gold transition-colors"
                            >
                                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                                    <Phone size={16} className="text-gold" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="font-body text-xs font-semibold text-cream/80 mb-0.5">Teléfono</p>
                                    <p className="font-body text-xs text-cream/55 group-hover:text-gold transition-colors">
                                        {COMPANY_INFO.phone}
                                    </p>
                                </div>
                            </a>

                            {/* Horarios */}
                            <div className="flex items-start gap-3 group">
                                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                                    <Clock size={16} className="text-gold" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="font-body text-xs font-semibold text-cream/80 mb-0.5">Horarios</p>
                                    <p className="font-body text-xs text-cream/55">{SCHEDULE.weekdays}</p>
                                    <p className="font-body text-xs text-cream/55">{SCHEDULE.saturday}</p>
                                    <p className="font-body text-xs text-cream/35">{SCHEDULE.sunday}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Divider y Copyright */}
                <div className="border-t border-gold/15 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-body text-xs text-cream/45 text-center md:text-left flex items-center gap-2">
                        <span>© {currentYear}</span>
                        <span className="text-gold">Carpintería JJ</span>
                        <span>·</span>
                        <span>Hecho con</span>
                        <Heart size={12} className="text-red-500 fill-red-500 inline" />
                        <span>en Medellín, Colombia</span>
                    </p>
                    <div className="flex items-center gap-4">
                        <p className="font-body text-xs text-cream/35">
                            Todos los derechos reservados
                        </p>
                        {/* Botón scroll to top */}
                        <motion.button
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleScrollTop}
                            className="w-10 h-10 rounded-full bg-gold/15 hover:bg-gold text-gold hover:text-white flex items-center justify-center transition-all duration-300 border border-gold/30 hover:border-gold backdrop-blur-sm"
                            aria-label="Volver arriba"
                        >
                            <ArrowUp size={18} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

'use client'

import Image from 'next/image'
import { Facebook, Instagram, MessageCircle, Clock, MapPin } from 'lucide-react'
import { SOCIAL_LINKS, SCHEDULE, COMPANY_INFO, NAV_LINKS, WHATSAPP_URL } from '@/lib/constants'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#0f0f0f] text-cream/90" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Columna 1 — Marca */}
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <Image src="/Logo.png" alt="Logo Carpintería JJ" width={34} height={34} />
                            <span className="font-display text-xl text-cream font-semibold">Carpintería JJ</span>
                        </div>
                        <p className="font-body text-sm leading-relaxed text-cream/60 max-w-sm mb-4">
                            Más de <strong>25 años</strong> transformando hogares con madera sólida, MDF y aglomerados de alta calidad.
                        </p>
                        <div className="flex gap-2.5">
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                                className="p-2 bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-white rounded-lg transition-all duration-300"
                                aria-label="WhatsApp de Carpintería JJ">
                                <MessageCircle size={16} />
                            </a>
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                                className="p-2 bg-pink-500/20 hover:bg-pink-500 text-pink-400 hover:text-white rounded-lg transition-all duration-300"
                                aria-label="Instagram de Carpintería JJ">
                                <Instagram size={16} />
                            </a>
                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                                className="p-2 bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white rounded-lg transition-all duration-300"
                                aria-label="Facebook de Carpintería JJ">
                                <Facebook size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2 — Navegación */}
                    <div>
                        <h3 className="font-display text-cream text-base font-semibold mb-3">Navegación</h3>
                        <nav aria-label="Navegación del pie de página">
                            <ul className="space-y-1.5">
                                {NAV_LINKS.map(({ label, href }) => (
                                    <li key={href}>
                                        <a href={href} className="font-body text-sm text-cream/50 hover:text-gold transition-colors duration-200">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Columna 3 — Horarios & Dirección */}
                    <div>
                        <h3 className="font-display text-cream text-base font-semibold mb-3">Horarios & Ubicación</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2.5">
                                <Clock size={15} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                                <div>
                                    <p className="font-body text-xs font-semibold text-cream/70 mb-0.5">Horarios de atención</p>
                                    <p className="font-body text-xs text-cream/50">{SCHEDULE.weekdays}</p>
                                    <p className="font-body text-xs text-cream/50">{SCHEDULE.saturday}</p>
                                    <p className="font-body text-xs text-cream/30">{SCHEDULE.sunday}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                                <div>
                                    <p className="font-body text-xs font-semibold text-cream/70 mb-0.5">Dirección</p>
                                    <p className="font-body text-xs text-cream/50">{COMPANY_INFO.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider y Copyright */}
                <div className="border-t border-cream/8 mt-7 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="font-body text-xs text-cream/35 text-center md:text-left">
                        © {currentYear} Carpintería JJ · Medellín, Antioquia, Colombia
                    </p>
                    <p className="font-body text-xs text-cream/25 text-center md:text-right">
                        Diseño y Desarrollo Web Profesional
                    </p>
                </div>
            </div>
        </footer>
    )
}

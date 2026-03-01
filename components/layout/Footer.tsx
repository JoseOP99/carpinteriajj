'use client'

import Image from 'next/image'
import { Facebook, Instagram, MessageCircle, Clock, MapPin, Phone } from 'lucide-react'
import { SOCIAL_LINKS, SCHEDULE, COMPANY_INFO, NAV_LINKS } from '@/lib/constants'

/**
 * `Footer`
 *
 * Pie de página global del sitio (Minimalista).
 *
 * **Características:**
 * - Estructura asimétrica en CSS Grid.
 * - Centraliza branding, redes sociales de acceso rápido y enlaces de navegación semántica.
 * - Muestra el copyright dinámico basado en el año actual.
 *
 * @component
 * @returns React.JSX.Element
 */
export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#111111] text-cream/90" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">
                    {/* Marca */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image src="/Logo.png" alt="Logo Carpintería JJ" width={40} height={40} />
                            <span className="font-display text-2xl text-cream font-semibold">Carpintería JJ</span>
                        </div>
                        <p className="font-body text-sm leading-relaxed text-cream/70 max-w-sm mt-2">
                            Más de <strong>25 años de experiencia</strong> transformando hogares con madera sólida, MDF y aglomerados
                            de alta calidad. Cada mueble, una obra única.
                        </p>
                        {/* Redes */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href={SOCIAL_LINKS.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-white rounded-lg transition-all duration-300"
                                aria-label="WhatsApp de Carpintería JJ"
                            >
                                <MessageCircle size={18} />
                            </a>
                            <a
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-pink-500/20 hover:bg-pink-500 text-pink-400 hover:text-white rounded-lg transition-all duration-300"
                                aria-label="Instagram de Carpintería JJ"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href={SOCIAL_LINKS.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white rounded-lg transition-all duration-300"
                                aria-label="Facebook de Carpintería JJ"
                            >
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navegación */}
                    <div>
                        <h3 className="font-display text-cream text-lg font-semibold mb-4">Navegación</h3>
                        <nav aria-label="Navegación del pie de página">
                            <ul className="space-y-2">
                                {NAV_LINKS.map(({ label, href }) => (
                                    <li key={href}>
                                        <a
                                            href={href}
                                            className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Divider y Copyright */}
                <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-body text-xs text-cream/40 text-center md:text-left">
                        © {currentYear} Carpintería JJ · Cl 70A # 43-32, Medellín · Todos los derechos reservados
                    </p>
                    <p className="font-body text-xs text-cream/30 text-center md:text-right">
                        Diseño y Desarrollo Web Profesional
                    </p>
                </div>
            </div>
        </footer>
    )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    ChefHat,
    Layers,
    DoorOpen,
    Sofa,
    Monitor,
    Hammer,
    CheckCircle,
    type LucideIcon,
} from 'lucide-react'
import { SERVICES, type Service } from '@/data/services'

const ICON_MAP: Record<string, LucideIcon> = {
    ChefHat,
    Layers,
    DoorOpen,
    Sofa,
    Monitor,
    Hammer,
}

interface ServiceCardProps {
    service: Service
    index: number
}

/**
 * `ServiceCard`
 *
 * Tarjeta individual para mostrar un servicio.
 *
 * **Características:**
 * - Hover animado: Un borde superior decorativo de color de acento.
 * - Ícono dinámico según mapeo de dependencias de `lucide-react`.
 * - Lista descriptiva (características del servicio).
 *
 * @component
 * @param {ServiceCardProps} props
 * @returns React.JSX.Element
 */
function ServiceCard({ service, index }: ServiceCardProps) {
    const Icon = ICON_MAP[service.icon] ?? Hammer

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 backdrop-blur-xl card-glow-premium"
            style={{
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
            }}
        >
            {/* Glow gradient en hover */}
            <div
                className="absolute -inset-1 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl rounded-3xl"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${service.accentColor}, transparent 70%)`,
                }}
                aria-hidden="true"
            />

            {/* Borde top animado dramático */}
            <div
                className="absolute top-0 left-0 right-0 h-2 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-t-3xl"
                style={{
                    background: `linear-gradient(90deg, ${service.accentColor}, ${service.accentColor}80, ${service.accentColor})`,
                    boxShadow: `0 0 20px ${service.accentColor}80`,
                }}
                aria-hidden="true"
            />

            {/* Esquina decorativa SVG */}
            <svg
                className="absolute top-4 right-4 w-12 h-12 opacity-10 group-hover:opacity-30 transition-opacity duration-500"
                viewBox="0 0 50 50"
                aria-hidden="true"
            >
                <path
                    d="M0,0 L50,0 L50,50"
                    stroke={service.accentColor}
                    strokeWidth="1.5"
                    fill="none"
                />
                <circle cx="50" cy="0" r="3" fill={service.accentColor} />
            </svg>

            <div className="relative z-10">
                {/* Icono mejorado con efectos */}
                <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 backdrop-blur-sm relative overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, ${service.accentColor}25, ${service.accentColor}10)`,
                        color: service.accentColor,
                        boxShadow: `0 8px 24px ${service.accentColor}30, inset 0 1px 0 rgba(255,255,255,0.8)`,
                    }}
                >
                    <Icon size={32} aria-hidden="true" className="relative z-10 transition-transform duration-500" strokeWidth={1.8} />
                    {/* Pulso animado dentro del icono */}
                    <div
                        className="absolute inset-0 rounded-2xl animate-pulse"
                        style={{ backgroundColor: `${service.accentColor}10` }}
                        aria-hidden="true"
                    />
                </div>

                {/* Contenido Premium */}
                <h3 className="font-display text-2xl font-bold text-wood-dark mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                </h3>
                <p className="font-body text-sm text-wood/70 leading-relaxed mb-5 min-h-[60px]">
                    {service.description}
                </p>

                {/* Divider sutil */}
                <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-4" />

                {/* Features con efectos */}
                <ul className="space-y-2.5">
                    {service.features.map((feature, i) => (
                        <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                            className="flex items-center gap-3 group/item"
                        >
                            <div
                                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/item:scale-125"
                                style={{
                                    backgroundColor: `${service.accentColor}15`,
                                    color: service.accentColor,
                                }}
                            >
                                <CheckCircle size={14} aria-hidden="true" />
                            </div>
                            <span className="font-body text-sm text-wood/75 group-hover/item:text-wood-dark transition-colors">
                                {feature}
                            </span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}

/**
 * `ServicesSection`
 *
 * Renderiza el grid de servicios ofertados. Utiliza `framer-motion` para
 * escalonar la entrada (stagger) de cada tarjeta a medida que se hace scroll.
 *
 * @component
 * @returns React.JSX.Element
 */
export default function ServicesSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="servicios" className="relative py-24 md:py-36 overflow-hidden" aria-label="Servicios de Carpintería JJ">
            {/* Fondo con mesh gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-light via-cream to-cream-warm" />
            <div className="absolute inset-0 mesh-gradient opacity-50" />
            <div className="absolute inset-0 grid-pattern opacity-50" />

            {/* Orbe decorativo */}
            <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gold/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-wood/10 blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header con animación dramática */}
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
                        ✨ Lo que hacemos
                    </motion.span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-wood-dark mt-4">
                        Nuestros{' '}
                        <span className="text-shimmer-gold">Servicios</span>
                    </h2>
                    <div className="section-divider w-32 mx-auto my-6" />
                    <p className="font-body text-wood/70 max-w-2xl mx-auto mt-4 text-base md:text-lg leading-relaxed">
                        Cada proyecto es único. Desde cocinas integrales hasta closets personalizados,
                        creamos piezas que <span className="text-gold font-semibold">transforman tu espacio</span>.
                    </p>
                </motion.div>

                {/* Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    role="list"
                    aria-label="Lista de servicios"
                >
                    {SERVICES.map((service, index) => (
                        <div key={service.id} role="listitem">
                            <ServiceCard service={service} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

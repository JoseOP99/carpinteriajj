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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group card-service relative overflow-hidden"
        >
            {/* Borde top animado */}
            <div
                className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-t-xl"
                style={{ backgroundColor: service.accentColor }}
                aria-hidden="true"
            />

            {/* Icono */}
            <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${service.accentColor}22`, color: service.accentColor }}
            >
                <Icon size={26} aria-hidden="true" />
            </div>

            {/* Contenido */}
            <h3 className="font-display text-xl font-bold text-wood mb-2">{service.title}</h3>
            <p className="font-body text-sm text-wood/65 leading-relaxed mb-4">{service.description}</p>

            {/* Features */}
            <ul className="space-y-1.5">
                {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                        <CheckCircle size={14} style={{ color: service.accentColor }} className="flex-shrink-0" aria-hidden="true" />
                        <span className="font-body text-xs text-wood/60">{feature}</span>
                    </li>
                ))}
            </ul>
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
        <section id="servicios" className="py-20 md:py-32 bg-cream" aria-label="Servicios de Carpintería JJ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-badge mb-4">Lo que hacemos</span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-wood mt-4">
                        Nuestros{' '}
                        <span className="text-gradient-wood">Servicios</span>
                    </h2>
                    <p className="font-body text-wood/60 max-w-xl mx-auto mt-4 text-base leading-relaxed">
                        Cada proyecto es único. Desde cocinas integrales hasta closets personalizados,
                        creamos piezas que transforman tu espacio.
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

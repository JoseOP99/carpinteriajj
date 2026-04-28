'use client'

import { memo } from 'react'
import Image from 'next/image'

/**
 * `DynamicBackground` - Versión Ultra-Optimizada
 *
 * Optimizaciones agresivas:
 * - Solo 1 imagen hero (en vez de 8 rotando) - ahorra ~10MB
 * - Sin framer-motion (animaciones CSS puras)
 * - Sin event listeners de mouse (mejor performance)
 * - Mesh gradient + orbes son CSS animations
 * - Memoizado para evitar re-renders
 */
function DynamicBackgroundComponent() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-wood-dark">
            {/* Imagen hero única optimizada con priority */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.png"
                    alt="Carpintería JJ - Trabajos artesanales"
                    fill
                    priority
                    className="object-cover scale-105"
                    sizes="100vw"
                    quality={60}
                    style={{ opacity: 0.5 }}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
            </div>

            {/* Mesh Gradient CSS animado (sin JS) */}
            <div className="absolute inset-0 mesh-gradient pointer-events-none" />

            {/* Pattern Grid sutil CSS */}
            <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30" />

            {/* Orbes flotantes con CSS animations puro */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
            </div>

            {/* Vignette + overlay base */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%), linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
                }}
            />
        </div>
    )
}

export default memo(DynamicBackgroundComponent)

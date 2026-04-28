'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

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
 * `DynamicBackground`
 *
 * Background dramático con:
 * - Crossfade entre imágenes hero
 * - Mesh gradient animado superpuesto
 * - Spotlight que sigue al cursor
 * - Particles flotantes
 * - Pattern de grid sutil
 * - Vignette effect
 */
export default function DynamicBackground() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextIndex, setNextIndex] = useState(1)
    const [transitioning, setTransitioning] = useState(false)
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
    const containerRef = useRef<HTMLDivElement>(null)

    // Crossfade entre imágenes
    useEffect(() => {
        const timer = setInterval(() => {
            const next = (currentIndex + 1) % HERO_IMAGES.length
            setNextIndex(next)
            setTransitioning(true)

            const swapTimer = setTimeout(() => {
                setCurrentIndex(next)
                setTransitioning(false)
            }, 1200)

            return () => clearTimeout(swapTimer)
        }, 8000)
        return () => clearInterval(timer)
    }, [currentIndex])

    // Spotlight cursor effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 100
            const y = (e.clientY / window.innerHeight) * 100
            setMousePos({ x, y })
        }
        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            {/* Capa 1: Imágenes hero con crossfade */}
            <div className="absolute inset-0">
                <Image
                    src={HERO_IMAGES[currentIndex]}
                    alt="Fondo Carpintería JJ"
                    fill
                    priority
                    className="object-cover scale-105"
                    sizes="100vw"
                    quality={75}
                    style={{ opacity: 0.55 }}
                />
            </div>

            <AnimatePresence>
                {transitioning && (
                    <motion.div
                        key={HERO_IMAGES[nextIndex]}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.55, scale: 1.05 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={HERO_IMAGES[nextIndex]}
                            alt="Fondo Carpintería JJ"
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                            quality={75}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Capa 2: Mesh Gradient Animado (efecto sofisticado) */}
            <div className="absolute inset-0 mesh-gradient pointer-events-none" />

            {/* Capa 3: Pattern Grid sutil */}
            <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30" />

            {/* Capa 4: Spotlight que sigue al cursor */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle 600px at ${mousePos.x}% ${mousePos.y}%, rgba(196, 132, 58, 0.15), transparent 50%)`,
                }}
            />

            {/* Capa 5: Orbes flotantes animados */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
            </div>

            {/* Capa 6: Vignette effect */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
                }}
            />

            {/* Capa 7: Overlay base oscuro */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
        </div>
    )
}

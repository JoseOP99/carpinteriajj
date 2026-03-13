'use client'

import { useState, useEffect } from 'react'
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
 * Crossfade suave entre imágenes hero — la nueva imagen aparece por debajo
 * de la que sale, garantizando que siempre hay una imagen visible.
 */
export default function DynamicBackground() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextIndex, setNextIndex] = useState(1)
    const [transitioning, setTransitioning] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            const next = (currentIndex + 1) % HERO_IMAGES.length
            setNextIndex(next)
            setTransitioning(true)

            // Después de la transición completa, actualiza el índice base
            const swapTimer = setTimeout(() => {
                setCurrentIndex(next)
                setTransitioning(false)
            }, 800) // igual a la duración de la transición

            return () => clearTimeout(swapTimer)
        }, 8000)
        return () => clearInterval(timer)
    }, [currentIndex])

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            {/* Imagen base (siempre visible) */}
            <div className="absolute inset-0">
                <Image
                    src={HERO_IMAGES[currentIndex]}
                    alt="Fondo Carpintería JJ"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={70}
                    style={{ opacity: 0.6 }}
                />
            </div>

            {/* Imagen siguiente — aparece encima durante la transición */}
            <AnimatePresence>
                {transitioning && (
                    <motion.div
                        key={HERO_IMAGES[nextIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={HERO_IMAGES[nextIndex]}
                            alt="Fondo Carpintería JJ"
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                            quality={70}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay negro fijo */}
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        </div>
    )
}

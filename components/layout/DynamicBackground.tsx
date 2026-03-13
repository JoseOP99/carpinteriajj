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
 * Fondo dinámico a pantalla completa con transición entre imágenes hero.
 * Base negra para evitar el flash gris/blanco durante la carga inicial.
 */
export default function DynamicBackground() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length)
        }, 8000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={HERO_IMAGES[currentIndex]}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: isLoaded ? 0.6 : 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={HERO_IMAGES[currentIndex]}
                        alt="Fondo dinámico Carpintería JJ"
                        fill
                        priority={currentIndex === 0}
                        className="object-cover"
                        sizes="100vw"
                        quality={75}
                        onLoad={() => setIsLoaded(true)}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlay oscuro sutil para garantizar siempre fondo negro visible */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
    )
}

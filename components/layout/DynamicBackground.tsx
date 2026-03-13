'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GALLERY_PROJECTS } from '@/data/gallery'

/**
 * `DynamicBackground`
 * 
 * Componente que muestra un fondo de pantalla dinámico cargando imágenes aleatorias
 * de los proyectos de la galería cada cierto tiempo.
 * Incluye un overlay de gradiente oscuro para asegurar la legibilidad del contenido.
 */
export default function DynamicBackground() {
    // Filtrar solo proyectos que tengan imagen seteada
    const availableImages = GALLERY_PROJECTS.filter(p => p.imageUrl).map(p => p.imageUrl as string)
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)

    // Función para cambiar de imagen de forma aleatoria (que no sea la misma)
    const rotateImage = useCallback(() => {
        if (availableImages.length <= 1) return
        
        setCurrentIndex(prev => {
            let next = prev
            while (next === prev) {
                next = Math.floor(Math.random() * availableImages.length)
            }
            return next
        })
    }, [availableImages])

    useEffect(() => {
        // Inicializar con una imagen aleatoria
        if (availableImages.length > 0) {
            setCurrentIndex(Math.floor(Math.random() * availableImages.length))
            setIsLoaded(true)
        }

        // Cambiar cada 8 segundos para un ritmo más dinámico pero suave
        const timer = setInterval(rotateImage, 8000)
        return () => clearInterval(timer)
    }, [availableImages.length, rotateImage])

    if (!isLoaded || availableImages.length === 0) return (
        <div className="fixed inset-0 z-[-1] bg-cream-warm" />
    )

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-cream">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={availableImages[currentIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.35, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img 
                        src={availableImages[currentIndex]} 
                        alt="Fondo dinámico" 
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlay: Gradiente más suave para tonos cálidos */}
            <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-transparent to-cream/40" />
            
            {/* Ruido sutil para textura */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                 style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/p6.png")' }} />
        </div>
    )
}

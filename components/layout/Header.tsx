'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

/**
 * `Header`
 *
 * Navegación principal del sitio (Navbar) con comportamiento *sticky* y efecto *glassmorphism*.
 *
 * **Características:**
 * - Transparente en la carga inicial (Hero section).
 * - Se vuelve opaco (`bg-cream/95`) con desenfoque (`backdrop-blur`) al hacer scroll (> 20px).
 * - Cambia colores de texto dinámicamente (`text-cream` a `text-wood`).
 * - Incluye menú hamburguesa animado con `framer-motion` para dispositivos móviles.
 *
 * @component
 * @returns React.JSX.Element
 */
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleToggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev)
    }, [])

    const handleCloseMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/85 backdrop-blur-xl shadow-xl border-b border-white/10' : 'bg-transparent'
                }`}
            role="banner"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group focus-ring rounded-lg p-1" aria-label="Carpintería JJ - Inicio">
                        <Image
                            src="/Logo.png"
                            alt="Logo Carpintería JJ"
                            width={44}
                            height={44}
                            className="transition-transform duration-300 group-hover:scale-110"
                            priority
                        />
                        <span
                            className={`font-display text-xl font-semibold tracking-wide transition-colors duration-300 ${isScrolled ? 'text-gold' : 'text-cream'}`}
                        >
                            Carpintería JJ
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
                        {NAV_LINKS.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className={`relative text-sm font-body font-medium tracking-wide transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-full focus-ring rounded ${isScrolled ? 'text-white/80 hover:text-gold' : 'text-cream/90 hover:text-gold'}`}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 rounded-lg transition-colors duration-300 focus-ring ${isScrolled ? 'text-white hover:bg-white/10' : 'text-cream hover:bg-white/10'}`}
                        onClick={handleToggleMobileMenu}
                        aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 shadow-2xl"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Menú de navegación móvil"
                    >
                        <nav className="px-4 py-4 flex flex-col gap-1">
                            {NAV_LINKS.map(({ label, href }) => (
                                <a
                                    key={href}
                                    href={href}
                                    onClick={handleCloseMobileMenu}
                                    className="text-white/80 font-body font-medium py-3 px-4 rounded-lg hover:bg-white/5 hover:text-gold transition-colors duration-200 focus-ring"
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

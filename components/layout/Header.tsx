'use client'

import { useState, useEffect, useCallback, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants'

/**
 * `Header` - Premium con glassmorphism elegante
 *
 * - Transparente en la carga inicial (Hero section)
 * - Glassmorphism cream/wood elegante al hacer scroll (NO negro)
 * - Sticky con backdrop-blur premium
 * - Menú móvil con animaciones
 * - CTA de WhatsApp visible en desktop
 */
function HeaderComponent() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        // Throttled scroll handler para mejor performance
        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 20)
                    ticking = false
                })
                ticking = true
            }
        }
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-cream/85 backdrop-blur-2xl shadow-lg shadow-wood/10 border-b border-gold/20'
                    : 'bg-transparent'
            }`}
            role="banner"
        >
            {/* Línea decorativa dorada cuando hay scroll */}
            {isScrolled && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group focus-ring rounded-lg p-1"
                        aria-label="Carpintería JJ - Inicio"
                    >
                        <div className="relative">
                            <Image
                                src="/Logo.png"
                                alt="Logo Carpintería JJ"
                                width={44}
                                height={44}
                                className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                                priority
                            />
                            {/* Glow sutil en hover */}
                            <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <span
                            className={`font-display text-xl font-bold tracking-wide transition-all duration-500 ${
                                isScrolled
                                    ? 'text-shimmer-gold'
                                    : 'text-cream drop-shadow-lg'
                            }`}
                        >
                            Carpintería JJ
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav
                        className="hidden md:flex items-center gap-8"
                        aria-label="Navegación principal"
                    >
                        {NAV_LINKS.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className={`relative text-sm font-body font-semibold tracking-wide transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-gold after:to-gold-light after:transition-all after:duration-300 hover:after:w-full focus-ring rounded ${
                                    isScrolled
                                        ? 'text-wood-dark hover:text-gold'
                                        : 'text-cream hover:text-gold drop-shadow-md'
                                }`}
                            >
                                {label}
                            </a>
                        ))}

                        {/* CTA WhatsApp en desktop */}
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm font-body font-bold px-5 py-2.5 rounded-full shadow-lg shadow-green-900/20 hover:shadow-green-500/40 hover:scale-105 transition-all duration-300 group"
                            aria-label="Cotizar por WhatsApp"
                        >
                            <MessageCircle
                                size={16}
                                aria-hidden="true"
                                className="group-hover:rotate-12 transition-transform"
                            />
                            <span>Cotizar</span>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 rounded-lg transition-all duration-300 focus-ring ${
                            isScrolled
                                ? 'text-wood-dark hover:bg-gold/10 border border-gold/20'
                                : 'text-cream hover:bg-white/10 border border-white/20 backdrop-blur-md'
                        }`}
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
                        className="md:hidden bg-cream/95 backdrop-blur-2xl border-t border-gold/20 shadow-2xl shadow-wood/20"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Menú de navegación móvil"
                    >
                        <nav className="px-4 py-4 flex flex-col gap-1">
                            {NAV_LINKS.map(({ label, href }, index) => (
                                <motion.a
                                    key={href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    href={href}
                                    onClick={handleCloseMobileMenu}
                                    className="text-wood-dark font-body font-semibold py-3 px-4 rounded-lg hover:bg-gold/10 hover:text-gold transition-all duration-200 focus-ring flex items-center justify-between group"
                                >
                                    <span>{label}</span>
                                    <span className="opacity-0 group-hover:opacity-100 text-gold transition-opacity">
                                        →
                                    </span>
                                </motion.a>
                            ))}

                            {/* CTA WhatsApp en mobile */}
                            <motion.a
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: NAV_LINKS.length * 0.05 + 0.1 }}
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleCloseMobileMenu}
                                className="mt-3 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-body font-bold px-5 py-3.5 rounded-xl shadow-lg shadow-green-900/20 hover:shadow-green-500/40 transition-all duration-300"
                                aria-label="Cotizar por WhatsApp"
                            >
                                <MessageCircle size={18} aria-hidden="true" />
                                <span>Cotizar por WhatsApp</span>
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

// Memoizado para evitar re-renders innecesarios
export default memo(HeaderComponent)

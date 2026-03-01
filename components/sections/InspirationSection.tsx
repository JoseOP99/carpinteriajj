'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { X, Clock, Tag } from 'lucide-react'
import { INSPIRATION_ARTICLES, type InspirationArticle } from '@/data/inspiration'

interface InspirationCardProps {
    article: InspirationArticle
    onOpen: (a: InspirationArticle) => void
    index: number
}

/**
 * InspirationCard — Tarjeta editorial con tipo diferenciado por color.
 *
 * @param {InspirationCardProps} props
 * @param {InspirationArticle} props.article - Artículo de inspiración
 * @param {(a: InspirationArticle) => void} props.onOpen - Callback al hacer clic
 * @param {number} props.index - Índice para stagger delay
 */
function InspirationCard({ article, onOpen, index }: InspirationCardProps) {
    const handleOpen = useCallback(() => onOpen(article), [onOpen, article])

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-cream-dark transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            onClick={handleOpen}
            onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
            tabIndex={0}
            role="button"
            aria-label={`Leer artículo: ${article.title}`}
        >
            {/* Barra de color superior */}
            <div
                className="h-1.5 w-full"
                style={{ backgroundColor: article.accentColor }}
                aria-hidden="true"
            />

            {/* Header de la imagen placeholder */}
            <div
                className="h-48 flex items-center justify-center relative"
                style={{
                    background: `linear-gradient(135deg, ${article.accentColor}33, ${article.accentColor}88)`,
                }}
            >
                <span className="font-display text-5xl opacity-40 text-white select-none">
                    {article.type === 'caso-exito' ? '🏆' : article.type === 'consejo' ? '💡' : '✨'}
                </span>
                <span
                    className="absolute top-4 left-4 font-body text-xs font-bold uppercase tracking-widest text-white/80 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm"
                >
                    {article.typeLabel}
                </span>
            </div>

            {/* Contenido */}
            <div className="p-6">
                <h3 className="font-display text-xl font-bold text-wood mb-3 leading-tight group-hover:text-gold-dark transition-colors duration-300">
                    {article.title}
                </h3>
                <p className="font-body text-sm text-wood/65 leading-relaxed mb-4">{article.summary}</p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <Tag size={13} style={{ color: article.accentColor }} aria-hidden="true" />
                        <span className="font-body text-xs text-wood/50">{article.tag}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-wood/40" aria-hidden="true" />
                        <span className="font-body text-xs text-wood/50">{article.readTime}</span>
                    </div>
                </div>

                <div
                    className="mt-4 font-body text-sm font-medium flex items-center gap-1 transition-all duration-300"
                    style={{ color: article.accentColor }}
                >
                    Leer más
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
            </div>
        </motion.article>
    )
}

interface InspirationModalProps {
    article: InspirationArticle | null
    onClose: () => void
}

/**
 * `InspirationModal`
 *
 * Modal emergente que muestra el contenido rico (HTML seguro) del artículo seleccionado.
 * Bloquea el scroll del `<body>` mientras está abierto.
 *
 * @component
 * @param {InspirationModalProps} props
 * @returns React.JSX.Element
 */
function InspirationModal({ article, onClose }: InspirationModalProps) {
    useEffect(() => {
        if (!article) return
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [article, onClose])

    return (
        <AnimatePresence>
            {article && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Artículo: ${article.title}`}
                >
                    <div className="absolute inset-0 bg-wood-dark/85 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

                    <motion.div
                        initial={{ scale: 0.92, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.92, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                        className="relative z-10 bg-cream rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
                    >
                        {/* Header */}
                        <div
                            className="p-8 pb-6"
                            style={{
                                background: `linear-gradient(135deg, ${article.accentColor}22, transparent)`,
                            }}
                        >
                            <span className="font-body text-xs font-bold uppercase tracking-widest" style={{ color: article.accentColor }}>
                                {article.typeLabel}
                            </span>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-wood mt-3 leading-tight">
                                {article.title}
                            </h2>
                            <div className="flex items-center gap-4 mt-3">
                                <span className="font-body text-xs text-wood/50">{article.tag}</span>
                                <span className="text-wood/30">·</span>
                                <span className="font-body text-xs text-wood/50">Lectura: {article.readTime}</span>
                            </div>
                        </div>

                        {/* Contenido (renderizado como texto pre-formateado) */}
                        <div className="px-8 pb-8">
                            <div
                                className="font-body text-sm text-wood/75 leading-relaxed space-y-4"
                                dangerouslySetInnerHTML={{
                                    __html: article.content
                                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-wood font-semibold">$1</strong>')
                                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                                        .replace(/^> (.*)/gm, '<blockquote class="border-l-4 pl-4 italic text-wood/60" style="border-color: ' + article.accentColor + '">$1</blockquote>')
                                        .replace(/\n\n/g, '</p><p class="mt-4">')
                                        .replace(/^/, '<p>')
                                        .replace(/$/, '</p>'),
                                }}
                            />
                        </div>

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-9 h-9 bg-wood/10 hover:bg-wood/20 text-wood rounded-full flex items-center justify-center transition-colors focus-ring"
                            aria-label="Cerrar artículo"
                        >
                            <X size={18} />
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

/**
 * `InspirationSection`
 *
 * Muestra una tarjeta horizontal por cada artículo o caso de éxito, y maneja el
 * estado global del modal para leer el artículo a pantalla completa.
 *
 * @component
 * @returns React.JSX.Element
 */
export default function InspirationSection() {
    const [selectedArticle, setSelectedArticle] = useState<InspirationArticle | null>(null)
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    const handleOpenArticle = useCallback((article: InspirationArticle) => {
        setSelectedArticle(article)
    }, [])

    const handleCloseModal = useCallback(() => {
        setSelectedArticle(null)
    }, [])

    return (
        <section id="inspiracion" className="py-20 md:py-32 bg-cream" aria-label="Inspiración y casos de éxito">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-badge mb-4">Ideas & Consejos</span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-wood mt-4">
                        Inspiración y{' '}
                        <span className="text-gradient-wood">Casos de Éxito</span>
                    </h2>
                    <p className="font-body text-wood/60 max-w-xl mx-auto mt-4 text-base">
                        Aprende, inspírate y descubre cómo transformamos espacios reales en Medellín.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {INSPIRATION_ARTICLES.map((article, index) => (
                        <InspirationCard
                            key={article.id}
                            article={article}
                            onOpen={handleOpenArticle}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            <InspirationModal article={selectedArticle} onClose={handleCloseModal} />
        </section>
    )
}

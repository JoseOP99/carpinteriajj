'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import { X, Clock, Tag, ArrowRight, Sparkles } from 'lucide-react'
import { INSPIRATION_ARTICLES, type InspirationArticle } from '@/data/inspiration'

interface InspirationCardProps {
    article: InspirationArticle
    onOpen: (a: InspirationArticle) => void
    index: number
}

/**
 * InspirationCard - Tarjeta editorial premium con imagen y efectos hover
 */
function InspirationCard({ article, onOpen, index }: InspirationCardProps) {
    const handleOpen = useCallback(() => onOpen(article), [onOpen, article])

    return (
        <motion.article
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-3xl overflow-hidden border border-cream-dark/30 cursor-pointer card-glow-premium shadow-xl hover:shadow-2xl transition-all duration-500"
            onClick={handleOpen}
            onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
            tabIndex={0}
            role="button"
            aria-label={`Leer artículo: ${article.title}`}
        >
            {/* Glow effect en hover */}
            <div
                className="absolute -inset-1 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl rounded-3xl pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${article.accentColor}, transparent 70%)`,
                }}
                aria-hidden="true"
            />

            {/* Imagen real con overlay */}
            <div className="relative h-56 overflow-hidden">
                {article.imageUrl ? (
                    <>
                        <Image
                            src={article.imageUrl}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            quality={70}
                            loading="lazy"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div
                            className="absolute inset-0 opacity-30 mix-blend-multiply"
                            style={{
                                background: `linear-gradient(135deg, ${article.accentColor}, transparent)`,
                            }}
                        />
                    </>
                ) : (
                    <div
                        className="w-full h-full flex items-center justify-center"
                        style={{
                            background: `linear-gradient(135deg, ${article.accentColor}33, ${article.accentColor}88)`,
                        }}
                    >
                        <span className="font-display text-6xl opacity-50 text-white select-none">
                            {article.type === 'caso-exito' ? '🏆' : article.type === 'consejo' ? '💡' : '✨'}
                        </span>
                    </div>
                )}

                {/* Badge premium */}
                <span
                    className="absolute top-4 left-4 inline-flex items-center gap-1.5 font-body text-xs font-bold uppercase tracking-widest text-white px-3 py-1.5 rounded-full backdrop-blur-md border border-white/30 shadow-lg"
                    style={{ backgroundColor: `${article.accentColor}E6` }}
                >
                    {article.typeLabel}
                </span>

                {/* Read time badge */}
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 font-body text-[10px] font-semibold text-white px-2.5 py-1 rounded-full backdrop-blur-md bg-black/40 border border-white/20">
                    <Clock size={10} />
                    {article.readTime}
                </span>

                {/* Borde animado superior */}
                <div
                    className="absolute top-0 left-0 right-0 h-1.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                    style={{
                        background: `linear-gradient(90deg, ${article.accentColor}, ${article.accentColor}80, ${article.accentColor})`,
                        boxShadow: `0 0 20px ${article.accentColor}80`,
                    }}
                    aria-hidden="true"
                />
            </div>

            {/* Contenido */}
            <div className="relative p-6 z-10">
                <h3 className="font-display text-xl md:text-2xl font-bold text-wood-dark mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                    {article.title}
                </h3>
                <p className="font-body text-sm text-wood/65 leading-relaxed mb-5 line-clamp-3">
                    {article.summary}
                </p>

                {/* Footer card */}
                <div className="flex items-center justify-between pt-4 border-t border-cream-dark/30">
                    <div className="flex items-center gap-1.5">
                        <Tag size={13} style={{ color: article.accentColor }} aria-hidden="true" />
                        <span className="font-body text-xs text-wood/50 font-medium">{article.tag}</span>
                    </div>
                    <motion.div
                        whileHover={{ x: 5 }}
                        className="font-body text-sm font-semibold flex items-center gap-1.5 transition-all"
                        style={{ color: article.accentColor }}
                    >
                        <span>Leer más</span>
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.div>
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
                    <div
                        className="absolute inset-0 bg-wood-dark/90 backdrop-blur-md"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                        className="relative z-10 bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                    >
                        {/* Header con imagen */}
                        {article.imageUrl && (
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={article.imageUrl}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                    quality={90}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-8 right-8">
                                    <span
                                        className="inline-block font-body text-xs font-bold uppercase tracking-widest text-white px-3 py-1.5 rounded-full mb-3"
                                        style={{ backgroundColor: article.accentColor }}
                                    >
                                        {article.typeLabel}
                                    </span>
                                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                                        {article.title}
                                    </h2>
                                </div>
                            </div>
                        )}

                        {/* Contenido scrollable */}
                        <div className="overflow-y-auto max-h-[60vh]">
                            <div className="p-8">
                                {!article.imageUrl && (
                                    <div className="mb-6">
                                        <span
                                            className="inline-block font-body text-xs font-bold uppercase tracking-widest text-white px-3 py-1.5 rounded-full mb-3"
                                            style={{ backgroundColor: article.accentColor }}
                                        >
                                            {article.typeLabel}
                                        </span>
                                        <h2 className="font-display text-2xl md:text-3xl font-bold text-wood-dark leading-tight">
                                            {article.title}
                                        </h2>
                                    </div>
                                )}

                                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-cream-dark/30">
                                    <span className="font-body text-xs text-wood/50">
                                        <Tag size={12} className="inline mr-1" />
                                        {article.tag}
                                    </span>
                                    <span className="text-wood/30">·</span>
                                    <span className="font-body text-xs text-wood/50">
                                        <Clock size={12} className="inline mr-1" />
                                        Lectura: {article.readTime}
                                    </span>
                                </div>

                                <div
                                    className="font-body text-base text-wood/80 leading-relaxed space-y-4 prose-custom"
                                    dangerouslySetInnerHTML={{
                                        __html: article.content
                                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-wood-dark font-semibold">$1</strong>')
                                            .replace(/\*(.*?)\*/g, '<em class="text-gold">$1</em>')
                                            .replace(/^> (.*)/gm, `<blockquote class="border-l-4 pl-4 italic text-wood/70 my-4" style="border-color: ${article.accentColor}">$1</blockquote>`)
                                            .replace(/\n\n/g, '</p><p class="mt-4">')
                                            .replace(/^/, '<p>')
                                            .replace(/$/, '</p>'),
                                    }}
                                />
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white text-wood-dark rounded-full flex items-center justify-center transition-all duration-300 focus-ring shadow-lg backdrop-blur-md hover:scale-110 z-20"
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
        <section
            id="inspiracion"
            className="relative py-24 md:py-36 overflow-hidden"
            aria-label="Inspiración y casos de éxito"
        >
            {/* Background con efectos */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-warm to-cream" />
            <div className="absolute inset-0 mesh-gradient opacity-40" />
            <div className="absolute inset-0 grid-pattern opacity-30" />

            {/* Orbes decorativos */}
            <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-wood/8 blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <Sparkles size={12} className="inline mr-1" /> Ideas & Consejos
                    </motion.span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-wood-dark mt-4">
                        Inspiración y{' '}
                        <span className="text-shimmer-gold">Casos de Éxito</span>
                    </h2>
                    <div className="section-divider w-32 mx-auto my-6" />
                    <p className="font-body text-wood/70 max-w-2xl mx-auto mt-4 text-base md:text-lg leading-relaxed">
                        Aprende, inspírate y descubre cómo{' '}
                        <span className="text-gold font-semibold">transformamos espacios reales</span>{' '}
                        en Medellín.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

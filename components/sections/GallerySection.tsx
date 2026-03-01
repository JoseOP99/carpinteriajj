'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight, MapPin, Calendar, Package } from 'lucide-react'
import { GALLERY_PROJECTS, GALLERY_CATEGORIES, type GalleryCategory, type GalleryProject } from '@/data/gallery'

interface GalleryCardProps {
    project: GalleryProject
    onOpen: (p: GalleryProject) => void
    index: number
}

/**
 * `GalleryCard`
 *
 * Micro-componente que representa un proyecto individual en la grilla.
 * Al hacer hover muestra un overlay con información rápida (título, material, año)
 * e icono de ampliar.
 *
 * @component
 * @param {GalleryCardProps} props
 * @param {GalleryProject} props.project - Datos del proyecto a mostrar
 * @param {(p: GalleryProject) => void} props.onOpen - Callback al hacer clic
 * @param {number} props.index - Índice para el delay de la animación stagger
 * @returns React.JSX.Element
 */
function GalleryCard({ project, onOpen, index }: GalleryCardProps) {
    const handleOpen = useCallback(() => onOpen(project), [onOpen, project])

    return (
        <motion.article
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
            className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300"
            onClick={handleOpen}
            onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
            tabIndex={0}
            role="button"
            aria-label={`Ver proyecto: ${project.title}`}
        >
            {/* Imagen placeholder con gradiente */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                }}
            />

            {/* Patrón de madera */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px)',
                }}
                aria-hidden="true"
            />

            {/* Badge de categoría */}
            <span className="absolute top-3 left-3 z-10 font-body text-xs font-semibold capitalize bg-black/50 text-cream/90 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                {project.category}
            </span>

            {/* Overlay hover */}
            <div className="gallery-overlay group-hover:opacity-100 transition-all duration-300">
                <div className="flex flex-col gap-1">
                    <h3 className="font-display text-base font-bold text-cream leading-tight">{project.title}</h3>
                    <p className="font-body text-xs text-cream/70">{project.material} · {project.year}</p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <ZoomIn size={32} className="text-white/80" aria-hidden="true" />
                </div>
            </div>
        </motion.article>
    )
}

interface GalleryModalProps {
    project: GalleryProject | null
    onClose: () => void
    onPrev: () => void
    onNext: () => void
}

/**
 * `GalleryModal`
 *
 * Modal a pantalla completa (Lightbox) para visualizar un proyecto en detalle.
 * Incluye navegación de fotos (Prev/Next) y se cierra con Escape, clic fuera, o el botón [X].
 * Previene el scroll del cuerpo de la página mientras está activo.
 *
 * @component
 * @param {GalleryModalProps} props
 * @returns React.JSX.Element
 */
function GalleryModal({ project, onClose, onPrev, onNext }: GalleryModalProps) {
    useEffect(() => {
        if (!project) return
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') onPrev()
            if (e.key === 'ArrowRight') onNext()
        }
        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [project, onClose, onPrev, onNext])

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Detalle del proyecto: ${project.title}`}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-wood-dark/90 backdrop-blur-sm"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="relative z-10 bg-cream rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
                    >
                        {/* Imagen 60% */}
                        <div
                            className="md:w-3/5 min-h-48 md:min-h-0"
                            style={{
                                background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                            }}
                        >
                            <div className="w-full h-full min-h-[300px] md:min-h-full flex items-center justify-center">
                                <div className="text-white/20 text-center">
                                    <Package size={64} className="mx-auto mb-2" />
                                    <p className="font-body text-sm">Foto del proyecto</p>
                                </div>
                            </div>
                        </div>

                        {/* Info 40% */}
                        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                            <div>
                                <span className="font-body text-xs font-semibold capitalize text-gold bg-gold/10 px-3 py-1.5 rounded-full">
                                    {project.category}
                                </span>
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-wood mt-4 mb-3">
                                    {project.title}
                                </h2>
                                <p className="font-body text-sm text-wood/70 leading-relaxed mb-6">{project.description}</p>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2.5">
                                        <Package size={16} className="text-gold flex-shrink-0" aria-hidden="true" />
                                        <span className="font-body text-sm text-wood/70">{project.material}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Calendar size={16} className="text-gold flex-shrink-0" aria-hidden="true" />
                                        <span className="font-body text-sm text-wood/70">{project.year}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <MapPin size={16} className="text-gold flex-shrink-0" aria-hidden="true" />
                                        <span className="font-body text-sm text-wood/70">{project.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Navegar */}
                            <div className="flex gap-3 mt-6 pt-6 border-t border-cream-dark">
                                <button onClick={onPrev} className="flex-1 flex items-center justify-center gap-2 border border-wood/20 text-wood py-2.5 rounded-lg hover:bg-wood/5 transition-colors focus-ring font-body text-sm" aria-label="Proyecto anterior">
                                    <ChevronLeft size={16} /> Anterior
                                </button>
                                <button onClick={onNext} className="flex-1 flex items-center justify-center gap-2 border border-wood/20 text-wood py-2.5 rounded-lg hover:bg-wood/5 transition-colors focus-ring font-body text-sm" aria-label="Proyecto siguiente">
                                    Siguiente <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Botón cerrar */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-9 h-9 bg-wood/80 hover:bg-wood text-cream rounded-full flex items-center justify-center transition-colors focus-ring z-10"
                            aria-label="Cerrar modal"
                        >
                            <X size={18} />
                        </button>
                    </motion.div>

                    {/* Botones de navegación externos */}
                    <button
                        onClick={onPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-cream/10 hover:bg-cream/20 text-cream rounded-full flex items-center justify-center transition-colors focus-ring backdrop-blur-sm"
                        aria-label="Proyecto anterior"
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <button
                        onClick={onNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-cream/10 hover:bg-cream/20 text-cream rounded-full flex items-center justify-center transition-colors focus-ring backdrop-blur-sm"
                        aria-label="Proyecto siguiente"
                    >
                        <ChevronRight size={22} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

/**
 * `GallerySection`
 *
 * Sección principal de Galería (Portafolio).
 * Mantiene el estado del filtro activo (Categorías) y maneja la transición animada
 * de la grilla usando `framer-motion` (AnimatePresence y Layout routing).
 *
 * @component
 * @returns React.JSX.Element
 */
export default function GallerySection() {
    const [activeCategory, setActiveCategory] = useState<GalleryCategory>('todos')
    const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null)
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    const filteredProjects =
        activeCategory === 'todos'
            ? GALLERY_PROJECTS
            : GALLERY_PROJECTS.filter((p) => p.category === activeCategory)

    const handleOpenProject = useCallback((project: GalleryProject) => {
        setSelectedProject(project)
    }, [])

    const handleCloseModal = useCallback(() => {
        setSelectedProject(null)
    }, [])

    const handlePrevProject = useCallback(() => {
        if (!selectedProject) return
        const idx = filteredProjects.findIndex((p) => p.id === selectedProject.id)
        const prevIdx = (idx - 1 + filteredProjects.length) % filteredProjects.length
        setSelectedProject(filteredProjects[prevIdx])
    }, [selectedProject, filteredProjects])

    const handleNextProject = useCallback(() => {
        if (!selectedProject) return
        const idx = filteredProjects.findIndex((p) => p.id === selectedProject.id)
        const nextIdx = (idx + 1) % filteredProjects.length
        setSelectedProject(filteredProjects[nextIdx])
    }, [selectedProject, filteredProjects])

    const handleCategoryChange = useCallback((cat: GalleryCategory) => {
        setActiveCategory(cat)
        setSelectedProject(null)
    }, [])

    return (
        <section id="galeria" className="py-20 md:py-32 bg-cream-warm" aria-label="Galería de proyectos">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="section-badge mb-4">Nuestro trabajo</span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-wood mt-4">
                        Galería de{' '}
                        <span className="text-gradient-wood">Proyectos</span>
                    </h2>
                    <p className="font-body text-wood/60 max-w-xl mx-auto mt-4 text-base">
                        Cada proyecto cuenta una historia. Explora nuestra selección de trabajos terminados.
                    </p>
                </motion.div>

                {/* Filtros */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                    role="group"
                    aria-label="Filtros de categoría"
                >
                    {GALLERY_CATEGORIES.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => handleCategoryChange(id)}
                            className={`font-body text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-300 focus-ring ${activeCategory === id
                                ? 'bg-wood text-cream border-wood shadow-md'
                                : 'border-wood/30 text-wood/70 hover:border-wood hover:text-wood'
                                }`}
                            aria-pressed={activeCategory === id}
                        >
                            {label}
                        </button>
                    ))}
                </motion.div>

                {/* Grid de proyectos */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <GalleryCard
                                key={project.id}
                                project={project}
                                onOpen={handleOpenProject}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modal */}
            <GalleryModal
                project={selectedProject}
                onClose={handleCloseModal}
                onPrev={handlePrevProject}
                onNext={handleNextProject}
            />
        </section>
    )
}

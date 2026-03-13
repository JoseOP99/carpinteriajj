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
            className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300 bg-wood/5"
            onClick={handleOpen}
            onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
            tabIndex={0}
            role="button"
            aria-label={`Ver proyecto: ${project.title}`}
        >
            {/* Imagen del proyecto */}
            {project.imageUrl ? (
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            ) : (
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                    }}
                />
            )}

            {/* Overlay sutil (gradiente inferior) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badge de categoría */}
            <span className="absolute top-3 left-3 z-10 font-body text-[10px] uppercase tracking-wider font-bold bg-white/90 text-wood px-2.5 py-1 rounded-sm backdrop-blur-sm shadow-sm group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                {project.category}
            </span>

            {/* Icono de zoom centrado */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                    <ZoomIn size={24} className="text-white" aria-hidden="true" />
                </div>
            </div>

            {/* Info inferior rápida al hacer hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-display text-sm font-bold text-white leading-tight">{project.title}</h3>
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
                    className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-10"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Detalle del proyecto: ${project.title}`}
                >
                    {/* Backdrop blanco traslúcido (Glassmorphism claro) */}
                    <div
                        className="absolute inset-0 bg-white/90 backdrop-blur-xl"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Contenedor de la imagen expandida */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="relative z-10 w-full max-w-6xl max-h-full flex flex-col items-center justify-center"
                    >
                        <div className="relative group w-full flex items-center justify-center">
                            {project.imageUrl ? (
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-lg"
                                />
                            ) : (
                                <div
                                    className="w-full h-96 md:h-[600px] flex items-center justify-center rounded-lg"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                                    }}
                                >
                                    <Package size={80} className="text-white/20" />
                                </div>
                            )}

                            {/* Info de categoría resaltada */}
                            <div className="absolute bottom-[-70px] left-0 right-0 text-center">
                                <span className="inline-block font-body text-xs font-bold uppercase tracking-[0.2em] text-gold mb-1">Proyecto</span>
                                <h2 className="font-display text-3xl md:text-4xl font-black capitalize text-wood tracking-tight">
                                    {project.category}
                                </h2>
                            </div>
                        </div>
                    </motion.div>

                    {/* Controles de navegación laterales flotantes */}
                    <button
                        onClick={onPrev}
                        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-wood/5 hover:bg-wood/10 text-wood rounded-full flex items-center justify-center transition-all focus-ring backdrop-blur-sm border border-wood/10 z-[110]"
                        aria-label="Proyecto anterior"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        onClick={onNext}
                        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-wood/5 hover:bg-wood/10 text-wood rounded-full flex items-center justify-center transition-all focus-ring backdrop-blur-sm border border-wood/10 z-[110]"
                        aria-label="Proyecto siguiente"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Botón cerrar arriba derecha */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-wood/5 hover:bg-wood/10 text-wood rounded-full flex items-center justify-center transition-all focus-ring z-[110] border border-wood/10"
                        aria-label="Cerrar modal"
                    >
                        <X size={28} />
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

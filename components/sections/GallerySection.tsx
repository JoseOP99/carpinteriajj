'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight, Package, ChevronDown } from 'lucide-react'
import { GALLERY_PROJECTS, GALLERY_CATEGORIES, type GalleryCategory, type GalleryProject } from '@/data/gallery'

// Número de proyectos por página (2 filas × 4 columnas en desktop)
const PAGE_SIZE = 8

interface GalleryCardProps {
    project: GalleryProject
    onOpen: (p: GalleryProject) => void
    index: number
}

function GalleryCard({ project, onOpen, index }: GalleryCardProps) {
    const [loaded, setLoaded] = useState(false)
    const handleOpen = useCallback(() => onOpen(project), [onOpen, project])

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{
                duration: 0.55,
                delay: (index % PAGE_SIZE) * 0.04,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-stone-800"
            onClick={handleOpen}
            onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
            tabIndex={0}
            role="button"
            aria-label={`Ver proyecto: ${project.title}`}
        >
            {/* Skeleton placeholder con color cálido */}
            {!loaded && (
                <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${project.gradientFrom}99, ${project.gradientTo}bb)` }}
                >
                    <div className="absolute inset-0 shimmer opacity-40" />
                </div>
            )}

            {/* Imagen */}
            {project.imageUrl ? (
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setLoaded(true)}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                        loaded ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ) : (
                <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
                />
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* Badge de categoría */}
            <span className="absolute top-3 left-3 z-10 font-body text-[10px] uppercase tracking-wider font-bold bg-black/60 text-white px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10 group-hover:bg-gold group-hover:border-gold/0 transition-all duration-300">
                {project.category}
            </span>

            {/* Zoom icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/15 backdrop-blur-md p-4 rounded-full border border-white/25 shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={22} className="text-white" aria-hidden="true" />
                </div>
            </div>

            {/* Info inferior */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <h3 className="font-display text-sm font-bold text-white leading-tight drop-shadow-md">{project.title}</h3>
                <p className="font-body text-xs text-white/70 mt-0.5">{project.material}</p>
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

function GalleryModal({ project, onClose, onPrev, onNext }: GalleryModalProps) {
    const [imgLoaded, setImgLoaded] = useState(false)

    useEffect(() => {
        setImgLoaded(false)
    }, [project?.id])

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
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Detalle del proyecto: ${project.title}`}
                >
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                        className="relative z-10 w-full max-w-5xl max-h-full flex flex-col items-center gap-5"
                    >
                        <div className="relative w-full flex items-center justify-center">
                            {!imgLoaded && project.imageUrl && (
                                <div className="w-full h-[60vh] rounded-2xl bg-neutral-800 animate-pulse flex items-center justify-center">
                                    <Package size={48} className="text-white/10" />
                                </div>
                            )}
                            {project.imageUrl ? (
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    onLoad={() => setImgLoaded(true)}
                                    className={`max-w-full max-h-[75vh] object-contain shadow-2xl rounded-2xl border border-white/10 transition-opacity duration-500 ${
                                        imgLoaded ? 'opacity-100' : 'opacity-0 absolute'
                                    }`}
                                />
                            ) : (
                                <div
                                    className="w-full h-96 md:h-[500px] flex items-center justify-center rounded-2xl"
                                    style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
                                >
                                    <Package size={72} className="text-white/20" />
                                </div>
                            )}
                        </div>

                        <div className="text-center">
                            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-gold">{project.category}</span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-1">{project.title}</h2>
                            <p className="font-body text-sm text-white/50 mt-1">{project.material} · {project.location} · {project.year}</p>
                        </div>
                    </motion.div>

                    <button
                        onClick={onPrev}
                        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/15 z-[110] shadow-xl"
                        aria-label="Proyecto anterior"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={onNext}
                        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/15 z-[110] shadow-xl"
                        aria-label="Proyecto siguiente"
                    >
                        <ChevronRight size={28} />
                    </button>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 bg-white/10 hover:bg-red-500/80 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/15 z-[110] shadow-xl"
                        aria-label="Cerrar modal"
                    >
                        <X size={22} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default function GallerySection() {
    const [activeCategory, setActiveCategory] = useState<GalleryCategory>('todos')
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
    const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null)
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    const allCategories: { id: GalleryCategory; label: string }[] = [
        { id: 'todos', label: 'Todos' },
        { id: 'cocinas', label: 'Cocinas' },
        { id: 'closets', label: 'Closets' },
        { id: 'puertas', label: 'Puertas' },
        { id: 'muebles', label: 'Muebles' },
        { id: 'sala', label: 'Sala Entretenimiento' },
        { id: 'camas', label: 'Camas' },
        { id: 'otros', label: 'Otros' },
    ]

    const filteredProjects =
        activeCategory === 'todos'
            ? GALLERY_PROJECTS
            : GALLERY_PROJECTS.filter((p) => p.category === activeCategory)

    const visibleProjects = filteredProjects.slice(0, visibleCount)
    const hasMore = visibleCount < filteredProjects.length
    const remaining = filteredProjects.length - visibleCount
    const nextBatchCount = Math.min(PAGE_SIZE, remaining)

    const handleOpenProject = useCallback((project: GalleryProject) => setSelectedProject(project), [])
    const handleCloseModal = useCallback(() => setSelectedProject(null), [])

    const handlePrevProject = useCallback(() => {
        if (!selectedProject) return
        const idx = filteredProjects.findIndex((p) => p.id === selectedProject.id)
        setSelectedProject(filteredProjects[(idx - 1 + filteredProjects.length) % filteredProjects.length])
    }, [selectedProject, filteredProjects])

    const handleNextProject = useCallback(() => {
        if (!selectedProject) return
        const idx = filteredProjects.findIndex((p) => p.id === selectedProject.id)
        setSelectedProject(filteredProjects[(idx + 1) % filteredProjects.length])
    }, [selectedProject, filteredProjects])

    const handleCategoryChange = useCallback((cat: GalleryCategory) => {
        setActiveCategory(cat)
        setVisibleCount(PAGE_SIZE)  // reset paginación
        setSelectedProject(null)
    }, [])

    const handleLoadMore = useCallback(() => {
        setVisibleCount((prev) => prev + PAGE_SIZE)
    }, [])

    return (
        <section id="galeria" className="py-20 md:py-32 bg-cream-warm" aria-label="Galería de proyectos">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="section-badge mb-4">Nuestro trabajo</span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-wood mt-4">
                        Galería de{' '}
                        <span className="text-gradient-wood">Proyectos</span>
                    </h2>
                    <p className="font-body text-wood/60 max-w-xl mx-auto mt-4 text-base leading-relaxed">
                        Cada proyecto cuenta una historia. Explora nuestra selección de trabajos terminados.
                    </p>
                </motion.div>

                {/* Filtros */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex flex-wrap justify-center gap-2 mb-10"
                    role="group"
                    aria-label="Filtros de categoría"
                >
                    {allCategories.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => handleCategoryChange(id as GalleryCategory)}
                            className={`font-body text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-300 focus-ring ${
                                activeCategory === id
                                    ? 'bg-wood text-cream border-wood shadow-lg shadow-wood/20'
                                    : 'border-wood/25 text-wood/65 hover:border-wood hover:text-wood bg-white/60 backdrop-blur-sm'
                            }`}
                            aria-pressed={activeCategory === id}
                        >
                            {label}
                        </button>
                    ))}
                </motion.div>

                {/* Contador */}
                <p className="text-center font-body text-xs text-wood/40 mb-6 uppercase tracking-widest">
                    {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''}
                </p>

                {/* Grid */}
                <motion.div
                    key={activeCategory}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {visibleProjects.map((project, index) => (
                            <GalleryCard
                                key={project.id}
                                project={project}
                                onOpen={handleOpenProject}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Ver más — 2 filas por click */}
                {hasMore && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center mt-12 gap-2"
                    >
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center gap-2 font-body font-semibold text-sm px-10 py-4 rounded-full border-2 border-wood text-wood hover:bg-wood hover:text-cream transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-wood/20"
                        >
                            <ChevronDown size={18} />
                            Ver {nextBatchCount} proyectos más
                        </button>
                        <span className="font-body text-xs text-wood/35">
                            {visibleCount} de {filteredProjects.length} mostrados
                        </span>
                    </motion.div>
                )}
            </div>

            <GalleryModal
                project={selectedProject}
                onClose={handleCloseModal}
                onPrev={handlePrevProject}
                onNext={handleNextProject}
            />
        </section>
    )
}

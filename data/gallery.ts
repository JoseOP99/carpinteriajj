/**
 * gallery.ts — Proyectos tipados de la galería de Carpintería JJ.
 * Rutas de imágenes corregidas y auditadas contra los archivos reales en /public/images/gallery/
 */

export type GalleryCategory = 'todos' | 'cocinas' | 'closets' | 'puertas' | 'muebles' | 'sala' | 'camas' | 'otros'

export interface GalleryProject {
    id: string
    title: string
    category: Exclude<GalleryCategory, 'todos'>
    material: string
    year: number
    description: string
    gradientFrom: string
    gradientTo: string
    location: string
    imageUrl?: string
}

export const GALLERY_PROJECTS: GalleryProject[] = [
    // COCINAS — archivos en /images/gallery/cocinas/
    { id: 'cocina-1', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina.png.png' },
    { id: 'cocina-2', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (2).png.png' },
    { id: 'cocina-3', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (3).png.png' },
    { id: 'cocina-4', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (4).png.png' },
    { id: 'cocina-5', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (5).png.png' },
    { id: 'cocina-6', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (6).png.png' },
    { id: 'cocina-7', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (7).png.png' },
    { id: 'cocina-8', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (8).png.png' },
    { id: 'cocina-9', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (9).png.png' },
    { id: 'cocina-10', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (10).png.png' },
    { id: 'cocina-11', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (11).png.png' },
    { id: 'cocina-12', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (12).png.png' },
    { id: 'cocina-13', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (13).png.png' },
    { id: 'cocina-14', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (14).png.png' },
    { id: 'cocina-15', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (15).png.png' },
    { id: 'cocina-16', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (16).png.png' },
    { id: 'cocina-17', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (17).png.png' },
    { id: 'cocina-18', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (18).png.png' },
    { id: 'cocina-19', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (19).png.png' },
    { id: 'cocina-20', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (20).png.png' },
    { id: 'cocina-21', title: 'Cocina con Marco', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/marcoCocina.png.png' },

    // CLOSETS — archivos en /images/gallery/closets/
    { id: 'closet-1', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet.png.png' },
    { id: 'closet-2', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (2).png.png' },
    { id: 'closet-3', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (3).png.png' },
    { id: 'closet-4', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (4).png.png' },
    { id: 'closet-5', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (5).png.png' },
    { id: 'closet-6', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (6).png.png' },
    { id: 'closet-7', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (7).png.png' },
    { id: 'closet-8', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (8).png.png' },
    { id: 'closet-9', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (9).png.png' },
    { id: 'closet-10', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (10).png.png' },
    { id: 'closet-11', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (11).png.png' },
    { id: 'closet-12', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (12).png.png' },
    { id: 'closet-13', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (13).png.png' },
    { id: 'closet-14', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (14).png.png' },
    { id: 'closet-15', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (15).png.png' },
    { id: 'closet-16', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (16).png.png' },
    { id: 'closet-17', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (17).png.png' },
    { id: 'closet-18', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closet (18).png.png' },
    { id: 'closet-19', title: 'Closet con Escritorio', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closetEscritorio.png.png' },

    // MUEBLES — archivos en /images/gallery/muebles/
    { id: 'mueble-1', title: 'Mueble Personalizado', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/mueble.png.png' },
    { id: 'mueble-2', title: 'Mueble Personalizado', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/mueble (2).png.png' },
    { id: 'mueble-3', title: 'Mueble Personalizado', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/mueble (3).png.png' },
    { id: 'mueble-4', title: 'Mueble Personalizado', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/mueble (4).png.png' },
    { id: 'mueble-5', title: 'Mueble Personalizado', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/mueble44.png.png' },
    { id: 'mueble-6', title: 'Mueble de Baño', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/muebleBaño.png.png' },
    { id: 'mueble-7', title: 'Mueble de Baño', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/muebleBaño (2).png.png' },
    { id: 'mueble-8', title: 'Mueble de Baño', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/muebleBaño (3).png.png' },
    { id: 'mueble-9', title: 'Mueble de Baño', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/muebleBaño (4).png.png' },
    { id: 'mueble-10', title: 'Mueble de Baño', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/muebleBaño (5).png.png' },
    { id: 'mueble-11', title: 'Mueble de Baño', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/muebleBaño (6).png.png' },
    { id: 'mueble-12', title: 'Bibliotecas / Escritorios', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/nochero.png.png' },
    { id: 'mueble-13', title: 'Bibliotecas / Escritorios', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/nochero (2).png.png' },
    { id: 'mueble-14', title: 'Bibliotecas / Escritorios', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/nochero (3).png.png' },
    { id: 'mueble-15', title: 'Mesas / Comedores', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/mesa (2).png.png' },
    { id: 'mueble-16', title: 'Mesas / Comedores', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/mesa (3).png.png' },
    { id: 'mueble-17', title: 'Mesas / Comedores', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/mesa (4).png.png' },
    { id: 'mueble-18', title: 'Mesas / Comedores', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/mesaMueble.png.png' },
    { id: 'mueble-19', title: 'Mesas / Comedores', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/mesamueble (2).png.png' },
    { id: 'mueble-20', title: 'Bancas', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/banca.png.png' },
    { id: 'mueble-21', title: 'Mueble de Cocina', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/muebles/muebleCocina.png.png' },
    // Sala Entretenimiento — archivos reales en /images/gallery/sala entretenimiento/
    { id: 'mueble-22', title: 'Sala Entretenimiento', category: 'sala', material: 'Madera', year: 2024, description: 'Sala Entretenimiento', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/salaEntretenimiento.png.png' },
    { id: 'mueble-23', title: 'Sala Entretenimiento', category: 'sala', material: 'Madera', year: 2024, description: 'Sala Entretenimiento', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/salaEntretenimiento (2).png.png' },
    { id: 'mueble-24', title: 'Sala Entretenimiento', category: 'sala', material: 'Madera', year: 2024, description: 'Sala Entretenimiento', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/salaEntretenimiento (3).png.png' },
    { id: 'mueble-25', title: 'Mostrador', category: 'sala', material: 'Madera', year: 2024, description: 'Sala Entretenimiento', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/mostrador.png.png' },

    // PUERTAS — archivos en /images/gallery/puertas y ventanas/
    { id: 'puerta-1', title: 'Puerta Principal', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/puerta.png.png' },
    { id: 'puerta-2', title: 'Puerta Principal', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/puerta (2).png.png' },
    { id: 'puerta-3', title: 'Puerta Principal', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/puerta (3).png.png' },
    { id: 'puerta-4', title: 'Puerta Principal', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/puerta (4).png.png' },
    { id: 'puerta-5', title: 'Puerta Principal', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/puerta (5).png.png' },
    { id: 'puerta-6', title: 'Puerta Principal', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/puerta (6).png.png' },
    { id: 'puerta-7', title: 'Puerta Principal', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/puerta (7).png.png' },
    { id: 'puerta-8', title: 'Puerta Principal', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/puerta (8).png.png' },
    { id: 'puerta-9', title: 'Puerta Principal', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/puerta (9).png.png' },
    { id: 'puerta-10', title: 'Puerta Principal', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/puerta (10).png.png' },
    { id: 'puerta-11', title: 'Puerta Principal', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/puerta (11).png.png' },
    { id: 'puerta-12', title: 'Ventanas', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/ventana.png.png' },
    { id: 'puerta-13', title: 'Ventanas', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/ventana (2).png.png' },
    { id: 'puerta-14', title: 'Espejos con Marco', category: 'puertas', material: 'Madera Sólida', year: 2024, description: 'Puerta', gradientFrom: '#2D3A3A', gradientTo: '#1E2828', location: 'Medellín', imageUrl: '/images/gallery/puertas y ventanas/espejo.png.png' },

    // CAMAS — archivos en /images/gallery/camas/
    { id: 'cama-1', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama.png.png' },
    { id: 'cama-2', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama (2).png.png' },
    { id: 'cama-3', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama (3).png.png' },
    { id: 'cama-4', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama (4).png.png' },
    { id: 'cama-5', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama (5).png.png' },
    { id: 'cama-6', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama (6).png.png' },
    { id: 'cama-7', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama (7).png.png' },
    { id: 'cama-8', title: 'Cama Cuna', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/camaCuna.png.png' },

    // OTROS — archivos en /images/gallery/otros/
    { id: 'otro-1', title: 'Escaleras', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/escalera.png.png' },
    { id: 'otro-2', title: 'Escaleras', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/escaleras.png.png' },
    { id: 'otro-3', title: 'Pisos de Madera', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/piso.png.png' },
    { id: 'otro-4', title: 'Pisos de Madera', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/piso (2).png.png' },
    { id: 'otro-5', title: 'Mesas Decorativas', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/mesas.png.png' },
    { id: 'otro-6', title: 'Mesas Decorativas', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/mesas (2).png.png' },
    { id: 'otro-7', title: 'Mesa', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/mesa.png.png' },
    { id: 'otro-8', title: 'Silla', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/silla.png.png' },
    { id: 'otro-9', title: 'Sillas', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/sillas.png.png' },
    { id: 'otro-10', title: 'Bancas', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/bancas.png.png' },
    { id: 'otro-11', title: 'Espejos', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/espejos.png.png' },
    { id: 'otro-12', title: 'Mueble Bar', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/muebleBar.png.png' },
    { id: 'otro-13', title: 'Reclinatorios', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/reclinatorios.png.png' },
    { id: 'otro-14', title: 'Soportes', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/soporte.png.png' },
    { id: 'otro-15', title: 'Soportes', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/soporte (2).png.png' },
    { id: 'otro-16', title: 'Equipo de Trabajo', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/equipo.png.png' },
]

export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'cocinas', label: 'Cocinas' },
    { id: 'closets', label: 'Closets' },
    { id: 'puertas', label: 'Puertas' },
    { id: 'muebles', label: 'Muebles' },
    { id: 'camas', label: 'Camas' },
    { id: 'otros', label: 'Otros' },
]

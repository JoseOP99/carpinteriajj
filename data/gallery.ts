/**
 * gallery.ts — Proyectos tipados de la galería de Carpintería JJ.
 */

export type GalleryCategory = 'todos' | 'cocinas' | 'closets' | 'puertas' | 'muebles' | 'camas' | 'otros'

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
    // COCINAS (Incluye sala entretenimiento que tienen nombres de cocina)
    { id: 'cocina-1', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (2).png.png' },
    { id: 'cocina-2', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (3).png.png' },
    { id: 'cocina-3', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/cocina (8).png.png' },
    { id: 'cocina-4', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/cocinas/marcoCocina.png.png' },
    { id: 'cocina-5', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (10).png.png' },
    { id: 'cocina-6', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (11).png.png' },
    { id: 'cocina-7', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (12).png.png' },
    { id: 'cocina-8', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (13).png.png' },
    { id: 'cocina-9', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (14).png.png' },
    { id: 'cocina-10', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (15).png.png' },
    { id: 'cocina-11', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (16).png.png' },
    { id: 'cocina-12', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (17).png.png' },
    { id: 'cocina-13', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (18).png.png' },
    { id: 'cocina-14', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (19).png.png' },
    { id: 'cocina-15', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (20).png.png' },
    { id: 'cocina-16', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (4).png.png' },
    { id: 'cocina-17', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (5).png.png' },
    { id: 'cocina-18', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (6).png.png' },
    { id: 'cocina-19', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (7).png.png' },
    { id: 'cocina-20', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina (9).png.png' },
    { id: 'cocina-21', title: 'Cocina Integral', category: 'cocinas', material: 'Madera + Granito', year: 2024, description: 'Cocina', gradientFrom: '#C4843A', gradientTo: '#8B6355', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/cocina.png.png' },

    // CLOSETS
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
    { id: 'closet-19', title: 'Closet / Vestier', category: 'closets', material: 'Madera MDF', year: 2024, description: 'Closet', gradientFrom: '#8B6355', gradientTo: '#6B4C3B', location: 'Medellín', imageUrl: '/images/gallery/closets/closetEscritorio.png.png' },

    // MUEBLES
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
    { id: 'mueble-21', title: 'Sala Entretenimiento', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/salaEntretenimiento.png.png' },
    { id: 'mueble-22', title: 'Sala Entretenimiento', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/salaEntretenimiento (2).png.png' },
    { id: 'mueble-23', title: 'Sala Entretenimiento', category: 'muebles', material: 'Madera', year: 2024, description: 'Mueble', gradientFrom: '#3D4F4F', gradientTo: '#2D3A3A', location: 'Medellín', imageUrl: '/images/gallery/sala entretenimiento/salaEntretenimiento (3).png.png' },

    // PUERTAS
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

    // CAMAS
    { id: 'cama-1', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama.png.png' },
    { id: 'cama-2', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama (2).png.png' },
    { id: 'cama-3', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama (3).png.png' },
    { id: 'cama-4', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama (4).png.png' },
    { id: 'cama-5', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama (5).png.png' },
    { id: 'cama-6', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama (6).png.png' },
    { id: 'cama-7', title: 'Cama Matrimonial', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/cama (7).png.png' },
    { id: 'cama-8', title: 'Cama Cuna', category: 'camas', material: 'Madera Sólida', year: 2024, description: 'Camas', gradientFrom: '#8B6355', gradientTo: '#3D4F4F', location: 'Medellín', imageUrl: '/images/gallery/camas/camaCuna.png.png' },

    // OTROS
    { id: 'otro-1', title: 'Trabajos Especiales', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/escalera.png.png' },
    { id: 'otro-2', title: 'Trabajos Especiales', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/escaleras.png.png' },
    { id: 'otro-3', title: 'Trabajos Especiales', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/piso.png.png' },
    { id: 'otro-4', title: 'Trabajos Especiales', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/piso (2).png.png' },
    { id: 'otro-5', title: 'Mobiliario', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/mesas.png.png' },
    { id: 'otro-6', title: 'Mobiliario', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/mesa.png.png' },
    { id: 'otro-7', title: 'Sillas', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/silla.png.png' },
    { id: 'otro-8', title: 'Sillas', category: 'otros', material: 'Varios', year: 2024, description: 'Otros', gradientFrom: '#C4843A', gradientTo: '#3D2B1F', location: 'Medellín', imageUrl: '/images/gallery/otros/sillas.png.png' },
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

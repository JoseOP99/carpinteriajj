/**
 * gallery.ts — Proyectos tipados de la galería de Carpintería JJ.
 */

export type GalleryCategory = 'todos' | 'cocinas' | 'closets' | 'puertas' | 'muebles'

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
}

export const GALLERY_PROJECTS: GalleryProject[] = [
    {
        id: 'cocina-laureles-2024',
        title: 'Cocina Integral Laureles',
        category: 'cocinas',
        material: 'MDF + Tablero Cuarzo',
        year: 2024,
        description:
            'Cocina en L con islas con desayunador. Acabados en blanco mate y toques en madera natural.',
        gradientFrom: '#C4843A',
        gradientTo: '#8B6355',
        location: 'Laureles, Medellín',
    },
    {
        id: 'cocina-envigado-2024',
        title: 'Cocina Minimalista Envigado',
        category: 'cocinas',
        material: 'MDF Lacado Mate',
        year: 2024,
        description:
            'Diseño minimalista sin tiraderas, con sistema push-to-open. Paleta blanca y gris perla.',
        gradientFrom: '#3D4F4F',
        gradientTo: '#2D3A3A',
        location: 'Envigado, Antioquia',
    },
    {
        id: 'cocina-sabaneta-2023',
        title: 'Cocina Industrial Sabaneta',
        category: 'cocinas',
        material: 'Madera Natural + Acero',
        year: 2023,
        description: 'Estilo industrial con gabinetes en madera y herrajes negros metálicos.',
        gradientFrom: '#6B4C3B',
        gradientTo: '#3D2B1F',
        location: 'Sabaneta, Antioquia',
    },
    {
        id: 'closet-belen-2024',
        title: 'Vestier Completo Belén',
        category: 'closets',
        material: 'MDF Enchapado Madera',
        year: 2024,
        description:
            'Vestier de 8 metros con módulos de ropa, cajones tapizados, y sección de zapatos iluminada por LED.',
        gradientFrom: '#8B6355',
        gradientTo: '#6B4C3B',
        location: 'Belén, Medellín',
    },
    {
        id: 'closet-poblado-2024',
        title: 'Closet Dormitorio El Poblado',
        category: 'closets',
        material: 'Aglomerado Enchapado',
        year: 2024,
        description:
            'Closet empotrado con puertas corredizas en vidrio ahumado. Organización interior completa.',
        gradientFrom: '#C4843A',
        gradientTo: '#A06830',
        location: 'El Poblado, Medellín',
    },
    {
        id: 'closet-itagui-2023',
        title: 'Closet Infantil Itagüí',
        category: 'closets',
        material: 'MDF Lacado Color',
        year: 2023,
        description:
            'Diseño divertido y funcional para cuarto infantil con colores pastel y espacios lúdicos.',
        gradientFrom: '#3D4F4F',
        gradientTo: '#2D3A3A',
        location: 'Itagüí, Antioquia',
    },
    {
        id: 'puerta-doble-2024',
        title: 'Puerta Doble Tallada',
        category: 'puertas',
        material: 'Madera Sólida Cedro',
        year: 2024,
        description:
            'Puerta de acceso principal de doble hoja con esculturas en relieve y acabado en barniz premium.',
        gradientFrom: '#2D3A3A',
        gradientTo: '#1E2828',
        location: 'Rionegro, Antioquia',
    },
    {
        id: 'puerta-interior-2024',
        title: 'Puertas Interiores Suite',
        category: 'puertas',
        material: 'MDF + Laca Blanca',
        year: 2024,
        description:
            'Conjunto de 6 puertas interiores con moldura contemporánea y bisagras de acero inoxidable.',
        gradientFrom: '#6B4C3B',
        gradientTo: '#3D2B1F',
        location: 'Envigado, Antioquia',
    },
    {
        id: 'puerta-francesa-2023',
        title: 'Canceles Franceses',
        category: 'puertas',
        material: 'Madera + Vidrio Emplomado',
        year: 2023,
        description:
            'Canceles estilo francés con vidrios emplomados de colores, para separar comedor y sala.',
        gradientFrom: '#A06830',
        gradientTo: '#C4843A',
        location: 'El Poblado, Medellín',
    },
    {
        id: 'comedor-contemporaneo-2024',
        title: 'Comedor Contemporáneo',
        category: 'muebles',
        material: 'Madera Sólida + Vidrio',
        year: 2024,
        description:
            'Mesa de comedor hexagonal para 8 personas con base de madera maciza y cubierta en vidrio templado.',
        gradientFrom: '#8B6355',
        gradientTo: '#3D4F4F',
        location: 'Laureles, Medellín',
    },
    {
        id: 'biblioteca-medellin-2024',
        title: 'Biblioteca Empotrada',
        category: 'muebles',
        material: 'MDF + Enchape Nogal',
        year: 2024,
        description:
            'Biblioteca de piso a techo con escalera deslizante, iluminación interior y escritorio integrado.',
        gradientFrom: '#C4843A',
        gradientTo: '#8B6355',
        location: 'Belén, Medellín',
    },
    {
        id: 'escritorio-home-office-2023',
        title: 'Home Office Ejecutivo',
        category: 'muebles',
        material: 'MDF Lacado + Metal',
        year: 2023,
        description:
            'Escritorio esquinero con estantes verticales, cajonera y panel de cable management integrado.',
        gradientFrom: '#3D2B1F',
        gradientTo: '#2D3A3A',
        location: 'Sabaneta, Antioquia',
    },
]

export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'cocinas', label: 'Cocinas' },
    { id: 'closets', label: 'Closets' },
    { id: 'puertas', label: 'Puertas' },
    { id: 'muebles', label: 'Muebles' },
]

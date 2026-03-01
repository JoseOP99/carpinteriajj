/**
 * services.ts — Datos tipados de los servicios de Carpintería JJ.
 */

export interface Service {
    id: string
    title: string
    description: string
    icon: string
    accentColor: string
    features: string[]
}

export const SERVICES: Service[] = [
    {
        id: 'cocinas',
        title: 'Cocinas Integrales',
        description:
            'Diseñamos y fabricamos cocinas integrales a medida que combinan funcionalidad y estética. Modulares, en L, en U o lineales, adaptadas a tu espacio.',
        icon: 'ChefHat',
        accentColor: '#C4843A',
        features: ['Modulares personalizadas', 'Encimeras premium', 'Accesorios integrados'],
    },
    {
        id: 'closets',
        title: 'Closets Personalizados',
        description:
            'Closets a medida que aprovechan cada centímetro. Diseño interior ergonómico con cajones, zapateros, divisiones y iluminación integrada.',
        icon: 'Layers',
        accentColor: '#6B4C3B',
        features: ['Interiores ergonómicos', 'Puertas corredizas', 'Iluminación LED'],
    },
    {
        id: 'puertas',
        title: 'Puertas en Madera',
        description:
            'Puertas macizas y en MDF con acabados artesanales. Interiores, exteriores y canceles con diseños clásicos y contemporáneos.',
        icon: 'DoorOpen',
        accentColor: '#2D3A3A',
        features: ['Madera maciza y MDF', 'Diseños a medida', 'Acabados artesanales'],
    },
    {
        id: 'muebles',
        title: 'Muebles a Medida',
        description:
            'Creamos muebles únicos diseñados específicamente para tu espacio: salas, comedores, oficinas y más. Cada pieza es irrepetible.',
        icon: 'Sofa',
        accentColor: '#8B6355',
        features: ['Diseño exclusivo', 'Materiales premium', 'Entrega instalado'],
    },
    {
        id: 'entretenimiento',
        title: 'Centros de Entretenimiento',
        description:
            'Muebles para TV y centros de entretenimiento con organización inteligente para equipos, consolas y colecciones.',
        icon: 'Monitor',
        accentColor: '#3D4F4F',
        features: ['Gestión de cables', 'Espacio para equipos', 'Diseño contemporáneo'],
    },
    {
        id: 'remodelaciones',
        title: 'Remodelaciones en Madera',
        description:
            'Transformamos habitaciones completas con revestimientos, paneles decorativos, cielos rasos y acabados en madera de alta calidad.',
        icon: 'Hammer',
        accentColor: '#A06830',
        features: ['Paneles decorativos', 'Revestimientos', 'Cielos rasos'],
    },
]

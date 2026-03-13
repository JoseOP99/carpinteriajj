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
        features: ['Modulares personalizadas', 'Acabados duraderos', 'Accesorios integrados'],
    },
    {
        id: 'closets',
        title: 'Closets Personalizados',
        description:
            'Closets a medida que aprovechan cada centímetro, ideales para espacios reducidos. Diseño interior con cajones, zapateros y divisiones prácticas.',
        icon: 'Layers',
        accentColor: '#6B4C3B',
        features: ['Optimización de espacio', 'Puertas corredizas o abatibles', 'Organización interior'],
    },
    {
        id: 'puertas',
        title: 'Puertas en Madera',
        description:
            'Puertas macizas y en MDF con acabados artesanales. Interiores y exteriores con diseños clásicos y contemporáneos.',
        icon: 'DoorOpen',
        accentColor: '#2D3A3A',
        features: ['Madera maciza y MDF', 'Diseños a medida', 'Acabados artesanales'],
    },
    {
        id: 'muebles',
        title: 'Muebles a Medida',
        description:
            'Creamos muebles únicos diseñados específicamente para tu espacio: salas, comedores, oficinas y más. Cada pieza es hecha a mano para que te identifique.',
        icon: 'Sofa',
        accentColor: '#8B6355',
        features: ['Diseño a tu gusto', 'Buenos materiales', 'Entrega e instalación'],
    },
    {
        id: 'entretenimiento',
        title: 'Centros de Entretenimiento',
        description:
            'Muebles para TV y centros de entretenimiento con organización inteligente para equipos, consolas y colecciones.',
        icon: 'Monitor',
        accentColor: '#3D4F4F',
        features: ['Espacio para equipos', 'Diseño a medida', 'Instalación segura'],
    },
    {
        id: 'remodelaciones',
        title: 'Remodelaciones en Madera',
        description:
            'Transformamos áreas completas con revestimientos, detalles decorativos y acabados en madera de calidad.',
        icon: 'Hammer',
        accentColor: '#A06830',
        features: ['Detalles en madera', 'Revestimientos', 'Renovación de espacios'],
    },
]

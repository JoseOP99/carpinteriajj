/**
 * constants.ts — Constantes globales de la aplicación.
 * Centraliza URLs, datos de contacto, horarios y SEO.
 */

export const WHATSAPP_NUMBER = '573123603837'
export const WHATSAPP_MESSAGE = encodeURIComponent(
    '¡Hola! Vi su página web y me gustaría solicitar información sobre sus servicios.'
)
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/people/Carpinteria-JJ/100087587763167/',
    instagram: 'https://www.instagram.com/carpinteriajj1/',
    whatsapp: 'https://walink.co/3f3a11',
} as const

export const SCHEDULE = {
    weekdays: 'Lunes a Viernes: 8:00 am – 5:00 pm',
    saturday: 'Sábados: 8:00 am – 2:00 pm',
    sunday: 'Domingos: Cerrado',
} as const

export const COMPANY_INFO = {
    name: 'Carpintería JJ',
    tagline: 'Donde la madera se convierte en arte',
    city: 'Medellín, Colombia',
    address: 'Cl 70A # 43-32, Manrique, Medellín, Antioquia',
    phone: '+57 312 360 3837',
    experience: '+25 años',
    projects: '+500 proyectos',
    description:
        'Especialistas en cocinas integrales, closets personalizados, puertas y muebles a medida en Medellín. Madera sólida, MDF y aglomerados de alta calidad.',
} as const

export const SEO = {
    title: 'Carpintería JJ | Muebles a Medida en Medellín, Colombia',
    description:
        'Especialistas en cocinas integrales, closets personalizados, puertas y muebles a medida en Medellín. Madera sólida, MDF y aglomerados de alta calidad. +25 años de experiencia.',
    keywords:
        'carpinteria, carpinteria medellin, cocina, closet, puertas, muebles a medida, cocinas integrales, carpintero medellin',
    url: 'https://carpinteriajj.com',
} as const

export const NAV_LINKS = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#galeria' },
    { label: 'Inspiración', href: '#inspiracion' },
    { label: 'Contacto', href: '#contacto' },
] as const

/**
 * `JsonLd`
 *
 * Componente servidor (RSC) que inyecta datos estructurados JSON-LD
 * en el `<head>` de la página bajo el esquema `LocalBusiness` de Schema.org.
 *
 * Los datos estructurados son esenciales para el SEO local: le dicen a
 * Google exactamente quién es el negocio, dónde está ubicado, qué servicios
 * ofrece y cuándo atiende — aumentando la probabilidad de aparecer en el
 * Local Pack de Google Maps y en Rich Results.
 *
 * @see https://schema.org/LocalBusiness
 * @see https://developers.google.com/search/docs/appearance/structured-data/local-business
 * @component Server Component — no requiere 'use client'
 * @returns React.JSX.Element — un `<script>` con type="application/ld+json"
 */
export default function JsonLd() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://carpinteriajj.com/#business',
        name: 'Carpintería JJ',
        alternateName: 'Ebanistería JJ Medellín',
        description:
            'Especialistas en cocinas integrales, closets personalizados, puertas de madera sólida y muebles a medida en Medellín. Más de 25 años de experiencia artesanal.',
        url: 'https://carpinteriajj.com',
        telephone: '+57-312-360-3837',
        image: 'https://carpinteriajj.com/og-image.png',
        logo: 'https://carpinteriajj.com/Logo.png',
        priceRange: '$$',
        currenciesAccepted: 'COP',
        paymentAccepted: 'Cash, Bank Transfer',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Cl 70A # 43-32',
            addressLocality: 'Medellín',
            addressRegion: 'Antioquia',
            postalCode: '050001',
            addressCountry: 'CO',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 6.2442,
            longitude: -75.5812,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '17:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday'],
                opens: '08:00',
                closes: '14:00',
            },
        ],
        sameAs: [
            'https://www.facebook.com/people/Carpinteria-JJ/100087587763167/',
            'https://www.instagram.com/carpinteriajj1/',
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Servicios de Carpintería',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cocinas Integrales a Medida en Medellín' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Closets Personalizados Medellín' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Puertas de Madera Sólida' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Muebles a Medida Envigado' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Centros de Entretenimiento' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Remodelaciones en Madera' } },
            ],
        },
        areaServed: [
            { '@type': 'City', name: 'Medellín' },
            { '@type': 'City', name: 'Envigado' },
            { '@type': 'City', name: 'Itagüí' },
            { '@type': 'City', name: 'Sabaneta' },
            { '@type': 'City', name: 'Bello' },
        ],
        founder: {
            '@type': 'Person',
            name: 'José Ortiz',
            jobTitle: 'Maestro Ebanista',
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
        />
    )
}

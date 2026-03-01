/**
 * inspiration.ts — Artículos editoriales y casos de éxito de Carpintería JJ.
 */

export type InspirationType = 'caso-exito' | 'consejo' | 'tendencia'

export interface InspirationArticle {
    id: string
    type: InspirationType
    typeLabel: string
    title: string
    summary: string
    content: string
    tag: string
    accentColor: string
    readTime: string
}

export const INSPIRATION_ARTICLES: InspirationArticle[] = [
    {
        id: 'cocina-laureles-caso',
        type: 'caso-exito',
        typeLabel: '🏆 Caso de Éxito',
        title: 'Cocina en Laureles: de espacios desaprovechados a cocina integral moderna',
        summary:
            'Una familia en Laureles tenía una cocina anticuada que perdía el 40% del espacio útil. Transformamos su espacio en 3 semanas.',
        content: `**El problema:** Una cocina de 12m² con módulos desorganizados, sin isla y sin espacio de almacenamiento funcional. La familia necesitaba más superficie de trabajo y un punto social para reunirse.

**Nuestra solución:** Diseñamos una cocina en L con isla central de 1.8m, aprovechando la pared ciega para una estantería abierta de madera. Utilizamos MDF lacado en blanco mate para los módulos inferiores y enchape de madera natural en la isla.

**El resultado:** El espacio percibido creció un 60%. La isla se convirtió en el centro social de la casa. El cliente nos recomendó a tres vecinos en la misma urbanización.

> "Carpintería JJ entendió exactamente lo que queríamos. El proceso fue transparente y entregaron antes del plazo." — *Familia García, Laureles*`,
        tag: 'Cocinas · Medellín',
        accentColor: '#C4843A',
        readTime: '3 min',
    },
    {
        id: 'mdf-vs-madera-consejo',
        type: 'consejo',
        typeLabel: '💡 Consejo Experto',
        title: 'MDF vs Madera Sólida: cómo elegir en el clima húmedo de Medellín',
        summary:
            'El clima de Medellín tiene una humedad relativa promedio del 70%. Esto afecta directamente la vida útil de tus muebles si no eliges bien.',
        content: `**El dilema:** Nuestros clientes suelen preguntar: ¿debo usar madera sólida o MDF? La respuesta depende del espacio, el uso y el presupuesto.

**Madera Sólida — Cuándo elegirla:**
- Puertas de acceso exterior
- Muebles con carga pesada estructural
- Cuando la veta natural es parte del diseño

**MDF — Cuándo es la mejor opción:**
- Cocinas y baños (con sellante impermeabilizante)
- Closets de interior
- Muebles con acabados pintados o lacados

**En Medellín específicamente:** Recomendamos tratamiento antimicótico en zonas de alta humedad como Bello, Copacabana y zonas bajas del Valle de Aburrá. Para El Poblado (zona alta y más seca), el MDF estándar funciona muy bien.

**Nuestra recomendación:** Consulta con nosotros. Evaluamos cada proyecto de forma gratuita. 📱`,
        tag: 'Materiales · Guía',
        accentColor: '#2D3A3A',
        readTime: '4 min',
    },
    {
        id: 'tendencias-2025',
        type: 'tendencia',
        typeLabel: '✨ Tendencias 2025',
        title: 'Acabados mate, verde musgo y madera natural: el combo que domina el diseño de interiores',
        summary:
            'Las tendencias de diseño interior para 2025 consolidan la vuelta a lo orgánico. La madera natural y los colores tierra son los protagonistas.',
        content: `**Los 3 elementos que definen 2025:**

**1. Madera Natural Sin Tapar**
La veta visible vuelve con fuerza. Los enchapes de madera real (nogal, roble, guayacán) son el material de lujo de este año. Nada de imitaciones en papel.

**2. Colores Tierra y Verde Musgo**
El verde salvia, verde musgo y los marrones cálidos desplazan los blancos y grises fríos que dominaron la última década. Esta paleta conecta con la naturaleza y transmite calma.

**3. Acabados Mate en Todo**
Las superficies brillantes quedaron para el pasado. El mate es más elegante, oculta huellas y fotografía mejor para redes sociales.

**Combinación ganadora:**
Closet en MDF verde musgo mate + tiradores en madera natural + iluminación LED cálida = el vestier que todos quieren en 2025.

¿Quieres implementar estas tendencias en tu hogar? 🏠`,
        tag: 'Diseño · 2025',
        accentColor: '#6B4C3B',
        readTime: '5 min',
    },
]

# 🪵 PROMPT DEFINITIVO — Landing Page Carpintería JJ
### Para usar en: v0.dev · Bolt.new · Cursor · GitHub Copilot · ChatGPT · Gemini

---

## 🎯 CONTEXTO Y ROL

Actúa como un **Lead Frontend Developer Senior** especializado en UI/UX de alto impacto.
Tu misión es construir una **landing page premium de una sola página** para **Carpintería JJ**, un taller artesanal ubicado en **Medellín, Colombia**.

La página NO es un e-commerce. Es una **vitrina digital de lujo** cuyo único objetivo es:
> Convertir visitantes en contactos directos por **WhatsApp, Instagram y Facebook**.

La estética debe transmitir: **lujo artesanal · confianza profesional · maestría en madera**.

---

## 🛠️ STACK TECNOLÓGICO OBLIGATORIO

| Tecnología | Versión | Propósito |
|---|---|---|
| **Next.js** | 14+ App Router | Framework base |
| **TypeScript** | 5+ | Tipado estricto en todo el proyecto |
| **Tailwind CSS** | 3.4+ | Estilos con paleta personalizada |
| **Framer Motion** | 11+ | Animaciones: scroll reveal, hover, transitions |
| **Lucide React** | Latest | Iconografía consistente |
| **next/font** | Built-in | Fuentes optimizadas sin layout shift |

---

## 🎨 SISTEMA DE DISEÑO

### Paleta de Colores (definir en `tailwind.config.js`)
```js
colors: {
  forest:  { DEFAULT: '#2D3A3A', light: '#3D4F4F', dark: '#1E2828' },
  cream:   { DEFAULT: '#F5F5F7', warm: '#EDE8DF', dark: '#D4CFC6' },
  wood:    { DEFAULT: '#3D2B1F', light: '#6B4C3B', mid: '#8B6355', warm: '#C4843A' },
  gold:    { DEFAULT: '#C4843A', light: '#D4A060', dark: '#A06830' },
}
```

### Tipografía
- **Títulos / Display**: `Cormorant Garamond` (serif, elegante, artesanal)
- **Cuerpo / UI**: `DM Sans` (sans-serif, legible, moderno)
- Configurar ambas vía `next/font/google` con `variable` CSS para uso en Tailwind.

### Principios Visuales
- Minimalismo cálido — No frío ni estéril
- Espaciado generoso — Secciones con `py-20 md:py-32`
- Jerarquía tipográfica clara — Display serif + body sans
- Animaciones suaves — Duración 300–800ms, ease `[0.25, 0.46, 0.45, 0.94]`
- **Mobile-first** — Diseñar primero para 375px, escalar hacia arriba

---

## 📁 ARQUITECTURA MODULAR (OBLIGATORIA)

```
/
├── app/
│   ├── layout.tsx           ← Metadatos SEO + fuentes + estructura HTML base
│   ├── page.tsx             ← Solo importa y ensambla secciones (< 50 líneas)
│   └── globals.css          ← Tailwind + variables CSS + componentes base
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx       ← Navbar sticky glassmorphism + menú mobile
│   │   └── Footer.tsx       ← Links, redes, horarios, copyright
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── InspirationSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       └── WhatsAppButton.tsx  ← Botón flotante global
│
├── data/
│   ├── services.ts          ← Array tipado de servicios
│   ├── gallery.ts           ← Proyectos con categorías y metadata
│   └── inspiration.ts       ← Artículos editoriales y casos de éxito
│
└── lib/
    └── constants.ts         ← WhatsApp URL, redes sociales, horarios, SEO
```

**Regla de oro**: `page.tsx` solo importa componentes. Cero lógica de UI en el entry point.

---

## 📐 BUENAS PRÁCTICAS (TODAS OBLIGATORIAS)

### Clean Code
- Nombres semánticos: `handleOpenGalleryModal`, no `handleClick`
- Constantes para todos los textos en `/lib/constants.ts`
- Sin magic strings ni magic numbers en componentes
- Funciones puras y predecibles

### TypeScript
- `strict: true` en `tsconfig.json`
- Interface o Type para **todas** las props de componentes
- Types exportados desde los archivos de datos (`/data/*.ts`)
- Sin uso de `any` — usar `unknown` si es necesario

### Documentación JSDoc
```typescript
/**
 * GalleryCard — Tarjeta de proyecto con hover overlay y apertura de modal.
 *
 * @param {GalleryCardProps} props
 * @param {GalleryProject} props.project - Datos del proyecto a mostrar
 * @param {(p: GalleryProject) => void} props.onOpen - Callback al hacer clic
 * @param {number} props.index - Índice para el delay de la animación stagger
 */
```

### Accesibilidad (a11y)
- `role`, `aria-label`, `aria-expanded`, `aria-modal` en todos los elementos interactivos
- Focus visible con `focus:outline-none focus:ring-2 focus:ring-gold`
- Cierre de modales con tecla `Escape`
- `alt` descriptivo en todas las imágenes
- Contraste de color mínimo WCAG AA

### Rendimiento
- `next/image` con `priority` en el Hero, `loading="lazy"` en la galería
- `useCallback` en handlers de galería para evitar re-renders
- Animaciones con `once: true` en `useInView` (no se repiten)
- `scroll-smooth` en `<html>` para navegación interna

---

## 🔍 SEO LOCAL (OBLIGATORIO)

Configurar en `app/layout.tsx` usando la API de Metadata de Next.js:

```typescript
export const metadata: Metadata = {
  title: 'Carpintería JJ | Muebles a Medida en Medellín, Colombia',
  description: 'Especialistas en cocinas integrales, closets personalizados, puertas y muebles a medida en Medellín. Madera sólida, MDF y aglomerados premium. +15 años de experiencia.',
  keywords: 'carpintería en Medellín, muebles a medida Medellín, cocinas integrales Medellín, closets personalizados Medellín, puertas en madera Medellín, carpintero Medellín',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    title: '...',
    description: '...',
    siteName: 'Carpintería JJ',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://carpinteriajj.com' },
}
```

---

## 🧩 SECCIONES — ESPECIFICACIONES DETALLADAS

---

### 1️⃣ HEADER (Sticky + Glassmorphism)

**Comportamiento:**
- Transparente sobre el Hero
- Al hacer scroll > 20px: aplicar `backdrop-blur-lg bg-cream/85 border-b border-wood/10 shadow-sm`
- Logo: texto tipográfico `Carpintería JJ` en Cormorant Garamond

**Desktop:** Links de navegación con efecto underline `::after` al hover
**Mobile:** Botón hamburguesa → menú desplegable animado con `AnimatePresence`

**Links:** Nosotros · Servicios · Proyectos · Inspiración · Contacto
(todos con scroll suave a `#id` de sección)

---

### 2️⃣ HERO SECTION (Pantalla completa)

**Layout:** Full viewport height (`min-h-screen`), contenido centrado

**Fondo:**
```
// Placeholder hasta tener foto real del taller:
bg-gradient-to-br from-wood via-forest to-wood-dark
+ overlay rgba(0,0,0,0.50)
+ textura sutil de líneas verticales (CSS puro)
```
> ⚠️ Cuando haya fotos reales: reemplazar con `<Image fill priority src="/hero.jpg" className="object-cover" />`

**Contenido (animación stagger con Framer Motion):**
1. Badge: `Medellín, Colombia · Carpintería Premium` (borde gold, texto gold)
2. H1 Serif: `"Carpintería JJ: donde la madera se convierte en arte"` — 5xl→8xl
3. Párrafo: ubicación + materiales + años de experiencia
4. CTAs:
   - `"Cotizar por WhatsApp"` → verde WhatsApp, link a `wa.me/...`
   - `"Ver Proyectos"` → borde cream, scroll a `#galeria`
5. Flecha animada hacia abajo (loop infinito, `animate-bounce` suave)

---

### 3️⃣ SOBRE NOSOTROS (Layout asimétrico)

**Grid:** 2 columnas en desktop (texto 55% / imagen 45%), 1 columna en mobile

**Texto:**
```
Carpintería JJ nació en Medellín de una convicción simple: cada espacio
merece un mueble hecho exactamente para él. Más de 15 años transformando
hogares con madera sólida, MDF y aglomerados de primera calidad.
```

**Imagen:**
- Placeholder: gradiente madera oscura con label "Foto del taller"
- Card flotante inferior-izquierda: `"15+ Años"` sobre fondo cream
- Card flotante superior-derecha: `"500+ Proyectos"` sobre fondo wood

**Valores (lista con CheckCircle gold):**
- +15 años de experiencia en Medellín
- Madera sólida, MDF y aglomerados premium
- Diseño personalizado — ningún proyecto igual
- Tiempos de entrega cumplidos
- Garantía en materiales y acabados

---

### 4️⃣ SERVICIOS (Grid de Cards)

**Grid:** 3 columnas desktop / 2 tablet / 1 mobile

**Servicios (datos en `/data/services.ts`):**

| ID | Título | Icono Lucide | Color Acento |
|---|---|---|---|
| cocinas | Cocinas Integrales | `ChefHat` | #C4843A |
| closets | Closets Personalizados | `Layers` | #6B4C3B |
| puertas | Puertas en Madera | `DoorOpen` | #2D3A3A |
| muebles | Muebles a Medida | `Sofa` | #8B6355 |
| entretenimiento | Centros de Entretenimiento | `Monitor` | #3D4F4F |
| remodelaciones | Remodelaciones en Madera | `Hammer` | #A06830 |

**Cada card:**
- Fondo blanco, borde `cream-dark`
- Al hover: `translateY(-4px)` + sombra + borde top de color acento (scale-x 0→1)
- Icono en contenedor con `bg-acento/15`
- Título serif, descripción sans-serif

---

### 5️⃣ GALERÍA DE PROYECTOS (Filtros Dinámicos + Lightbox)

**Estado con `useState<GalleryCategory>`**

**Categorías:**
```typescript
type GalleryCategory = 'todos' | 'cocinas' | 'closets' | 'puertas' | 'muebles'
```

**Filtros:** Botones pill con estado activo (bg-wood text-cream) vs inactivo (borde)

**Grid:** 4 cols desktop / 3 tablet / 2 mobile — `aspect-square` por card

**Cada card (`GalleryCard`):**
- Placeholder: gradiente según color del proyecto
- Al hover: overlay bg-wood/80 con título, material, año + ícono ZoomIn
- Badge de categoría en esquina superior izquierda (visible sin hover)
- Al click: abre `GalleryModal`

**Modal (`GalleryModal`):**
- Backdrop blur + oscuro
- Panel con imagen (60%) + info (40%)
- Animación spring entrada/salida
- Cierre: botón X + tecla Escape + click en backdrop
- Bloquea scroll del body mientras está abierto

**Proyectos mínimos:** 12 (3 por categoría principal)

---

### 6️⃣ INSPIRACIÓN Y CASOS DE ÉXITO

**Tres artículos en grid 3 cols desktop / 1 mobile**

**Tipos con colores diferenciados:**
- 🏆 `caso-exito` → acento gold
- 💡 `consejo` → acento forest
- ✨ `tendencia` → acento wood

**Artículo 1 — Caso de Éxito:**
> Cocina en Laureles: de espacios desaprovechados a cocina integral moderna.
> *Problema → Solución → Resultado*

**Artículo 2 — Consejo Experto:**
> MDF vs Madera Sólida: cómo elegir en el clima húmedo de Medellín.

**Artículo 3 — Tendencias 2025:**
> Acabados mate, verde musgo y madera natural: el combo que domina el diseño interior.

**Al hacer click:** Modal con contenido completo del artículo.

---

### 7️⃣ CONTACTO Y UBICACIÓN

**Fondo:** `bg-wood text-cream` — sección oscura de contraste alto

**Layout:** 2 columnas desktop (info + mapa), 1 columna mobile

**Columna info:**
- H2 serif: `"¿Listo para transformar tu espacio?"`
- Párrafo: `"Sin formularios, sin esperas. Respondemos en menos de 2 horas."`
- Botón grande WhatsApp (ancho completo mobile): `"Solicitar información por WhatsApp"`
- Botones Facebook + Instagram (outline cream)
- Dirección con ícono MapPin
- Horarios con ícono Clock:
  - Lunes–Viernes: 8:00am – 6:00pm
  - Sábados: 8:00am – 1:00pm

**Columna mapa:**
```html
<iframe
  src="https://www.google.com/maps/embed?pb=...Medellín..."
  width="100%" height="420"
  loading="lazy"
  title="Carpintería JJ en Medellín"
/>
```
Borde `cream/10`, `rounded-sm`, `shadow-2xl`

---

### 8️⃣ BOTÓN FLOTANTE WHATSAPP (Global)

```typescript
// Siempre visible, posición fixed bottom-6 right-6 z-50
// Animación de entrada: spring delay 1.5s
// Anillo de pulso externo: animate-ping opacity-30
// Al hover: scale(1.1)
// Tooltip: "¡Cotiza ahora!" al hover (opcional)
```

**URL con mensaje precargado:**
```typescript
const WHATSAPP_URL = `https://wa.me/57XXXXXXXXXX?text=${encodeURIComponent(
  '¡Hola! Vi su página web y me gustaría solicitar información sobre sus servicios.'
)}`
```

---

## 📦 DATOS CENTRALIZADOS

### `/lib/constants.ts`
```typescript
export const WHATSAPP_NUMBER = '573XXXXXXXXX'
export const WHATSAPP_MESSAGE = encodeURIComponent('¡Hola! ...')
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/carpinteriajj',
  instagram: 'https://instagram.com/carpinteriajj',
  whatsapp: WHATSAPP_URL,
} as const

export const SCHEDULE = {
  weekdays: 'Lunes a Viernes: 8:00 am – 6:00 pm',
  saturday: 'Sábados: 8:00 am – 1:00 pm',
  sunday: 'Domingos: Cerrado',
} as const
```

---

## ⚙️ CONFIGURACIÓN NEXT.JS

### `tailwind.config.js` — Paleta + fuentes + animaciones custom
### `tsconfig.json` — `strict: true` + path alias `@/*`
### `next.config.js` — `reactStrictMode: true`
### `postcss.config.js` — Tailwind + Autoprefixer

---

## 🚫 RESTRICCIONES ABSOLUTAS

| ❌ Prohibido | ✅ Correcto |
|---|---|
| Formulario de cotización | Solo botones de WhatsApp/Redes |
| `any` en TypeScript | Tipos explícitos siempre |
| Imágenes externas que puedan romperse | Placeholders CSS o `/public` |
| Texto en inglés en la UI | Todo en español colombiano |
| Lógica en `page.tsx` | Solo composición de secciones |
| Librerías pesadas de UI (MUI, Ant) | Solo Tailwind + Framer Motion |
| `localStorage` en componentes | Estado en React (`useState`) |
| Animaciones sin `once: true` | Scroll reveal solo una vez |

---

## ✅ CHECKLIST DE ENTREGA

- [ ] `tailwind.config.js` con paleta forest/cream/wood/gold
- [ ] `app/layout.tsx` con metadatos SEO completos + Open Graph
- [ ] `app/page.tsx` — máximo 50 líneas, solo imports y composición
- [ ] `lib/constants.ts` con WhatsApp URL, redes y horarios
- [ ] `data/services.ts` + `data/gallery.ts` + `data/inspiration.ts`
- [ ] 8 componentes en `/components/sections/` y `/components/layout/`
- [ ] `WhatsAppButton.tsx` flotante con animación
- [ ] Galería con filtros `useState` + Modal + cierre por Escape
- [ ] Diseño mobile-first responsive en todos los componentes
- [ ] JSDoc en todos los componentes y funciones complejas
- [ ] Sin errores de TypeScript (`tsc --noEmit` sin warnings)
- [ ] `npm run build` exitoso sin errores

---

*Carpintería JJ · Medellín, Colombia · Madera sólida, MDF y aglomerados premium*

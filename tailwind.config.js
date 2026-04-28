/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Paleta sofisticada: evolución premium
                forest: {
                    DEFAULT: '#2A3535', // Ligeramente más oscuro
                    light: '#3B4C4C',
                    dark: '#1B2424', // Oscuro más profundo
                    pure: '#1A1F1F',
                },
                cream: {
                    DEFAULT: '#F9F8F5', // Blanco roto más cálido
                    warm: '#F0E9DD', // Beige Premium
                    dark: '#D9D0C3', // Champagne
                    light: '#FDFCFA',
                },
                wood: {
                    DEFAULT: '#3D2B1F',
                    dark: '#1C1108', // Chocolate oscuro
                    light: '#6B4C3B',
                    mid: '#8B6355',
                    warm: '#C4843A',
                    caoba: '#5C3D30', // Caoba
                    chocolate: '#3E2723', // Chocolate profundo
                },
                gold: {
                    DEFAULT: '#B8784D', // Oro envejecido
                    light: '#D4A060',
                    dark: '#8B6840', // Bronce oscuro
                    subtle: '#A39068', // Tonos más sutiles
                    rich: '#9B7E58', // Oro rico
                },
                // Nuevos: glassmorphism
                glass: {
                    light: 'rgba(255, 255, 255, 0.25)',
                    lighter: 'rgba(255, 255, 255, 0.1)',
                    dark: 'rgba(0, 0, 0, 0.1)',
                    darker: 'rgba(0, 0, 0, 0.2)',
                },
                pearl: {
                    DEFAULT: '#E8E4DD',
                    light: '#F3F1ED',
                },
                // === PALETAS ALTERNATIVAS MODERNAS ===
                // Opción 1: Tonos esmeralda + cobre (luxury moderno)
                emerald: {
                    deep: '#0F2E2E',
                    dark: '#1A4A4A',
                    DEFAULT: '#2D6B6B',
                    light: '#4A8F8F',
                },
                copper: {
                    dark: '#8B4513',
                    DEFAULT: '#B87333',
                    light: '#DA8A4F',
                    bright: '#E8A87C',
                },
                // Opción 2: Borgoña + champagne (elegancia clásica)
                burgundy: {
                    dark: '#4A0E1A',
                    DEFAULT: '#722F37',
                    light: '#A0454D',
                },
                champagne: {
                    DEFAULT: '#F7E7CE',
                    rich: '#E8C77F',
                    deep: '#C9A557',
                },
                // Opción 3: Carbón + dorado moderno (industrial luxury)
                charcoal: {
                    deep: '#0A0A0A',
                    dark: '#1A1A1A',
                    DEFAULT: '#2A2A2A',
                    light: '#3D3D3D',
                },
                amber: {
                    deep: '#8B5A00',
                    DEFAULT: '#FFA500',
                    light: '#FFC966',
                    bright: '#FFD700',
                },
            },
            fontFamily: {
                display: ['var(--font-cormorant)', 'serif'],
                body: ['var(--font-dm-sans)', 'sans-serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'pulse-ring': 'pulseRing 2s ease-in-out infinite',
                'glass-float': 'glassFloat 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s infinite',
            },
            keyframes: {
                fadeUp: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                pulseRing: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
                    '50%': { transform: 'scale(1.4)', opacity: '0' },
                },
                glassFloat: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
            },
            backdropBlur: {
                xs: '2px',
                sm: '4px',
                md: '12px',
                lg: '16px',
                xl: '24px',
            },
            boxShadow: {
                // Glassmorphism elegante
                'glass-sm': '0 8px 32px rgba(31, 38, 135, 0.05)',
                'glass-md': '0 8px 32px rgba(31, 38, 135, 0.1)',
                'glass-lg': '0 8px 32px rgba(31, 38, 135, 0.15)',
                'glass-xl': '0 16px 48px rgba(31, 38, 135, 0.2)',
                // Elevación sofisticada
                'elevation-sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
                'elevation-md': '0 4px 16px rgba(0, 0, 0, 0.12)',
                'elevation-lg': '0 8px 24px rgba(0, 0, 0, 0.15)',
                'elevation-xl': '0 12px 32px rgba(0, 0, 0, 0.2)',
                // Hover sofisticado
                'hover-glow': '0 0px 20px rgba(196, 132, 58, 0.15)',
            },
            backgroundImage: {
                'gradient-gold-wood': 'linear-gradient(135deg, #C4843A 0%, #6B4C3B 100%)',
                'gradient-cream-wood': 'linear-gradient(135deg, #F9F8F5 0%, #8B6355 100%)',
                'gradient-subtle': 'linear-gradient(135deg, #F9F8F5 0%, #E8E4DD 100%)',
                'gradient-dark-wood': 'linear-gradient(135deg, #1C1108 0%, #3D2B1F 100%)',
            },
            transitionTimingFunction: {
                'smooth-out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            },
            transitionDuration: {
                '250': '250ms',
                '350': '350ms',
            },
        },
    },
    plugins: [],
}

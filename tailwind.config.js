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
                forest: {
                    DEFAULT: '#2D3A3A',
                    light: '#3D4F4F',
                    dark: '#1E2828',
                },
                cream: {
                    DEFAULT: '#F5F5F7',
                    warm: '#EDE8DF',
                    dark: '#D4CFC6',
                },
                wood: {
                    DEFAULT: '#3D2B1F',
                    light: '#6B4C3B',
                    mid: '#8B6355',
                    warm: '#C4843A',
                },
                gold: {
                    DEFAULT: '#C4843A',
                    light: '#D4A060',
                    dark: '#A06830',
                },
            },
            fontFamily: {
                display: ['var(--font-cormorant)', 'serif'],
                body: ['var(--font-dm-sans)', 'sans-serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease forwards',
                'fade-in': 'fadeIn 0.8s ease forwards',
                'pulse-ring': 'pulseRing 2s ease-in-out infinite',
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
            },
            transitionTimingFunction: {
                'smooth-out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            },
        },
    },
    plugins: [],
}

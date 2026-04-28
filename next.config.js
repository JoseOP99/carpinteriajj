/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // Optimización de imágenes
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 86400, // 24h
        dangerouslyAllowSVG: false,
        contentDispositionType: 'attachment',
    },

    // Compresión y optimización
    compress: true,
    poweredByHeader: false, // Quita el header X-Powered-By para seguridad
    productionBrowserSourceMaps: false, // Reduce bundle de producción

    // Optimización de paquetes
    experimental: {
        optimizePackageImports: ['lucide-react', 'framer-motion'],
    },

    // Headers de seguridad y caching
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                ],
            },
            {
                source: '/Logo.png',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/images/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/(.*).(png|jpg|jpeg|webp|avif|svg)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig

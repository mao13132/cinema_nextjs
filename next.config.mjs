/** @type {import('next').NextConfig} */
const nextConfig = {
    /* Отключить показ движка */
    poweredByHeader: false,
    optimizeFonts: false,
    env: {
        APP_URL: process.env.REACT_APP_URL,
        APP_ENV: process.env.REACT_APP_ENV
    },

    /* Переадресация путей */
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8000/api/:path*',
            },
            {
                source: '/media/:path*',
                destination: 'http://localhost:8000/media/:path*',
            }
        ]
    },
};

export default nextConfig;

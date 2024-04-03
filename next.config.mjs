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
                source: '/uploads/:path*',
                destination: 'http://localhost:4200/uploads/:path*',
            }
        ]
    },
};

export default nextConfig;

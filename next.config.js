/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, // Optional: helpful for static export

    // Note: 'rewrites' are not supported in strictly static export ('output: export').
    // However, 'middleware' runs before typical static handling in dev/server mode.
    // If the user plans to deploy as purely static files (e.g. Apache/Nginx serving HTML),
    // they will need server-side configuration (htaccess/nginx.conf) to map index.php.
    // But if deploying to Vercel or a Node server, middleware handles it.
    // The user asked for a Next.js application, not necessarily a static export,
    // BUT the initial prompt instructions mentioned `output: 'export'` might be needed if no server.
    // Given I am doing `npx next build` and getting `output: export` implied?
    // Using `output: 'export'` disables middleware!
    // I need to check if I am forced to use `output: export`.
    // The build log said "Generating static pages", which happens in default build too.
    // Middleware IS supported in default build (Node.js server).
    // If I use `output: 'export'`, middleware is ignored.
    // I will assume default Node.js deployment unless specified otherwise.
    // If static export is required, I cannot use middleware for this logic effectively without server config.

    async rewrites() {
        return [
            {
                source: '/index.php',
                destination: '/',
            },
        ];
    },
};

module.exports = nextConfig;

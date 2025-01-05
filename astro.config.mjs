// is this good?, for the icons array should i copy the same icons from the manifest.json file?
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import AstroPWA from '@vite-pwa/astro'


// https://astro.build/config
export default defineConfig({
    integrations: [react(), sitemap(), tailwind(),
        AstroPWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'SavePlays',
                icons: [
                    {
                        "src": "/android-icon-36x36.png",
                        "sizes": "36x36",
                        "type": "image/png",
                    },
                    {
                        "src": "/android-icon-48x48.png",
                        "sizes": "48x48",
                        "type": "image/png",
                    },
                    {
                        "src": "/android-icon-72x72.png",
                        "sizes": "72x72",
                        "type": "image/png",
                    },
                    {
                        "src": "/android-icon-96x96.png",
                        "sizes": "96x96",
                        "type": "image/png",
                    },
                    {
                        "src": "/android-icon-144x144.png",
                        "sizes": "144x144",
                        "type": "image/png",
                    },
                    {
                        "src": "/android-icon-192x192.png",
                        "sizes": "192x192",
                        "type": "image/png",
                    }
                ],
                short_name: 'SavePlays',
                description: 'Save videos offline! saveplays.com lets you download from popular platforms in various formats.',
                theme_color: '#2ab7a9',
                background_color: '#ffffff',
                display: 'standalone',
                start_url: '/',
                scope: '/'
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
            }
        })
    ],
    site: "https://www.saveplays.com/"
});
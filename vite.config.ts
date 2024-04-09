import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr({ exportAsDefault: true })],
    server: {
        open: true,
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
    },

    resolve: {
        alias: [
            {
                find: '@',
                replacement: '/src',
            },
        ],
    },
});

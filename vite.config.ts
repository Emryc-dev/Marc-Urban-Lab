import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      // Preserves self-contained index.html (with importmap & inline ES module)
      // in both dev and production builds without Vite stripping importmap tags.
      {
        name: 'preserve-standalone-html',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url?.split('?')[0];
            if (url === '/' || url === '/index.html') {
              const htmlPath = path.resolve(__dirname, 'index.html');
              if (fs.existsSync(htmlPath)) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(fs.readFileSync(htmlPath, 'utf-8'));
                return;
              }
            }
            next();
          });
        },
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const srcHtml = path.resolve(__dirname, 'index.html');
          const distHtml = path.resolve(__dirname, 'dist/index.html');
          if (fs.existsSync(srcHtml) && fs.existsSync(path.dirname(distHtml))) {
            fs.copyFileSync(srcHtml, distHtml);
          }
        },
      },
      // Copies src/assets into dist/ so root-relative URLs like
      // "/src/assets/images/..." (e.g. generate_image output) still resolve
      // in production builds. Do not remove.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

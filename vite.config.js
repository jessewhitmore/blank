import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: true,
    host: '0.0.0.0',
    port: 8080,
    fs: {
      strict: false,
      serve: {
        '/': '', // Serve files from the root of the _site directory
        watch: {
          paths: ['src'], // Watch the entire src directory
          usePolling: true,
        }
      }
    }
  },
  build: {
    outDir: '_site',
    assetsDir: 'assets/js',
    rollupOptions: {
      input: {
        main: 'src/js/main.js',
      },
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: `assets/js/[name].[ext]`,
      },
    },
  },
});
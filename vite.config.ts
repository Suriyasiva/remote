import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    strictPort: true,
    allowedHosts: ['*'],
    cors: false,
  },
  preview: {
    allowedHosts: ['*'],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    cors: false,
  },
  plugins: [
    react(),
    federation({
      name: 'user',
      filename: 'remoteEntry.js',
      exposes: {
        './User': './src/app/pages/User.tsx',
      },
      shared: {
        react: { requiredVersion: '^18.0.0' },
        'react-dom': { requiredVersion: '^18.0.0' },
        'react-router-dom': { requiredVersion: '6' },
        '@chakra-ui/react': { requiredVersion: '2' },
        '@emotion/react': { requiredVersion: '^11.14.0' },
        '@emotion/styled': { requiredVersion: '^11.14.0' },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});

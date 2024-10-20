import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Public: path.resolve(__dirname, 'public'),
      Components: path.resolve(__dirname, 'src/components'),
      UI: path.resolve(__dirname, 'src/components/specific'),
      Constants: path.resolve(__dirname, 'src/utils/constants'),
      Content: path.resolve(__dirname, 'src/utils/content'),
    },
  },
})

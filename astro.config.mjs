import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ضع النطاق الإنتاجي هنا فقط بعد تسجيله. اتركه فارغًا الآن.
const site = '';

export default defineConfig({
  site: site || undefined,
  output: 'static',
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});

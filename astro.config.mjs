import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// النطاق الإنتاجي المسجّل — مصدر واحد للحقيقة للروابط الأساسية وcanonical وsitemap وعنوان المنشأ في البيانات المنظمة.
const site = 'https://montazapalace.com';

export default defineConfig({
  site: site || undefined,
  output: 'static',
  trailingSlash: 'always',
  integrations: site ? [sitemap({ filter: (page) => !/^\/(?:en\/)?404(?:\/|\.html)?$/.test(new URL(page).pathname) })] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});

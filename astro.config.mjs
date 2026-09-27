import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://veintiunoapp.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'de', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/imprimir/') && !/\/(en|de|fr)\/print\//.test(page),
      i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en', de: 'de', fr: 'fr' } },
    }),
  ],
});

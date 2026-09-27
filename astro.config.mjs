import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://veintiunoapp.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'de', 'fr', 'pt', 'it', 'nl', 'ja', { path: 'zh-hant', codes: ['zh-Hant', 'zh-TW'] }],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/imprimir/') && !/\/(en|de|fr|pt|it|nl|ja|zh-hant)\/print\//.test(page),
      i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en', de: 'de', fr: 'fr', pt: 'pt-BR', it: 'it', nl: 'nl', ja: 'ja', 'zh-hant': 'zh-Hant' } },
    }),
  ],
});

export type Lang = 'es' | 'en';

export const APP_ID = '6813226836';
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_ID}`;
/** App Store Connect provider token, from App Analytics → Campañas → generate link. */
export const PROVIDER_TOKEN = '128446422';
/** App Store link that App Analytics attributes to `campaign` (max 30 chars). */
export const campaignURL = (campaign: string) =>
  `https://apps.apple.com/app/apple-store/id${APP_ID}?pt=${PROVIDER_TOKEN}&ct=${encodeURIComponent(campaign.slice(0, 30))}&mt=8`;
export const MAIL = 'ivan.sevilla.ruano@gmail.com';

/**
 * Every page that exists in both languages, keyed by a stable id. The header's language
 * switch and the hreflang alternates are generated from this table, so a page's two
 * slugs only ever live here.
 */
export const routes = {
  home: { es: '/', en: '/en/' },
  strategy: { es: '/estrategia-basica-blackjack/', en: '/en/blackjack-strategy-chart/' },
  howToPlay: { es: '/como-jugar-blackjack/', en: '/en/how-to-play-blackjack/' },
  counting: { es: '/contar-cartas-blackjack/', en: '/en/card-counting/' },
  howToWin: { es: '/como-ganar-blackjack/', en: '/en/how-to-win-at-blackjack/' },
  spain: { es: '/reglas-blackjack-casinos-espana/', en: '/en/blackjack-rules-in-spain/' },
  guides: { es: '/guias/', en: '/en/guides/' },
  about: { es: '/sobre-veintiuno/', en: '/en/about/' },
  responsible: { es: '/juego-responsable/', en: '/en/responsible-gambling/' },
  privacy: { es: '/privacidad/', en: '/en/privacy/' },
  terms: { es: '/terminos/', en: '/en/terms/' },
  support: { es: '/soporte/', en: '/en/support/' },
  // Spanish-only for now: the English versions come after Search Console shows what works.
  course: { es: '/curso-blackjack/' },
  simulator: { es: '/jugar-blackjack-gratis/' },
  live: { es: '/blackjack-en-vivo/' },
  countingLegal: { es: '/es-ilegal-contar-cartas/' },
  printable: { es: '/tabla-estrategia-blackjack-pdf/' },
  movie21: { es: '/pelicula-21-blackjack-mit/' },
  bj21: { es: '/blackjack-y-21-diferencias/' },
  hand16v10: { es: '/16-contra-10-blackjack/' },
  whenDouble: { es: '/cuando-doblar-blackjack/' },
  whenSplit: { es: '/cuando-dividir-blackjack/' },
  practiceCounting: { es: '/practicar-contar-cartas/' },
  app: { es: '/app-aprender-blackjack/' },
  dataBust: { es: '/datos/probabilidad-crupier-se-pase/' },
  dataRules: { es: '/datos/ventaja-casa-reglas-blackjack/' },
  data: { es: '/datos/' },
} as const satisfies Record<string, { es: string; en?: string }>;

export type RouteKey = keyof typeof routes;

/** Path of a page in a language, or undefined when that version doesn't exist yet. */
export const pathOf = (key: RouteKey, lang: Lang): string | undefined => (routes[key] as { es: string; en?: string })[lang];

export const ui = {
  es: {
    htmlLang: 'es',
    ogLocale: 'es_ES',
    nav: [
      ['simulator', 'Jugar gratis'],
      ['strategy', 'Estrategia'],
      ['howToPlay', 'Cómo jugar'],
      ['counting', 'Contar cartas'],
      ['guides', 'Guías'],
    ] as [RouteKey, string][],
    otherLang: 'English',
    download: 'Descargar la app',
    downloadShort: 'Descargar',
    downloadLong: '\u00a0la app',
    appStoreSmall: 'Descárgala en el',
    appStoreBig: 'App Store',
    ctaTitle: 'Practica cada decisión hasta que salga sola',
    ctaText:
      'Veintiuno te reparte manos, te corrige al momento y te explica el porqué. Gratis para empezar, sin dinero real y sin apuestas.',
    responsible:
      'Veintiuno es una herramienta educativa: no se juega con dinero real. Si el juego ha dejado de ser diversión, pide ayuda. En España: 900 200 225 (gratuito y confidencial).',
    legal: [
      ['about', 'Sobre Veintiuno'],
      ['responsible', 'Juego responsable'],
      ['privacy', 'Privacidad'],
      ['terms', 'Términos'],
      ['support', 'Soporte'],
    ] as [RouteKey, string][],
    updated: 'Actualizado',
    readTime: 'min de lectura',
    toc: 'En esta guía',
    faq: 'Preguntas frecuentes',
    related: 'Sigue aprendiendo',
    breadcrumbHome: 'Inicio',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    nav: [
      ['strategy', 'Strategy'],
      ['howToPlay', 'How to play'],
      ['counting', 'Card counting'],
      ['guides', 'Guides'],
    ] as [RouteKey, string][],
    otherLang: 'Español',
    download: 'Get the app',
    downloadShort: 'Get',
    downloadLong: '\u00a0the app',
    appStoreSmall: 'Download on the',
    appStoreBig: 'App Store',
    ctaTitle: 'Drill every decision until it’s automatic',
    ctaText:
      'Veintiuno deals you hands, corrects you instantly and tells you why. Free to start, no real money, no betting.',
    responsible:
      'Veintiuno is an educational tool: no real money is involved. If gambling has stopped being fun, ask for help — in the US call 1-800-GAMBLER, in the UK visit BeGambleAware.org.',
    legal: [
      ['about', 'About'],
      ['responsible', 'Responsible gambling'],
      ['privacy', 'Privacy'],
      ['terms', 'Terms'],
      ['support', 'Support'],
    ] as [RouteKey, string][],
    updated: 'Updated',
    readTime: 'min read',
    toc: 'In this guide',
    faq: 'Frequently asked questions',
    related: 'Keep learning',
    breadcrumbHome: 'Home',
  },
} as const;

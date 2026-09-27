export type Lang = 'es' | 'en' | 'de' | 'fr';
export const LANGS: Lang[] = ['es', 'en', 'de', 'fr'];
export const LANG_NAMES: Record<Lang, string> = { es: 'Español', en: 'English', de: 'Deutsch', fr: 'Français' };

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
  home: { es: '/', en: '/en/', de: '/de/', fr: '/fr/' },
  strategy: { es: '/estrategia-basica-blackjack/', en: '/en/blackjack-strategy-chart/', de: '/de/blackjack-strategie-tabelle/', fr: '/fr/tableau-strategie-blackjack/' },
  howToPlay: { es: '/como-jugar-blackjack/', en: '/en/how-to-play-blackjack/', de: '/de/blackjack-regeln/', fr: '/fr/regles-blackjack/' },
  counting: { es: '/contar-cartas-blackjack/', en: '/en/card-counting/', de: '/de/karten-zaehlen/', fr: '/fr/compter-les-cartes/' },
  howToWin: { es: '/como-ganar-blackjack/', en: '/en/how-to-win-at-blackjack/', de: '/de/blackjack-gewinnen/', fr: '/fr/comment-gagner-au-blackjack/' },
  spain: { es: '/reglas-blackjack-casinos-espana/', en: '/en/blackjack-rules-in-spain/', de: '/de/blackjack-regeln-spanien/', fr: '/fr/regles-blackjack-espagne/' },
  guides: { es: '/guias/', en: '/en/guides/', de: '/de/ratgeber/', fr: '/fr/guides/' },
  about: { es: '/sobre-veintiuno/', en: '/en/about/', de: '/de/ueber-veintiuno/', fr: '/fr/a-propos/' },
  responsible: { es: '/juego-responsable/', en: '/en/responsible-gambling/', de: '/de/verantwortungsvolles-spielen/', fr: '/fr/jeu-responsable/' },
  privacy: { es: '/privacidad/', en: '/en/privacy/' },
  terms: { es: '/terminos/', en: '/en/terms/' },
  support: { es: '/soporte/', en: '/en/support/' },
  course: { es: '/curso-blackjack/', en: '/en/blackjack-course/', de: '/de/blackjack-kurs/', fr: '/fr/cours-blackjack/' },
  simulator: { es: '/jugar-blackjack-gratis/', en: '/en/play-blackjack-free/', de: '/de/blackjack-kostenlos-spielen/', fr: '/fr/jouer-blackjack-gratuit/' },
  live: { es: '/blackjack-en-vivo/', en: '/en/live-blackjack/' },
  countingLegal: { es: '/es-ilegal-contar-cartas/', en: '/en/is-card-counting-illegal/', de: '/de/ist-kartenzaehlen-illegal/', fr: '/fr/compter-les-cartes-est-il-illegal/' },
  printable: { es: '/tabla-estrategia-blackjack-pdf/', en: '/en/blackjack-strategy-chart-pdf/', de: '/de/blackjack-strategie-tabelle-pdf/', fr: '/fr/tableau-strategie-blackjack-pdf/' },
  movie21: { es: '/pelicula-21-blackjack-mit/', en: '/en/21-movie-mit-blackjack-team/' },
  bj21: { es: '/blackjack-y-21-diferencias/', en: '/en/blackjack-vs-21/' },
  hand16v10: { es: '/16-contra-10-blackjack/', en: '/en/16-vs-10-blackjack/', de: '/de/16-gegen-10-blackjack/', fr: '/fr/16-contre-10-blackjack/' },
  whenDouble: { es: '/cuando-doblar-blackjack/', en: '/en/when-to-double-down/', de: '/de/blackjack-verdoppeln/', fr: '/fr/quand-doubler-blackjack/' },
  whenSplit: { es: '/cuando-dividir-blackjack/', en: '/en/when-to-split-in-blackjack/', de: '/de/blackjack-splitten/', fr: '/fr/quand-separer-blackjack/' },
  practiceCounting: { es: '/practicar-contar-cartas/', en: '/en/how-to-practice-card-counting/', de: '/de/kartenzaehlen-ueben/', fr: '/fr/s-entrainer-a-compter-les-cartes/' },
  app: { es: '/app-aprender-blackjack/', en: '/en/best-app-to-learn-blackjack/', de: '/de/blackjack-lernen-app/', fr: '/fr/application-apprendre-blackjack/' },
  dataBust: { es: '/datos/probabilidad-crupier-se-pase/', en: '/en/blackjack-data/dealer-bust-probability/', de: '/de/blackjack-daten/dealer-bust-wahrscheinlichkeit/', fr: '/fr/donnees-blackjack/probabilite-croupier-saute/' },
  dataRules: { es: '/datos/ventaja-casa-reglas-blackjack/', en: '/en/blackjack-data/house-edge-by-rules/', de: '/de/blackjack-daten/hausvorteil-regeln/', fr: '/fr/donnees-blackjack/avantage-maison-regles/' },
  data: { es: '/datos/', en: '/en/blackjack-data/', de: '/de/blackjack-daten/', fr: '/fr/donnees-blackjack/' },
} as const satisfies Record<string, { es: string; en?: string; de?: string; fr?: string }>;

export type RouteKey = keyof typeof routes;

/** Path of a page in a language, or undefined when that version doesn't exist yet. */
export const pathOf = (key: RouteKey, lang: Lang): string | undefined => (routes[key] as Partial<Record<Lang, string>>)[lang];

/** Where to link a page from `lang`: its own version, else English, else Spanish. */
export const linkOf = (key: RouteKey, lang: Lang): string => pathOf(key, lang) ?? pathOf(key, 'en') ?? routes[key].es;

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
      ['simulator', 'Play free'],
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
  de: {
    htmlLang: 'de',
    ogLocale: 'de_DE',
    nav: [
      ['simulator', 'Gratis spielen'],
      ['strategy', 'Strategie'],
      ['howToPlay', 'Regeln'],
      ['counting', 'Karten zählen'],
      ['guides', 'Ratgeber'],
    ] as [RouteKey, string][],
    otherLang: 'English',
    download: 'App laden',
    downloadShort: 'App',
    downloadLong: '\u00a0laden',
    appStoreSmall: 'Laden im',
    appStoreBig: 'App Store',
    ctaTitle: 'Trainiere jede Entscheidung, bis sie sitzt',
    ctaText:
      'Veintiuno teilt dir Hände aus, korrigiert dich sofort und erklärt dir warum. Kostenlos zum Einstieg, ohne Echtgeld und ohne Wetten.',
    responsible:
      'Veintiuno ist ein Lernwerkzeug: Es wird nicht um echtes Geld gespielt. Wenn Glücksspiel keinen Spaß mehr macht, hol dir Hilfe – in Deutschland bei der kostenlosen BZgA-Telefonberatung 0800 1 37 27 00.',
    legal: [
      ['about', 'Über Veintiuno'],
      ['responsible', 'Verantwortungsvolles Spielen'],
      ['privacy', 'Datenschutz (EN)'],
      ['terms', 'Nutzungsbedingungen (EN)'],
      ['support', 'Support (EN)'],
    ] as [RouteKey, string][],
    updated: 'Aktualisiert',
    readTime: 'Min. Lesezeit',
    toc: 'In diesem Ratgeber',
    faq: 'Häufige Fragen',
    related: 'Weiterlernen',
    breadcrumbHome: 'Start',
  },
  fr: {
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
    nav: [
      ['simulator', 'Jouer gratuitement'],
      ['strategy', 'Stratégie'],
      ['howToPlay', 'Règles'],
      ['counting', 'Compter les cartes'],
      ['guides', 'Guides'],
    ] as [RouteKey, string][],
    otherLang: 'English',
    download: 'Télécharger l’app',
    downloadShort: 'Télécharger',
    downloadLong: '\u00a0l’app',
    appStoreSmall: 'Télécharger dans',
    appStoreBig: 'l’App Store',
    ctaTitle: 'Entraînez chaque décision jusqu’à ce qu’elle devienne un réflexe',
    ctaText:
      'Veintiuno vous distribue des mains, vous corrige immédiatement et vous explique pourquoi. Gratuit pour commencer, sans argent réel ni mises.',
    responsible:
      'Veintiuno est un outil pédagogique : on n’y joue pas d’argent réel. Si le jeu n’est plus un plaisir, demandez de l’aide – en France, Joueurs Info Service : 09 74 75 13 13 (appel non surtaxé).',
    legal: [
      ['about', 'À propos'],
      ['responsible', 'Jeu responsable'],
      ['privacy', 'Confidentialité (EN)'],
      ['terms', 'Conditions (EN)'],
      ['support', 'Assistance (EN)'],
    ] as [RouteKey, string][],
    updated: 'Mis à jour',
    readTime: 'min de lecture',
    toc: 'Dans ce guide',
    faq: 'Questions fréquentes',
    related: 'Pour aller plus loin',
    breadcrumbHome: 'Accueil',
  },
} as const;

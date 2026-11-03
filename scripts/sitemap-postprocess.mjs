// Runs after `astro build`. @astrojs/sitemap builds a single sitemap whose hreflang groups come from
// matching URL paths, which only works when a page keeps the same slug in every language. Our pages
// have translated slugs, so those groups were wrong (es + pt-BR only) and contradicted the hreflang
// in each page's <head>. Here the sitemap is rebuilt from the built pages themselves:
//   - hreflang alternates: copied from each page's own <link rel="alternate"> tags (one source of truth);
//   - lastmod: the page's visible "updated" date (<time datetime>), only when the page has one;
//   - one sitemap per language, listed in sitemap-index.xml.
import { readFileSync, writeFileSync, existsSync, rmSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const SITE = 'https://veintiunoapp.com';
const LANG_DIRS = ['en', 'de', 'fr', 'pt', 'it', 'nl', 'ja', 'zh-hant'];

const source = join(DIST, 'sitemap-0.xml');
if (!existsSync(source)) { console.error('sitemap-0.xml not found: nothing to post-process'); process.exit(1); }
const locs = [...readFileSync(source, 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const esc = (s) => s.replace(/&/g, '&amp;');
const groups = new Map();
let withLastmod = 0;
let withAlternates = 0;
for (const loc of locs) {
  const path = loc.replace(SITE, '');
  const file = join(DIST, path, 'index.html');
  if (!existsSync(file)) { console.error('missing page for', loc); process.exit(1); }
  const html = readFileSync(file, 'utf8');
  const alternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]);
  const lastmod = html.match(/<time datetime="(\d{4}-\d{2}-\d{2})"/)?.[1];
  const first = path.split('/')[1];
  const key = LANG_DIRS.includes(first) ? first : 'es';
  let xml = `<url><loc>${esc(loc)}</loc>`;
  if (lastmod) { xml += `<lastmod>${lastmod}</lastmod>`; withLastmod++; }
  if (alternates.length > 1) { withAlternates++; for (const [l, h] of alternates) xml += `<xhtml:link rel="alternate" hreflang="${l}" href="${esc(h)}"/>`; }
  xml += '</url>';
  if (!groups.has(key)) groups.set(key, { urls: [], lastmods: [] });
  groups.get(key).urls.push(xml);
  if (lastmod) groups.get(key).lastmods.push(lastmod);
}

const head = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">';
let index = '<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
for (const key of ['es', ...LANG_DIRS]) {
  const g = groups.get(key);
  if (!g) continue;
  const name = `sitemap-${key}.xml`;
  writeFileSync(join(DIST, name), `${head}${g.urls.join('')}</urlset>`);
  const newest = g.lastmods.sort().at(-1);
  index += `<sitemap><loc>${SITE}/${name}</loc>${newest ? `<lastmod>${newest}</lastmod>` : ''}</sitemap>`;
}
index += '</sitemapindex>';
writeFileSync(join(DIST, 'sitemap-index.xml'), index);
rmSync(source);
console.log(`sitemap: ${locs.length} URLs in ${groups.size} files, ${withLastmod} with lastmod, ${withAlternates} with hreflang alternates`);

// Renders the three strategy tables as HTML. Used at build time (so the chart is in the
// page for search engines and no-JS readers) and in the browser when the rules change.
import { hardKeys, softKeys, pairKeys, upcards, strategyTable, type HandKey, type Play, type Rules } from './strategy';
import type { Lang } from './site';

export const chartText = {
  es: {
    hard: 'Totales duros',
    soft: 'Totales blandos (con as)',
    pairs: 'Parejas',
    player: 'Tu mano',
    dealer: 'Carta visible del crupier',
    legend: {
      H: 'Pedir',
      S: 'Plantarse',
      D: 'Doblar (si no se puede, pedir)',
      Ds: 'Doblar (si no se puede, plantarse)',
      P: 'Dividir',
      Rh: 'Rendirse (si no se puede, pedir)',
      Rs: 'Rendirse (si no se puede, plantarse)',
      Rp: 'Rendirse (si no se puede, dividir)',
    } as Record<Play, string>,
  },
  en: {
    hard: 'Hard totals',
    soft: 'Soft totals (with an ace)',
    pairs: 'Pairs',
    player: 'Your hand',
    dealer: 'Dealer upcard',
    legend: {
      H: 'Hit',
      S: 'Stand',
      D: 'Double (if not allowed, hit)',
      Ds: 'Double (if not allowed, stand)',
      P: 'Split',
      Rh: 'Surrender (if not allowed, hit)',
      Rs: 'Surrender (if not allowed, stand)',
      Rp: 'Surrender (if not allowed, split)',
    } as Record<Play, string>,
  },
};

export const keyId = (k: HandKey) => (k.kind === 'pair' ? `pair${k.value}` : `${k.kind}${k.total}`);

export function keyLabel(k: HandKey): string {
  if (k.kind === 'hard') return k.total === 17 ? '17+' : k.total === 5 ? '5–8' : String(k.total);
  if (k.kind === 'soft') return `A,${k.total - 11}`;
  const v = k.value === 1 ? 'A' : k.value === 10 ? '10' : String(k.value);
  return `${v},${v}`;
}

const upLabel = (u: number) => (u === 11 ? 'A' : String(u));

// Hard 5–8 always hit, so the chart folds them into one row like printed charts do.
const hardRows = hardKeys.filter((k) => k.kind === 'hard' && (k.total === 5 || k.total >= 9));

function table(title: string, keys: HandKey[], play: (k: HandKey, u: (typeof upcards)[number]) => Play, lang: Lang, group: string) {
  const t = chartText[lang];
  const head = upcards.map((u) => `<th scope="col">${upLabel(u)}</th>`).join('');
  const body = keys
    .map((k) => {
      const cells = upcards
        .map((u) => {
          const p = play(k, u);
          return `<td><button type="button" class="cell c-${p}" data-key="${keyId(k)}" data-up="${u}" aria-label="${keyLabel(k)} vs ${upLabel(u)}: ${t.legend[p]}">${p}</button></td>`;
        })
        .join('');
      return `<tr><th scope="row">${keyLabel(k)}</th>${cells}</tr>`;
    })
    .join('');
  return `<figure class="chart-table" data-group="${group}"><figcaption>${title}</figcaption><div class="chart-scroll"><table><colgroup><col class="rowhead" />${upcards.map(() => '<col />').join('')}</colgroup><thead><tr><th scope="col" class="corner" title="${t.player} / ${t.dealer}">↓ / →</th>${head}</tr></thead><tbody>${body}</tbody></table></div></figure>`;
}

export function renderChart(rules: Rules, lang: Lang): string {
  const play = strategyTable(rules);
  const t = chartText[lang];
  return [
    table(t.hard, hardRows, play, lang, 'hard'),
    table(t.soft, softKeys.filter((k) => k.kind === 'soft' && k.total <= 20), play, lang, 'soft'),
    table(t.pairs, pairKeys, play, lang, 'pairs'),
  ].join('');
}

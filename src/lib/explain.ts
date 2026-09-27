// One-sentence rationale for a basic-strategy decision.
// Port of the app's Explainer.swift (Spanish is the source). Each language supplies the same
// sentences as templates: {t} total, {u} dealer upcard ("a 6"), {n} pair rank, {v2} pair total,
// {k} soft kicker (A+k). es/en/de/fr live here; newer languages in their src/i18n packs.
// Deliberate difference from the app: hitting 9–11 says "no card can bust you".
import type { Action, HandKey, Rules, Upcard } from './strategy';
import type { Lang } from './site';
import { packs } from '../i18n';

type Table = Record<string, string>;

const TABLES: Record<string, Table> = {
  es: {
    stand17: 'Con {t} ya no ganas nada pidiendo: cualquier carta de 5 o más te pasa.',
    standWeak: 'Con {t} no arriesgues: el crupier se pasa cerca del 40 % de las veces cuando enseña {u}.',
    twelveStiff: '12 contra {u} es la excepción: solo te pasas con un 10 y el crupier se pasa menos con esa carta.',
    standStiff: 'Con {t} contra {u} es mejor no arriesgar: te pasas con demasiadas cartas.',
    hitLow: 'Con {t} no puedes pasarte con una carta: pide.',
    hitStrong: 'Con {t} contra {u} pierdes si te plantas: el crupier hará 17 o más casi siempre.',
    double11: 'Con 11 cualquier 10 te da 21: dobla para apostar más cuando tienes ventaja.',
    double10: 'Con 10 tienes muchas cartas que te dejan en 20: dobla contra {u}.',
    double9: 'Con 9 contra {u} la carta del crupier es débil: aprovecha para doblar.',
    enhc11: 'En la mesa europea el crupier no ha mirado si tiene blackjack: si doblas contra {u} puedes perder el doble.',
    surrender: 'Con {t} contra {u} pierdes más de la mitad de las veces: rendirte y salvar media apuesta es lo mejor.',
    hitGeneric: 'Con {t} contra {u} pedir pierde menos que plantarse.',
    softDouble: 'Es un total suave: no te puedes pasar y el crupier enseña {u}. Dobla.',
    soft18Stand: '18 suave contra {u} ya es una mano ganadora la mayoría de veces.',
    soft18Hit: '18 suave contra {u} pierde: mejora la mano, no te puedes pasar con una carta.',
    softStand: 'Con {t} suave estás por delante: plántate.',
    softHit: 'Con A+{k} no te puedes pasar y el total es flojo: pide.',
    splitAces: 'Dos ases valen 2 o 12; separados, cada uno puede ser un 21. Divide siempre.',
    split8s: '16 es la peor mano posible; dos manos de 8 son mucho mejores. Divide siempre.',
    enhc88: 'En mesa europea no dividas 8-8 contra {u}: expondrías dos apuestas a un blackjack del crupier.',
    enhcAces: 'En mesa europea no dividas los ases contra {u}: expondrías dos apuestas a un blackjack del crupier.',
    tens: '20 es casi imposible de mejorar: nunca separes los dieces.',
    fives: 'Dos cincos son un 10: no los separes, dobla.',
    nines: '18 gana contra {u}: no lo toques.',
    split: 'Con {n}-{n} contra {u} divides porque el crupier está débil y dos manos valen más que una.',
    pairHit: 'Con {n}-{n} contra {u} dividir crea dos manos malas: juega el {v2} como mano normal.',
    pairSurrender: '{n}-{n} contra {u} pierde tanto que rendirse es lo menos malo.',
    fallback: 'Es la jugada con mejor esperanza matemática contra {u}.',
  },
  en: {
    stand17: 'With {t} hitting gains nothing: any card of 5 or more busts you.',
    standWeak: 'With {t}, don’t risk it: the dealer busts about 40% of the time showing {u}.',
    twelveStiff: '12 against {u} is the exception: only a 10 busts you, and the dealer busts less with that card.',
    standStiff: 'With {t} against {u}, don’t risk it: too many cards bust you.',
    hitLow: 'With {t} no single card can bust you: hit.',
    hitStrong: 'With {t} against {u} you lose if you stand: the dealer will almost always make 17 or more.',
    double11: 'With 11 any ten gives you 21: double to bet more while you have the edge.',
    double10: 'With 10 many cards leave you on 20: double against {u}.',
    double9: 'With 9 against {u} the dealer’s card is weak: take the chance to double.',
    enhc11: 'At a European table the dealer hasn’t checked for blackjack: double against {u} and you can lose twice as much.',
    surrender: 'With {t} against {u} you lose more than half the time: surrendering and saving half your bet is best.',
    hitGeneric: 'With {t} against {u}, hitting loses less than standing.',
    softDouble: 'It’s a soft total: you can’t bust and the dealer shows {u}. Double.',
    soft18Stand: 'Soft 18 against {u} already wins most of the time.',
    soft18Hit: 'Soft 18 against {u} is a loser: improve it — one card can’t bust you.',
    softStand: 'With soft {t} you’re ahead: stand.',
    softHit: 'With A+{k} you can’t bust and the total is weak: hit.',
    splitAces: 'Two aces are 2 or 12; split, each can become 21. Always split.',
    split8s: '16 is the worst hand there is; two hands starting on 8 are far better. Always split.',
    enhc88: 'At a European table don’t split 8-8 against {u}: you’d expose two bets to a dealer blackjack.',
    enhcAces: 'At a European table don’t split aces against {u}: you’d expose two bets to a dealer blackjack.',
    tens: '20 is almost impossible to improve: never split tens.',
    fives: 'Two fives are a 10: don’t split them, double.',
    nines: '18 beats {u}: leave it alone.',
    split: 'With {n}-{n} against {u} you split: the dealer is weak and two hands are worth more than one.',
    pairHit: 'With {n}-{n} against {u} splitting makes two bad hands: play it as a normal {v2}.',
    pairSurrender: '{n}-{n} against {u} loses so much that surrender is the least bad option.',
    fallback: 'It’s the play with the best expected value against {u}.',
  },
  de: {
    stand17: 'Mit {t} bringt Ziehen nichts mehr: Jede Karte ab 5 überkauft dich.',
    standWeak: 'Mit {t} kein Risiko: Der Dealer überkauft sich in rund 40 % der Fälle, wenn er {u} zeigt.',
    twelveStiff: '12 gegen {u} ist die Ausnahme: Nur eine Zehn überkauft dich, und der Dealer überkauft sich mit dieser Karte seltener.',
    standStiff: 'Mit {t} gegen {u} lieber kein Risiko: Zu viele Karten überkaufen dich.',
    hitLow: 'Mit {t} kann dich keine Karte überkaufen: ziehen.',
    hitStrong: 'Mit {t} gegen {u} verlierst du, wenn du stehen bleibst: Der Dealer kommt fast immer auf 17 oder mehr.',
    double11: 'Mit 11 bringt dich jede Zehn auf 21: Verdopple, um mehr zu setzen, solange du im Vorteil bist.',
    double10: 'Mit 10 bringen dich viele Karten auf 20: Verdopple gegen {u}.',
    double9: 'Mit 9 gegen {u} ist die Dealerkarte schwach: Nutze die Chance und verdopple.',
    enhc11: 'Am europäischen Tisch hat der Dealer noch nicht auf Blackjack geprüft: Verdoppelst du gegen {u}, kannst du das Doppelte verlieren.',
    surrender: 'Mit {t} gegen {u} verlierst du öfter als in der Hälfte der Fälle: Aufgeben und den halben Einsatz retten ist am besten.',
    hitGeneric: 'Mit {t} gegen {u} verliert Ziehen weniger als Stehenbleiben.',
    softDouble: 'Das ist eine Soft Hand: Du kannst dich nicht überkaufen, und der Dealer zeigt {u}. Verdoppeln.',
    soft18Stand: 'Soft 18 gegen {u} gewinnt meistens schon so.',
    soft18Hit: 'Soft 18 gegen {u} verliert: Verbessere die Hand – eine Karte kann dich nicht überkaufen.',
    softStand: 'Mit Soft {t} liegst du vorn: stehen bleiben.',
    softHit: 'Mit A+{k} kannst du dich nicht überkaufen, und die Summe ist schwach: ziehen.',
    splitAces: 'Zwei Asse sind 2 oder 12; gesplittet kann jedes zu 21 werden. Immer splitten.',
    split8s: '16 ist die schlechteste Hand überhaupt; zwei Hände, die mit 8 beginnen, sind viel besser. Immer splitten.',
    enhc88: 'Am europäischen Tisch 8-8 gegen {u} nicht splitten: Du würdest zwei Einsätze einem Dealer-Blackjack aussetzen.',
    enhcAces: 'Am europäischen Tisch Asse gegen {u} nicht splitten: Du würdest zwei Einsätze einem Dealer-Blackjack aussetzen.',
    tens: '20 lässt sich kaum verbessern: Zehner nie splitten.',
    fives: 'Zwei Fünfen sind eine 10: nicht splitten, sondern verdoppeln.',
    nines: '18 schlägt {u}: nicht anrühren.',
    split: 'Mit {n}-{n} gegen {u} splittest du: Der Dealer ist schwach, und zwei Hände sind mehr wert als eine.',
    pairHit: 'Mit {n}-{n} gegen {u} ergibt Splitten zwei schlechte Hände: Spiel sie als normale {v2}.',
    pairSurrender: '{n}-{n} gegen {u} verliert so viel, dass Aufgeben die am wenigsten schlechte Option ist.',
    fallback: 'Das ist der Zug mit dem besten Erwartungswert gegen {u}.',
  },
  fr: {
    stand17: 'Avec {t}, tirer ne rapporte plus rien : toute carte de 5 ou plus vous fait sauter.',
    standWeak: 'Avec {t}, ne prenez pas de risque : le croupier saute environ 40 % du temps quand il montre {u}.',
    twelveStiff: '12 contre {u} est l’exception : seul un 10 vous fait sauter, et le croupier saute moins souvent avec cette carte.',
    standStiff: 'Avec {t} contre {u}, mieux vaut ne pas risquer : trop de cartes vous font sauter.',
    hitLow: 'Avec {t}, aucune carte ne peut vous faire sauter : tirez.',
    hitStrong: 'Avec {t} contre {u}, vous perdez si vous restez : le croupier fera presque toujours 17 ou plus.',
    double11: 'Avec 11, n’importe quel 10 vous donne 21 : doublez pour miser plus quand vous avez l’avantage.',
    double10: 'Avec 10, beaucoup de cartes vous mènent à 20 : doublez contre {u}.',
    double9: 'Avec 9 contre {u}, la carte du croupier est faible : profitez-en pour doubler.',
    enhc11: 'À une table européenne, le croupier n’a pas vérifié s’il a un blackjack : si vous doublez contre {u}, vous pouvez perdre le double.',
    surrender: 'Avec {t} contre {u}, vous perdez plus d’une fois sur deux : abandonner et sauver la moitié de la mise est le mieux.',
    hitGeneric: 'Avec {t} contre {u}, tirer perd moins que rester.',
    softDouble: 'C’est une main souple : vous ne pouvez pas sauter et le croupier montre {u}. Doublez.',
    soft18Stand: '18 souple contre {u} gagne déjà la plupart du temps.',
    soft18Hit: '18 souple contre {u} est perdant : améliorez la main, une carte ne peut pas vous faire sauter.',
    softStand: 'Avec {t} souple, vous êtes devant : restez.',
    softHit: 'Avec A+{k}, vous ne pouvez pas sauter et le total est faible : tirez.',
    splitAces: 'Deux as valent 2 ou 12 ; séparés, chacun peut faire 21. Séparez toujours.',
    split8s: '16 est la pire main possible ; deux mains qui partent de 8 sont bien meilleures. Séparez toujours.',
    enhc88: 'À une table européenne, ne séparez pas 8-8 contre {u} : vous exposeriez deux mises à un blackjack du croupier.',
    enhcAces: 'À une table européenne, ne séparez pas les as contre {u} : vous exposeriez deux mises à un blackjack du croupier.',
    tens: '20 est presque impossible à améliorer : ne séparez jamais les dix.',
    fives: 'Deux 5 font 10 : ne les séparez pas, doublez.',
    nines: '18 bat {u} : n’y touchez pas.',
    split: 'Avec {n}-{n} contre {u}, séparez : le croupier est faible et deux mains valent mieux qu’une.',
    pairHit: 'Avec {n}-{n} contre {u}, séparer donne deux mauvaises mains : jouez-la comme un {v2} normal.',
    pairSurrender: '{n}-{n} contre {u} perd tellement qu’abandonner est la moins mauvaise option.',
    fallback: 'C’est le coup avec la meilleure espérance contre {u}.',
  },
};

const UP: Record<string, (u: Upcard) => string> = {
  es: (u) => (u === 11 ? 'un as' : `un ${u}`),
  en: (u) => (u === 11 ? 'an ace' : u === 8 ? 'an 8' : `a ${u}`),
  de: (u) => (u === 11 ? 'ein Ass' : `eine ${u}`),
  fr: (u) => (u === 11 ? 'un as' : `un ${u}`),
};

export function explain(key: HandKey, up: Upcard, action: Action, rules: Rules, lang: Lang): string {
  const pack = packs[lang];
  const table: Table = TABLES[lang] ?? (pack?.explain as Table) ?? TABLES.en;
  const u = UP[lang] ? UP[lang](up) : pack?.explain.up[up] ?? String(up);
  const vars: Record<string, string | number> = { u };
  const say = (id: string) => (table[id] ?? TABLES.en[id]).replace(/\{(t|u|n|v2|k)\}/g, (_, v) => String(vars[v]));
  const weak = up >= 4 && up <= 6;
  const stiff = up === 2 || up === 3;
  const strong = up >= 7;

  if (key.kind === 'hard') {
    const t = key.total;
    vars.t = t;
    if (action === 'stand' && t >= 17) return say('stand17');
    if (action === 'stand' && weak) return say('standWeak');
    if (t === 12 && action === 'hit' && stiff) return say('twelveStiff');
    if (action === 'stand' && stiff) return say('standStiff');
    if (action === 'hit' && t <= 11) return say('hitLow');
    if (action === 'hit' && strong && t <= 16) return say('hitStrong');
    if (t === 11 && action === 'double') return say('double11');
    if (t === 10 && action === 'double') return say('double10');
    if (t === 9 && action === 'double') return say('double9');
    if (t === 11 && action === 'hit' && (up === 11 || up === 10) && !rules.holeCard) return say('enhc11');
    if (action === 'surrender') return say('surrender');
    if (action === 'hit') return say('hitGeneric');
  }

  if (key.kind === 'soft') {
    const t = key.total;
    vars.t = t;
    vars.k = t - 11;
    if (action === 'double') return say('softDouble');
    if (t === 18 && action === 'stand') return say('soft18Stand');
    if (t === 18 && action === 'hit') return say('soft18Hit');
    if (action === 'stand' && t >= 19) return say('softStand');
    if (action === 'hit') return say('softHit');
  }

  if (key.kind === 'pair') {
    const v = key.value;
    vars.n = v === 1 ? 'A' : String(v);
    vars.v2 = v * 2;
    if (v === 1 && action === 'split') return say('splitAces');
    if (v === 8 && action === 'split') return say('split8s');
    if (v === 8 && action === 'hit' && !rules.holeCard) return say('enhc88');
    if (v === 1 && action === 'hit' && !rules.holeCard) return say('enhcAces');
    if (v === 10 && action === 'stand') return say('tens');
    if (v === 5 && action === 'double') return say('fives');
    if (v === 9 && action === 'stand') return say('nines');
    if (action === 'split') return say('split');
    if (action === 'hit') return say('pairHit');
    if (action === 'surrender') return say('pairSurrender');
  }

  return say('fallback');
}

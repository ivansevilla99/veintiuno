// One-sentence rationale for a basic-strategy decision.
// Port of the app's Explainer.swift (Spanish is the source; English mirrors the app's catalog).
import type { Action, HandKey, Rules, Upcard } from './strategy';
import type { Lang } from './site';

const upPhrase = {
  es: (u: Upcard) => (u === 11 ? 'un as' : `un ${u}`),
  en: (u: Upcard) => (u === 11 ? 'an ace' : u === 8 ? 'an 8' : `a ${u}`),
};

export function explain(key: HandKey, up: Upcard, action: Action, rules: Rules, lang: Lang): string {
  const es = lang === 'es';
  const upL = upPhrase[lang](up);
  const weak = up >= 4 && up <= 6;
  const stiff = up === 2 || up === 3;
  const strong = up >= 7;

  if (key.kind === 'hard') {
    const t = key.total;
    if (action === 'stand' && t >= 17)
      return es ? `Con ${t} ya no ganas nada pidiendo: cualquier carta de 5 o más te pasa.` : `With ${t} hitting gains nothing: any card of 5 or more busts you.`;
    if (action === 'stand' && weak)
      return es ? `Con ${t} no arriesgues: el crupier se pasa cerca del 40 % de las veces cuando enseña ${upL}.` : `With ${t}, don’t risk it: the dealer busts about 40% of the time showing ${upL}.`;
    if (t === 12 && action === 'hit' && stiff)
      return es ? `12 contra ${upL} es la excepción: solo te pasas con un 10 y el crupier se pasa menos con esa carta.` : `12 against ${upL} is the exception: only a 10 busts you, and the dealer busts less with that card.`;
    if (action === 'stand' && stiff)
      return es ? `Con ${t} contra ${upL} es mejor no arriesgar: te pasas con demasiadas cartas.` : `With ${t} against ${upL}, don’t risk it: too many cards bust you.`;
    // With 11 or less no card can bust you, so "you'd lose standing" isn't the real reason.
    if (action === 'hit' && t <= 11)
      return es ? `Con ${t} no puedes pasarte con una carta: pide.` : `With ${t} no single card can bust you: hit.`;
    if (action === 'hit' && strong && t <= 16)
      return es ? `Con ${t} contra ${upL} pierdes si te plantas: el crupier hará 17 o más casi siempre.` : `With ${t} against ${upL} you lose if you stand: the dealer will almost always make 17 or more.`;
    if (action === 'hit' && t <= 8)
      return es ? `Con ${t} no puedes pasarte: pide siempre.` : `With ${t} you can’t bust: always hit.`;
    if (t === 11 && action === 'double')
      return es ? 'Con 11 cualquier 10 te da 21: dobla para apostar más cuando tienes ventaja.' : 'With 11 any ten gives you 21: double to bet more while you have the edge.';
    if (t === 10 && action === 'double')
      return es ? `Con 10 tienes muchas cartas que te dejan en 20: dobla contra ${upL}.` : `With 10 many cards leave you on 20: double against ${upL}.`;
    if (t === 9 && action === 'double')
      return es ? `Con 9 contra ${upL} la carta del crupier es débil: aprovecha para doblar.` : `With 9 against ${upL} the dealer’s card is weak: take the chance to double.`;
    if (t === 11 && action === 'hit' && (up === 11 || up === 10) && !rules.holeCard)
      return es ? `En la mesa europea el crupier no ha mirado si tiene blackjack: si doblas contra ${upL} puedes perder el doble.` : `At a European table the dealer hasn’t checked for blackjack: double against ${upL} and you can lose twice as much.`;
    if (action === 'surrender')
      return es ? `Con ${t} contra ${upL} pierdes más de la mitad de las veces: rendirte y salvar media apuesta es lo mejor.` : `With ${t} against ${upL} you lose more than half the time: surrendering and saving half your bet is best.`;
    if (action === 'hit')
      return es ? `Con ${t} contra ${upL} pedir pierde menos que plantarse.` : `With ${t} against ${upL}, hitting loses less than standing.`;
  }

  if (key.kind === 'soft') {
    const t = key.total;
    if (action === 'double')
      return es ? `Es un total suave: no te puedes pasar y el crupier enseña ${upL}. Dobla.` : `It’s a soft total: you can’t bust and the dealer shows ${upL}. Double.`;
    if (t === 18 && action === 'stand')
      return es ? `18 suave contra ${upL} ya es una mano ganadora la mayoría de veces.` : `Soft 18 against ${upL} already wins most of the time.`;
    if (t === 18 && action === 'hit')
      return es ? `18 suave contra ${upL} pierde: mejora la mano, no te puedes pasar con una carta.` : `Soft 18 against ${upL} is a loser: improve it — one card can’t bust you.`;
    if (action === 'stand' && t >= 19)
      return es ? `Con ${t} suave estás por delante: plántate.` : `With soft ${t} you’re ahead: stand.`;
    if (action === 'hit')
      return es ? `Con A+${t - 11} no te puedes pasar y el total es flojo: pide.` : `With A+${t - 11} you can’t bust and the total is weak: hit.`;
  }

  if (key.kind === 'pair') {
    const v = key.value;
    const n = v === 1 ? 'A' : String(v);
    if (v === 1 && action === 'split')
      return es ? 'Dos ases valen 2 o 12; separados, cada uno puede ser un 21. Divide siempre.' : 'Two aces are 2 or 12; split, each can become 21. Always split.';
    if (v === 8 && action === 'split')
      return es ? '16 es la peor mano posible; dos manos de 8 son mucho mejores. Divide siempre.' : '16 is the worst hand there is; two hands starting on 8 are far better. Always split.';
    if (v === 8 && action === 'hit' && !rules.holeCard)
      return es ? `En mesa europea no dividas 8-8 contra ${upL}: expondrías dos apuestas a un blackjack del crupier.` : `At a European table don’t split 8-8 against ${upL}: you’d expose two bets to a dealer blackjack.`;
    if (v === 1 && action === 'hit' && !rules.holeCard)
      return es ? `En mesa europea no dividas los ases contra ${upL}: expondrías dos apuestas a un blackjack del crupier.` : `At a European table don’t split aces against ${upL}: you’d expose two bets to a dealer blackjack.`;
    if (v === 10 && action === 'stand')
      return es ? '20 es casi imposible de mejorar: nunca separes los dieces.' : '20 is almost impossible to improve: never split tens.';
    if (v === 5 && action === 'double')
      return es ? 'Dos cincos son un 10: no los separes, dobla.' : 'Two fives are a 10: don’t split them, double.';
    if (v === 9 && action === 'stand')
      return es ? `18 gana contra ${upL}: no lo toques.` : `18 beats ${upL}: leave it alone.`;
    if (action === 'split')
      return es ? `Con ${n}-${n} contra ${upL} divides porque el crupier está débil y dos manos valen más que una.` : `With ${n}-${n} against ${upL} you split: the dealer is weak and two hands are worth more than one.`;
    if (action === 'hit')
      return es ? `Con ${n}-${n} contra ${upL} dividir crea dos manos malas: juega el ${v * 2} como mano normal.` : `With ${n}-${n} against ${upL} splitting makes two bad hands: play it as a normal ${v * 2}.`;
    if (action === 'surrender')
      return es ? `${n}-${n} contra ${upL} pierde tanto que rendirse es lo menos malo.` : `${n}-${n} against ${upL} loses so much that surrender is the least bad option.`;
  }

  return es ? `Es la jugada con mejor esperanza matemática contra ${upL}.` : `It’s the play with the best expected value against ${upL}.`;
}

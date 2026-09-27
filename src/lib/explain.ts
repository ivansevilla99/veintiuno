// One-sentence rationale for a basic-strategy decision.
// Port of the app's Explainer.swift (Spanish is the source; the other languages follow it).
// Deliberate difference from the app: hitting 9–11 says "no card can bust you".
import type { Action, HandKey, Rules, Upcard } from './strategy';
import type { Lang } from './site';

type Four = Record<Lang, string>;

const upPhrase: Record<Lang, (u: Upcard) => string> = {
  es: (u) => (u === 11 ? 'un as' : `un ${u}`),
  en: (u) => (u === 11 ? 'an ace' : u === 8 ? 'an 8' : `a ${u}`),
  de: (u) => (u === 11 ? 'ein Ass' : `eine ${u}`),
  fr: (u) => (u === 11 ? 'un as' : `un ${u}`),
};

export function explain(key: HandKey, up: Upcard, action: Action, rules: Rules, lang: Lang): string {
  const u = upPhrase[lang](up);
  const say = (s: Four) => s[lang];
  const weak = up >= 4 && up <= 6;
  const stiff = up === 2 || up === 3;
  const strong = up >= 7;

  if (key.kind === 'hard') {
    const t = key.total;
    if (action === 'stand' && t >= 17)
      return say({ es: `Con ${t} ya no ganas nada pidiendo: cualquier carta de 5 o más te pasa.`, en: `With ${t} hitting gains nothing: any card of 5 or more busts you.`, de: `Mit ${t} bringt Ziehen nichts mehr: Jede Karte ab 5 überkauft dich.`, fr: `Avec ${t}, tirer ne rapporte plus rien : toute carte de 5 ou plus vous fait sauter.` });
    if (action === 'stand' && weak)
      return say({ es: `Con ${t} no arriesgues: el crupier se pasa cerca del 40 % de las veces cuando enseña ${u}.`, en: `With ${t}, don’t risk it: the dealer busts about 40% of the time showing ${u}.`, de: `Mit ${t} kein Risiko: Der Dealer überkauft sich in rund 40 % der Fälle, wenn er ${u} zeigt.`, fr: `Avec ${t}, ne prenez pas de risque : le croupier saute environ 40 % du temps quand il montre ${u}.` });
    if (t === 12 && action === 'hit' && stiff)
      return say({ es: `12 contra ${u} es la excepción: solo te pasas con un 10 y el crupier se pasa menos con esa carta.`, en: `12 against ${u} is the exception: only a 10 busts you, and the dealer busts less with that card.`, de: `12 gegen ${u} ist die Ausnahme: Nur eine Zehn überkauft dich, und der Dealer überkauft sich mit dieser Karte seltener.`, fr: `12 contre ${u} est l’exception : seul un 10 vous fait sauter, et le croupier saute moins souvent avec cette carte.` });
    if (action === 'stand' && stiff)
      return say({ es: `Con ${t} contra ${u} es mejor no arriesgar: te pasas con demasiadas cartas.`, en: `With ${t} against ${u}, don’t risk it: too many cards bust you.`, de: `Mit ${t} gegen ${u} lieber kein Risiko: Zu viele Karten überkaufen dich.`, fr: `Avec ${t} contre ${u}, mieux vaut ne pas risquer : trop de cartes vous font sauter.` });
    if (action === 'hit' && t <= 11)
      return say({ es: `Con ${t} no puedes pasarte con una carta: pide.`, en: `With ${t} no single card can bust you: hit.`, de: `Mit ${t} kann dich keine Karte überkaufen: ziehen.`, fr: `Avec ${t}, aucune carte ne peut vous faire sauter : tirez.` });
    if (action === 'hit' && strong && t <= 16)
      return say({ es: `Con ${t} contra ${u} pierdes si te plantas: el crupier hará 17 o más casi siempre.`, en: `With ${t} against ${u} you lose if you stand: the dealer will almost always make 17 or more.`, de: `Mit ${t} gegen ${u} verlierst du, wenn du stehen bleibst: Der Dealer kommt fast immer auf 17 oder mehr.`, fr: `Avec ${t} contre ${u}, vous perdez si vous restez : le croupier fera presque toujours 17 ou plus.` });
    if (t === 11 && action === 'double')
      return say({ es: 'Con 11 cualquier 10 te da 21: dobla para apostar más cuando tienes ventaja.', en: 'With 11 any ten gives you 21: double to bet more while you have the edge.', de: 'Mit 11 bringt dich jede Zehn auf 21: Verdopple, um mehr zu setzen, solange du im Vorteil bist.', fr: 'Avec 11, n’importe quel 10 vous donne 21 : doublez pour miser plus quand vous avez l’avantage.' });
    if (t === 10 && action === 'double')
      return say({ es: `Con 10 tienes muchas cartas que te dejan en 20: dobla contra ${u}.`, en: `With 10 many cards leave you on 20: double against ${u}.`, de: `Mit 10 bringen dich viele Karten auf 20: Verdopple gegen ${u}.`, fr: `Avec 10, beaucoup de cartes vous mènent à 20 : doublez contre ${u}.` });
    if (t === 9 && action === 'double')
      return say({ es: `Con 9 contra ${u} la carta del crupier es débil: aprovecha para doblar.`, en: `With 9 against ${u} the dealer’s card is weak: take the chance to double.`, de: `Mit 9 gegen ${u} ist die Dealerkarte schwach: Nutze die Chance und verdopple.`, fr: `Avec 9 contre ${u}, la carte du croupier est faible : profitez-en pour doubler.` });
    if (t === 11 && action === 'hit' && (up === 11 || up === 10) && !rules.holeCard)
      return say({ es: `En la mesa europea el crupier no ha mirado si tiene blackjack: si doblas contra ${u} puedes perder el doble.`, en: `At a European table the dealer hasn’t checked for blackjack: double against ${u} and you can lose twice as much.`, de: `Am europäischen Tisch hat der Dealer noch nicht auf Blackjack geprüft: Verdoppelst du gegen ${u}, kannst du das Doppelte verlieren.`, fr: `À une table européenne, le croupier n’a pas vérifié s’il a un blackjack : si vous doublez contre ${u}, vous pouvez perdre le double.` });
    if (action === 'surrender')
      return say({ es: `Con ${t} contra ${u} pierdes más de la mitad de las veces: rendirte y salvar media apuesta es lo mejor.`, en: `With ${t} against ${u} you lose more than half the time: surrendering and saving half your bet is best.`, de: `Mit ${t} gegen ${u} verlierst du öfter als in der Hälfte der Fälle: Aufgeben und den halben Einsatz retten ist am besten.`, fr: `Avec ${t} contre ${u}, vous perdez plus d’une fois sur deux : abandonner et sauver la moitié de la mise est le mieux.` });
    if (action === 'hit')
      return say({ es: `Con ${t} contra ${u} pedir pierde menos que plantarse.`, en: `With ${t} against ${u}, hitting loses less than standing.`, de: `Mit ${t} gegen ${u} verliert Ziehen weniger als Stehenbleiben.`, fr: `Avec ${t} contre ${u}, tirer perd moins que rester.` });
  }

  if (key.kind === 'soft') {
    const t = key.total;
    if (action === 'double')
      return say({ es: `Es un total suave: no te puedes pasar y el crupier enseña ${u}. Dobla.`, en: `It’s a soft total: you can’t bust and the dealer shows ${u}. Double.`, de: `Das ist eine Soft Hand: Du kannst dich nicht überkaufen, und der Dealer zeigt ${u}. Verdoppeln.`, fr: `C’est une main souple : vous ne pouvez pas sauter et le croupier montre ${u}. Doublez.` });
    if (t === 18 && action === 'stand')
      return say({ es: `18 suave contra ${u} ya es una mano ganadora la mayoría de veces.`, en: `Soft 18 against ${u} already wins most of the time.`, de: `Soft 18 gegen ${u} gewinnt meistens schon so.`, fr: `18 souple contre ${u} gagne déjà la plupart du temps.` });
    if (t === 18 && action === 'hit')
      return say({ es: `18 suave contra ${u} pierde: mejora la mano, no te puedes pasar con una carta.`, en: `Soft 18 against ${u} is a loser: improve it — one card can’t bust you.`, de: `Soft 18 gegen ${u} verliert: Verbessere die Hand – eine Karte kann dich nicht überkaufen.`, fr: `18 souple contre ${u} est perdant : améliorez la main, une carte ne peut pas vous faire sauter.` });
    if (action === 'stand' && t >= 19)
      return say({ es: `Con ${t} suave estás por delante: plántate.`, en: `With soft ${t} you’re ahead: stand.`, de: `Mit Soft ${t} liegst du vorn: stehen bleiben.`, fr: `Avec ${t} souple, vous êtes devant : restez.` });
    if (action === 'hit')
      return say({ es: `Con A+${t - 11} no te puedes pasar y el total es flojo: pide.`, en: `With A+${t - 11} you can’t bust and the total is weak: hit.`, de: `Mit A+${t - 11} kannst du dich nicht überkaufen, und die Summe ist schwach: ziehen.`, fr: `Avec A+${t - 11}, vous ne pouvez pas sauter et le total est faible : tirez.` });
  }

  if (key.kind === 'pair') {
    const v = key.value;
    const n = v === 1 ? 'A' : String(v);
    if (v === 1 && action === 'split')
      return say({ es: 'Dos ases valen 2 o 12; separados, cada uno puede ser un 21. Divide siempre.', en: 'Two aces are 2 or 12; split, each can become 21. Always split.', de: 'Zwei Asse sind 2 oder 12; gesplittet kann jedes zu 21 werden. Immer splitten.', fr: 'Deux as valent 2 ou 12 ; séparés, chacun peut faire 21. Séparez toujours.' });
    if (v === 8 && action === 'split')
      return say({ es: '16 es la peor mano posible; dos manos de 8 son mucho mejores. Divide siempre.', en: '16 is the worst hand there is; two hands starting on 8 are far better. Always split.', de: '16 ist die schlechteste Hand überhaupt; zwei Hände, die mit 8 beginnen, sind viel besser. Immer splitten.', fr: '16 est la pire main possible ; deux mains qui partent de 8 sont bien meilleures. Séparez toujours.' });
    if (v === 8 && action === 'hit' && !rules.holeCard)
      return say({ es: `En mesa europea no dividas 8-8 contra ${u}: expondrías dos apuestas a un blackjack del crupier.`, en: `At a European table don’t split 8-8 against ${u}: you’d expose two bets to a dealer blackjack.`, de: `Am europäischen Tisch 8-8 gegen ${u} nicht splitten: Du würdest zwei Einsätze einem Dealer-Blackjack aussetzen.`, fr: `À une table européenne, ne séparez pas 8-8 contre ${u} : vous exposeriez deux mises à un blackjack du croupier.` });
    if (v === 1 && action === 'hit' && !rules.holeCard)
      return say({ es: `En mesa europea no dividas los ases contra ${u}: expondrías dos apuestas a un blackjack del crupier.`, en: `At a European table don’t split aces against ${u}: you’d expose two bets to a dealer blackjack.`, de: `Am europäischen Tisch Asse gegen ${u} nicht splitten: Du würdest zwei Einsätze einem Dealer-Blackjack aussetzen.`, fr: `À une table européenne, ne séparez pas les as contre ${u} : vous exposeriez deux mises à un blackjack du croupier.` });
    if (v === 10 && action === 'stand')
      return say({ es: '20 es casi imposible de mejorar: nunca separes los dieces.', en: '20 is almost impossible to improve: never split tens.', de: '20 lässt sich kaum verbessern: Zehner nie splitten.', fr: '20 est presque impossible à améliorer : ne séparez jamais les dix.' });
    if (v === 5 && action === 'double')
      return say({ es: 'Dos cincos son un 10: no los separes, dobla.', en: 'Two fives are a 10: don’t split them, double.', de: 'Zwei Fünfen sind eine 10: nicht splitten, sondern verdoppeln.', fr: 'Deux 5 font 10 : ne les séparez pas, doublez.' });
    if (v === 9 && action === 'stand')
      return say({ es: `18 gana contra ${u}: no lo toques.`, en: `18 beats ${u}: leave it alone.`, de: `18 schlägt ${u}: nicht anrühren.`, fr: `18 bat ${u} : n’y touchez pas.` });
    if (action === 'split')
      return say({ es: `Con ${n}-${n} contra ${u} divides porque el crupier está débil y dos manos valen más que una.`, en: `With ${n}-${n} against ${u} you split: the dealer is weak and two hands are worth more than one.`, de: `Mit ${n}-${n} gegen ${u} splittest du: Der Dealer ist schwach, und zwei Hände sind mehr wert als eine.`, fr: `Avec ${n}-${n} contre ${u}, séparez : le croupier est faible et deux mains valent mieux qu’une.` });
    if (action === 'hit')
      return say({ es: `Con ${n}-${n} contra ${u} dividir crea dos manos malas: juega el ${v * 2} como mano normal.`, en: `With ${n}-${n} against ${u} splitting makes two bad hands: play it as a normal ${v * 2}.`, de: `Mit ${n}-${n} gegen ${u} ergibt Splitten zwei schlechte Hände: Spiel sie als normale ${v * 2}.`, fr: `Avec ${n}-${n} contre ${u}, séparer donne deux mauvaises mains : jouez-la comme un ${v * 2} normal.` });
    if (action === 'surrender')
      return say({ es: `${n}-${n} contra ${u} pierde tanto que rendirse es lo menos malo.`, en: `${n}-${n} against ${u} loses so much that surrender is the least bad option.`, de: `${n}-${n} gegen ${u} verliert so viel, dass Aufgeben die am wenigsten schlechte Option ist.`, fr: `${n}-${n} contre ${u} perd tellement qu’abandonner est la moins mauvaise option.` });
  }

  return say({ es: `Es la jugada con mejor esperanza matemática contra ${u}.`, en: `It’s the play with the best expected value against ${u}.`, de: `Das ist der Zug mit dem besten Erwartungswert gegen ${u}.`, fr: `C’est le coup avec la meilleure espérance contre ${u}.` });
}

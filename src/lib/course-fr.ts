// French edition of the free course (src/lib/course.ts). Same lessons, same facts, same
// quiz answers; adapted for readers whose reference is European (no hole card) rules as
// usually played in France, Belgium and Switzerland, plus Las Vegas. Index i here is the
// same lesson as index i in the Spanish course (used for hreflang pairing).
import type { Lesson } from './course';

export const lessonsFr: Lesson[] = [
  {
    slug: 'quest-ce-que-le-blackjack',
    title: 'Qu’est-ce que le blackjack et comment gagner',
    h1: 'Leçon 1 : qu’est-ce que le blackjack et comment gagne-t-on',
    metaTitle: 'Qu’est-ce que le blackjack ? · Cours de blackjack',
    description: 'Leçon 1 du cours de blackjack gratuit : en quoi consiste le jeu, contre qui vous jouez et comment on gagne une main. Avec un petit quiz pour finir la leçon.',
    minutes: 4,
    summary: 'Vous jouez contre le croupier, pas contre la table. Vous gagnez en finissant plus près de 21 que lui sans le dépasser.',
    body: `
<p>Le blackjack est le jeu de cartes le plus populaire des casinos. C’est la version casino du bon vieux 21, avec une différence importante&nbsp;: <strong>vous ne jouez pas contre les autres joueurs, mais contre le croupier</strong>. Ce que font les autres à la table ne change rien à votre résultat.</p>
<h2>Le vrai but du jeu</h2>
<p>Beaucoup de gens croient que le but est d’atteindre 21. Ce n’est pas le cas. Le but est de <strong>battre le croupier</strong>, et il y a deux façons d’y parvenir&nbsp;:</p>
<ul>
<li>Finir avec un total plus élevé que le sien sans dépasser 21.</li>
<li>Rester à 21 ou moins pendant que le croupier saute.</li>
</ul>
<p>Si vous finissez tous les deux sur le même total, c’est une <strong>égalité</strong>&nbsp;: vous récupérez votre mise.</p>
<h2>La règle qui explique tout</h2>
<p>Si vous dépassez 21, vous perdez sur-le-champ, même si le croupier saute ensuite. Comme <strong>vous jouez toujours avant le croupier</strong>, c’est de cette règle que vient l’avantage de la maison. Tout ce cours sert à en récupérer le plus possible.</p>
<h2>Le croupier ne réfléchit pas</h2>
<p>Le croupier ne prend aucune décision&nbsp;: il suit une règle fixe. Il tire à 16 ou moins et reste à 17 ou plus. Vous, en revanche, pouvez tirer, rester, doubler, séparer ou abandonner. Cette liberté est votre arme, et la stratégie de base est la bonne manière de s’en servir.</p>`,
    quiz: [
      { q: 'Contre qui joue-t-on au blackjack ?', options: ['Les autres joueurs', 'Le croupier', 'Le casino et les joueurs'], answer: 1, why: 'Seulement le croupier. Ce que font les autres joueurs ne change pas votre résultat.' },
      { q: 'Vous avez 18 et le croupier 20. Que se passe-t-il ?', options: ['Vous gagnez, personne n’a sauté', 'Égalité', 'Vous perdez'], answer: 2, why: 'Celui qui est le plus près de 21 sans le dépasser gagne : le croupier, avec 20.' },
      { q: 'Vous sautez avec 23, puis le croupier saute avec 24. Que se passe-t-il ?', options: ['Égalité', 'Vous perdez', 'Vous gagnez'], answer: 1, why: 'Si vous sautez, vous perdez immédiatement. C’est de là que vient l’avantage de la maison.' },
    ],
  },
  {
    slug: 'valeur-des-cartes-et-mains-souples',
    title: 'La valeur des cartes et les mains souples',
    h1: 'Leçon 2 : la valeur des cartes et les mains souples',
    metaTitle: 'Valeur des cartes au blackjack · Cours de blackjack',
    description: 'Ce que vaut chaque carte au blackjack, comment fonctionne l’as, ce qu’est une main souple et ce qu’est un blackjack. Leçon 2 du cours de blackjack gratuit.',
    minutes: 4,
    summary: 'Les figures valent 10, l’as 1 ou 11. Une main où l’as compte pour 11 est « souple » : une seule carte ne peut pas la faire sauter.',
    body: `
<table><thead><tr><th>Carte</th><th>Valeur</th></tr></thead><tbody>
<tr><td>2 à 9</td><td>Leur chiffre</td></tr><tr><td>10, valet, dame, roi</td><td>10</td></tr><tr><td>As</td><td>1 ou 11, selon ce qui vous arrange</td></tr></tbody></table>
<p>Les couleurs ne comptent pas. Avec quatre rangs qui valent 10, <strong>près d’un tiers du paquet vaut 10</strong> (16 cartes sur 52). Retenez-le&nbsp;: cela explique beaucoup de coups.</p>
<h2>L’as et les mains souples</h2>
<p>Une main où l’as compte pour 11 est dite <strong>souple</strong>. As-6 est un <strong>17 souple</strong>&nbsp;: il peut valoir 7 ou 17. L’essentiel, c’est que <strong>vous ne pouvez pas sauter en prenant une carte</strong>&nbsp;: si un 10 arrive, l’as repasse à 1 et vous avez 17.</p>
<p>Toute autre main est <strong>dure</strong>. 10-7 est un 17 dur&nbsp;: si vous tirez, presque n’importe quelle carte vous fait sauter.</p>
<p>Une main souple peut devenir dure&nbsp;: as-6 (17 souple) plus un 9 donne un 16 dur, car l’as doit désormais compter pour 1.</p>
<h2>Le blackjack</h2>
<p>Un as plus une carte valant 10 comme deux premières cartes, c’est un <strong>blackjack</strong>. C’est la meilleure main et elle bat n’importe quel autre 21, y compris un 21 en trois cartes. Il paie normalement 3 pour 2.</p>`,
    quiz: [
      { q: 'Combien vaut as-6 ?', options: ['Seulement 7', 'Seulement 17', '7 ou 17 (17 souple)'], answer: 2, why: 'L’as vaut 1 ou 11. Compté pour 11, il ne vous fait pas sauter : c’est donc un 17 souple.' },
      { q: 'Vous avez as-6 et vous tirez : un 10 arrive. Qu’avez-vous ?', options: ['27, vous sautez', '17 dur', '21'], answer: 1, why: 'L’as repasse à 1 : 1 + 6 + 10 = 17. C’est pour cela qu’une seule carte ne peut pas faire sauter une main souple.' },
      { q: 'Qu’est-ce qui gagne : un blackjack ou un 21 en trois cartes ?', options: ['Le blackjack', 'Le 21 en trois cartes', 'C’est une égalité'], answer: 0, why: 'Un blackjack (as + 10 dans les deux premières cartes) bat n’importe quel autre 21.' },
    ],
  },
  {
    slug: 'deroulement-d-une-main',
    title: 'Le déroulement d’une main, pas à pas',
    h1: 'Leçon 3 : le déroulement d’une main, pas à pas',
    metaTitle: 'Déroulement d’une main de blackjack · Cours',
    description: 'Une main de blackjack du début à la fin : la mise, la distribution, la carte cachée, votre tour, celui du croupier et le paiement. Leçon 3 du cours gratuit.',
    minutes: 5,
    summary: 'Vous misez, recevez deux cartes, prenez vos décisions, et le croupier joue en dernier selon une règle fixe : il tire jusqu’à 16.',
    body: `
<ol>
<li><strong>La mise.</strong> Vous misez avant la distribution.</li>
<li><strong>La distribution.</strong> Vous recevez deux cartes face visible. Le croupier reçoit une carte face visible.</li>
<li><strong>La carte cachée.</strong> Il existe deux versions. Dans le jeu <strong>américain</strong>, le croupier prend une deuxième carte face cachée et, s’il montre un as ou un 10, vérifie s’il a blackjack avant que vous ne jouiez. Dans le jeu <strong>européen</strong> (en général en France, en Belgique, en Suisse, en Espagne et à beaucoup de tables en ligne), il n’y a pas de carte cachée&nbsp;: le croupier tire sa deuxième carte à la fin.</li>
<li><strong>Votre tour.</strong> Tirer, rester, doubler, séparer ou abandonner. Vous pouvez prendre autant de cartes que vous voulez.</li>
<li><strong>Le tour du croupier.</strong> Le croupier tire à 16 ou moins et reste à 17 ou plus. À certaines tables, il tire aussi sur 17 souple («&nbsp;H17&nbsp;»).</li>
<li><strong>Le paiement.</strong> On compare les totaux et on paie les mises.</li>
</ol>
<h2>Pourquoi la carte cachée compte</h2>
<p>Sans carte cachée, le croupier peut encore avoir blackjack quand vous doublez ou séparez, et s’il l’a, il ramasse tout ce que vous avez sur la table. C’est pour cela qu’aux tables européennes on ne double pas 11 contre un 10. Plus de détails dans les <a href="/fr/regles-blackjack-espagne/">règles du blackjack en Espagne</a>.</p>
<h2>La carte qui compte&nbsp;: la carte visible du croupier</h2>
<p>Toute la stratégie repose sur deux choses&nbsp;: <strong>votre total</strong> et <strong>la carte visible du croupier</strong>. Cette carte vous dit quelle est la probabilité que le croupier saute. Avec un 5 ou un 6, il saute plus de 40&nbsp;% du temps&nbsp;; avec un 10, environ 23&nbsp;%.</p>`,
    quiz: [
      { q: 'Quand le croupier prend-il une carte ?', options: ['Quand il pense que ça l’aide', 'Toujours à 16 ou moins', 'Seulement si les joueurs ont plus'], answer: 1, why: 'Le croupier ne décide pas : il tire à 16 ou moins et reste à 17 ou plus.' },
      { q: 'À une table européenne (sans carte cachée), le croupier vérifie-t-il d’abord s’il a blackjack ?', options: ['Oui, avant que vous jouiez', 'Non, la deuxième carte vient à la fin', 'Cela dépend du joueur'], answer: 1, why: 'Dans le jeu européen, il n’y a pas de carte cachée : la deuxième carte du croupier arrive après votre tour.' },
      { q: 'Avec quelle carte visible le croupier saute-t-il le plus souvent ?', options: ['Un 10', 'Un as', 'Un 5 ou un 6'], answer: 2, why: 'Avec un 5 ou un 6, le croupier saute environ 42 % du temps ; avec un 10, environ 23 %.' },
    ],
  },
  {
    slug: 'paiements-et-assurance',
    title: 'Ce qui paie et ce qui vous coûte : paiements et assurance',
    h1: 'Leçon 4 : ce qui paie et ce qui vous coûte',
    metaTitle: 'Paiements, 6:5 et assurance · Cours de blackjack',
    description: 'Ce que paie le blackjack, pourquoi les tables 6:5 sont un piège, ce qu’est l’assurance et pourquoi ne jamais la prendre, ni le paiement égal. Leçon 4 du cours.',
    minutes: 4,
    summary: 'Le blackjack doit payer 3 pour 2. Évitez les tables 6:5. Ne prenez jamais l’assurance, ni le paiement égal (even money).',
    body: `
<table><thead><tr><th>Résultat</th><th>Paiement</th></tr></thead><tbody>
<tr><td>Gain</td><td>1 pour 1</td></tr><tr><td>Blackjack</td><td>3 pour 2 (10 € rapportent 15 €)</td></tr><tr><td>Égalité</td><td>Mise rendue</td></tr></tbody></table>
<h2>Le piège du 6:5</h2>
<p>Certaines tables ne paient le blackjack que 6 pour 5 (10 € rapportent 12 €). Ça n’a l’air de rien, mais cela ajoute environ <strong>1,4 point de pourcentage</strong> à l’avantage de la maison, soit à peu près quatre fois ce que vous perdez en jouant parfaitement. C’est la pire règle qui existe. Si le tapis indique «&nbsp;Blackjack pays 6 to 5&nbsp;», changez de table.</p>
<h2>L’assurance</h2>
<p>Quand le croupier montre un as, on vous propose l’<strong>assurance</strong>&nbsp;: un pari annexe, jusqu’à la moitié de votre mise, sur le fait que le croupier ait un 10 en dessous. Elle paie 2 pour 1. Pour être à l’équilibre, il faudrait que le croupier ait un 10 plus d’une fois sur trois, et ce n’est le cas qu’environ <strong>31&nbsp;%</strong> du temps. La maison gagne environ 7&nbsp;% sur ce pari.</p>
<h2>Le paiement égal (even money)</h2>
<p>Si vous avez blackjack et que le croupier montre un as, on vous proposera le «&nbsp;paiement égal&nbsp;»&nbsp;: encaisser 1 pour 1 tout de suite. C’est exactement la même chose qu’assurer votre blackjack. Le refuser vaut 1,04 mise en moyenne&nbsp;; l’accepter, exactement 1. Vous laissez 4&nbsp;%.</p>`,
    quiz: [
      { q: 'Combien doit payer un blackjack ?', options: ['1 pour 1', '6 pour 5', '3 pour 2'], answer: 2, why: '3 pour 2 est la norme. 6 pour 5 ajoute environ 1,4 point à l’avantage de la maison.' },
      { q: 'Le croupier montre un as et propose l’assurance. Que faites-vous ?', options: ['La prendre avec une bonne main', 'Ne jamais la prendre', 'Toujours la prendre'], answer: 1, why: 'L’assurance est un pari à part, avec un avantage de la maison d’environ 7 %, quelle que soit votre main.' },
      { q: 'Vous avez blackjack et le croupier montre un as. Prenez-vous le paiement égal ?', options: ['Oui, c’est de l’argent assuré', 'Non', 'Seulement avec peu de jeux'], answer: 1, why: 'L’accepter vaut 1 mise ; le refuser, 1,04 en moyenne. C’est une assurance déguisée.' },
    ],
  },
  {
    slug: 'tirer-ou-rester',
    title: 'Tirer ou rester avec 12 à 16',
    h1: 'Leçon 5 : tirer ou rester avec les mains dures',
    metaTitle: 'Tirer ou rester au blackjack (12 à 16) · Cours',
    description: 'Quand tirer et quand rester au blackjack avec un total dur de 12 à 16, selon la carte visible du croupier, et l’exception du 12. Leçon 5 du cours de blackjack.',
    minutes: 5,
    summary: 'De 12 à 16 : restez contre 2–6 (sauf 12 contre 2 ou 3) et tirez contre 7 ou plus. À 17 ou plus, restez toujours.',
    body: `
<p>Les mains de 12 à 16 sont les plus inconfortables&nbsp;: vous pouvez sauter si vous tirez, mais elles sont trop faibles pour gagner si vous restez. La réponse dépend de la carte visible du croupier.</p>
<h2>Contre 2 à 6&nbsp;: restez</h2>
<p>Un croupier avec une petite carte doit tirer, et il saute souvent&nbsp;: environ 40&nbsp;% du temps avec un 4, un 5 ou un 6. Ne prenez pas de risque&nbsp;: restez et laissez le croupier sauter.</p>
<h2>Contre 7 ou plus&nbsp;: tirez</h2>
<p>Avec un 7, un 8, un 9, un 10 ou un as, le croupier finit la plupart du temps à 17 ou plus. Votre 12–16 perd si vous restez, donc vous <strong>tirez même si vous risquez de sauter</strong>. C’est la règle la plus difficile à accepter, et la plus importante. L’exemple classique est le <a href="/fr/16-contre-10-blackjack/">16 contre 10</a>.</p>
<h2>L’exception du 12</h2>
<p><strong>Tirez sur 12 contre un 2 ou un 3.</strong> Avec 12, seul un 10 vous fait sauter, et un croupier qui montre 2 ou 3 saute moins souvent qu’avec 4–6. C’est la case que les gens ratent le plus.</p>
<h2>Les mains dures en un coup d’œil</h2>
<table><thead><tr><th>Votre total</th><th>contre 2–3</th><th>contre 4–6</th><th>contre 7–A</th></tr></thead><tbody>
<tr><td>8 ou moins</td><td>Tirer</td><td>Tirer</td><td>Tirer</td></tr>
<tr><td>12</td><td>Tirer</td><td>Rester</td><td>Tirer</td></tr>
<tr><td>13–16</td><td>Rester</td><td>Rester</td><td>Tirer*</td></tr>
<tr><td>17+</td><td>Rester</td><td>Rester</td><td>Rester</td></tr></tbody></table>
<p class="muted small">* Avec l’abandon&nbsp;: abandonnez 16 contre 9, 10 ou as et 15 contre 10 (leçon 9). Les totaux de 9 à 11 se doublent (leçon 6).</p>`,
    quiz: [
      { q: 'Vous avez 15 et le croupier montre un 6. Que faites-vous ?', options: ['Tirer', 'Rester', 'Doubler'], answer: 1, why: 'Contre 2–6, on reste de 13 à 16 : un croupier qui montre un 6 saute environ 42 % du temps.' },
      { q: 'Vous avez 14 et le croupier montre un 9. Que faites-vous ?', options: ['Tirer', 'Rester'], answer: 0, why: 'Contre 7 ou plus, on tire de 12 à 16 : rester perd davantage.' },
      { q: 'Vous avez 12 et le croupier montre un 3. Que faites-vous ?', options: ['Rester', 'Tirer'], answer: 1, why: 'C’est l’exception : on tire sur 12 contre 2 ou 3.' },
    ],
  },
  {
    slug: 'doubler',
    title: 'Doubler : miser plus quand vous avez l’avantage',
    h1: 'Leçon 6 : doubler avec 9, 10 et 11',
    metaTitle: 'Quand doubler avec 9, 10 et 11 · Cours de blackjack',
    description: 'Ce que signifie doubler au blackjack et quand le faire avec 9, 10 et 11, y compris ce qui change aux tables européennes. Leçon 6 du cours de blackjack gratuit.',
    minutes: 4,
    summary: 'Doublez 11 contre tout sauf un as, 10 contre 2–9 et 9 contre 3–6. Aux tables sans carte cachée, ne doublez pas contre un 10 ou un as.',
    body: `
<p><strong>Doubler</strong> consiste à doubler votre mise en échange d’<strong>une seule carte de plus</strong>. Vous le faites quand vous avez déjà l’avantage&nbsp;: votre total est bon et le croupier est faible. Cela ne vous fait pas gagner plus souvent, mais quand vous gagnez, vous encaissez le double.</p>
<h2>Les trois règles</h2>
<ul>
<li><strong>11&nbsp;:</strong> doublez contre n’importe quelle carte sauf un as. N’importe quel 10 (près d’un tiers du paquet) vous donne 21. (Si le croupier tire sur 17 souple, doublez aussi contre l’as.)</li>
<li><strong>10&nbsp;:</strong> doublez contre un 2 à 9.</li>
<li><strong>9&nbsp;:</strong> doublez contre un 3 à 6.</li>
</ul>
<p>Avec 11 contre un 6, tirer vaut +0,34 mise en moyenne et doubler +0,68. C’est la différence entre bien jouer et très bien jouer.</p>
<h2>Aux tables européennes</h2>
<p>Sans carte cachée, le croupier peut encore avoir blackjack. Si vous doublez et qu’il l’a, vous perdez deux fois plus. C’est pourquoi, aux tables sans carte cachée, <strong>11 contre un 10 ou un as se tire</strong>, il ne se double pas. Dans les casinos espagnols, vous ne pouvez en plus doubler que sur 9, 10 ou 11.</p>
<p>Tous les cas, chiffres à l’appui, dans <a href="/fr/quand-doubler-blackjack/">quand doubler au blackjack</a>.</p>`,
    quiz: [
      { q: 'Vous avez 11 et le croupier montre un 7 (table de Las Vegas). Que faites-vous ?', options: ['Tirer', 'Doubler', 'Rester'], answer: 1, why: 'On double 11 contre tout sauf un as.' },
      { q: 'Vous avez 9 et le croupier montre un 2. Que faites-vous ?', options: ['Doubler', 'Tirer'], answer: 1, why: 'On ne double 9 que contre 3–6 (avec 6 ou 8 jeux).' },
      { q: 'Table sans carte cachée : vous avez 11 et le croupier montre un 10. Que faites-vous ?', options: ['Doubler', 'Tirer'], answer: 1, why: 'Le croupier peut encore avoir blackjack et vous perdriez le double : tirez.' },
    ],
  },
  {
    slug: 'mains-souples',
    title: 'Les mains souples : l’as qui vous protège',
    h1: 'Leçon 7 : comment jouer les mains souples',
    metaTitle: 'Jouer les mains souples (A-2 à A-9) · Cours',
    description: 'Comment jouer les mains souples au blackjack, de A-2 à A-9 : quand tirer, doubler ou rester, et pourquoi le 18 souple n’est pas si bon. Leçon 7 du cours.',
    minutes: 5,
    summary: 'A-2 à A-6 : ne restez jamais. A-7 : restez contre 2, 7 et 8, tirez contre 9, 10 et as. A-8 et A-9 : restez.',
    body: `
<p>Une seule carte ne peut pas faire sauter une main souple&nbsp;: on joue donc les mains souples de façon bien plus agressive que les mains dures.</p>
<h2>A-2 à A-6&nbsp;: ne restez jamais</h2>
<p>Ce sont des 13 à 17 souples&nbsp;: des totaux faibles qu’une carte ne peut pas aggraver. <strong>Tirez toujours</strong>, et là où l’on peut doubler sur deux cartes quelconques, doublez contre les cartes faibles du croupier (A-2 et A-3 contre 5–6, A-4 et A-5 contre 4–6, A-6 contre 3–6).</p>
<h2>A-7&nbsp;: le 18 souple qui n’est pas si bon</h2>
<ul>
<li>Contre <strong>2, 7 ou 8</strong>&nbsp;: restez.</li>
<li>Contre <strong>3 à 6</strong>&nbsp;: doublez si c’est permis&nbsp;; sinon, restez.</li>
<li>Contre <strong>9, 10 ou as</strong>&nbsp;: <strong>tirez</strong>. 18 perd plus qu’il ne gagne contre ces cartes.</li>
</ul>
<p>A-7 contre un 9, c’est l’erreur classique des joueurs expérimentés&nbsp;: rester vaut −0,18 mise en moyenne, tirer −0,10.</p>
<h2>A-8 et A-9&nbsp;: restez</h2>
<p>Les 19 et 20 souples sont des mains gagnantes. N’y touchez pas.</p>
<h2>Dans les casinos espagnols</h2>
<p>On ne peut doubler que sur 9–11, donc les doublements avec une main souple disparaissent&nbsp;: tirez de A-2 à A-6, et restez sur A-7 contre 3–6.</p>`,
    quiz: [
      { q: 'Vous avez A-5 et le croupier montre un 10. Que faites-vous ?', options: ['Rester', 'Tirer'], answer: 1, why: 'A-5 est un 16 souple : une carte ne peut pas vous faire sauter et le total est faible. Tirez.' },
      { q: 'Vous avez A-7 et le croupier montre un 9. Que faites-vous ?', options: ['Rester', 'Tirer'], answer: 1, why: 'Le 18 souple contre 9, 10 ou as se tire : rester perd davantage.' },
      { q: 'Vous avez A-8 et le croupier montre un 10. Que faites-vous ?', options: ['Rester', 'Tirer', 'Doubler'], answer: 0, why: 'Le 19 souple est une main gagnante : restez.' },
    ],
  },
  {
    slug: 'separer-les-paires',
    title: 'Les paires : quand séparer',
    h1: 'Leçon 8 : quand séparer les paires',
    metaTitle: 'Quand séparer les paires au blackjack · Cours',
    description: 'Quelles paires séparer au blackjack : toujours les as et les huit, jamais les dix ni les cinq, le reste selon la carte du croupier. Leçon 8 du cours.',
    minutes: 4,
    summary: 'Séparez toujours les as et les huit ; jamais les dix ni les cinq. Le reste, surtout contre 2–6.',
    body: `
<h2>Toujours&nbsp;: les as et les huit</h2>
<p>Deux as font 2 ou 12&nbsp;; séparés, chacun peut faire 21. Deux huit font 16, la pire main&nbsp;; séparés, chacun part de 8. Aux tables sans carte cachée, il y a des exceptions&nbsp;: ne séparez pas les as contre un as, ni les huit contre un 10 ou un as.</p>
<h2>Jamais&nbsp;: les dix et les cinq</h2>
<p>Un 20 gagne presque toujours&nbsp;: ne le cassez pas. Deux cinq font 10, parfait pour doubler.</p>
<h2>Le reste&nbsp;: contre les cartes faibles</h2>
<table><thead><tr><th>Paire</th><th>Séparer contre</th></tr></thead><tbody>
<tr><td>2-2, 3-3</td><td>2 à 7</td></tr><tr><td>4-4</td><td>5 et 6 (si l’on peut doubler après séparation)</td></tr>
<tr><td>6-6</td><td>2 à 6</td></tr><tr><td>7-7</td><td>2 à 7</td></tr><tr><td>9-9</td><td>2 à 6, 8 et 9 (pas 7, 10 ni as)</td></tr></tbody></table>
<p>Restez sur 9-9 contre un 7&nbsp;: un croupier qui montre un 7 finit souvent à 17, et votre 18 le bat. Plus de détails et de chiffres dans <a href="/fr/quand-separer-blackjack/">quand séparer au blackjack</a>.</p>`,
    quiz: [
      { q: 'Vous avez 8-8 et le croupier montre un 10 (table de Las Vegas). Que faites-vous ?', options: ['Rester sur 16', 'Séparer', 'Tirer'], answer: 1, why: 'Avec carte cachée, séparez toujours les huit : deux mains qui partent de 8 perdent moins qu’un 16.' },
      { q: 'Vous avez 10-10 et le croupier montre un 6. Que faites-vous ?', options: ['Séparer, le croupier est faible', 'Rester'], answer: 1, why: 'Ne séparez jamais les dix : rester sur 20 vaut +0,70 mise, séparer +0,57.' },
      { q: 'Vous avez 9-9 et le croupier montre un 7. Que faites-vous ?', options: ['Séparer', 'Rester'], answer: 1, why: 'Votre 18 bat le 17 que fait souvent un croupier qui montre un 7 : restez.' },
    ],
  },
  {
    slug: 'abandon-et-regles-de-table',
    title: 'L’abandon et le choix de la bonne table',
    h1: 'Leçon 9 : l’abandon et le choix de la table',
    metaTitle: 'Abandon et choix de la table · Cours de blackjack',
    description: 'Quand abandonner au blackjack et comment choisir une table aux bonnes règles : 3:2, croupier qui reste sur 17 souple, doubler après split. Leçon 9 du cours.',
    minutes: 4,
    summary: 'Abandonnez 16 contre 9, 10 ou as et 15 contre 10, si c’est permis. Et choisissez des tables à 3:2 où le croupier reste sur 17 souple.',
    body: `
<h2>Abandonner n’est pas une lâcheté</h2>
<p>Certaines tables vous permettent d’<strong>abandonner</strong> juste après la distribution&nbsp;: vous renoncez à la main et récupérez la moitié de votre mise. Cela ne vaut la peine que si la main perd plus d’une fois sur deux. Avec les règles de Las Vegas, cela signifie <strong>16 contre 9, 10 ou as</strong> et <strong>15 contre 10</strong>. Si l’abandon n’est pas proposé, tirez sur ces mains.</p>
<h2>La décision la plus coûteuse se prend avant de s’asseoir</h2>
<p>Les règles de la table font bouger l’avantage de la maison plus que bien des erreurs. Cherchez&nbsp;:</p>
<ul>
<li><strong>Un blackjack payé 3 pour 2</strong>, jamais 6 pour 5 (+1,4 point pour la maison).</li>
<li><strong>Un croupier qui reste sur 17 souple</strong> (S17). S’il tire (H17), +0,2 point.</li>
<li><strong>Le doublement après séparation</strong> autorisé.</li>
<li><strong>L’abandon</strong>, s’il existe.</li>
<li><strong>Moins de jeux</strong>, c’est mieux, même si cela compte moins que le reste.</li>
</ul>
<p>Tout cela est chiffré dans <a href="/fr/donnees-blackjack/avantage-maison-regles/">l’avantage de la maison selon les règles</a>.</p>`,
    quiz: [
      { q: 'Vous avez 16 contre un 10 et la table autorise l’abandon. Que faites-vous ?', options: ['Abandonner', 'Tirer', 'Rester'], answer: 0, why: 'Avec l’abandon, 16 contre 10 s’abandonne : vous sauvez la moitié de la mise sur une main qui perd plus d’une fois sur deux.' },
      { q: 'Quelle règle vous est la plus défavorable ?', options: ['Le croupier tire sur 17 souple', 'Le blackjack paie 6 pour 5', '8 jeux au lieu de 6'], answer: 1, why: 'Le 6:5 ajoute environ 1,4 point à l’avantage de la maison ; le H17 environ 0,2 ; 8 jeux environ 0,02.' },
      { q: 'Pas d’abandon à cette table. Vous avez 15 contre un 10. Que faites-vous ?', options: ['Rester', 'Tirer'], answer: 1, why: 'Sans abandon, ces mains se tirent.' },
    ],
  },
  {
    slug: 'compter-les-cartes-sans-mythes',
    title: 'Compter les cartes, sans les mythes',
    h1: 'Leçon 10 : compter les cartes, sans les mythes',
    metaTitle: 'Compter les cartes sans mythes · Cours de blackjack',
    description: 'Dernière leçon du cours de blackjack gratuit : ce qu’est le comptage des cartes avec le Hi-Lo, quel avantage il donne vraiment et où il ne marche pas du tout.',
    minutes: 5,
    summary: 'Hi-Lo : les 2–6 comptent +1, les 7–9 zéro, les 10 et les as −1. C’est légal, mais l’avantage est faible et cela ne marche pas en ligne.',
    body: `
<p>Compter les cartes, c’est suivre les cartes déjà distribuées pour savoir quand celles qui restent sont riches en cartes hautes, qui favorisent le joueur&nbsp;: plus de blackjacks, de meilleurs doublements et un croupier qui saute davantage.</p>
<h2>Le système Hi-Lo</h2>
<table><thead><tr><th>Cartes</th><th>Valeur</th></tr></thead><tbody>
<tr><td>2 à 6</td><td>+1</td></tr><tr><td>7 à 9</td><td>0</td></tr><tr><td>10, figures et as</td><td>−1</td></tr></tbody></table>
<p>Le total cumulé est le <strong>compte courant</strong>. Divisé par le nombre de jeux qui restent à distribuer, c’est le <strong>compte réel</strong> (true count). Plus il est élevé, plus vous misez.</p>
<h2>La vérité sur l’avantage</h2>
<p>Un compteur discipliné, avec de bonnes règles, obtient environ 0,5–1&nbsp;% sur l’argent misé, avec des écarts énormes et une grosse bankroll derrière. Les casinos mélangent plus tôt ou vous demandent d’arrêter de jouer dès qu’ils vous repèrent. Ce n’est pas un business plan.</p>
<h2>Là où ça ne marche pas</h2>
<ul>
<li><strong>Blackjack en ligne à générateur aléatoire (RNG)&nbsp;:</strong> le paquet est remélangé à chaque main.</li>
<li><strong>Mélangeurs automatiques en continu&nbsp;:</strong> les cartes retournent dans la machine après chaque main.</li>
</ul>
<p>Compter de tête est légal&nbsp;; utiliser un appareil à la table ne l’est pas. Pour vous entraîner, essayez les exercices de <a href="/fr/s-entrainer-a-compter-les-cartes/">s’entraîner à compter les cartes</a>.</p>
<h2>Félicitations</h2>
<p>Vous avez terminé le cours. Vous en savez désormais plus que la plupart des gens qui s’assoient à une table. Il reste à en faire un réflexe&nbsp;: décider correctement en deux secondes, main après main. Le seul chemin, c’est l’entraînement.</p>`,
    quiz: [
      { q: 'Combien vaut un 5 en Hi-Lo ?', options: ['+1', '0', '−1'], answer: 0, why: 'Les cartes de 2 à 6 comptent +1.' },
      { q: 'Compte courant +6 avec 3 jeux restants. Compte réel ?', options: ['+6', '+2', '+18'], answer: 1, why: '6 ÷ 3 = +2.' },
      { q: 'Le comptage marche-t-il au blackjack en ligne classique ?', options: ['Oui, comme au casino', 'Non, il remélange à chaque main'], answer: 1, why: 'Le logiciel remélange après chaque main : il n’y a rien à compter.' },
    ],
  },
];

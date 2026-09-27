// German edition of the free course (src/lib/course.ts). Same lessons, same facts, same
// quiz answers; adapted for German-speaking readers (European tables without hole card,
// Las Vegas as the classic reference). Index i here is the same lesson as index i in the
// Spanish course (used for hreflang pairing).
import type { Lesson } from './course';

export const lessonsDe: Lesson[] = [
  {
    slug: 'was-ist-blackjack',
    title: 'Was Blackjack ist und wie man gewinnt',
    h1: 'Lektion 1: Was Blackjack ist und wie man gewinnt',
    metaTitle: 'Was ist Blackjack und wie gewinnt man? · Blackjack-Kurs',
    description: 'Lektion 1 des kostenlosen Blackjack-Kurses: was das Spiel ist, gegen wen du spielst und wie du eine Hand gewinnst. Mit einem kurzen Quiz am Ende der Lektion.',
    minutes: 4,
    summary: 'Du spielst gegen den Dealer, nicht gegen den Tisch. Du gewinnst, wenn du näher an 21 kommst als der Dealer, ohne dich zu überkaufen.',
    body: `
<p>Blackjack ist das beliebteste Kartenspiel im Casino. Es ist die Casino-Version des klassischen „Einundzwanzig“ (auch „17 und 4“), mit einem wichtigen Unterschied: <strong>Du spielst nicht gegen die anderen Spieler, sondern gegen den Dealer</strong>. Was die anderen am Tisch machen, ändert nichts an deinem Ergebnis.</p>
<h2>Das eigentliche Ziel</h2>
<p>Viele glauben, das Ziel sei, auf 21 zu kommen. Stimmt nicht. Das Ziel ist, <strong>den Dealer zu schlagen</strong>, und das geht auf zwei Arten:</p>
<ul>
<li>Du endest mit einer höheren Summe als der Dealer, ohne über 21 zu kommen.</li>
<li>Du bleibst bei 21 oder darunter, während sich der Dealer überkauft.</li>
</ul>
<p>Habt ihr beide dieselbe Summe, ist das ein <strong>Push</strong>: Du bekommst deinen Einsatz zurück.</p>
<h2>Die Regel, die alles erklärt</h2>
<p>Kommst du über 21, verlierst du sofort – auch wenn sich der Dealer danach überkauft. Weil <strong>du immer vor dem Dealer handelst</strong>, entsteht aus dieser Regel der Hausvorteil. In diesem ganzen Kurs geht es darum, so viel wie möglich davon zurückzuholen.</p>
<h2>Der Dealer denkt nicht</h2>
<p>Der Dealer trifft keine Entscheidungen: Er folgt einer festen Regel. Bei 16 oder weniger zieht er, bei 17 oder mehr bleibt er stehen. Du dagegen kannst ziehen, stehen bleiben, verdoppeln, splitten oder aufgeben. Diese Freiheit ist deine Waffe, und die Grundstrategie ist die richtige Art, sie einzusetzen.</p>`,
    quiz: [
      { q: 'Gegen wen spielst du beim Blackjack?', options: ['Gegen die anderen Spieler', 'Gegen den Dealer', 'Gegen das Casino und die Spieler'], answer: 1, why: 'Nur gegen den Dealer. Was die anderen Spieler tun, ändert dein Ergebnis nicht.' },
      { q: 'Du hast 18, der Dealer hat 20. Was passiert?', options: ['Du gewinnst, niemand hat sich überkauft', 'Push', 'Du verlierst'], answer: 2, why: 'Es gewinnt, wer näher an 21 ist, ohne sich zu überkaufen: der Dealer mit 20.' },
      { q: 'Du überkaufst dich mit 23, danach überkauft sich der Dealer mit 24. Was passiert?', options: ['Push', 'Du verlierst', 'Du gewinnst'], answer: 1, why: 'Wer sich überkauft, verliert sofort. Genau daher kommt der Hausvorteil.' },
    ],
  },
  {
    slug: 'kartenwerte-und-soft-hands',
    title: 'Kartenwerte und Soft Hands',
    h1: 'Lektion 2: Kartenwerte und Soft Hands',
    metaTitle: 'Blackjack Kartenwerte und Soft Hands · Blackjack-Kurs',
    description: 'Was jede Karte beim Blackjack wert ist, wie das Ass funktioniert, was eine Soft Hand ist und was als Blackjack zählt. Lektion 2 des Blackjack-Kurses.',
    minutes: 4,
    summary: 'Bildkarten zählen 10, Asse 1 oder 11. Eine Hand, in der das Ass als 11 zählt, ist „soft“: Mit einer Karte kannst du dich nicht überkaufen.',
    body: `
<table><thead><tr><th>Karte</th><th>Wert</th></tr></thead><tbody>
<tr><td>2 bis 9</td><td>Zahlenwert</td></tr><tr><td>10, Bube, Dame, König</td><td>10</td></tr><tr><td>Ass</td><td>1 oder 11, je nachdem, was dir nützt</td></tr></tbody></table>
<p>Die Farben spielen keine Rolle. Mit vier Rängen im Wert von 10 ist <strong>fast ein Drittel des Decks 10 wert</strong> (16 von 52). Merk dir das: Es erklärt viele Spielzüge.</p>
<h2>Das Ass und die Soft Hands</h2>
<p>Eine Hand, in der ein Ass als 11 zählt, heißt <strong>Soft Hand</strong>. Ass-6 ist <strong>Soft 17</strong>: Sie kann 7 oder 17 sein. Der springende Punkt: <strong>Mit einer einzigen Karte kannst du dich nicht überkaufen</strong> – kommt eine Zehn, zählt das Ass als 1 und du hast 17.</p>
<p>Jede andere Hand ist eine <strong>harte Hand</strong>. 10-7 ist harte 17: Ziehst du, überkauft dich fast jede Karte.</p>
<p>Eine Soft Hand kann hart werden: Ass-6 (Soft 17) plus eine 9 ergibt harte 16, weil das Ass jetzt als 1 zählen muss.</p>
<h2>Blackjack</h2>
<p>Ein Ass plus eine Zehnerkarte als deine ersten beiden Karten ist ein <strong>Blackjack</strong>. Es ist die beste Hand und schlägt jede andere 21, auch eine 21 aus drei Karten. Normalerweise zahlt er 3 zu 2.</p>`,
    quiz: [
      { q: 'Was ist Ass-6 wert?', options: ['Nur 7', 'Nur 17', '7 oder 17 (Soft 17)'], answer: 2, why: 'Das Ass zählt 1 oder 11. Als 11 überkauft es dich nicht, also ist es Soft 17.' },
      { q: 'Du hast Ass-6 und ziehst: Es kommt eine 10. Was hast du?', options: ['27, überkauft', 'Harte 17', '21'], answer: 1, why: 'Das Ass zählt jetzt 1: 1 + 6 + 10 = 17. Deshalb kann dich eine Karte bei einer Soft Hand nicht überkaufen.' },
      { q: 'Was gewinnt: ein Blackjack oder eine 21 aus drei Karten?', options: ['Der Blackjack', 'Die 21 aus drei Karten', 'Es ist ein Push'], answer: 0, why: 'Ein Blackjack (Ass + Zehn als erste zwei Karten) schlägt jede andere 21.' },
    ],
  },
  {
    slug: 'ablauf-einer-hand',
    title: 'Der Ablauf einer Hand, Schritt für Schritt',
    h1: 'Lektion 3: Der Ablauf einer Hand, Schritt für Schritt',
    metaTitle: 'Ablauf einer Blackjack-Hand Schritt für Schritt · Kurs',
    description: 'Eine komplette Blackjack-Hand von Anfang bis Ende: Einsatz, Austeilen, Hole Card, Zug des Spielers, Zug des Dealers und Auszahlung. Lektion 3 des Kurses.',
    minutes: 5,
    summary: 'Du setzt, bekommst zwei Karten, triffst deine Entscheidungen, und der Dealer spielt zuletzt nach fester Regel: ziehen bis 16.',
    body: `
<ol>
<li><strong>Einsatz.</strong> Du setzt vor dem Austeilen.</li>
<li><strong>Austeilen.</strong> Du bekommst zwei offene Karten. Der Dealer bekommt eine offene Karte.</li>
<li><strong>Die Hole Card.</strong> Es gibt zwei Varianten. Beim <strong>amerikanischen</strong> Spiel nimmt der Dealer eine zweite, verdeckte Karte und prüft sie auf Blackjack, bevor du spielst, wenn er ein Ass oder eine Zehn zeigt. Beim <strong>europäischen</strong> Spiel (in Spanien und an vielen Online-Tischen, in der Regel auch in deutschsprachigen Spielbanken) gibt es keine Hole Card: Der Dealer zieht seine zweite Karte am Ende.</li>
<li><strong>Dein Zug.</strong> Ziehen, stehen bleiben, verdoppeln, splitten oder aufgeben. Du kannst so viele Karten nehmen, wie du willst.</li>
<li><strong>Zug des Dealers.</strong> Der Dealer zieht bei 16 oder weniger und bleibt bei 17 oder mehr stehen. An manchen Tischen zieht er auch bei Soft 17 („H17“).</li>
<li><strong>Auszahlung.</strong> Die Summen werden verglichen und die Einsätze ausgezahlt.</li>
</ol>
<h2>Warum die Hole Card wichtig ist</h2>
<p>Ohne Hole Card kann der Dealer noch Blackjack haben, wenn du verdoppelst oder splittest – und hat er ihn, nimmt er alles, was du auf dem Tisch hast. Deshalb verdoppelst du an europäischen Tischen 11 nicht gegen eine 10. Mehr dazu unter <a href="/de/blackjack-regeln-spanien/">Blackjack-Regeln in Spanien</a>.</p>
<h2>Die Karte, auf die es ankommt: die offene Karte des Dealers</h2>
<p>Die ganze Strategie beruht auf zwei Dingen: <strong>deiner Summe</strong> und <strong>der offenen Karte des Dealers</strong>. Sie verrät dir, wie wahrscheinlich es ist, dass er sich überkauft. Zeigt er eine 5 oder 6, überkauft er sich in über 40 % der Fälle; mit einer 10 in etwa 23 %.</p>`,
    quiz: [
      { q: 'Wann nimmt der Dealer eine Karte?', options: ['Wann immer er glaubt, dass es hilft', 'Immer bei 16 oder weniger', 'Nur wenn die Spieler mehr haben'], answer: 1, why: 'Der Dealer entscheidet nicht: Er zieht bei 16 oder weniger und bleibt bei 17 oder mehr stehen.' },
      { q: 'Prüft der Dealer an einem europäischen Tisch (ohne Hole Card) zuerst auf Blackjack?', options: ['Ja, bevor du spielst', 'Nein, die zweite Karte kommt am Ende', 'Das hängt vom Spieler ab'], answer: 1, why: 'Beim europäischen Spiel gibt es keine Hole Card: Die zweite Karte des Dealers kommt, nachdem du gespielt hast.' },
      { q: 'Bei welcher offenen Karte überkauft sich der Dealer am häufigsten?', options: ['Bei einer 10', 'Bei einem Ass', 'Bei einer 5 oder 6'], answer: 2, why: 'Mit einer 5 oder 6 überkauft sich der Dealer in etwa 42 % der Fälle; mit einer 10 in etwa 23 %.' },
    ],
  },
  {
    slug: 'auszahlungen-und-versicherung',
    title: 'Auszahlungen und Versicherung: was sich lohnt',
    h1: 'Lektion 4: Was sich lohnt und was dich ausnimmt',
    metaTitle: 'Blackjack Auszahlung, 6:5 und Versicherung · Kurs',
    description: 'Was Blackjack auszahlt, warum 6:5-Tische eine Falle sind, was die Versicherung ist und warum du sie – oder Even Money – nie nehmen solltest. Lektion 4.',
    minutes: 4,
    summary: 'Ein Blackjack sollte 3 zu 2 zahlen. Meide 6:5-Tische. Nimm nie die Versicherung – und auch kein Even Money.',
    body: `
<table><thead><tr><th>Ergebnis</th><th>Auszahlung</th></tr></thead><tbody>
<tr><td>Gewinn</td><td>1 zu 1</td></tr><tr><td>Blackjack</td><td>3 zu 2 (10 € gewinnen 15 €)</td></tr><tr><td>Push</td><td>Einsatz zurück</td></tr></tbody></table>
<h2>Die 6:5-Falle</h2>
<p>Manche Tische zahlen einen Blackjack nur 6 zu 5 (10 € gewinnen 12 €). Das klingt nach wenig, erhöht den Hausvorteil aber um etwa <strong>1,4 Prozentpunkte</strong> – ungefähr das Vierfache dessen, was du bei perfektem Spiel verlierst. Es ist die schlechteste Regel überhaupt. Steht auf dem Tuch „Blackjack pays 6 to 5“, such dir einen anderen Tisch.</p>
<h2>Die Versicherung</h2>
<p>Zeigt der Dealer ein Ass, wird dir die <strong>Versicherung</strong> angeboten: eine Nebenwette von bis zu der Hälfte deines Einsatzes darauf, dass der Dealer eine Zehn darunter hat. Sie zahlt 2 zu 1. Um die Gewinnschwelle zu erreichen, müsste der Dealer in mehr als einem Drittel der Fälle eine Zehn haben – er hat sie aber nur in etwa <strong>31 %</strong>. Das Haus gewinnt bei dieser Wette rund 7 %.</p>
<h2>Even Money</h2>
<p>Hast du Blackjack und der Dealer zeigt ein Ass, wird dir „Even Money“ angeboten: sofort 1 zu 1 kassieren. Das ist genau dasselbe, wie deinen Blackjack zu versichern. Lehnst du ab, ist das im Schnitt 1,04 Einsätze wert; nimmst du an, genau 1. Du verschenkst 4 %.</p>`,
    quiz: [
      { q: 'Was sollte ein Blackjack auszahlen?', options: ['1 zu 1', '6 zu 5', '3 zu 2'], answer: 2, why: '3 zu 2 ist der Standard. 6 zu 5 erhöht den Hausvorteil um etwa 1,4 Punkte.' },
      { q: 'Der Dealer zeigt ein Ass und bietet die Versicherung an. Was tust du?', options: ['Mit einer guten Hand nehmen', 'Nie nehmen', 'Immer nehmen'], answer: 1, why: 'Die Versicherung ist eine eigene Wette mit etwa 7 % Hausvorteil, egal welche Hand du hast.' },
      { q: 'Du hast Blackjack und der Dealer zeigt ein Ass. Even Money nehmen?', options: ['Ja, das ist sicheres Geld', 'Nein', 'Nur bei wenigen Decks'], answer: 1, why: 'Annehmen ist 1 Einsatz wert, ablehnen im Schnitt 1,04. Es ist eine verkleidete Versicherung.' },
    ],
  },
  {
    slug: 'ziehen-oder-stehen',
    title: 'Ziehen oder stehen bleiben mit 12 bis 16',
    h1: 'Lektion 5: Ziehen oder stehen bleiben mit harten Händen',
    metaTitle: 'Blackjack: wann ziehen, wann stehen (12 bis 16) · Kurs',
    description: 'Wann du beim Blackjack mit harten 12 bis 16 ziehst und wann du stehen bleibst, je nach offener Karte des Dealers – plus die Ausnahme bei 12. Lektion 5.',
    minutes: 5,
    summary: 'Mit 12–16: stehen bleiben gegen 2–6 (außer 12 gegen 2 oder 3) und ziehen gegen 7 oder höher. Mit 17 oder mehr immer stehen bleiben.',
    body: `
<p>Hände von 12 bis 16 sind die unangenehmen: Ziehst du, kannst du dich überkaufen, bleibst du stehen, sind sie zu niedrig zum Gewinnen. Die Antwort hängt von der offenen Karte des Dealers ab.</p>
<h2>Gegen 2 bis 6: stehen bleiben</h2>
<p>Ein Dealer mit niedriger Karte muss ziehen und überkauft sich oft: in etwa 40 % der Fälle bei einer 4, 5 oder 6. Geh kein Risiko ein: Bleib stehen und lass den Dealer sich überkaufen.</p>
<h2>Gegen 7 oder höher: ziehen</h2>
<p>Zeigt der Dealer eine 7, 8, 9, 10 oder ein Ass, kommt er meistens auf 17 oder mehr. Deine 12–16 verliert, wenn du stehen bleibst, also <strong>ziehst du, obwohl du dich überkaufen könntest</strong>. Das ist die Regel, die am schwersten zu akzeptieren ist, und die wichtigste. Das klassische Beispiel ist <a href="/de/16-gegen-10-blackjack/">16 gegen 10</a>.</p>
<h2>Die Ausnahme bei 12</h2>
<p><strong>Zieh mit 12 gegen eine 2 oder 3.</strong> Bei 12 überkauft dich nur eine Zehn, und ein Dealer mit 2 oder 3 überkauft sich seltener als mit 4–6. Das ist das Feld, bei dem sich die meisten irren.</p>
<h2>Harte Hände im Überblick</h2>
<table><thead><tr><th>Deine Summe</th><th>gegen 2–3</th><th>gegen 4–6</th><th>gegen 7–A</th></tr></thead><tbody>
<tr><td>8 oder weniger</td><td>Ziehen</td><td>Ziehen</td><td>Ziehen</td></tr>
<tr><td>12</td><td>Ziehen</td><td>Stehen</td><td>Ziehen</td></tr>
<tr><td>13–16</td><td>Stehen</td><td>Stehen</td><td>Ziehen*</td></tr>
<tr><td>17+</td><td>Stehen</td><td>Stehen</td><td>Stehen</td></tr></tbody></table>
<p class="muted small">* Mit Surrender: 16 gegen 9, 10 oder Ass und 15 gegen 10 aufgeben (Lektion 9). Summen von 9 bis 11 werden verdoppelt (Lektion 6).</p>`,
    quiz: [
      { q: 'Du hast 15 und der Dealer zeigt eine 6. Was tust du?', options: ['Ziehen', 'Stehen bleiben', 'Verdoppeln'], answer: 1, why: 'Gegen 2–6 bleibst du mit 13–16 stehen: Ein Dealer mit 6 überkauft sich in etwa 42 % der Fälle.' },
      { q: 'Du hast 14 und der Dealer zeigt eine 9. Was tust du?', options: ['Ziehen', 'Stehen bleiben'], answer: 0, why: 'Gegen 7 oder höher ziehst du mit 12–16: Stehenbleiben verliert mehr.' },
      { q: 'Du hast 12 und der Dealer zeigt eine 3. Was tust du?', options: ['Stehen bleiben', 'Ziehen'], answer: 1, why: 'Das ist die Ausnahme: Mit 12 gegen 2 oder 3 ziehst du.' },
    ],
  },
  {
    slug: 'verdoppeln',
    title: 'Verdoppeln: mehr setzen, wenn du vorne liegst',
    h1: 'Lektion 6: Verdoppeln mit 9, 10 und 11',
    metaTitle: 'Blackjack: wann verdoppeln mit 9, 10 und 11? · Kurs',
    description: 'Was Verdoppeln beim Blackjack ist und wann du es mit 9, 10 und 11 tust – inklusive der Unterschiede an europäischen Tischen. Lektion 6 des kostenlosen Kurses.',
    minutes: 4,
    summary: '11 gegen alles außer ein Ass verdoppeln, 10 gegen 2–9 und 9 gegen 3–6. An Tischen ohne Hole Card nicht gegen 10 oder Ass verdoppeln.',
    body: `
<p><strong>Verdoppeln</strong> heißt, deinen Einsatz zu verdoppeln und dafür <strong>genau eine weitere Karte</strong> zu bekommen. Das machst du, wenn du schon vorne liegst: Deine Summe ist stark und der Dealer schwach. Du gewinnst dadurch nicht öfter, aber wenn du gewinnst, kassierst du doppelt.</p>
<h2>Die drei Regeln</h2>
<ul>
<li><strong>11:</strong> gegen jede Karte außer ein Ass verdoppeln. Jede Zehn – fast ein Drittel des Decks – bringt dir 21. (Zieht der Dealer bei Soft 17, auch gegen das Ass verdoppeln.)</li>
<li><strong>10:</strong> gegen 2 bis 9 verdoppeln.</li>
<li><strong>9:</strong> gegen 3 bis 6 verdoppeln.</li>
</ul>
<p>Mit 11 gegen eine 6 ist Ziehen im Schnitt +0,34 Einsätze wert, Verdoppeln +0,68. Das ist der Unterschied zwischen gut spielen und sehr gut spielen.</p>
<h2>An europäischen Tischen</h2>
<p>Ohne Hole Card kann der Dealer noch Blackjack haben. Verdoppelst du und er hat ihn, verlierst du das Doppelte. Deshalb wird an Tischen ohne Hole Card <strong>mit 11 gegen 10 oder Ass gezogen</strong>, nicht verdoppelt. In spanischen Casinos darfst du außerdem nur auf 9, 10 oder 11 verdoppeln.</p>
<p>Alle Fälle mit Zahlen findest du unter <a href="/de/blackjack-verdoppeln/">Wann verdoppeln beim Blackjack</a>.</p>`,
    quiz: [
      { q: 'Du hast 11 und der Dealer zeigt eine 7 (Tisch mit Las-Vegas-Regeln). Was tust du?', options: ['Ziehen', 'Verdoppeln', 'Stehen bleiben'], answer: 1, why: '11 verdoppelst du gegen alles außer ein Ass.' },
      { q: 'Du hast 9 und der Dealer zeigt eine 2. Was tust du?', options: ['Verdoppeln', 'Ziehen'], answer: 1, why: '9 verdoppelst du nur gegen 3–6 (bei 6 oder 8 Decks).' },
      { q: 'Tisch ohne Hole Card: Du hast 11 und der Dealer zeigt eine 10. Was tust du?', options: ['Verdoppeln', 'Ziehen'], answer: 1, why: 'Der Dealer kann noch Blackjack haben, und du würdest das Doppelte verlieren: ziehen.' },
    ],
  },
  {
    slug: 'soft-hands',
    title: 'Soft Hands: das Ass, das dich absichert',
    h1: 'Lektion 7: So spielst du Soft Hands',
    metaTitle: 'Soft Hands beim Blackjack spielen (A-2 bis A-9) · Kurs',
    description: 'So spielst du Soft Hands beim Blackjack, von A-2 bis A-9: wann ziehen, verdoppeln oder stehen bleiben – und warum Soft 18 nicht so gut ist, wie sie aussieht.',
    minutes: 5,
    summary: 'A-2 bis A-6: nie stehen bleiben. A-7: stehen gegen 2, 7 und 8, ziehen gegen 9, 10 und Ass. A-8 und A-9: stehen bleiben.',
    body: `
<p>Mit einer einzigen Karte kannst du dich bei einer Soft Hand nicht überkaufen, deshalb werden Soft Hands viel aggressiver gespielt als harte.</p>
<h2>A-2 bis A-6: nie stehen bleiben</h2>
<p>Das sind Soft 13 bis 17: schwache Summen, die eine Karte nicht verschlechtern kann. <strong>Zieh immer</strong>, und wo du auf beliebige zwei Karten verdoppeln darfst, verdopple gegen die schwachen Karten des Dealers (A-2 und A-3 gegen 5–6, A-4 und A-5 gegen 4–6, A-6 gegen 3–6).</p>
<h2>A-7: die Soft 18, die gar nicht so gut ist</h2>
<ul>
<li>Gegen <strong>2, 7 oder 8</strong>: stehen bleiben.</li>
<li>Gegen <strong>3 bis 6</strong>: verdoppeln, wenn erlaubt; sonst stehen bleiben.</li>
<li>Gegen <strong>9, 10 oder Ass</strong>: <strong>ziehen</strong>. Gegen diese Karten verliert 18 öfter, als sie gewinnt.</li>
</ul>
<p>A-7 gegen eine 9 ist der klassische Fehler erfahrener Spieler: Stehenbleiben ist im Schnitt −0,18 Einsätze wert, Ziehen −0,10.</p>
<h2>A-8 und A-9: stehen bleiben</h2>
<p>Soft 19 und 20 sind Gewinnerhände. Lass sie in Ruhe.</p>
<h2>In spanischen Casinos</h2>
<p>Dort darfst du nur auf 9–11 verdoppeln, also fallen die Soft-Verdopplungen weg: Mit A-2 bis A-6 ziehst du, und mit A-7 gegen 3–6 bleibst du stehen.</p>`,
    quiz: [
      { q: 'Du hast A-5 und der Dealer zeigt eine 10. Was tust du?', options: ['Stehen bleiben', 'Ziehen'], answer: 1, why: 'A-5 ist Soft 16: Eine Karte kann dich nicht überkaufen, und die Summe ist schwach. Ziehen.' },
      { q: 'Du hast A-7 und der Dealer zeigt eine 9. Was tust du?', options: ['Stehen bleiben', 'Ziehen'], answer: 1, why: 'Mit Soft 18 gegen 9, 10 oder Ass ziehst du: Stehenbleiben verliert mehr.' },
      { q: 'Du hast A-8 und der Dealer zeigt eine 10. Was tust du?', options: ['Stehen bleiben', 'Ziehen', 'Verdoppeln'], answer: 0, why: 'Soft 19 ist eine Gewinnerhand: stehen bleiben.' },
    ],
  },
  {
    slug: 'paare-splitten',
    title: 'Paare: wann splitten',
    h1: 'Lektion 8: Wann du Paare splittest',
    metaTitle: 'Blackjack: wann Paare splitten? · Blackjack-Kurs',
    description: 'Welche Paare du beim Blackjack splittest: Asse und Achten immer, Zehner und Fünfer nie, der Rest je nach offener Karte des Dealers. Lektion 8 des Kurses.',
    minutes: 4,
    summary: 'Asse und Achten immer splitten, Zehner und Fünfer nie. Der Rest meist gegen 2–6.',
    body: `
<h2>Immer: Asse und Achten</h2>
<p>Zwei Asse sind 2 oder 12; gesplittet kann jedes eine 21 werden. Zwei Achten sind 16, die schlechteste Hand; gesplittet startet jede bei 8. An Tischen ohne Hole Card gibt es Ausnahmen: Asse nicht gegen ein Ass splitten, Achten nicht gegen 10 oder Ass.</p>
<h2>Nie: Zehner und Fünfer</h2>
<p>Eine 20 gewinnt fast immer: Brich sie nicht auf. Zwei Fünfer ergeben 10, perfekt zum Verdoppeln.</p>
<h2>Der Rest: gegen schwache Karten</h2>
<table><thead><tr><th>Paar</th><th>Splitten gegen</th></tr></thead><tbody>
<tr><td>2-2, 3-3</td><td>2 bis 7</td></tr><tr><td>4-4</td><td>5 und 6 (wenn du nach dem Splitten verdoppeln darfst)</td></tr>
<tr><td>6-6</td><td>2 bis 6</td></tr><tr><td>7-7</td><td>2 bis 7</td></tr><tr><td>9-9</td><td>2 bis 6, 8 und 9 (nicht 7, 10 oder Ass)</td></tr></tbody></table>
<p>Mit 9-9 gegen eine 7 bleibst du stehen: Ein Dealer mit 7 landet oft bei 17, und deine 18 schlägt das. Mehr Details und Zahlen unter <a href="/de/blackjack-splitten/">Wann splitten beim Blackjack</a>.</p>`,
    quiz: [
      { q: 'Du hast 8-8 und der Dealer zeigt eine 10 (Tisch mit Las-Vegas-Regeln). Was tust du?', options: ['Mit 16 stehen bleiben', 'Splitten', 'Ziehen'], answer: 1, why: 'Mit Hole Card werden Achten immer gesplittet: Zwei Hände, die bei 8 starten, verlieren weniger als eine 16.' },
      { q: 'Du hast 10-10 und der Dealer zeigt eine 6. Was tust du?', options: ['Splitten, der Dealer ist schwach', 'Stehen bleiben'], answer: 1, why: 'Zehner nie splitten: Mit 20 stehen zu bleiben ist +0,70 Einsätze wert, Splitten +0,57.' },
      { q: 'Du hast 9-9 und der Dealer zeigt eine 7. Was tust du?', options: ['Splitten', 'Stehen bleiben'], answer: 1, why: 'Deine 18 schlägt die 17, auf die ein Dealer mit 7 oft kommt: stehen bleiben.' },
    ],
  },
  {
    slug: 'aufgeben-und-tischregeln',
    title: 'Aufgeben und den richtigen Tisch wählen',
    h1: 'Lektion 9: Aufgeben (Surrender) und die Wahl des Tisches',
    metaTitle: 'Blackjack Surrender und den richtigen Tisch wählen · Kurs',
    description: 'Wann du beim Blackjack aufgibst und wie du einen Tisch mit guten Regeln findest: 3:2-Auszahlung, Dealer steht bei Soft 17, Verdoppeln nach Split, weniger Decks.',
    minutes: 4,
    summary: '16 gegen 9, 10 oder Ass und 15 gegen 10 aufgeben, wenn erlaubt. Und wähl 3:2-Tische, an denen der Dealer bei Soft 17 stehen bleibt.',
    body: `
<h2>Aufgeben ist nichts für Feiglinge</h2>
<p>An manchen Tischen darfst du direkt nach dem Austeilen <strong>aufgeben (Surrender)</strong>: Du gibst die Hand ab und bekommst die Hälfte deines Einsatzes zurück. Das lohnt sich nur, wenn eine Hand öfter als in der Hälfte der Fälle verliert. Mit Las-Vegas-Regeln heißt das: <strong>16 gegen 9, 10 oder Ass</strong> und <strong>15 gegen 10</strong>. Wird Surrender nicht angeboten, ziehst du mit diesen Händen.</p>
<h2>Die teuerste Entscheidung fällt, bevor du dich hinsetzt</h2>
<p>Die Tischregeln verschieben den Hausvorteil stärker als viele Fehler. Achte auf:</p>
<ul>
<li><strong>Blackjack zahlt 3 zu 2</strong>, niemals 6 zu 5 (+1,4 Punkte für das Haus).</li>
<li><strong>Dealer bleibt bei Soft 17 stehen</strong> (S17). Zieht er (H17), +0,2 Punkte.</li>
<li><strong>Verdoppeln nach dem Splitten</strong> erlaubt.</li>
<li><strong>Surrender</strong>, falls angeboten.</li>
<li><strong>Weniger Decks</strong> sind besser, auch wenn das weniger ausmacht als die Punkte oben.</li>
</ul>
<p>Alles in Zahlen findest du unter <a href="/de/blackjack-daten/hausvorteil-regeln/">Hausvorteil nach Regeln</a>.</p>`,
    quiz: [
      { q: 'Du hast 16 gegen eine 10 und der Tisch erlaubt Surrender. Was tust du?', options: ['Aufgeben', 'Ziehen', 'Stehen bleiben'], answer: 0, why: 'Mit Surrender gibst du 16 gegen 10 auf: Du rettest die Hälfte deines Einsatzes bei einer Hand, die öfter als in der Hälfte der Fälle verliert.' },
      { q: 'Welche Regel ist schlechter für dich?', options: ['Dealer zieht bei Soft 17', 'Blackjack zahlt 6 zu 5', '8 Decks statt 6'], answer: 1, why: '6:5 erhöht den Hausvorteil um etwa 1,4 Punkte; H17 um etwa 0,2; 8 Decks um etwa 0,02.' },
      { q: 'An diesem Tisch gibt es kein Surrender. Du hast 15 gegen eine 10. Was tust du?', options: ['Stehen bleiben', 'Ziehen'], answer: 1, why: 'Ohne Surrender ziehst du mit diesen Händen.' },
    ],
  },
  {
    slug: 'kartenzaehlen-ohne-mythen',
    title: 'Kartenzählen ohne Mythen',
    h1: 'Lektion 10: Kartenzählen ohne Mythen',
    metaTitle: 'Kartenzählen ohne Mythen · Blackjack-Kurs',
    description: 'Die letzte Lektion des kostenlosen Blackjack-Kurses: was Kartenzählen mit Hi-Lo ist, welchen Vorteil es wirklich bringt und wo es überhaupt nicht funktioniert.',
    minutes: 5,
    summary: 'Hi-Lo: 2–6 zählen +1, 7–9 null, Zehner und Asse −1. Es ist legal, aber der Vorteil ist klein, und online funktioniert es nicht.',
    body: `
<p>Kartenzählen heißt, den Überblick über die bereits ausgeteilten Karten zu behalten, damit du weißt, wann die restlichen Karten reich an hohen Karten sind. Die begünstigen den Spieler: mehr Blackjacks, bessere Verdopplungen und ein Dealer, der sich öfter überkauft.</p>
<h2>Das Hi-Lo-System</h2>
<table><thead><tr><th>Karten</th><th>Wert</th></tr></thead><tbody>
<tr><td>2 bis 6</td><td>+1</td></tr><tr><td>7 bis 9</td><td>0</td></tr><tr><td>10, Bildkarten und Ass</td><td>−1</td></tr></tbody></table>
<p>Die laufende Summe ist der <strong>Running Count</strong>. Geteilt durch die Decks, die noch ausgeteilt werden, ergibt sie den <strong>True Count</strong>. Je höher er ist, desto mehr setzt du.</p>
<h2>Die Wahrheit über den Vorteil</h2>
<p>Ein disziplinierter Zähler kommt bei guten Regeln auf etwa 0,5–1 % des gesetzten Geldes – mit enormen Schwankungen und einer großen Bankroll im Rücken. Casinos mischen früher oder bitten dich, nicht mehr zu spielen, sobald sie dich erkennen. Ein Geschäftsmodell ist das nicht.</p>
<h2>Wo es nicht funktioniert</h2>
<ul>
<li><strong>Online-Blackjack mit Zufallsgenerator (RNG):</strong> Das Deck wird bei jeder Hand neu gemischt.</li>
<li><strong>Kontinuierliche Mischmaschinen:</strong> Die Karten kommen nach jeder Hand zurück hinein.</li>
</ul>
<p>Im Kopf zu zählen ist legal; ein Gerät am Tisch zu benutzen nicht. Zum Üben probier die Übungen unter <a href="/de/kartenzaehlen-ueben/">Kartenzählen üben</a>.</p>
<h2>Glückwunsch</h2>
<p>Du hast den Kurs abgeschlossen. Du weißt jetzt mehr als die meisten Leute, die sich an einen Tisch setzen. Was bleibt, ist, daraus einen Reflex zu machen: in zwei Sekunden richtig entscheiden, Hand für Hand. Der einzige Weg dahin ist Übung.</p>`,
    quiz: [
      { q: 'Wie viel ist eine 5 bei Hi-Lo wert?', options: ['+1', '0', '−1'], answer: 0, why: '2 bis 6 zählen +1.' },
      { q: 'Running Count +6, noch 3 Decks übrig. True Count?', options: ['+6', '+2', '+18'], answer: 1, why: '6 ÷ 3 = +2.' },
      { q: 'Funktioniert Zählen beim normalen Online-Blackjack?', options: ['Ja, genau wie im Casino', 'Nein, es wird bei jeder Hand neu gemischt'], answer: 1, why: 'Die Software mischt nach jeder Hand neu: Es gibt nichts zu zählen.' },
    ],
  },
];

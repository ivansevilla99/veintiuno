// Dutch edition of the free course (src/lib/course.ts). Same lessons, same facts, same
// quiz answers; adapted for Dutch-speaking readers (European tables without hole card,
// Las Vegas as the classic reference). Index i here is the same lesson as index i in the
// Spanish course (used for hreflang pairing).
import type { Lesson } from './course';

export const lessonsNl: Lesson[] = [
  {
    slug: 'wat-is-blackjack',
    title: 'Wat blackjack is en hoe je wint',
    h1: 'Les 1: wat blackjack is en hoe je wint',
    metaTitle: 'Wat is blackjack en hoe win je? · Blackjack cursus',
    description: 'Les 1 van de gratis blackjack cursus: wat het spel is, tegen wie je speelt en hoe je een hand wint. Met een korte quiz aan het eind, zonder echt geld.',
    minutes: 4,
    summary: 'Je speelt tegen de dealer, niet tegen de tafel. Je wint door dichter bij 21 te eindigen dan de dealer zonder eroverheen te gaan.',
    body: `
<p>Blackjack is het populairste kaartspel in het casino. Het is de casinoversie van het klassieke eenentwintigen, met één belangrijk verschil: <strong>je speelt niet tegen de andere spelers, maar tegen de dealer</strong>. Wat de anderen aan tafel doen, heeft geen invloed op jouw resultaat.</p>
<h2>Het echte doel</h2>
<p>Veel mensen denken dat het doel is om 21 te halen. Dat klopt niet. Het doel is <strong>de dealer verslaan</strong>, en dat kan op twee manieren:</p>
<ul>
<li>Eindigen met een hoger totaal dan de dealer zonder boven 21 te komen.</li>
<li>Op 21 of lager blijven terwijl de dealer kapotgaat.</li>
</ul>
<p>Eindigen jullie allebei op hetzelfde totaal, dan is het <strong>gelijkspel</strong> (push): je krijgt je inzet terug.</p>
<h2>De regel die alles verklaart</h2>
<p>Kom je boven 21, dan verlies je meteen – ook als de dealer daarna kapotgaat. Omdat <strong>jij altijd vóór de dealer aan de beurt bent</strong>, komt het huisvoordeel precies uit die regel voort. Deze hele cursus draait erom zoveel mogelijk daarvan terug te winnen.</p>
<h2>De dealer denkt niet na</h2>
<p>De dealer neemt geen beslissingen: hij volgt een vaste regel. Hij neemt een kaart op 16 of minder en past op 17 of meer. Jij kunt daarentegen een kaart vragen, passen, verdubbelen, splitsen of opgeven. Die vrijheid is je wapen, en de basisstrategie is de juiste manier om het te gebruiken.</p>`,
    quiz: [
      { q: 'Tegen wie speel je bij blackjack?', options: ['De andere spelers', 'De dealer', 'Het casino en de spelers'], answer: 1, why: 'Alleen tegen de dealer. Wat andere spelers doen, verandert niets aan jouw resultaat.' },
      { q: 'Jij hebt 18 en de dealer heeft 20. Wat gebeurt er?', options: ['Jij wint, niemand is kapot', 'Gelijkspel', 'Je verliest'], answer: 2, why: 'Wie het dichtst bij 21 zit zonder eroverheen te gaan, wint: de dealer, met 20.' },
      { q: 'Jij gaat kapot met 23, daarna gaat de dealer kapot met 24. Wat gebeurt er?', options: ['Gelijkspel', 'Je verliest', 'Je wint'], answer: 1, why: 'Ga je kapot, dan verlies je meteen. Daar komt het huisvoordeel vandaan.' },
    ],
  },
  {
    slug: 'kaartwaarden-en-zachte-handen',
    title: 'Kaartwaarden en zachte handen',
    h1: 'Les 2: kaartwaarden en zachte handen',
    metaTitle: 'Kaartwaarden en zachte handen · Blackjack cursus',
    description: 'Wat elke kaart waard is bij blackjack, hoe de aas werkt, wat een zachte hand (soft) is en wat als blackjack telt. Les 2 van de gratis cursus, met quiz.',
    minutes: 4,
    summary: 'Plaatjes zijn 10 waard, azen 1 of 11. Een hand met een aas die als 11 telt, is „zacht”: één kaart kan hem niet kapotmaken.',
    body: `
<table><thead><tr><th>Kaart</th><th>Waarde</th></tr></thead><tbody>
<tr><td>2 t/m 9</td><td>Wat erop staat</td></tr><tr><td>10, boer, vrouw, heer</td><td>10</td></tr><tr><td>Aas</td><td>1 of 11, wat jou het beste uitkomt</td></tr></tbody></table>
<p>De kleuren doen er niet toe. Met vier soorten kaarten die 10 waard zijn, is <strong>bijna een derde van het deck 10 waard</strong> (16 van de 52). Onthoud dat: het verklaart veel zetten.</p>
<h2>De aas en zachte handen</h2>
<p>Een hand met een aas die als 11 telt, heet <strong>zacht</strong> (soft). Aas-6 is <strong>zachte 17</strong>: het kan 7 of 17 zijn. Het belangrijkste: <strong>je kunt niet kapotgaan door één kaart te nemen</strong>. Komt er een tien, dan telt de aas als 1 en heb je 17.</p>
<p>Elke andere hand is <strong>hard</strong>. 10-7 is harde 17: vraag je een kaart, dan maakt bijna alles je kapot.</p>
<p>Een zachte hand kan hard worden: aas-6 (zachte 17) plus een 9 is harde 16, want de aas moet nu als 1 tellen.</p>
<h2>Blackjack</h2>
<p>Een aas plus een kaart met waarde 10 als je eerste twee kaarten is een <strong>blackjack</strong>. Dat is de beste hand en die wint van elke andere 21, ook van een 21 met drie kaarten. Hij betaalt normaal 3 tegen 2.</p>`,
    quiz: [
      { q: 'Hoeveel is aas-6 waard?', options: ['Alleen 7', 'Alleen 17', '7 of 17 (zachte 17)'], answer: 2, why: 'De aas is 1 of 11. Als 11 maakt hij je niet kapot, dus het is zachte 17.' },
      { q: 'Je hebt aas-6 en vraagt een kaart: er komt een 10. Wat heb je?', options: ['27, kapot', 'Harde 17', '21'], answer: 1, why: 'De aas telt dan als 1: 1 + 6 + 10 = 17. Daarom kan één kaart een zachte hand niet kapotmaken.' },
      { q: 'Wat wint: een blackjack of een 21 met drie kaarten?', options: ['De blackjack', 'De 21 met drie kaarten', 'Gelijkspel'], answer: 0, why: 'Een blackjack (aas + tien als eerste twee kaarten) wint van elke andere 21.' },
    ],
  },
  {
    slug: 'zo-verloopt-een-hand',
    title: 'Zo verloopt een hand, stap voor stap',
    h1: 'Les 3: zo verloopt een hand, stap voor stap',
    metaTitle: 'Zo verloopt een hand blackjack · Blackjack cursus',
    description: 'Een complete hand blackjack van begin tot eind: de inzet, het delen, de gesloten kaart, jouw beurt, de dealer en de uitbetaling. Les 3 van de gratis cursus.',
    minutes: 5,
    summary: 'Je zet in, krijgt twee kaarten, neemt je beslissingen, en de dealer speelt als laatste volgens een vaste regel: kaart nemen tot en met 16.',
    body: `
<ol>
<li><strong>Inzetten.</strong> Je plaatst je inzet voordat er gedeeld wordt.</li>
<li><strong>Delen.</strong> Je krijgt twee open kaarten. De dealer krijgt één open kaart.</li>
<li><strong>De gesloten kaart (hole card).</strong> Er zijn twee varianten. In het <strong>Amerikaanse</strong> spel neemt de dealer een tweede kaart dicht en checkt hij, als hij een aas of een tien open heeft, op blackjack voordat jij speelt. In het <strong>Europese</strong> spel (meestal in Nederlandse en Belgische casino’s, in Spanje en aan veel online tafels) is er geen hole card: de dealer trekt zijn tweede kaart pas aan het eind.</li>
<li><strong>Jouw beurt.</strong> Kaart vragen, passen, verdubbelen, splitsen of opgeven. Je mag zoveel kaarten nemen als je wilt.</li>
<li><strong>Beurt van de dealer.</strong> De dealer neemt een kaart op 16 of minder en past op 17 of meer. Aan sommige tafels neemt de dealer ook een kaart op zachte 17 („H17”).</li>
<li><strong>Uitbetaling.</strong> De totalen worden vergeleken en de inzetten uitbetaald.</li>
</ol>
<h2>Waarom de gesloten kaart ertoe doet</h2>
<p>Zonder hole card kan de dealer nog blackjack hebben als jij verdubbelt of splitst, en heeft hij die, dan neemt hij alles wat je op tafel hebt liggen. Daarom verdubbel je aan Europese tafels 11 niet tegen een 10. Meer daarover in <a href="/nl/blackjack-regels-spanje/">blackjack regels in Spanje</a>.</p>
<h2>De kaart die telt: de open kaart van de dealer</h2>
<p>De hele strategie rust op twee dingen: <strong>jouw totaal</strong> en <strong>de open kaart van de dealer</strong>. Die open kaart vertelt je hoe groot de kans is dat de dealer kapotgaat. Met een 5 of een 6 open gaat hij in meer dan 40% van de gevallen kapot; met een 10 in ongeveer 23%.</p>`,
    quiz: [
      { q: 'Wanneer neemt de dealer een kaart?', options: ['Wanneer hij denkt dat het helpt', 'Altijd op 16 of minder', 'Alleen als de spelers meer hebben'], answer: 1, why: 'De dealer beslist niets: hij neemt een kaart op 16 of minder en past op 17 of meer.' },
      { q: 'Checkt de dealer aan een Europese tafel (zonder hole card) eerst op blackjack?', options: ['Ja, voordat jij speelt', 'Nee, de tweede kaart komt aan het eind', 'Dat hangt van de speler af'], answer: 1, why: 'In het Europese spel is er geen hole card: de tweede kaart van de dealer komt nadat jij hebt gespeeld.' },
      { q: 'Met welke open kaart gaat de dealer het vaakst kapot?', options: ['Een 10', 'Een aas', 'Een 5 of een 6'], answer: 2, why: 'Met een 5 of 6 gaat de dealer in ongeveer 42% van de gevallen kapot; met een 10 in ongeveer 23%.' },
    ],
  },
  {
    slug: 'uitbetalingen-en-verzekering',
    title: 'Wat betaalt en wat je berooft: uitbetalingen en verzekering',
    h1: 'Les 4: wat betaalt en wat je berooft',
    metaTitle: 'Uitbetalingen, 6:5 en verzekering · Blackjack cursus',
    description: 'Wat blackjack uitbetaalt, waarom 6:5-tafels een valkuil zijn, wat verzekering is en waarom je die nooit neemt – ook geen even money. Les 4 van de gratis cursus.',
    minutes: 4,
    summary: 'Een blackjack hoort 3 tegen 2 te betalen. Mijd 6:5-tafels. Neem nooit verzekering – en ook geen even money.',
    body: `
<table><thead><tr><th>Resultaat</th><th>Betaalt</th></tr></thead><tbody>
<tr><td>Winst</td><td>1 tegen 1</td></tr><tr><td>Blackjack</td><td>3 tegen 2 (€ 10 wint € 15)</td></tr><tr><td>Gelijkspel</td><td>Inzet terug</td></tr></tbody></table>
<h2>De 6:5-valkuil</h2>
<p>Sommige tafels betalen een blackjack maar 6 tegen 5 (€ 10 wint € 12). Dat klinkt als weinig, maar het voegt ongeveer <strong>1,4 procentpunt</strong> toe aan het huisvoordeel – ruwweg vier keer zoveel als je verliest met perfect spel. Het is de slechtste regel die er is. Staat er op het laken „Blackjack pays 6 to 5”, zoek dan een andere tafel.</p>
<h2>Verzekering</h2>
<p>Heeft de dealer een aas open, dan krijg je <strong>verzekering</strong> (insurance) aangeboden: een extra inzet, tot de helft van je inzet, dat de dealer een tien als tweede kaart heeft. Die betaalt 2 tegen 1. Om quitte te spelen zou de dealer in meer dan een derde van de gevallen een tien moeten hebben, en dat is maar ongeveer <strong>31%</strong> van de keren. Het huis wint zo’n 7% op die inzet.</p>
<h2>Even money</h2>
<p>Heb je blackjack en heeft de dealer een aas open, dan krijg je „even money” aangeboden: nu meteen 1 tegen 1 uitbetaald krijgen. Dat is precies hetzelfde als je blackjack verzekeren. Weigeren is gemiddeld 1,04 inzet waard; aannemen precies 1. Je geeft 4% weg.</p>`,
    quiz: [
      { q: 'Wat hoort een blackjack te betalen?', options: ['1 tegen 1', '6 tegen 5', '3 tegen 2'], answer: 2, why: '3 tegen 2 is de standaard. 6 tegen 5 voegt ongeveer 1,4 punt toe aan het huisvoordeel.' },
      { q: 'De dealer heeft een aas open en biedt verzekering aan. Wat doe je?', options: ['Aannemen met een goede hand', 'Nooit aannemen', 'Altijd aannemen'], answer: 1, why: 'Verzekering is een aparte inzet met ongeveer 7% huisvoordeel, wat je hand ook is.' },
      { q: 'Je hebt blackjack en de dealer heeft een aas open. Neem je even money?', options: ['Ja, het is gegarandeerd geld', 'Nee', 'Alleen met weinig decks'], answer: 1, why: 'Aannemen is 1 inzet waard; weigeren gemiddeld 1,04. Het is verzekering in vermomming.' },
    ],
  },
  {
    slug: 'kaart-of-passen',
    title: 'Kaart vragen of passen met 12 tot 16',
    h1: 'Les 5: kaart vragen of passen met harde handen',
    metaTitle: 'Kaart vragen of passen met 12 tot 16 · Blackjack cursus',
    description: 'Wanneer je bij blackjack een kaart vraagt en wanneer je past met harde 12 tot 16, afhankelijk van de open kaart van de dealer, plus de uitzondering van 12.',
    minutes: 5,
    summary: 'Met 12–16: passen tegen 2–6 (behalve 12 tegen 2 of 3) en een kaart vragen tegen 7 of hoger. Met 17 of meer pas je altijd.',
    body: `
<p>Handen van 12 tot 16 zijn de lastige: je kunt kapotgaan als je een kaart vraagt, maar ze zijn te laag om te winnen als je past. Het antwoord hangt af van de open kaart van de dealer.</p>
<h2>Tegen 2 tot 6: passen</h2>
<p>Een dealer met een lage kaart moet kaarten nemen en gaat vaak kapot: ongeveer 40% van de keren met een 4, 5 of 6. Neem geen risico: pas en laat de dealer kapotgaan.</p>
<h2>Tegen 7 of hoger: kaart vragen</h2>
<p>Met een 7, 8, 9, 10 of aas open eindigt de dealer meestal op 17 of meer. Je 12–16 verliest als je past, dus <strong>vraag je een kaart, ook al kun je kapotgaan</strong>. Het is de moeilijkste regel om te accepteren, en de belangrijkste. Het klassieke voorbeeld is <a href="/nl/16-tegen-10-blackjack/">16 tegen 10</a>.</p>
<h2>De uitzondering van 12</h2>
<p><strong>Vraag een kaart met 12 tegen een 2 of 3.</strong> Met 12 maakt alleen een tien je kapot, en een dealer met een 2 of 3 open gaat minder vaak kapot dan met 4–6. Dit is het vakje dat mensen het vaakst fout hebben.</p>
<h2>Harde handen in één oogopslag</h2>
<table><thead><tr><th>Jouw totaal</th><th>tegen 2–3</th><th>tegen 4–6</th><th>tegen 7–A</th></tr></thead><tbody>
<tr><td>8 of minder</td><td>Kaart</td><td>Kaart</td><td>Kaart</td></tr>
<tr><td>12</td><td>Kaart</td><td>Passen</td><td>Kaart</td></tr>
<tr><td>13–16</td><td>Passen</td><td>Passen</td><td>Kaart*</td></tr>
<tr><td>17+</td><td>Passen</td><td>Passen</td><td>Passen</td></tr></tbody></table>
<p class="muted small">* Met surrender: geef 16 op tegen 9, 10 of aas en 15 tegen 10 (les 9). Totalen van 9 tot 11 verdubbel je (les 6).</p>`,
    quiz: [
      { q: 'Je hebt 15 en de dealer heeft een 6 open. Wat doe je?', options: ['Kaart vragen', 'Passen', 'Verdubbelen'], answer: 1, why: 'Tegen 2–6 pas je met 13–16: een dealer met een 6 open gaat in ongeveer 42% van de gevallen kapot.' },
      { q: 'Je hebt 14 en de dealer heeft een 9 open. Wat doe je?', options: ['Kaart vragen', 'Passen'], answer: 0, why: 'Tegen 7 of hoger vraag je een kaart met 12–16: passen verliest meer.' },
      { q: 'Je hebt 12 en de dealer heeft een 3 open. Wat doe je?', options: ['Passen', 'Kaart vragen'], answer: 1, why: 'Dat is de uitzondering: met 12 vraag je een kaart tegen 2 of 3.' },
    ],
  },
  {
    slug: 'verdubbelen',
    title: 'Verdubbelen: meer inzetten als je voorstaat',
    h1: 'Les 6: verdubbelen op 9, 10 en 11',
    metaTitle: 'Wanneer verdubbelen op 9, 10 en 11 · Blackjack cursus',
    description: 'Wat verdubbelen bij blackjack is en wanneer je het doet met 9, 10 en 11, inclusief wat er verandert aan Europese tafels. Les 6 van de gratis blackjack cursus.',
    minutes: 4,
    summary: 'Verdubbel 11 tegen alles behalve een aas, 10 tegen 2–9 en 9 tegen 3–6. Aan tafels zonder hole card verdubbel je niet tegen een 10 of aas.',
    body: `
<p><strong>Verdubbelen</strong> betekent dat je je inzet verdubbelt in ruil voor <strong>precies één extra kaart</strong>. Je doet het als je al voorstaat: je totaal is sterk en de dealer is zwak. Je wint er niet vaker door, maar als je wint, strijk je het dubbele op.</p>
<h2>De drie regels</h2>
<ul>
<li><strong>11:</strong> verdubbel tegen elke kaart behalve een aas. Elke tien – bijna een derde van het deck – geeft je 21. (Neemt de dealer een kaart op zachte 17, verdubbel dan ook tegen de aas.)</li>
<li><strong>10:</strong> verdubbel tegen 2 tot en met 9.</li>
<li><strong>9:</strong> verdubbel tegen 3 tot en met 6.</li>
</ul>
<p>Met 11 tegen een 6 is een kaart vragen gemiddeld +0,34 inzet waard en verdubbelen +0,68. Dat is het verschil tussen goed spelen en heel goed spelen.</p>
<h2>Aan Europese tafels</h2>
<p>Zonder hole card kan de dealer nog blackjack hebben. Verdubbel je en heeft hij die, dan verlies je het dubbele. Daarom is <strong>11 tegen een 10 of aas een kaart vragen</strong> aan tafels zonder hole card, geen verdubbeling. In Spaanse casino’s mag je bovendien alleen verdubbelen op 9, 10 of 11.</p>
<p>Alle gevallen, met de cijfers, vind je in <a href="/nl/wanneer-verdubbelen-blackjack/">wanneer verdubbelen</a>.</p>`,
    quiz: [
      { q: 'Je hebt 11 en de dealer heeft een 7 open (Las Vegas-tafel). Wat doe je?', options: ['Kaart vragen', 'Verdubbelen', 'Passen'], answer: 1, why: 'Verdubbel 11 tegen alles behalve een aas.' },
      { q: 'Je hebt 9 en de dealer heeft een 2 open. Wat doe je?', options: ['Verdubbelen', 'Kaart vragen'], answer: 1, why: 'Verdubbel 9 alleen tegen 3–6 (met 6 of 8 decks).' },
      { q: 'Tafel zonder hole card: je hebt 11 en de dealer heeft een 10 open. Wat doe je?', options: ['Verdubbelen', 'Kaart vragen'], answer: 1, why: 'De dealer kan nog blackjack hebben en dan verlies je het dubbele: vraag een kaart.' },
    ],
  },
  {
    slug: 'zachte-handen',
    title: 'Zachte handen: de aas die je beschermt',
    h1: 'Les 7: zo speel je zachte handen',
    metaTitle: 'Zachte handen spelen (A-2 tot A-9) · Blackjack cursus',
    description: 'Zo speel je zachte handen bij blackjack, van A-2 tot A-9: wanneer je een kaart vraagt, verdubbelt of past, en waarom zachte 18 minder goed is dan hij lijkt.',
    minutes: 5,
    summary: 'A-2 tot A-6: nooit passen. A-7: passen tegen 2, 7 en 8, kaart vragen tegen 9, 10 en aas. A-8 en A-9: passen.',
    body: `
<p>Eén kaart kan een zachte hand niet kapotmaken, dus zachte handen speel je veel agressiever dan harde.</p>
<h2>A-2 tot A-6: nooit passen</h2>
<p>Dit zijn zachte 13 tot 17: zwakke totalen die één kaart niet slechter kan maken. <strong>Vraag altijd een kaart</strong>, en waar je met elke twee kaarten mag verdubbelen, verdubbel je tegen de zwakke kaarten van de dealer (A-2 en A-3 tegen 5–6, A-4 en A-5 tegen 4–6, A-6 tegen 3–6).</p>
<h2>A-7: de zachte 18 die niet zo goed is</h2>
<ul>
<li>Tegen <strong>2, 7 of 8</strong>: passen.</li>
<li>Tegen <strong>3 tot 6</strong>: verdubbelen als het mag; anders passen.</li>
<li>Tegen <strong>9, 10 of aas</strong>: <strong>kaart vragen</strong>. 18 verliest tegen die kaarten vaker dan hij wint.</li>
</ul>
<p>A-7 tegen een 9 is de klassieke fout van ervaren spelers: passen is gemiddeld −0,18 inzet waard en een kaart vragen −0,10.</p>
<h2>A-8 en A-9: passen</h2>
<p>Zachte 19 en 20 zijn winnende handen. Laat ze zo.</p>
<h2>In Spaanse casino’s</h2>
<p>Je mag alleen verdubbelen op 9–11, dus de zachte verdubbelingen vallen weg: vraag een kaart met A-2 tot en met A-6, en pas met A-7 tegen 3–6.</p>`,
    quiz: [
      { q: 'Je hebt A-5 en de dealer heeft een 10 open. Wat doe je?', options: ['Passen', 'Kaart vragen'], answer: 1, why: 'A-5 is zachte 16: één kaart kan je niet kapotmaken en het totaal is zwak. Vraag een kaart.' },
      { q: 'Je hebt A-7 en de dealer heeft een 9 open. Wat doe je?', options: ['Passen', 'Kaart vragen'], answer: 1, why: 'Zachte 18 tegen 9, 10 of aas: kaart vragen. Passen verliest meer.' },
      { q: 'Je hebt A-8 en de dealer heeft een 10 open. Wat doe je?', options: ['Passen', 'Kaart vragen', 'Verdubbelen'], answer: 0, why: 'Zachte 19 is een winnende hand: passen.' },
    ],
  },
  {
    slug: 'paren-splitsen',
    title: 'Paren: wanneer splitsen',
    h1: 'Les 8: wanneer je paren splitst',
    metaTitle: 'Wanneer paren splitsen bij blackjack · Blackjack cursus',
    description: 'Welke paren je splitst bij blackjack: azen en achten altijd, tienen en vijven nooit, en de rest afhankelijk van de open kaart van de dealer. Les 8.',
    minutes: 4,
    summary: 'Splits azen en achten altijd; tienen en vijven nooit. De rest vooral tegen 2–6.',
    body: `
<h2>Altijd: azen en achten</h2>
<p>Twee azen zijn 2 of 12; gesplitst kan elk ervan 21 worden. Twee achten zijn 16, de slechtste hand; gesplitst begint elk op 8. Aan tafels zonder hole card zijn er uitzonderingen: splits azen niet tegen een aas, en achten niet tegen een 10 of aas.</p>
<h2>Nooit: tienen en vijven</h2>
<p>Een 20 wint bijna altijd: breek hem niet op. Twee vijven maken 10, perfect om te verdubbelen.</p>
<h2>De rest: tegen zwakke kaarten</h2>
<table><thead><tr><th>Paar</th><th>Splitsen tegen</th></tr></thead><tbody>
<tr><td>2-2, 3-3</td><td>2 tot 7</td></tr><tr><td>4-4</td><td>5 en 6 (als je na splitsen mag verdubbelen)</td></tr>
<tr><td>6-6</td><td>2 tot 6</td></tr><tr><td>7-7</td><td>2 tot 7</td></tr><tr><td>9-9</td><td>2 tot 6, 8 en 9 (niet 7, 10 of aas)</td></tr></tbody></table>
<p>Met 9-9 tegen een 7 pas je: een dealer met een 7 open eindigt vaak op 17, en jouw 18 wint daarvan. Meer details en cijfers in <a href="/nl/wanneer-splitsen-blackjack/">wanneer splitsen</a>.</p>`,
    quiz: [
      { q: 'Je hebt 8-8 en de dealer heeft een 10 open (Las Vegas-tafel). Wat doe je?', options: ['Passen op 16', 'Splitsen', 'Kaart vragen'], answer: 1, why: 'Met hole card splits je achten altijd: twee handen die op 8 beginnen verliezen minder dan een 16.' },
      { q: 'Je hebt 10-10 en de dealer heeft een 6 open. Wat doe je?', options: ['Splitsen, de dealer is zwak', 'Passen'], answer: 1, why: 'Splits nooit tienen: passen op 20 is +0,70 inzet waard, splitsen +0,57.' },
      { q: 'Je hebt 9-9 en de dealer heeft een 7 open. Wat doe je?', options: ['Splitsen', 'Passen'], answer: 1, why: 'Jouw 18 wint van de 17 die een dealer met een 7 open vaak haalt: passen.' },
    ],
  },
  {
    slug: 'opgeven-en-tafelregels',
    title: 'Opgeven en de juiste tafel kiezen',
    h1: 'Les 9: opgeven (surrender) en een tafel kiezen',
    metaTitle: 'Opgeven (surrender) en een tafel kiezen · Blackjack cursus',
    description: 'Wanneer je bij blackjack opgeeft en hoe je een tafel met goede regels kiest: 3:2-uitbetaling, dealer past op zachte 17, verdubbelen na splitsen, minder decks.',
    minutes: 4,
    summary: 'Geef 16 op tegen 9, 10 of aas en 15 tegen 10, als het mag. En kies 3:2-tafels waar de dealer past op zachte 17.',
    body: `
<h2>Opgeven is niet laf</h2>
<p>Aan sommige tafels mag je direct na het delen <strong>opgeven</strong> (surrender): je geeft de hand op en krijgt de helft van je inzet terug. Dat loont alleen als een hand meer dan de helft van de keren verliest. Met Las Vegas-regels betekent dat <strong>16 tegen 9, 10 of aas</strong> en <strong>15 tegen 10</strong>. Wordt opgeven niet aangeboden, vraag dan een kaart met die handen.</p>
<h2>De duurste beslissing neem je voordat je gaat zitten</h2>
<p>De tafelregels verschuiven het huisvoordeel meer dan veel fouten. Let op:</p>
<ul>
<li><strong>Blackjack betaalt 3 tegen 2</strong>, nooit 6 tegen 5 (+1,4 punt voor het huis).</li>
<li><strong>Dealer past op zachte 17</strong> (S17). Neemt de dealer een kaart (H17), dan +0,2 punt.</li>
<li><strong>Verdubbelen na splitsen</strong> is toegestaan.</li>
<li><strong>Opgeven</strong>, als het er is.</li>
<li><strong>Minder decks</strong> is beter, al telt het minder zwaar dan het bovenstaande.</li>
</ul>
<p>Alles in cijfers vind je in <a href="/nl/blackjack-data/huisvoordeel-regels/">huisvoordeel per regel</a>.</p>`,
    quiz: [
      { q: 'Je hebt 16 tegen een 10 en de tafel staat opgeven toe. Wat doe je?', options: ['Opgeven', 'Kaart vragen', 'Passen'], answer: 0, why: 'Met surrender geef je 16 tegen 10 op: je redt de helft van je inzet op een hand die meer dan de helft van de keren verliest.' },
      { q: 'Welke regel is slechter voor jou?', options: ['Dealer neemt kaart op zachte 17', 'Blackjack betaalt 6 tegen 5', '8 decks in plaats van 6'], answer: 1, why: '6:5 voegt ongeveer 1,4 punt toe aan het huisvoordeel; H17 ongeveer 0,2; 8 decks ongeveer 0,02.' },
      { q: 'Aan deze tafel mag je niet opgeven. Je hebt 15 tegen een 10. Wat doe je?', options: ['Passen', 'Kaart vragen'], answer: 1, why: 'Zonder surrender vraag je met die handen een kaart.' },
    ],
  },
  {
    slug: 'kaarten-tellen-zonder-mythes',
    title: 'Kaarten tellen, zonder mythes',
    h1: 'Les 10: kaarten tellen, zonder mythes',
    metaTitle: 'Kaarten tellen zonder mythes · Blackjack cursus',
    description: 'De laatste les van de gratis blackjack cursus: wat kaarten tellen met Hi-Lo is, welk voordeel het echt oplevert en waar het helemaal niet werkt. Met quiz.',
    minutes: 5,
    summary: 'Hi-Lo: 2–6 tellen +1, 7–9 nul, tienen en azen −1. Het is legaal, maar het voordeel is klein en online werkt het niet.',
    body: `
<p>Kaarten tellen betekent bijhouden welke kaarten al gedeeld zijn, zodat je weet wanneer de resterende kaarten rijk zijn aan hoge kaarten – en die zijn gunstig voor de speler: meer blackjacks, betere verdubbelingen en een dealer die vaker kapotgaat.</p>
<h2>Het Hi-Lo-systeem</h2>
<table><thead><tr><th>Kaarten</th><th>Waarde</th></tr></thead><tbody>
<tr><td>2 t/m 6</td><td>+1</td></tr><tr><td>7 t/m 9</td><td>0</td></tr><tr><td>10, plaatjes en aas</td><td>−1</td></tr></tbody></table>
<p>Het doorlopende totaal is de <strong>running count</strong>. Gedeeld door het aantal decks dat nog gedeeld moet worden, krijg je de <strong>true count</strong>. Hoe hoger die is, hoe meer je inzet.</p>
<h2>De waarheid over het voordeel</h2>
<p>Een gedisciplineerde teller haalt met goede regels grofweg 0,5–1% op het ingezette geld, met enorme schommelingen en een flinke bankroll erachter. Casino’s schudden eerder of vragen je te stoppen zodra ze je doorhebben. Het is geen verdienmodel.</p>
<h2>Waar het niet werkt</h2>
<ul>
<li><strong>Online blackjack met RNG:</strong> het deck wordt elke hand opnieuw geschud.</li>
<li><strong>Continue schudmachines:</strong> de kaarten gaan na elke hand terug in de machine.</li>
</ul>
<p>Uit je hoofd tellen is legaal; een hulpmiddel aan tafel gebruiken niet. Om te oefenen kun je de oefeningen proberen in <a href="/nl/kaarten-tellen-oefenen/">kaarten tellen oefenen</a>.</p>
<h2>Gefeliciteerd</h2>
<p>Je hebt de cursus afgerond. Je weet nu meer dan de meeste mensen die aan een tafel gaan zitten. Wat overblijft, is er een reflex van maken: in twee seconden de juiste beslissing nemen, hand na hand. De enige weg daarheen is oefenen.</p>`,
    quiz: [
      { q: 'Hoeveel is een 5 waard in Hi-Lo?', options: ['+1', '0', '−1'], answer: 0, why: '2 t/m 6 tellen +1.' },
      { q: 'Running count +6 met nog 3 decks te gaan. True count?', options: ['+6', '+2', '+18'], answer: 1, why: '6 ÷ 3 = +2.' },
      { q: 'Werkt tellen bij gewone online blackjack?', options: ['Ja, net als in een casino', 'Nee, er wordt elke hand geschud'], answer: 1, why: 'De software schudt na elke hand opnieuw: er valt niets te tellen.' },
    ],
  },
];

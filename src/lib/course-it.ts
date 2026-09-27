// Italian edition of the free course (src/lib/course.ts). Same lessons, same facts, same
// quiz answers; adapted for Italian readers (European tables without hole card, Las Vegas
// as the classic reference). Index i here is the same lesson as index i in the Spanish
// course (used for hreflang pairing).
import type { Lesson } from './course';

export const lessonsIt: Lesson[] = [
  {
    slug: 'cos-e-il-blackjack',
    title: 'Cos’è il blackjack e come si vince',
    h1: 'Lezione 1: cos’è il blackjack e come si vince',
    metaTitle: 'Cos’è il blackjack e come si vince · Corso di blackjack',
    description: 'Lezione 1 del corso di blackjack gratis: cos’è il gioco, contro chi giochi e come si vince una mano. Con un breve quiz alla fine per verificare cosa sai.',
    minutes: 4,
    summary: 'Giochi contro il banco, non contro il tavolo. Vinci se finisci più vicino a 21 del banco senza superarlo.',
    body: `
<p>Il blackjack è il gioco di carte più popolare dei casinò. È la versione da casinò del classico «21», con una differenza importante: <strong>non giochi contro gli altri giocatori, ma contro il banco</strong>. Quello che fanno gli altri al tavolo non cambia il tuo risultato.</p>
<h2>Il vero obiettivo</h2>
<p>Molti pensano che l’obiettivo sia arrivare a 21. Non è così. L’obiettivo è <strong>battere il banco</strong>, e ci sono due modi per farlo:</p>
<ul>
<li>Finire con un totale più alto del suo senza superare 21.</li>
<li>Restare a 21 o meno mentre il banco sballa.</li>
</ul>
<p>Se finite entrambi con lo stesso totale, è un <strong>pareggio</strong>: riprendi la tua puntata.</p>
<h2>La regola che spiega tutto</h2>
<p>Se superi 21, perdi subito, anche se dopo il banco sballa a sua volta. Dato che <strong>giochi sempre prima del banco</strong>, è da questa regola che nasce il vantaggio del banco. Tutto quello che imparerai in questo corso serve a recuperarne il più possibile.</p>
<h2>Il banco non pensa</h2>
<p>Il banco non prende decisioni: segue una regola fissa. Chiede carta con 16 o meno e sta con 17 o più. Tu invece puoi chiedere carta, stare, raddoppiare, dividere o arrenderti. Questa libertà è la tua arma, e la strategia di base è il modo giusto di usarla.</p>`,
    quiz: [
      { q: 'Contro chi giochi a blackjack?', options: ['Contro gli altri giocatori', 'Contro il banco', 'Contro il casinò e i giocatori'], answer: 1, why: 'Solo contro il banco. Quello che fanno gli altri giocatori non cambia il tuo risultato.' },
      { q: 'Hai 18 e il banco ha 20. Cosa succede?', options: ['Vinci, nessuno ha sballato', 'Pareggio', 'Perdi'], answer: 2, why: 'Vince chi è più vicino a 21 senza superarlo: il banco, con 20.' },
      { q: 'Sballi con 23, poi il banco sballa con 24. Cosa succede?', options: ['Pareggio', 'Perdi', 'Vinci'], answer: 1, why: 'Se sballi perdi subito. È da qui che nasce il vantaggio del banco.' },
    ],
  },
  {
    slug: 'valore-delle-carte-e-mani-soft',
    title: 'Valore delle carte e mani soft',
    h1: 'Lezione 2: valore delle carte e mani soft',
    metaTitle: 'Valore delle carte e mani soft · Corso di blackjack',
    description: 'Quanto vale ogni carta nel blackjack, come funziona l’asso, cos’è una mano soft e cosa conta come blackjack. Lezione 2 del corso gratis, con quiz finale.',
    minutes: 4,
    summary: 'Le figure valgono 10, gli assi 1 o 11. Una mano con un asso contato come 11 è «soft»: una sola carta non può farla sballare.',
    body: `
<table><thead><tr><th>Carta</th><th>Valore</th></tr></thead><tbody>
<tr><td>Dal 2 al 9</td><td>Il suo valore</td></tr><tr><td>10, J, Q, K</td><td>10</td></tr><tr><td>Asso</td><td>1 o 11, come ti conviene</td></tr></tbody></table>
<p>I semi non contano. Con quattro valori che valgono 10, <strong>quasi un terzo del mazzo vale 10</strong> (16 carte su 52). Tienilo a mente: spiega molte giocate.</p>
<h2>L’asso e le mani soft</h2>
<p>Una mano con un asso contato come 11 si chiama <strong>soft</strong>. Asso-6 è un <strong>17 soft</strong>: può valere 7 o 17. Il punto chiave è che <strong>non puoi sballare prendendo una carta</strong>: se arriva un dieci, l’asso scende a 1 e hai 17.</p>
<p>Tutte le altre mani sono <strong>hard</strong>. 10-7 è un 17 hard: se chiedi carta, quasi qualsiasi carta ti fa sballare.</p>
<p>Una mano soft può diventare hard: asso-6 (17 soft) più un 9 fa 16 hard, perché ora l’asso deve contare 1.</p>
<h2>Il blackjack</h2>
<p>Un asso più una carta da 10 come prime due carte è un <strong>blackjack</strong>. È la mano migliore e batte qualsiasi altro 21, compreso un 21 fatto con tre carte. Di norma paga 3 a 2.</p>`,
    quiz: [
      { q: 'Quanto vale asso-6?', options: ['Solo 7', 'Solo 17', '7 o 17 (17 soft)'], answer: 2, why: 'L’asso vale 1 o 11. Contato come 11 non ti fa sballare, quindi è un 17 soft.' },
      { q: 'Hai asso-6 e chiedi carta: arriva un 10. Cosa hai?', options: ['27, sballato', '17 hard', '21'], answer: 1, why: 'L’asso scende a 1: 1 + 6 + 10 = 17. Ecco perché una carta non può far sballare una mano soft.' },
      { q: 'Cosa vince: un blackjack o un 21 con tre carte?', options: ['Il blackjack', 'Il 21 con tre carte', 'È un pareggio'], answer: 0, why: 'Un blackjack (asso + dieci nelle prime due carte) batte qualsiasi altro 21.' },
    ],
  },
  {
    slug: 'come-si-gioca-una-mano',
    title: 'Come si gioca una mano, passo dopo passo',
    h1: 'Lezione 3: come si gioca una mano, passo dopo passo',
    metaTitle: 'Come si gioca una mano di blackjack · Corso',
    description: 'Una mano di blackjack dall’inizio alla fine: puntata, distribuzione, carta coperta, turno del giocatore, turno del banco e pagamento. Lezione 3 del corso.',
    minutes: 5,
    summary: 'Punti, ricevi due carte, prendi le tue decisioni e il banco gioca per ultimo con una regola fissa: chiede carta fino a 16.',
    body: `
<ol>
<li><strong>Puntata.</strong> Punti prima della distribuzione.</li>
<li><strong>Distribuzione.</strong> Ricevi due carte scoperte. Il banco riceve una carta scoperta.</li>
<li><strong>La carta coperta.</strong> Ci sono due versioni. Nel gioco <strong>americano</strong> il banco prende una seconda carta coperta (la hole card) e, se mostra un asso o un dieci, controlla se ha blackjack prima che tu giochi. Nel gioco <strong>europeo</strong> (in Spagna e a molti tavoli online, di solito anche nei casinò europei) non c’è carta coperta: il banco pesca la seconda carta alla fine.</li>
<li><strong>Il tuo turno.</strong> Chiedi carta, stai, raddoppi, dividi o ti arrendi. Puoi prendere tutte le carte che vuoi.</li>
<li><strong>Il turno del banco.</strong> Il banco chiede carta con 16 o meno e sta con 17 o più. Ad alcuni tavoli chiede carta anche sul 17 soft («H17»).</li>
<li><strong>Pagamento.</strong> Si confrontano i totali e si pagano le puntate.</li>
</ol>
<h2>Perché la carta coperta conta</h2>
<p>Senza carta coperta, il banco può ancora avere blackjack quando raddoppi o dividi, e se ce l’ha si prende tutto quello che hai sul tavolo. Per questo ai tavoli europei non raddoppi l’11 contro un 10. Di più in <a href="/it/regole-blackjack-spagna/">regole del blackjack in Spagna</a>.</p>
<h2>La carta che conta: la carta scoperta del banco</h2>
<p>Tutta la strategia si basa su due cose: <strong>il tuo totale</strong> e <strong>la carta scoperta del banco</strong>. È quella carta a dirti quanto è probabile che il banco sballi. Con un 5 o un 6 scoperto sballa più del 40% delle volte; con un 10, circa il 23%.</p>`,
    quiz: [
      { q: 'Quando prende carta il banco?', options: ['Quando pensa che gli convenga', 'Sempre con 16 o meno', 'Solo se i giocatori hanno di più'], answer: 1, why: 'Il banco non decide: chiede carta con 16 o meno e sta con 17 o più.' },
      { q: 'A un tavolo europeo (senza carta coperta), il banco controlla prima il blackjack?', options: ['Sì, prima che tu giochi', 'No, la seconda carta arriva alla fine', 'Dipende dal giocatore'], answer: 1, why: 'Nel gioco europeo non c’è carta coperta: la seconda carta del banco arriva dopo che hai giocato.' },
      { q: 'Con quale carta scoperta il banco sballa più spesso?', options: ['Con un 10', 'Con un asso', 'Con un 5 o un 6'], answer: 2, why: 'Con un 5 o un 6 il banco sballa circa il 42% delle volte; con un 10, circa il 23%.' },
    ],
  },
  {
    slug: 'pagamenti-e-assicurazione',
    title: 'Cosa paga e cosa ti deruba: pagamenti e assicurazione',
    h1: 'Lezione 4: cosa paga e cosa ti deruba',
    metaTitle: 'Pagamenti del blackjack, 6:5 e assicurazione · Corso',
    description: 'Quanto paga il blackjack, perché i tavoli 6:5 sono una trappola, cos’è l’assicurazione e perché non prenderla mai, né l’even money. Lezione 4 del corso.',
    minutes: 4,
    summary: 'Il blackjack dovrebbe pagare 3 a 2. Evita i tavoli 6:5. Non prendere mai l’assicurazione, né l’even money.',
    body: `
<table><thead><tr><th>Risultato</th><th>Paga</th></tr></thead><tbody>
<tr><td>Vincita</td><td>1 a 1</td></tr><tr><td>Blackjack</td><td>3 a 2 (con 10 € vinci 15 €)</td></tr><tr><td>Pareggio</td><td>Ti restituiscono la puntata</td></tr></tbody></table>
<h2>La trappola del 6:5</h2>
<p>Alcuni tavoli pagano il blackjack solo 6 a 5 (con 10 € vinci 12 €). Sembra poco, ma aggiunge circa <strong>1,4 punti percentuali</strong> al vantaggio del banco: più o meno quattro volte quello che perdi giocando alla perfezione. È la regola peggiore che esista. Se sul tappeto c’è scritto «Blackjack pays 6 to 5», cerca un altro tavolo.</p>
<h2>L’assicurazione</h2>
<p>Quando il banco mostra un asso ti offriranno l’<strong>assicurazione</strong>: una scommessa laterale, fino a metà della tua puntata, sul fatto che il banco abbia un dieci sotto. Paga 2 a 1. Per andare in pari servirebbe che il banco avesse un dieci più di un terzo delle volte, e ce l’ha solo nel <strong>31%</strong> circa dei casi. Il banco vince circa il 7% su questa scommessa.</p>
<h2>L’even money</h2>
<p>Se hai blackjack e il banco mostra un asso, ti offriranno l’«even money»: incassare subito 1 a 1. È esattamente come assicurare il tuo blackjack. Rifiutare vale in media 1,04 puntate; accettare, esattamente 1. Regali il 4%.</p>`,
    quiz: [
      { q: 'Quanto dovrebbe pagare un blackjack?', options: ['1 a 1', '6 a 5', '3 a 2'], answer: 2, why: '3 a 2 è lo standard. Il 6 a 5 aggiunge circa 1,4 punti al vantaggio del banco.' },
      { q: 'Il banco mostra un asso e ti offre l’assicurazione. Cosa fai?', options: ['La prendo se ho una buona mano', 'Non la prendo mai', 'La prendo sempre'], answer: 1, why: 'L’assicurazione è una scommessa a parte con circa il 7% di vantaggio del banco, qualunque sia la tua mano.' },
      { q: 'Hai blackjack e il banco mostra un asso. Prendi l’even money?', options: ['Sì, sono soldi sicuri', 'No', 'Solo con pochi mazzi'], answer: 1, why: 'Accettare vale 1 puntata; rifiutare, 1,04 in media. È un’assicurazione travestita.' },
    ],
  },
  {
    slug: 'chiedere-carta-o-stare',
    title: 'Chiedere carta o stare da 12 a 16',
    h1: 'Lezione 5: chiedere carta o stare con le mani hard',
    metaTitle: 'Quando chiedere carta o stare (da 12 a 16) · Corso',
    description: 'Quando chiedere carta e quando stare con le mani hard da 12 a 16, in base alla carta scoperta del banco, più l’eccezione del 12. Lezione 5 del corso gratis.',
    minutes: 5,
    summary: 'Con 12–16: stai contro 2–6 (tranne 12 contro 2 o 3) e chiedi carta contro 7 o più. Con 17 o più, stai sempre.',
    body: `
<p>Le mani da 12 a 16 sono quelle scomode: puoi sballare se chiedi carta, ma sono troppo basse per vincere se stai. La risposta dipende dalla carta scoperta del banco.</p>
<h2>Contro 2–6: stai</h2>
<p>Un banco con una carta bassa deve pescare e sballa spesso: circa il 40% delle volte con un 4, un 5 o un 6. Non rischiare: stai e lascia che sia il banco a sballare.</p>
<h2>Contro 7 o più: chiedi carta</h2>
<p>Con un 7, 8, 9, 10 o un asso scoperto, il banco arriva a 17 o più la maggior parte delle volte. Il tuo 12–16 perde se stai, quindi <strong>chiedi carta anche se potresti sballare</strong>. È la regola più difficile da accettare, e la più importante. L’esempio classico è il <a href="/it/16-contro-10-blackjack/">16 contro 10</a>.</p>
<h2>L’eccezione del 12</h2>
<p><strong>Con 12 contro un 2 o un 3, chiedi carta.</strong> Con 12 ti fa sballare solo un dieci, e un banco che mostra 2 o 3 sballa meno spesso che con 4–6. È la casella che si sbaglia di più.</p>
<h2>Le mani hard a colpo d’occhio</h2>
<table><thead><tr><th>Il tuo totale</th><th>contro 2–3</th><th>contro 4–6</th><th>contro 7–A</th></tr></thead><tbody>
<tr><td>8 o meno</td><td>Carta</td><td>Carta</td><td>Carta</td></tr>
<tr><td>12</td><td>Carta</td><td>Stai</td><td>Carta</td></tr>
<tr><td>13–16</td><td>Stai</td><td>Stai</td><td>Carta*</td></tr>
<tr><td>17+</td><td>Stai</td><td>Stai</td><td>Stai</td></tr></tbody></table>
<p class="muted small">* Con la resa: arrenditi con 16 contro 9, 10 o asso e con 15 contro 10 (lezione 9). I totali da 9 a 11 si raddoppiano (lezione 6).</p>`,
    quiz: [
      { q: 'Hai 15 e il banco mostra un 6. Cosa fai?', options: ['Chiedo carta', 'Sto', 'Raddoppio'], answer: 1, why: 'Contro 2–6 stai con 13–16: un banco che mostra 6 sballa circa il 42% delle volte.' },
      { q: 'Hai 14 e il banco mostra un 9. Cosa fai?', options: ['Chiedo carta', 'Sto'], answer: 0, why: 'Contro 7 o più, con 12–16 chiedi carta: stare perde di più.' },
      { q: 'Hai 12 e il banco mostra un 3. Cosa fai?', options: ['Sto', 'Chiedo carta'], answer: 1, why: 'È l’eccezione: con 12 contro 2 o 3 chiedi carta.' },
    ],
  },
  {
    slug: 'raddoppiare',
    title: 'Raddoppiare: punta di più quando sei in vantaggio',
    h1: 'Lezione 6: raddoppiare con 9, 10 e 11',
    metaTitle: 'Quando raddoppiare con 9, 10 e 11 · Corso di blackjack',
    description: 'Cosa significa raddoppiare a blackjack e quando farlo con 9, 10 e 11, compreso cosa cambia ai tavoli europei senza carta coperta. Lezione 6 del corso gratis.',
    minutes: 4,
    summary: 'Raddoppia l’11 contro tutto tranne l’asso, il 10 contro 2–9 e il 9 contro 3–6. Ai tavoli senza carta coperta, non raddoppiare contro un 10 o un asso.',
    body: `
<p><strong>Raddoppiare</strong> significa raddoppiare la puntata in cambio di <strong>una sola carta in più</strong>. Lo fai quando sei già in vantaggio: il tuo totale è forte e il banco è debole. Non ti fa vincere più spesso, ma quando vinci incassi il doppio.</p>
<h2>Le tre regole</h2>
<ul>
<li><strong>11:</strong> raddoppia contro qualsiasi carta tranne l’asso. Qualsiasi dieci, quasi un terzo del mazzo, ti dà 21. (Se il banco chiede carta sul 17 soft, raddoppia anche contro l’asso.)</li>
<li><strong>10:</strong> raddoppia contro le carte dal 2 al 9.</li>
<li><strong>9:</strong> raddoppia contro le carte dal 3 al 6.</li>
</ul>
<p>Con 11 contro un 6, chiedere carta vale in media +0,34 puntate e raddoppiare +0,68. È la differenza tra giocare bene e giocare molto bene.</p>
<h2>Ai tavoli europei</h2>
<p>Senza carta coperta, il banco può ancora avere blackjack. Se raddoppi e ce l’ha, perdi il doppio. Per questo ai tavoli senza carta coperta <strong>con 11 contro un 10 o un asso si chiede carta</strong>, non si raddoppia. Nei casinò spagnoli, inoltre, puoi raddoppiare solo con 9, 10 o 11.</p>
<p>Tutti i casi, con i numeri, in <a href="/it/quando-raddoppiare-blackjack/">quando raddoppiare</a>.</p>`,
    quiz: [
      { q: 'Hai 11 e il banco mostra un 7 (tavolo di Las Vegas). Cosa fai?', options: ['Chiedo carta', 'Raddoppio', 'Sto'], answer: 1, why: 'L’11 si raddoppia contro tutto tranne l’asso.' },
      { q: 'Hai 9 e il banco mostra un 2. Cosa fai?', options: ['Raddoppio', 'Chiedo carta'], answer: 1, why: 'Il 9 si raddoppia solo contro 3–6 (con 6 o 8 mazzi).' },
      { q: 'Tavolo senza carta coperta: hai 11 e il banco mostra un 10. Cosa fai?', options: ['Raddoppio', 'Chiedo carta'], answer: 1, why: 'Il banco può ancora avere blackjack e perderesti il doppio: chiedi carta.' },
    ],
  },
  {
    slug: 'mani-soft',
    title: 'Mani soft: l’asso che ti protegge',
    h1: 'Lezione 7: come giocare le mani soft',
    metaTitle: 'Come giocare le mani soft (da A-2 ad A-9) · Corso',
    description: 'Come giocare le mani soft da A-2 ad A-9: quando chiedere carta, raddoppiare o stare, e perché il 18 soft non è buono come sembra. Lezione 7 del corso gratis.',
    minutes: 5,
    summary: 'Da A-2 ad A-6: non stare mai. A-7: stai contro 2, 7 e 8, chiedi carta contro 9, 10 e asso. A-8 e A-9: stai.',
    body: `
<p>Una sola carta non può far sballare una mano soft, per questo le mani soft si giocano in modo molto più aggressivo di quelle hard.</p>
<h2>Da A-2 ad A-6: non stare mai</h2>
<p>Sono i totali soft da 13 a 17: totali deboli che una carta non può peggiorare. <strong>Chiedi sempre carta</strong> e, dove puoi raddoppiare con qualsiasi coppia di carte, raddoppia contro le carte deboli del banco (A-2 e A-3 contro 5–6, A-4 e A-5 contro 4–6, A-6 contro 3–6).</p>
<h2>A-7: il 18 soft che non è poi così buono</h2>
<ul>
<li>Contro <strong>2, 7 o 8</strong>: stai.</li>
<li>Contro <strong>3–6</strong>: raddoppia se è consentito; altrimenti stai.</li>
<li>Contro <strong>9, 10 o asso</strong>: <strong>chiedi carta</strong>. Contro queste carte il 18 perde più di quanto vince.</li>
</ul>
<p>A-7 contro un 9 è l’errore classico dei giocatori esperti: stare vale in media −0,18 puntate e chiedere carta −0,10.</p>
<h2>A-8 e A-9: stai</h2>
<p>Il 19 e il 20 soft sono mani vincenti. Lasciale così.</p>
<h2>Nei casinò spagnoli</h2>
<p>Puoi raddoppiare solo con 9–11, quindi i raddoppi con le mani soft spariscono: chiedi carta da A-2 ad A-6 e stai con A-7 contro 3–6.</p>`,
    quiz: [
      { q: 'Hai A-5 e il banco mostra un 10. Cosa fai?', options: ['Sto', 'Chiedo carta'], answer: 1, why: 'A-5 è un 16 soft: una carta non può farti sballare e il totale è debole. Chiedi carta.' },
      { q: 'Hai A-7 e il banco mostra un 9. Cosa fai?', options: ['Sto', 'Chiedo carta'], answer: 1, why: 'Il 18 soft contro 9, 10 o asso chiede carta: stare perde di più.' },
      { q: 'Hai A-8 e il banco mostra un 10. Cosa fai?', options: ['Sto', 'Chiedo carta', 'Raddoppio'], answer: 0, why: 'Il 19 soft è una mano vincente: stai.' },
    ],
  },
  {
    slug: 'dividere-le-coppie',
    title: 'Le coppie: quando dividere',
    h1: 'Lezione 8: quando dividere le coppie',
    metaTitle: 'Quando dividere le coppie a blackjack · Corso',
    description: 'Quali coppie dividere a blackjack: sempre assi e otto, mai i dieci né i cinque, e le altre in base alla carta scoperta del banco. Lezione 8 del corso gratis.',
    minutes: 4,
    summary: 'Dividi sempre assi e otto; mai i dieci né i cinque. Le altre coppie, soprattutto contro 2–6.',
    body: `
<h2>Sempre: assi e otto</h2>
<p>Due assi fanno 2 o 12; dividendoli, ognuno può fare 21. Due otto fanno 16, la mano peggiore; dividendoli, ognuno parte da 8. Ai tavoli senza carta coperta ci sono eccezioni: non dividere gli assi contro un asso, né gli otto contro un 10 o un asso.</p>
<h2>Mai: dieci e cinque</h2>
<p>Un 20 vince quasi sempre: non romperlo. Due cinque fanno 10, perfetto per raddoppiare.</p>
<h2>Le altre: contro le carte deboli</h2>
<table><thead><tr><th>Coppia</th><th>Dividi contro</th></tr></thead><tbody>
<tr><td>2-2, 3-3</td><td>dal 2 al 7</td></tr><tr><td>4-4</td><td>5 e 6 (se puoi raddoppiare dopo la divisione)</td></tr>
<tr><td>6-6</td><td>dal 2 al 6</td></tr><tr><td>7-7</td><td>dal 2 al 7</td></tr><tr><td>9-9</td><td>dal 2 al 6, 8 e 9 (non 7, 10 né asso)</td></tr></tbody></table>
<p>Con 9-9 contro un 7 stai: un banco che mostra 7 finisce spesso a 17, e il tuo 18 lo batte. Più dettagli e numeri in <a href="/it/quando-dividere-blackjack/">quando dividere</a>.</p>`,
    quiz: [
      { q: 'Hai 8-8 e il banco mostra un 10 (tavolo di Las Vegas). Cosa fai?', options: ['Sto con 16', 'Divido', 'Chiedo carta'], answer: 1, why: 'Con la carta coperta, gli otto si dividono sempre: due mani che partono da 8 perdono meno di un 16.' },
      { q: 'Hai 10-10 e il banco mostra un 6. Cosa fai?', options: ['Divido, il banco è debole', 'Sto'], answer: 1, why: 'Non dividere mai i dieci: stare con 20 vale +0,70 puntate, dividere +0,57.' },
      { q: 'Hai 9-9 e il banco mostra un 7. Cosa fai?', options: ['Divido', 'Sto'], answer: 1, why: 'Il tuo 18 batte il 17 a cui arriva spesso un banco che mostra 7: stai.' },
    ],
  },
  {
    slug: 'resa-e-regole-del-tavolo',
    title: 'La resa e come scegliere il tavolo giusto',
    h1: 'Lezione 9: la resa e come scegliere il tavolo',
    metaTitle: 'La resa a blackjack e come scegliere il tavolo · Corso',
    description: 'Quando arrendersi a blackjack e come scegliere un tavolo con buone regole: 3:2, banco che sta sul 17 soft, raddoppio dopo la divisione, meno mazzi. Lezione 9.',
    minutes: 4,
    summary: 'Arrenditi con 16 contro 9, 10 o asso e con 15 contro 10, se è consentito. E scegli tavoli 3:2 dove il banco sta sul 17 soft.',
    body: `
<h2>La resa non è da codardi</h2>
<p>Alcuni tavoli ti permettono di <strong>arrenderti</strong> subito dopo la distribuzione: abbandoni la mano e ti restituiscono metà della puntata. Conviene solo quando una mano perde più della metà delle volte. Con le regole di Las Vegas significa <strong>16 contro 9, 10 o asso</strong> e <strong>15 contro 10</strong>. Se la resa non è prevista, con queste mani chiedi carta.</p>
<h2>La decisione più cara la prendi prima di sederti</h2>
<p>Le regole del tavolo spostano il vantaggio del banco più di tanti errori. Cerca:</p>
<ul>
<li><strong>Blackjack pagato 3 a 2</strong>, mai 6 a 5 (+1,4 punti per il banco).</li>
<li><strong>Il banco sta sul 17 soft</strong> (S17). Se chiede carta (H17), +0,2 punti.</li>
<li><strong>Raddoppio dopo la divisione</strong> consentito.</li>
<li><strong>Resa</strong>, se c’è.</li>
<li><strong>Meno mazzi</strong> è meglio, anche se conta meno di tutto il resto.</li>
</ul>
<p>Tutto è quantificato in <a href="/it/dati-blackjack/vantaggio-del-banco-regole/">vantaggio del banco per regole</a>.</p>`,
    quiz: [
      { q: 'Hai 16 contro un 10 e il tavolo consente la resa. Cosa fai?', options: ['Mi arrendo', 'Chiedo carta', 'Sto'], answer: 0, why: 'Con la resa, 16 contro 10 si abbandona: salvi metà della puntata su una mano che perde più della metà delle volte.' },
      { q: 'Quale regola è peggiore per te?', options: ['Il banco chiede carta sul 17 soft', 'Il blackjack paga 6 a 5', '8 mazzi invece di 6'], answer: 1, why: 'Il 6:5 aggiunge circa 1,4 punti al vantaggio del banco; l’H17 circa 0,2; 8 mazzi circa 0,02.' },
      { q: 'A questo tavolo non c’è la resa. Hai 15 contro un 10. Cosa fai?', options: ['Sto', 'Chiedo carta'], answer: 1, why: 'Senza resa, con queste mani si chiede carta.' },
    ],
  },
  {
    slug: 'contare-le-carte-senza-miti',
    title: 'Contare le carte, senza miti',
    h1: 'Lezione 10: contare le carte, senza miti',
    metaTitle: 'Contare le carte senza miti · Corso di blackjack',
    description: 'L’ultima lezione del corso di blackjack gratis: cos’è il conteggio delle carte con Hi-Lo, che vantaggio dà davvero e dove non funziona per niente. Con quiz.',
    minutes: 5,
    summary: 'Hi-Lo: 2–6 contano +1, 7–9 zero, dieci e assi −1. È legale, ma il vantaggio è piccolo e online non funziona.',
    body: `
<p>Contare le carte significa tenere traccia delle carte già uscite, per sapere quando quelle rimaste sono ricche di carte alte, che favoriscono il giocatore: più blackjack, raddoppi migliori e un banco che sballa di più.</p>
<h2>Il sistema Hi-Lo</h2>
<table><thead><tr><th>Carte</th><th>Valore</th></tr></thead><tbody>
<tr><td>Dal 2 al 6</td><td>+1</td></tr><tr><td>Dal 7 al 9</td><td>0</td></tr><tr><td>10, figure e asso</td><td>−1</td></tr></tbody></table>
<p>La somma progressiva è il <strong>conteggio corrente</strong> (running count). Divisa per i mazzi che restano da distribuire, diventa il <strong>conteggio reale</strong> (true count). Più è alto, più punti.</p>
<h2>La verità sul vantaggio</h2>
<p>Un contatore disciplinato con buone regole ottiene all’incirca lo 0,5–1% sul denaro puntato, con oscillazioni enormi e un grosso capitale alle spalle. I casinò mescolano prima o ti chiedono di smettere di giocare appena ti individuano. Non è un piano d’impresa.</p>
<h2>Dove non funziona</h2>
<ul>
<li><strong>Blackjack online con RNG:</strong> il mazzo viene rimescolato a ogni mano.</li>
<li><strong>Mescolatrici continue:</strong> le carte rientrano dopo ogni mano.</li>
</ul>
<p>Contare a mente è legale; usare qualsiasi dispositivo al tavolo no. Per allenarti, prova gli esercizi in <a href="/it/allenarsi-a-contare-le-carte/">come allenarsi a contare le carte</a>.</p>
<h2>Congratulazioni</h2>
<p>Hai finito il corso. Ora ne sai più della maggior parte delle persone che si siedono a un tavolo. Quello che resta è trasformarlo in un riflesso: decidere bene in due secondi, mano dopo mano. L’unico modo per arrivarci è allenarsi.</p>`,
    quiz: [
      { q: 'Quanto vale un 5 in Hi-Lo?', options: ['+1', '0', '−1'], answer: 0, why: 'Le carte dal 2 al 6 contano +1.' },
      { q: 'Conteggio corrente +6 con 3 mazzi rimasti. Conteggio reale?', options: ['+6', '+2', '+18'], answer: 1, why: '6 ÷ 3 = +2.' },
      { q: 'Contare funziona nel normale blackjack online?', options: ['Sì, come in un casinò', 'No, rimescola a ogni mano'], answer: 1, why: 'Il software rimescola dopo ogni mano: non c’è niente da contare.' },
    ],
  },
];

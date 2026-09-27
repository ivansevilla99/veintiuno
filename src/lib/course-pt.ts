// Brazilian Portuguese edition of the free course (src/lib/course.ts). Same lessons, same
// facts, same quiz answers; adapted for Brazilian readers (European/online tables without
// hole card, Las Vegas as the classic reference). Index i here is the same lesson as index i
// in the Spanish course (used for hreflang pairing).
import type { Lesson } from './course';

export const lessonsPt: Lesson[] = [
  {
    slug: 'o-que-e-blackjack',
    title: 'O que é o blackjack e como se ganha',
    h1: 'Lição 1: o que é o blackjack e como se ganha',
    metaTitle: 'O que é blackjack e como se ganha · Curso de blackjack',
    description: 'Lição 1 do curso de blackjack grátis: o que é o jogo, contra quem você joga e como se ganha uma mão. Com um quiz curto no fim da lição para fixar o conteúdo.',
    minutes: 4,
    summary: 'Você joga contra o dealer, não contra a mesa. Ganha quem termina mais perto de 21 sem passar.',
    body: `
<p>O blackjack é o jogo de cartas mais popular dos cassinos. É a versão de cassino do clássico 21, com uma diferença importante: <strong>você não joga contra os outros jogadores, e sim contra o dealer</strong>. O que os outros fazem na mesa não muda em nada o seu resultado.</p>
<h2>O objetivo real</h2>
<p>Muita gente acha que o objetivo é chegar a 21. Não é. O objetivo é <strong>ganhar do dealer</strong>, e há duas formas de conseguir isso:</p>
<ul>
<li>Terminar com um total maior que o do dealer sem passar de 21.</li>
<li>Ficar em 21 ou menos enquanto o dealer estoura.</li>
</ul>
<p>Se os dois terminam com o mesmo total, é um <strong>empate</strong> (push): você recebe a aposta de volta.</p>
<h2>A regra que explica tudo</h2>
<p>Se você passa de 21, perde na hora — mesmo que o dealer estoure depois. Como <strong>você sempre joga antes do dealer</strong>, é dessa regra que vem a vantagem da casa. Todo este curso trata de recuperar o máximo possível dela.</p>
<h2>O dealer não pensa</h2>
<p>O dealer não toma decisões: segue uma regra fixa. Pede carta com 16 ou menos e para com 17 ou mais. Você, por outro lado, pode pedir, parar, dobrar, dividir ou desistir. Essa liberdade é a sua arma, e a estratégia básica é a forma certa de usá-la.</p>`,
    quiz: [
      { q: 'Contra quem você joga no blackjack?', options: ['Contra os outros jogadores', 'Contra o dealer', 'Contra o cassino e os jogadores'], answer: 1, why: 'Só contra o dealer. O que os outros jogadores fazem não muda o seu resultado.' },
      { q: 'Você tem 18 e o dealer tem 20. O que acontece?', options: ['Você ganha, ninguém estourou', 'Empate', 'Você perde'], answer: 2, why: 'Ganha quem está mais perto de 21 sem passar: o dealer, com 20.' },
      { q: 'Você estoura com 23 e depois o dealer estoura com 24. O que acontece?', options: ['Empate', 'Você perde', 'Você ganha'], answer: 1, why: 'Quem estoura perde na hora. É daí que vem a vantagem da casa.' },
    ],
  },
  {
    slug: 'valor-das-cartas-e-maos-macias',
    title: 'Valor das cartas e mãos macias',
    h1: 'Lição 2: valor das cartas e mãos macias',
    metaTitle: 'Valor das cartas no blackjack e mãos macias · Curso',
    description: 'Quanto vale cada carta no blackjack, como funciona o ás, o que é uma mão macia (soft) e o que conta como blackjack. Lição 2 do curso de blackjack grátis.',
    minutes: 4,
    summary: 'As figuras valem 10, o ás vale 1 ou 11. Uma mão com ás contado como 11 é “macia”: uma carta não a faz estourar.',
    body: `
<table><thead><tr><th>Carta</th><th>Valor</th></tr></thead><tbody>
<tr><td>2 a 9</td><td>O valor da carta</td></tr><tr><td>10, J, Q, K</td><td>10</td></tr><tr><td>Ás</td><td>1 ou 11, o que for melhor para você</td></tr></tbody></table>
<p>Os naipes não importam. Com quatro tipos de carta que valem 10, <strong>quase um terço do baralho vale 10</strong> (16 de 52). Guarde isso: explica muitas jogadas.</p>
<h2>O ás e as mãos macias</h2>
<p>Uma mão com um ás contado como 11 se chama <strong>macia</strong> (soft). Ás-6 é um <strong>17 macio</strong>: pode valer 7 ou 17. O ponto-chave é que <strong>você não pode estourar pedindo uma carta</strong>: se vier um dez, o ás passa a valer 1 e você fica com 17.</p>
<p>Qualquer outra mão é <strong>dura</strong> (hard). 10-7 é um 17 duro: se pedir, quase qualquer carta faz você estourar.</p>
<p>Uma mão macia pode virar dura: ás-6 (17 macio) mais um 9 é um 16 duro, porque agora o ás tem de contar como 1.</p>
<h2>Blackjack</h2>
<p>Um ás mais uma carta de valor 10 como as duas primeiras cartas é um <strong>blackjack</strong>. É a melhor mão e ganha de qualquer outro 21, inclusive de um 21 com três cartas. Normalmente paga 3 para 2.</p>`,
    quiz: [
      { q: 'Quanto vale ás-6?', options: ['Só 7', 'Só 17', '7 ou 17 (17 macio)'], answer: 2, why: 'O ás vale 1 ou 11. Contado como 11 não faz você estourar, então é um 17 macio.' },
      { q: 'Você tem ás-6 e pede: vem um 10. O que você tem?', options: ['27, estourou', '17 duro', '21'], answer: 1, why: 'O ás passa a valer 1: 1 + 6 + 10 = 17. Por isso uma carta não faz uma mão macia estourar.' },
      { q: 'O que ganha: um blackjack ou um 21 com três cartas?', options: ['O blackjack', 'O 21 com três cartas', 'É empate'], answer: 0, why: 'Um blackjack (ás + dez nas duas primeiras cartas) ganha de qualquer outro 21.' },
    ],
  },
  {
    slug: 'como-funciona-uma-mao',
    title: 'Como funciona uma mão, passo a passo',
    h1: 'Lição 3: como funciona uma mão, passo a passo',
    metaTitle: 'Como funciona uma mão de blackjack, passo a passo',
    description: 'Uma mão de blackjack do início ao fim: a aposta, a distribuição, a carta oculta, a vez do jogador, a vez do dealer e o pagamento. Lição 3 do curso grátis.',
    minutes: 5,
    summary: 'Você aposta, recebe duas cartas, toma suas decisões, e o dealer joga por último com uma regra fixa: pede até 16.',
    body: `
<ol>
<li><strong>Aposta.</strong> Você faz sua aposta antes da distribuição.</li>
<li><strong>Distribuição.</strong> Você recebe duas cartas viradas para cima. O dealer recebe uma carta virada para cima.</li>
<li><strong>A carta oculta.</strong> Há duas versões. No jogo <strong>americano</strong> o dealer pega uma segunda carta virada para baixo (a hole card) e, se mostrar um ás ou um dez, confere se tem blackjack antes de você jogar. No jogo <strong>europeu</strong> (Espanha e muitas mesas online) não há carta oculta: o dealer tira a segunda carta no final.</li>
<li><strong>Sua vez.</strong> Pedir, parar, dobrar, dividir ou desistir. Você pode pedir quantas cartas quiser.</li>
<li><strong>A vez do dealer.</strong> O dealer pede com 16 ou menos e para com 17 ou mais. Em algumas mesas o dealer também pede no 17 macio (“H17”).</li>
<li><strong>Pagamento.</strong> Os totais são comparados e as apostas são pagas.</li>
</ol>
<h2>Por que a carta oculta importa</h2>
<p>Sem carta oculta, o dealer ainda pode ter blackjack quando você dobra ou divide, e, se tiver, leva tudo o que você pôs na mesa. É por isso que nas mesas europeias não se dobra 11 contra um 10. Mais em <a href="/pt/regras-blackjack-espanha/">regras do blackjack na Espanha</a>.</p>
<h2>A carta que importa: a carta visível do dealer</h2>
<p>Toda a estratégia se apoia em duas coisas: <strong>o seu total</strong> e <strong>a carta visível do dealer</strong>. A carta visível diz qual a chance de o dealer estourar. Com um 5 ou um 6 à mostra, ele estoura mais de 40% das vezes; com um 10, cerca de 23%.</p>`,
    quiz: [
      { q: 'Quando o dealer pede carta?', options: ['Quando acha que vale a pena', 'Sempre com 16 ou menos', 'Só se os jogadores tiverem mais'], answer: 1, why: 'O dealer não decide: pede com 16 ou menos e para com 17 ou mais.' },
      { q: 'Numa mesa europeia (sem carta oculta), o dealer confere o blackjack antes?', options: ['Sim, antes de você jogar', 'Não, a segunda carta vem no final', 'Depende do jogador'], answer: 1, why: 'No jogo europeu não há carta oculta: a segunda carta do dealer vem depois que você joga.' },
      { q: 'Com qual carta visível o dealer estoura mais vezes?', options: ['Um 10', 'Um ás', 'Um 5 ou um 6'], answer: 2, why: 'Com um 5 ou um 6 o dealer estoura cerca de 42% das vezes; com um 10, cerca de 23%.' },
    ],
  },
  {
    slug: 'pagamentos-e-seguro',
    title: 'O que paga e o que tira de você: pagamentos e seguro',
    h1: 'Lição 4: o que paga e o que tira de você',
    metaTitle: 'Pagamentos do blackjack, 6:5 e seguro · Curso',
    description: 'Quanto paga o blackjack, por que as mesas 6:5 são uma armadilha, o que é o seguro e por que nunca aceitá-lo, nem o even money. Lição 4 do curso grátis.',
    minutes: 4,
    summary: 'O blackjack deve pagar 3 para 2. Evite mesas 6:5. Nunca faça seguro — nem aceite even money.',
    body: `
<table><thead><tr><th>Resultado</th><th>Paga</th></tr></thead><tbody>
<tr><td>Vitória</td><td>1 para 1</td></tr><tr><td>Blackjack</td><td>3 para 2 (R$ 10 rendem R$ 15)</td></tr><tr><td>Empate</td><td>A aposta é devolvida</td></tr></tbody></table>
<h2>A armadilha do 6:5</h2>
<p>Algumas mesas pagam o blackjack só 6 para 5 (R$ 10 rendem R$ 12). Não parece muito, mas soma cerca de <strong>1,4 ponto percentual</strong> à vantagem da casa — umas quatro vezes o que você perde jogando perfeitamente. É a pior regra que existe. Se o pano diz “Blackjack pays 6 to 5”, procure outra mesa.</p>
<h2>O seguro</h2>
<p>Quando o dealer mostra um ás, vão oferecer um <strong>seguro</strong>: uma aposta paralela, de até metade da sua aposta, de que o dealer tem um dez embaixo. Paga 2 para 1. Para empatar, o dealer precisaria ter um dez em mais de um terço das vezes, e ele só tem em cerca de <strong>31%</strong> das vezes. A casa ganha em torno de 7% nessa aposta.</p>
<h2>Even money</h2>
<p>Se você tem blackjack e o dealer mostra um ás, vão oferecer “even money”: receber 1 para 1 na hora. É exatamente o mesmo que fazer seguro do seu blackjack. Recusar vale 1,04 apostas em média; aceitar, exatamente 1. Você entrega 4%.</p>`,
    quiz: [
      { q: 'Quanto deve pagar um blackjack?', options: ['1 para 1', '6 para 5', '3 para 2'], answer: 2, why: '3 para 2 é o padrão. 6 para 5 soma cerca de 1,4 ponto à vantagem da casa.' },
      { q: 'O dealer mostra um ás e oferece seguro. O que você faz?', options: ['Aceito com uma mão boa', 'Nunca aceito', 'Sempre aceito'], answer: 1, why: 'O seguro é uma aposta à parte com cerca de 7% de vantagem da casa, seja qual for a sua mão.' },
      { q: 'Você tem blackjack e o dealer mostra um ás. Aceita even money?', options: ['Sim, é dinheiro garantido', 'Não', 'Só com poucos baralhos'], answer: 1, why: 'Aceitar vale 1 aposta; recusar, 1,04 em média. É um seguro disfarçado.' },
    ],
  },
  {
    slug: 'pedir-ou-parar',
    title: 'Pedir ou parar com 12 a 16',
    h1: 'Lição 5: pedir ou parar com mãos duras',
    metaTitle: 'Quando pedir ou parar no blackjack (12 a 16) · Curso',
    description: 'Quando pedir carta e quando parar no blackjack com 12 a 16 duros, conforme a carta visível do dealer, e a exceção do 12. Lição 5 do curso de blackjack grátis.',
    minutes: 5,
    summary: 'Com 12–16: pare contra 2–6 (exceto 12 contra 2 ou 3) e peça contra 7 ou mais. Com 17 ou mais, pare sempre.',
    body: `
<p>As mãos de 12 a 16 são as incômodas: você pode estourar se pedir, mas são baixas demais para ganhar se parar. A resposta depende da carta visível do dealer.</p>
<h2>Contra 2 a 6: pare</h2>
<p>Um dealer com carta baixa tem de pedir e estoura com frequência: cerca de 40% das vezes com um 4, 5 ou 6. Não arrisque: pare e deixe o dealer estourar.</p>
<h2>Contra 7 ou mais: peça</h2>
<p>Com um 7, 8, 9, 10 ou ás à mostra, o dealer termina com 17 ou mais na maioria das vezes. Seu 12–16 perde se você parar, então você <strong>pede mesmo podendo estourar</strong>. É a regra mais difícil de aceitar, e a mais importante. O exemplo clássico é o <a href="/pt/16-contra-10-blackjack/">16 contra 10</a>.</p>
<h2>A exceção do 12</h2>
<p><strong>Peça com 12 contra um 2 ou um 3.</strong> Com 12 só um dez faz você estourar, e um dealer com 2 ou 3 estoura menos do que com 4–6. É a casa da tabela em que mais se erra.</p>
<h2>Mãos duras num relance</h2>
<table><thead><tr><th>Seu total</th><th>contra 2–3</th><th>contra 4–6</th><th>contra 7–A</th></tr></thead><tbody>
<tr><td>8 ou menos</td><td>Pedir</td><td>Pedir</td><td>Pedir</td></tr>
<tr><td>12</td><td>Pedir</td><td>Parar</td><td>Pedir</td></tr>
<tr><td>13–16</td><td>Parar</td><td>Parar</td><td>Pedir*</td></tr>
<tr><td>17+</td><td>Parar</td><td>Parar</td><td>Parar</td></tr></tbody></table>
<p class="muted small">* Com surrender: desista com 16 contra 9, 10 ou ás e com 15 contra 10 (lição 9). Os totais de 9 a 11 se dobram (lição 6).</p>`,
    quiz: [
      { q: 'Você tem 15 e o dealer mostra um 6. O que você faz?', options: ['Pedir', 'Parar', 'Dobrar'], answer: 1, why: 'Contra 2–6 você para com 13–16: um dealer com 6 estoura cerca de 42% das vezes.' },
      { q: 'Você tem 14 e o dealer mostra um 9. O que você faz?', options: ['Pedir', 'Parar'], answer: 0, why: 'Contra 7 ou mais, peça com 12–16: parar perde mais.' },
      { q: 'Você tem 12 e o dealer mostra um 3. O que você faz?', options: ['Parar', 'Pedir'], answer: 1, why: 'Essa é a exceção: peça com 12 contra 2 ou 3.' },
    ],
  },
  {
    slug: 'dobrar',
    title: 'Dobrar: apostar mais quando você está na frente',
    h1: 'Lição 6: dobrar com 9, 10 e 11',
    metaTitle: 'Quando dobrar com 9, 10 e 11 · Curso de blackjack',
    description: 'O que é dobrar no blackjack e quando fazer isso com 9, 10 e 11, incluindo o que muda nas mesas europeias sem carta oculta. Lição 6 do curso de blackjack grátis.',
    minutes: 4,
    summary: 'Dobre 11 contra tudo menos o ás, 10 contra 2–9 e 9 contra 3–6. Nas mesas sem carta oculta, não dobre contra um 10 ou um ás.',
    body: `
<p><strong>Dobrar</strong> significa dobrar a aposta em troca de <strong>exatamente mais uma carta</strong>. Você faz isso quando já está na frente: seu total é forte e o dealer está fraco. Não faz você ganhar mais vezes, mas quando ganha, recebe em dobro.</p>
<h2>As três regras</h2>
<ul>
<li><strong>11:</strong> dobre contra qualquer carta, exceto o ás. Qualquer dez — quase um terço do baralho — dá 21. (Se o dealer pede no 17 macio, dobre também contra o ás.)</li>
<li><strong>10:</strong> dobre contra 2 a 9.</li>
<li><strong>9:</strong> dobre contra 3 a 6.</li>
</ul>
<p>Com 11 contra um 6, pedir vale +0,34 apostas em média e dobrar +0,68. Essa é a diferença entre jogar bem e jogar muito bem.</p>
<h2>Nas mesas europeias</h2>
<p>Sem carta oculta, o dealer ainda pode ter blackjack. Se você dobra e ele tem, você perde o dobro. Por isso, nas mesas sem carta oculta, <strong>11 contra um 10 ou um ás é pedir</strong>, não dobrar. Nos cassinos espanhóis, além disso, só se pode dobrar com 9, 10 ou 11.</p>
<p>Todos os casos, com os números, em <a href="/pt/quando-dobrar-blackjack/">quando dobrar</a>.</p>`,
    quiz: [
      { q: 'Você tem 11 e o dealer mostra um 7 (mesa de Las Vegas). O que você faz?', options: ['Pedir', 'Dobrar', 'Parar'], answer: 1, why: 'Dobre 11 contra tudo, exceto o ás.' },
      { q: 'Você tem 9 e o dealer mostra um 2. O que você faz?', options: ['Dobrar', 'Pedir'], answer: 1, why: 'Dobre 9 só contra 3–6 (com 6 ou 8 baralhos).' },
      { q: 'Mesa sem carta oculta: você tem 11 e o dealer mostra um 10. O que você faz?', options: ['Dobrar', 'Pedir'], answer: 1, why: 'O dealer ainda pode ter blackjack e você perderia o dobro: peça.' },
    ],
  },
  {
    slug: 'maos-macias',
    title: 'Mãos macias: o ás que protege você',
    h1: 'Lição 7: como jogar as mãos macias',
    metaTitle: 'Como jogar mãos macias no blackjack (A-2 a A-9)',
    description: 'Como jogar as mãos macias no blackjack, de A-2 a A-9: quando pedir, dobrar ou parar, e por que o 18 macio não é tão bom quanto parece. Lição 7 do curso grátis.',
    minutes: 5,
    summary: 'A-2 a A-6: nunca pare. A-7: pare contra 2, 7 e 8, peça contra 9, 10 e ás. A-8 e A-9: pare.',
    body: `
<p>Uma carta não faz uma mão macia estourar, por isso as mãos macias se jogam de forma muito mais agressiva que as duras.</p>
<h2>A-2 a A-6: nunca pare</h2>
<p>São os 13 a 17 macios: totais fracos que uma carta não consegue piorar. <strong>Peça sempre</strong> e, onde for possível dobrar com quaisquer duas cartas, dobre contra as cartas fracas do dealer (A-2 e A-3 contra 5–6, A-4 e A-5 contra 4–6, A-6 contra 3–6).</p>
<h2>A-7: o 18 macio que não é tão bom assim</h2>
<ul>
<li>Contra <strong>2, 7 ou 8</strong>: pare.</li>
<li>Contra <strong>3 a 6</strong>: dobre se for permitido; senão, pare.</li>
<li>Contra <strong>9, 10 ou ás</strong>: <strong>peça</strong>. Contra essas cartas, o 18 perde mais do que ganha.</li>
</ul>
<p>A-7 contra um 9 é o erro clássico de jogadores experientes: parar vale −0,18 apostas em média e pedir −0,10.</p>
<h2>A-8 e A-9: pare</h2>
<p>O 19 e o 20 macios são mãos vencedoras. Deixe como estão.</p>
<h2>Nos cassinos espanhóis</h2>
<p>Só se pode dobrar com 9–11, então as dobras com mãos macias desaparecem: peça com A-2 a A-6 e pare com A-7 contra 3–6.</p>`,
    quiz: [
      { q: 'Você tem A-5 e o dealer mostra um 10. O que você faz?', options: ['Parar', 'Pedir'], answer: 1, why: 'A-5 é um 16 macio: uma carta não faz você estourar e o total é fraco. Peça.' },
      { q: 'Você tem A-7 e o dealer mostra um 9. O que você faz?', options: ['Parar', 'Pedir'], answer: 1, why: '18 macio contra 9, 10 ou ás é pedir: parar perde mais.' },
      { q: 'Você tem A-8 e o dealer mostra um 10. O que você faz?', options: ['Parar', 'Pedir', 'Dobrar'], answer: 0, why: 'O 19 macio é uma mão vencedora: pare.' },
    ],
  },
  {
    slug: 'dividir-pares',
    title: 'Pares: quando dividir',
    h1: 'Lição 8: quando dividir pares',
    metaTitle: 'Quando dividir pares no blackjack · Curso de blackjack',
    description: 'Quais pares dividir no blackjack: sempre ases e oitos, nunca dezes nem cincos, e o resto conforme a carta visível do dealer. Lição 8 do curso grátis.',
    minutes: 4,
    summary: 'Divida sempre ases e oitos; nunca dezes nem cincos. O resto, em geral contra 2–6.',
    body: `
<h2>Sempre: ases e oitos</h2>
<p>Dois ases valem 2 ou 12; divididos, cada um pode fazer 21. Dois oitos são 16, a pior mão; divididos, cada um começa com 8. Nas mesas sem carta oculta há exceções: não divida ases contra um ás, nem oitos contra um 10 ou um ás.</p>
<h2>Nunca: dezes e cincos</h2>
<p>Um 20 quase sempre ganha: não o desfaça. Dois cincos somam 10, perfeito para dobrar.</p>
<h2>O resto: contra cartas fracas</h2>
<table><thead><tr><th>Par</th><th>Dividir contra</th></tr></thead><tbody>
<tr><td>2-2, 3-3</td><td>2 a 7</td></tr><tr><td>4-4</td><td>5 e 6 (se puder dobrar depois de dividir)</td></tr>
<tr><td>6-6</td><td>2 a 6</td></tr><tr><td>7-7</td><td>2 a 7</td></tr><tr><td>9-9</td><td>2 a 6, 8 e 9 (não contra 7, 10 ou ás)</td></tr></tbody></table>
<p>Pare com 9-9 contra um 7: um dealer com 7 muitas vezes termina com 17, e o seu 18 ganha. Mais detalhes e números em <a href="/pt/quando-dividir-blackjack/">quando dividir</a>.</p>`,
    quiz: [
      { q: 'Você tem 8-8 e o dealer mostra um 10 (mesa de Las Vegas). O que você faz?', options: ['Paro com 16', 'Divido', 'Peço'], answer: 1, why: 'Com carta oculta, divida sempre os oitos: duas mãos começando com 8 perdem menos que um 16.' },
      { q: 'Você tem 10-10 e o dealer mostra um 6. O que você faz?', options: ['Divido, o dealer está fraco', 'Paro'], answer: 1, why: 'Nunca divida dezes: parar com 20 vale +0,70 apostas; dividir, +0,57.' },
      { q: 'Você tem 9-9 e o dealer mostra um 7. O que você faz?', options: ['Divido', 'Paro'], answer: 1, why: 'Seu 18 ganha do 17 que um dealer com 7 costuma fazer: pare.' },
    ],
  },
  {
    slug: 'desistir-e-regras-da-mesa',
    title: 'Desistir (surrender) e escolher a mesa certa',
    h1: 'Lição 9: desistir e escolher a mesa',
    metaTitle: 'Desistir (surrender) e como escolher a mesa · Curso',
    description: 'Quando desistir (surrender) no blackjack e como escolher uma mesa com boas regras: 3:2, dealer para no 17 macio, dobrar após dividir, menos baralhos. Lição 9.',
    minutes: 4,
    summary: 'Desista com 16 contra 9, 10 ou ás e com 15 contra 10, se for permitido. E escolha mesas 3:2 em que o dealer para no 17 macio.',
    body: `
<h2>Desistir não é coisa de covarde</h2>
<p>Algumas mesas deixam você <strong>desistir</strong> (surrender) logo depois da distribuição: você abandona a mão e recebe metade da aposta de volta. Só vale a pena quando uma mão perde mais da metade das vezes. Com as regras de Las Vegas, isso significa <strong>16 contra 9, 10 ou ás</strong> e <strong>15 contra 10</strong>. Se não houver surrender, peça com essas mãos.</p>
<h2>A decisão mais cara acontece antes de você sentar</h2>
<p>As regras da mesa mexem mais na vantagem da casa do que muitos erros. Procure:</p>
<ul>
<li><strong>Blackjack pagando 3 para 2</strong>, nunca 6 para 5 (+1,4 ponto para a casa).</li>
<li><strong>Dealer para no 17 macio</strong> (S17). Se o dealer pede (H17), +0,2 ponto.</li>
<li><strong>Dobrar depois de dividir</strong> permitido.</li>
<li><strong>Surrender</strong>, se houver.</li>
<li><strong>Menos baralhos</strong> é melhor, embora pese menos do que o resto.</li>
</ul>
<p>Tudo isso está quantificado em <a href="/pt/dados-blackjack/vantagem-da-casa-regras/">vantagem da casa por regras</a>.</p>`,
    quiz: [
      { q: 'Você tem 16 contra um 10 e a mesa permite surrender. O que você faz?', options: ['Desistir', 'Pedir', 'Parar'], answer: 0, why: 'Com surrender, 16 contra 10 é desistir: você salva metade da aposta numa mão que perde mais da metade das vezes.' },
      { q: 'Qual regra é pior para você?', options: ['Dealer pede no 17 macio', 'Blackjack paga 6 para 5', '8 baralhos em vez de 6'], answer: 1, why: '6:5 soma cerca de 1,4 ponto à vantagem da casa; H17, cerca de 0,2; 8 baralhos, cerca de 0,02.' },
      { q: 'Não há surrender nesta mesa. Você tem 15 contra um 10. O que você faz?', options: ['Parar', 'Pedir'], answer: 1, why: 'Sem surrender, essas mãos são pedir.' },
    ],
  },
  {
    slug: 'contagem-de-cartas-sem-mitos',
    title: 'Contagem de cartas, sem mitos',
    h1: 'Lição 10: contagem de cartas, sem mitos',
    metaTitle: 'Contagem de cartas sem mitos · Curso de blackjack',
    description: 'A última lição do curso de blackjack grátis: o que é a contagem de cartas com o sistema Hi-Lo, que vantagem ela realmente dá e onde não funciona de jeito nenhum.',
    minutes: 5,
    summary: 'Hi-Lo: 2–6 valem +1, 7–9 zero, dezes e ases −1. É legal, mas a vantagem é pequena e não funciona online.',
    body: `
<p>Contar cartas significa acompanhar as cartas que já saíram, para saber quando as que restam estão ricas em cartas altas — que favorecem o jogador: mais blackjacks, dobras melhores e um dealer que estoura mais.</p>
<h2>O sistema Hi-Lo</h2>
<table><thead><tr><th>Cartas</th><th>Valor</th></tr></thead><tbody>
<tr><td>2 a 6</td><td>+1</td></tr><tr><td>7 a 9</td><td>0</td></tr><tr><td>10, figuras e ás</td><td>−1</td></tr></tbody></table>
<p>A soma acumulada é a <strong>contagem corrente</strong> (running count). Dividida pelos baralhos que faltam distribuir, é a <strong>contagem real</strong> (true count). Quanto mais alta, mais você aposta.</p>
<h2>A verdade sobre a vantagem</h2>
<p>Um contador disciplinado, com boas regras, consegue algo como 0,5–1% sobre o dinheiro apostado, com oscilações enormes e uma banca grande por trás. Os cassinos embaralham antes ou pedem que você pare de jogar quando o identificam. Não é um plano de negócios.</p>
<h2>Onde não funciona</h2>
<ul>
<li><strong>Blackjack online com RNG:</strong> o baralho é embaralhado de novo a cada mão.</li>
<li><strong>Máquinas de embaralhamento contínuo:</strong> as cartas voltam para dentro depois de cada mão.</li>
</ul>
<p>Contar de cabeça é legal; usar qualquer aparelho na mesa, não. Para treinar, experimente os exercícios de <a href="/pt/treinar-contagem-de-cartas/">como treinar a contagem de cartas</a>.</p>
<h2>Parabéns</h2>
<p>Você terminou o curso. Agora sabe mais do que a maioria das pessoas que se senta a uma mesa. O que falta é transformar isso em reflexo: decidir certo em dois segundos, mão após mão. O único caminho é a prática.</p>`,
    quiz: [
      { q: 'Quanto vale um 5 no Hi-Lo?', options: ['+1', '0', '−1'], answer: 0, why: 'Do 2 ao 6 valem +1.' },
      { q: 'Contagem corrente +6 com 3 baralhos restantes. Contagem real?', options: ['+6', '+2', '+18'], answer: 1, why: '6 ÷ 3 = +2.' },
      { q: 'A contagem funciona no blackjack online comum?', options: ['Sim, igual a um cassino', 'Não, embaralha a cada mão'], answer: 1, why: 'O software embaralha de novo depois de cada mão: não há nada para contar.' },
    ],
  },
];

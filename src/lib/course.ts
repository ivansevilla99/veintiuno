// Free blackjack course (Spanish). Mirrors the app's 14-day path (Curriculum.swift) in
// web form: each lesson is readable on its own, ends with a short quiz, and links to the
// deeper guide. Strategy answers are for 6 decks, dealer stands on soft 17, unless stated.

export interface QuizQ { q: string; options: string[]; answer: number; why: string }
export interface Lesson {
  slug: string;
  title: string;       // short, for the index and navigation
  h1: string;
  metaTitle: string;
  description: string;
  minutes: number;
  summary: string;     // one-line takeaway, shown on the index and as TL;DR
  body: string;        // HTML
  quiz: QuizQ[];
}

export const lessons: Lesson[] = [
  {
    slug: 'que-es-el-blackjack',
    title: 'Qué es el blackjack y cómo se gana',
    h1: 'Lección 1: qué es el blackjack y cómo se gana',
    metaTitle: 'Qué es el blackjack y cómo se gana · Curso de blackjack',
    description: 'Primera lección del curso gratis de blackjack: qué es el juego, contra quién juegas y cómo se gana una mano. Con ejercicio al final.',
    minutes: 4,
    summary: 'Juegas contra el crupier, no contra la mesa. Ganas si acabas más cerca de 21 que él sin pasarte.',
    body: `
<p>El blackjack es el juego de cartas más popular de los casinos. Es la versión de casino del «21» de toda la vida, con una diferencia importante: <strong>no juegas contra los demás jugadores, sino contra el crupier</strong>. Lo que hagan los demás en la mesa no cambia tu resultado.</p>
<h2>El objetivo real</h2>
<p>Mucha gente cree que el objetivo es llegar a 21. No lo es. El objetivo es <strong>ganar al crupier</strong>, y eso se consigue de dos formas:</p>
<ul>
<li>Terminar con un total más alto que el suyo sin pasarte de 21.</li>
<li>No pasarte y que él sí se pase.</li>
</ul>
<p>Si los dos acabáis con el mismo total, es un <strong>empate</strong>: recuperas tu apuesta.</p>
<h2>La regla que lo explica todo</h2>
<p>Si te pasas de 21, pierdes en el acto, aunque después el crupier también se pase. Como <strong>tú juegas siempre antes que él</strong>, esa regla le da a la casa su ventaja. Todo lo que vas a aprender en este curso sirve para compensarla lo más posible.</p>
<h2>El crupier no piensa</h2>
<p>El crupier no toma decisiones: sigue una regla fija. Pide carta mientras tenga 16 o menos y se planta con 17 o más. Tú, en cambio, puedes pedir, plantarte, doblar, dividir o rendirte. Esa libertad es tu arma, y la estrategia básica es la forma correcta de usarla.</p>`,
    quiz: [
      { q: '¿Contra quién juegas en el blackjack?', options: ['Contra los demás jugadores', 'Contra el crupier', 'Contra el casino y los jugadores'], answer: 1, why: 'Solo contra el crupier. Lo que hagan los demás no cambia tu resultado.' },
      { q: 'Tienes 18 y el crupier 20. ¿Qué pasa?', options: ['Ganas, porque ninguno se ha pasado', 'Empate', 'Pierdes'], answer: 2, why: 'Gana quien está más cerca de 21 sin pasarse: el crupier, con 20.' },
      { q: 'Te pasas con 23 y después el crupier se pasa con 24. ¿Qué pasa?', options: ['Empate', 'Pierdes', 'Ganas'], answer: 1, why: 'Si te pasas, pierdes en el momento. De ahí sale la ventaja de la casa.' },
    ],
  },
  {
    slug: 'valor-de-las-cartas',
    title: 'El valor de las cartas y las manos blandas',
    h1: 'Lección 2: el valor de las cartas y las manos blandas',
    metaTitle: 'Valor de las cartas en blackjack y manos blandas · Curso',
    description: 'Cuánto vale cada carta en el blackjack, cómo funciona el as, qué es una mano blanda y qué es un blackjack. Lección 2 del curso gratis.',
    minutes: 4,
    summary: 'Figuras valen 10, el as 1 u 11. Una mano con un as que vale 11 es «blanda»: no te pasas con una carta.',
    body: `
<table><thead><tr><th>Carta</th><th>Valor</th></tr></thead><tbody>
<tr><td>2 a 9</td><td>Su número</td></tr><tr><td>10, J, Q, K</td><td>10</td></tr><tr><td>As</td><td>1 u 11, lo que más te convenga</td></tr></tbody></table>
<p>Los palos no importan. Como hay cuatro cartas que valen 10, <strong>casi un tercio de la baraja vale 10</strong> (16 de cada 52). Recuérdalo: explica muchas jugadas.</p>
<h2>El as y las manos blandas</h2>
<p>Una mano con un as que cuenta como 11 se llama <strong>blanda</strong> (o «suave»). A-6 es un <strong>17 blando</strong>: puede valer 7 o 17. La gracia es que <strong>no te puedes pasar pidiendo una carta</strong>: si sale un 10, el as pasa a valer 1 y tienes 17.</p>
<p>Cualquier otra mano es <strong>dura</strong>. 10-7 es un 17 duro: si pides, casi todo te pasa.</p>
<p>Una mano blanda puede volverse dura: A-6 (17 blando) + 9 = 16 duro, porque el as ya tiene que valer 1.</p>
<h2>El blackjack</h2>
<p>Un as más una carta de valor 10 en las dos primeras cartas es un <strong>blackjack</strong>. Es la mejor mano y gana a cualquier otro 21, incluido un 21 de tres cartas. Normalmente paga 3 a 2.</p>`,
    quiz: [
      { q: '¿Cuánto vale A-6?', options: ['Solo 7', 'Solo 17', '7 o 17 (17 blando)'], answer: 2, why: 'El as vale 1 u 11. Con 11 no te pasas, así que es un 17 blando.' },
      { q: 'Tienes A-6 y pides: sale un 10. ¿Qué tienes?', options: ['27, te pasas', '17 duro', '21'], answer: 1, why: 'El as pasa a valer 1: 1 + 6 + 10 = 17. Por eso con manos blandas no te pasas con una carta.' },
      { q: '¿Qué gana: un blackjack o un 21 de tres cartas?', options: ['El blackjack', 'El 21 de tres cartas', 'Empatan'], answer: 0, why: 'El blackjack (as + 10 en las dos primeras cartas) gana a cualquier otro 21.' },
    ],
  },
  {
    slug: 'como-se-juega-una-mano',
    title: 'Cómo se juega una mano, paso a paso',
    h1: 'Lección 3: cómo se juega una mano, paso a paso',
    metaTitle: 'Cómo se juega una mano de blackjack paso a paso · Curso',
    description: 'El desarrollo completo de una mano de blackjack: apuesta, reparto, carta oculta, turno del jugador y del crupier, y cómo se paga. Lección 3 del curso gratis.',
    minutes: 5,
    summary: 'Apuestas, recibes dos cartas, decides, y el crupier juega al final con su regla fija: pide hasta 16.',
    body: `
<ol>
<li><strong>Apuesta.</strong> Pones tu apuesta antes del reparto.</li>
<li><strong>Reparto.</strong> Recibes dos cartas boca arriba. El crupier recibe una carta visible.</li>
<li><strong>La carta oculta.</strong> Aquí hay dos versiones. En la <strong>americana</strong>, el crupier recibe una segunda carta boca abajo y, si enseña un as o un 10, mira si tiene blackjack antes de que juegues. En la <strong>europea</strong>, la de los casinos de España, no hay carta oculta: el crupier saca su segunda carta al final.</li>
<li><strong>Tu turno.</strong> Pides, te plantas, doblas, divides o te rindes. Puedes pedir tantas cartas como quieras.</li>
<li><strong>Turno del crupier.</strong> Pide con 16 o menos y se planta con 17 o más. En algunas mesas pide también con 17 blando («H17»).</li>
<li><strong>Pago.</strong> Se comparan los totales y se paga.</li>
</ol>
<h2>Por qué importa la carta oculta</h2>
<p>Sin carta oculta, el crupier todavía puede tener blackjack cuando tú doblas o divides, y si lo tiene te gana todo lo que tengas en la mesa. Por eso en España no se dobla 11 contra un 10. Lo verás en la <a href="/reglas-blackjack-casinos-espana/">guía de reglas de España</a>.</p>
<h2>La carta que importa: la visible del crupier</h2>
<p>Toda la estrategia se basa en dos cosas: <strong>tu total</strong> y <strong>la carta visible del crupier</strong>. La carta visible te dice cómo de probable es que el crupier se pase. Con un 5 o un 6 se pasa más del 40 % de las veces; con un 10, alrededor del 23 %.</p>`,
    quiz: [
      { q: '¿Cuándo pide carta el crupier?', options: ['Cuando cree que le conviene', 'Siempre que tenga 16 o menos', 'Solo si los jugadores tienen más que él'], answer: 1, why: 'El crupier no decide: pide con 16 o menos y se planta con 17 o más.' },
      { q: 'En un casino español, ¿tiene el crupier carta oculta?', options: ['Sí, y mira si tiene blackjack', 'No, saca su segunda carta al final', 'Depende del jugador'], answer: 1, why: 'En la versión europea no hay carta oculta: la segunda carta sale después de que juegues.' },
      { q: '¿Con qué carta visible se pasa más el crupier?', options: ['Con un 10', 'Con un as', 'Con un 5 o un 6'], answer: 2, why: 'Con 5 o 6 se pasa alrededor del 42 % de las veces; con 10, del 23 %.' },
    ],
  },
  {
    slug: 'pagos-y-seguro',
    title: 'Lo que paga y lo que roba: pagos y seguro',
    h1: 'Lección 4: lo que paga y lo que roba',
    metaTitle: 'Pagos del blackjack, 6 a 5 y el seguro · Curso de blackjack',
    description: 'Cuánto paga el blackjack, por qué las mesas 6 a 5 son una trampa, qué es el seguro y por qué no tomarlo nunca. Lección 4 del curso gratis de blackjack.',
    minutes: 4,
    summary: 'El blackjack debe pagar 3 a 2. Evita las mesas 6 a 5. Nunca tomes el seguro, tampoco el «even money».',
    body: `
<table><thead><tr><th>Resultado</th><th>Pago</th></tr></thead><tbody>
<tr><td>Ganas</td><td>1 a 1</td></tr><tr><td>Blackjack</td><td>3 a 2 (10 € ganan 15 €)</td></tr><tr><td>Empate</td><td>Recuperas la apuesta</td></tr></tbody></table>
<h2>La trampa del 6 a 5</h2>
<p>Algunas mesas pagan el blackjack solo 6 a 5 (10 € ganan 12 €). Parece poco, pero sube la ventaja de la casa en unos <strong>1,4 puntos</strong>: multiplica por cuatro lo que pierdes jugando perfecto. Es la peor regla que existe. Si ves «Blackjack pays 6 to 5» en el tapete, busca otra mesa.</p>
<h2>El seguro</h2>
<p>Cuando el crupier enseña un as, te ofrecen <strong>seguro</strong>: una apuesta aparte, de hasta media apuesta, a que tiene un 10 debajo. Paga 2 a 1. Para no perder dinero con esa apuesta haría falta que el crupier tuviera un 10 más de un tercio de las veces, y solo lo tiene alrededor del <strong>31 %</strong>. La casa gana cerca de un 7 % en esa apuesta.</p>
<h2>Even money</h2>
<p>Si tienes blackjack y el crupier enseña un as, te ofrecen «even money»: cobrar 1 a 1 en el momento. Es exactamente lo mismo que tomar el seguro con tu blackjack. Rechazarlo vale de media 1,04 apuestas; aceptarlo, 1. Regalas un 4 %.</p>`,
    quiz: [
      { q: '¿Cuánto debe pagar un blackjack?', options: ['1 a 1', '6 a 5', '3 a 2'], answer: 2, why: '3 a 2 es el pago estándar. 6 a 5 sube la ventaja de la casa unos 1,4 puntos.' },
      { q: 'El crupier enseña un as y te ofrecen seguro. ¿Qué haces?', options: ['Lo tomo si tengo buena mano', 'No lo tomo nunca', 'Lo tomo siempre'], answer: 1, why: 'El seguro es una apuesta aparte con cerca de un 7 % de ventaja para la casa, tengas la mano que tengas.' },
      { q: 'Tienes blackjack y el crupier enseña un as. ¿Aceptas «even money»?', options: ['Sí, es dinero seguro', 'No', 'Solo si juego con pocas barajas'], answer: 1, why: 'Aceptarlo vale 1 apuesta; rechazarlo, 1,04 de media. Es un seguro disfrazado.' },
    ],
  },
  {
    slug: 'pedir-o-plantarse',
    title: 'Pedir o plantarse con 12 a 16',
    h1: 'Lección 5: pedir o plantarse con manos duras',
    metaTitle: 'Cuándo pedir o plantarse en blackjack (12 a 16) · Curso',
    description: 'Cuándo pedir carta y cuándo plantarse en el blackjack con manos duras de 12 a 16, según la carta del crupier. La excepción del 12. Lección 5 del curso gratis.',
    minutes: 5,
    summary: 'Con 12–16: plántate contra 2–6 (salvo 12 contra 2 o 3) y pide contra 7 o más. Con 17 o más, plántate siempre.',
    body: `
<p>Las manos de 12 a 16 son las más incómodas: te puedes pasar si pides, pero son demasiado bajas para ganar si te plantas. La respuesta depende de la carta visible del crupier.</p>
<h2>Contra 2 a 6: plántate</h2>
<p>El crupier con una carta baja tiene que pedir, y a menudo se pasa: alrededor del 40 % de las veces con 4, 5 o 6. No arriesgues: plántate y deja que se pase él.</p>
<h2>Contra 7 o más: pide</h2>
<p>Con un 7, 8, 9, 10 o as, el crupier termina con 17 o más la mayoría de las veces. Tu 12–16 pierde si te plantas, así que <strong>pides aunque te puedas pasar</strong>. Es la regla que más cuesta aceptar, y la más importante. El ejemplo clásico es <a href="/16-contra-10-blackjack/">16 contra 10</a>.</p>
<h2>La excepción del 12</h2>
<p><strong>12 contra 2 o 3 se pide.</strong> Con 12 solo te pasas con un 10, y el crupier con un 2 o un 3 se pasa menos que con 4–6. Es la casilla que más gente falla.</p>
<h2>El resumen de las duras</h2>
<table><thead><tr><th>Tu total</th><th>Contra 2–3</th><th>Contra 4–6</th><th>Contra 7–A</th></tr></thead><tbody>
<tr><td>8 o menos</td><td>Pide</td><td>Pide</td><td>Pide</td></tr>
<tr><td>12</td><td>Pide</td><td>Plántate</td><td>Pide</td></tr>
<tr><td>13–16</td><td>Plántate</td><td>Plántate</td><td>Pide*</td></tr>
<tr><td>17+</td><td>Plántate</td><td>Plántate</td><td>Plántate</td></tr></tbody></table>
<p class="muted small">* Si hay rendición: 16 contra 9, 10 o as y 15 contra 10 se rinden (lección 9). Las manos de 9 a 11 se doblan (lección 6).</p>`,
    quiz: [
      { q: 'Tienes 15 y el crupier enseña un 6. ¿Qué haces?', options: ['Pedir', 'Plantarte', 'Doblar'], answer: 1, why: 'Contra 2–6 te plantas con 13–16: el crupier con un 6 se pasa alrededor del 42 % de las veces.' },
      { q: 'Tienes 14 y el crupier enseña un 9. ¿Qué haces?', options: ['Pedir', 'Plantarte'], answer: 0, why: 'Contra 7 o más, con 12–16 se pide: plantarte pierde más.' },
      { q: 'Tienes 12 y el crupier enseña un 3. ¿Qué haces?', options: ['Plantarte', 'Pedir'], answer: 1, why: 'Es la excepción: 12 contra 2 o 3 se pide.' },
    ],
  },
  {
    slug: 'doblar',
    title: 'Doblar: apostar más cuando vas ganando',
    h1: 'Lección 6: doblar con 9, 10 y 11',
    metaTitle: 'Cuándo doblar en blackjack con 9, 10 y 11 · Curso',
    description: 'Qué es doblar en el blackjack y cuándo hacerlo con 9, 10 y 11, con las diferencias de los casinos de España. Lección 6 del curso gratis de blackjack.',
    minutes: 4,
    summary: 'Dobla 11 contra todo menos el as, 10 contra 2–9 y 9 contra 3–6. En mesa europea, no dobles contra 10 ni as.',
    body: `
<p><strong>Doblar</strong> es duplicar tu apuesta a cambio de recibir <strong>una sola carta más</strong>. Se hace cuando ya vas por delante: tu total es bueno y el crupier está débil. No te hace ganar más veces, pero cuando ganas cobras el doble.</p>
<h2>Las tres reglas</h2>
<ul>
<li><strong>11:</strong> dobla contra cualquier carta salvo el as. Cualquier 10 (casi un tercio de la baraja) te da 21.</li>
<li><strong>10:</strong> dobla contra 2 a 9.</li>
<li><strong>9:</strong> dobla contra 3 a 6.</li>
</ul>
<p>Con 11 contra un 6, pedir vale de media +0,34 apuestas y doblar +0,68. Esa es la diferencia entre jugar bien y jugar muy bien.</p>
<h2>En la mesa europea</h2>
<p>Sin carta oculta, el crupier todavía puede tener blackjack. Si doblas y lo tiene, pierdes el doble. Por eso en los casinos de España <strong>11 contra 10 o as se pide</strong>, no se dobla. Además, en España solo se puede doblar con 9, 10 u 11.</p>
<p>Todos los casos, con los números de cada uno, en <a href="/cuando-doblar-blackjack/">cuándo doblar</a>.</p>`,
    quiz: [
      { q: 'Tienes 11 y el crupier enseña un 7 (mesa de Las Vegas). ¿Qué haces?', options: ['Pedir', 'Doblar', 'Plantarte'], answer: 1, why: '11 se dobla contra todo salvo el as.' },
      { q: 'Tienes 9 y el crupier enseña un 2. ¿Qué haces?', options: ['Doblar', 'Pedir'], answer: 1, why: '9 solo se dobla contra 3–6 (con 6 u 8 barajas).' },
      { q: 'Casino en España: tienes 11 y el crupier enseña un 10. ¿Qué haces?', options: ['Doblar', 'Pedir'], answer: 1, why: 'Sin carta oculta el crupier puede tener blackjack y perderías el doble: se pide.' },
    ],
  },
  {
    slug: 'manos-blandas',
    title: 'Manos blandas: el as que no te deja pasarte',
    h1: 'Lección 7: cómo jugar las manos blandas',
    metaTitle: 'Cómo jugar las manos blandas en blackjack (A-2 a A-9) · Curso',
    description: 'Cómo jugar las manos blandas en el blackjack, de A-2 a A-9: cuándo pedir, doblar o plantarse, y por qué 18 blando no es tan bueno. Lección 7 del curso gratis.',
    minutes: 5,
    summary: 'A-2 a A-6: nunca te plantes. A-7: plántate contra 2, 7 y 8, pide contra 9, 10 y as. A-8 y A-9: plántate.',
    body: `
<p>Una mano blanda no se puede pasar con una carta, así que se juega de forma mucho más agresiva que una dura.</p>
<h2>A-2 a A-6: nunca te plantes</h2>
<p>Son 13 a 17 blandos: totales flojos que no puedes empeorar pidiendo una carta. <strong>Pide siempre</strong>, y si la mesa deja doblar cualquier mano, dobla contra las cartas débiles del crupier (A-2 y A-3 contra 5–6, A-4 y A-5 contra 4–6, A-6 contra 3–6).</p>
<h2>A-7: el 18 blando que no es tan bueno</h2>
<ul>
<li>Contra <strong>2, 7 u 8</strong>: plántate.</li>
<li>Contra <strong>3 a 6</strong>: dobla si puedes; si no, plántate.</li>
<li>Contra <strong>9, 10 o as</strong>: <strong>pide</strong>. Un 18 contra esas cartas pierde más de lo que gana.</li>
</ul>
<p>A-7 contra 9 es el error más común entre jugadores con experiencia: plantarse vale −0,18 apuestas de media y pedir −0,10.</p>
<h2>A-8 y A-9: plántate</h2>
<p>19 y 20 blandos son manos ganadoras. No las toques.</p>
<h2>En España</h2>
<p>Como solo se dobla con 9–11, las dobladas blandas desaparecen: A-2 a A-6 se piden y A-7 contra 3–6 se planta.</p>`,
    quiz: [
      { q: 'Tienes A-5 y el crupier enseña un 10. ¿Qué haces?', options: ['Plantarte', 'Pedir'], answer: 1, why: 'A-5 es 16 blando: no te pasas con una carta y el total es flojo. Pide.' },
      { q: 'Tienes A-7 y el crupier enseña un 9. ¿Qué haces?', options: ['Plantarte', 'Pedir'], answer: 1, why: '18 blando contra 9, 10 o as se pide: plantarse pierde más.' },
      { q: 'Tienes A-8 y el crupier enseña un 10. ¿Qué haces?', options: ['Plantarte', 'Pedir', 'Doblar'], answer: 0, why: '19 blando es una mano ganadora: plántate.' },
    ],
  },
  {
    slug: 'parejas',
    title: 'Parejas: cuándo dividir',
    h1: 'Lección 8: cuándo dividir las parejas',
    metaTitle: 'Cuándo dividir parejas en blackjack · Curso de blackjack',
    description: 'Qué parejas dividir en el blackjack: siempre ases y ochos, nunca dieces ni cincos, y el resto según la carta del crupier. Lección 8 del curso gratis.',
    minutes: 4,
    summary: 'Divide siempre ases y ochos; nunca dieces ni cincos. El resto, sobre todo contra 2–6.',
    body: `
<h2>Siempre: ases y ochos</h2>
<p>Dos ases valen 2 o 12; separados, cada uno puede hacer 21. Dos ochos valen 16, la peor mano; separados, cada uno empieza en 8. En mesa europea sin carta oculta hay excepciones: no dividas ases contra un as ni ochos contra 10 o as.</p>
<h2>Nunca: dieces y cincos</h2>
<p>Un 20 es casi imbatible: no lo rompas. Dos cincos son un 10, perfecto para doblar.</p>
<h2>El resto: contra cartas débiles</h2>
<table><thead><tr><th>Pareja</th><th>Divide contra</th></tr></thead><tbody>
<tr><td>2-2, 3-3</td><td>2 a 7</td></tr><tr><td>4-4</td><td>5 y 6 (si puedes doblar tras dividir)</td></tr>
<tr><td>6-6</td><td>2 a 6</td></tr><tr><td>7-7</td><td>2 a 7</td></tr><tr><td>9-9</td><td>2 a 6, 8 y 9 (no contra 7, 10 ni as)</td></tr></tbody></table>
<p>9-9 contra 7 se planta: el crupier con un 7 acaba muchas veces en 17, y tu 18 le gana. Más detalle y números en <a href="/cuando-dividir-blackjack/">cuándo dividir</a>.</p>`,
    quiz: [
      { q: 'Tienes 8-8 y el crupier enseña un 10 (mesa de Las Vegas). ¿Qué haces?', options: ['Plantarte con 16', 'Dividir', 'Pedir'], answer: 1, why: 'Con carta oculta, ochos se dividen siempre: dos manos de 8 pierden menos que un 16.' },
      { q: 'Tienes 10-10 y el crupier enseña un 6. ¿Qué haces?', options: ['Dividir, el crupier está débil', 'Plantarte'], answer: 1, why: 'Nunca dividas dieces: plantarte con 20 vale +0,70 apuestas, dividir +0,57.' },
      { q: 'Tienes 9-9 y el crupier enseña un 7. ¿Qué haces?', options: ['Dividir', 'Plantarte'], answer: 1, why: 'Tu 18 gana al 17 que suele hacer el crupier con un 7: plántate.' },
    ],
  },
  {
    slug: 'rendirse-y-elegir-mesa',
    title: 'Rendirse y elegir bien la mesa',
    h1: 'Lección 9: rendirse y elegir la mesa',
    metaTitle: 'Rendirse en blackjack y cómo elegir mesa · Curso de blackjack',
    description: 'Cuándo rendirse en el blackjack (surrender) y cómo elegir una mesa con buenas reglas: 3 a 2, S17, doblar tras dividir, número de barajas. Lección 9 del curso gratis.',
    minutes: 4,
    summary: 'Ríndete con 16 contra 9, 10 o as y 15 contra 10, si se puede. Y elige mesas 3 a 2, S17 y con doblar tras dividir.',
    body: `
<h2>Rendirse no es de cobardes</h2>
<p>Algunas mesas te dejan <strong>rendirte</strong> justo después del reparto: abandonas la mano y recuperas media apuesta. Solo compensa cuando una mano pierde más de la mitad de las veces. Con reglas de Las Vegas eso pasa con <strong>16 contra 9, 10 o as</strong> y <strong>15 contra 10</strong>. Si la mesa no ofrece rendición, esas manos se piden.</p>
<h2>La decisión más cara se toma antes de sentarse</h2>
<p>Las reglas de la mesa cambian la ventaja de la casa más que muchos errores. Busca:</p>
<ul>
<li><strong>Blackjack pagado 3 a 2</strong>, nunca 6 a 5 (+1,4 puntos para la casa).</li>
<li><strong>El crupier se planta con 17 blando</strong> (S17). Si pide (H17), +0,2 puntos.</li>
<li><strong>Doblar tras dividir</strong> permitido.</li>
<li><strong>Rendición</strong>, si la hay.</li>
<li><strong>Menos barajas</strong>, mejor, aunque importa menos que lo anterior.</li>
</ul>
<p>Lo tienes todo cuantificado en <a href="/datos/ventaja-casa-reglas-blackjack/">cuánto cuesta cada regla</a>.</p>`,
    quiz: [
      { q: 'Tienes 16 y el crupier enseña un 10, y la mesa permite rendirse. ¿Qué haces?', options: ['Rendirme', 'Pedir', 'Plantarme'], answer: 0, why: 'Con rendición, 16 contra 10 se rinde: recuperas media apuesta en una mano que pierde más de la mitad de las veces.' },
      { q: '¿Qué regla es peor para ti?', options: ['El crupier pide con 17 blando', 'El blackjack paga 6 a 5', '8 barajas en vez de 6'], answer: 1, why: '6 a 5 sube la ventaja de la casa unos 1,4 puntos; H17, unos 0,2; 8 barajas, unos 0,02.' },
      { q: 'La mesa no ofrece rendición. Tienes 15 contra 10. ¿Qué haces?', options: ['Plantarme', 'Pedir'], answer: 1, why: 'Sin rendición, esas manos se piden.' },
    ],
  },
  {
    slug: 'conteo-sin-mitos',
    title: 'El conteo de cartas, sin mitos',
    h1: 'Lección 10: el conteo de cartas, sin mitos',
    metaTitle: 'El conteo de cartas sin mitos · Curso de blackjack',
    description: 'Última lección del curso gratis de blackjack: qué es contar cartas con el sistema Hi-Lo, qué ventaja da de verdad y dónde no funciona.',
    minutes: 5,
    summary: 'Hi-Lo: 2–6 suman 1, 7–9 nada, 10 y as restan 1. Es legal, pero la ventaja es pequeña y online no funciona.',
    body: `
<p>Contar cartas es llevar la cuenta de las cartas que han salido para saber cuándo quedan muchas cartas altas, que favorecen al jugador: más blackjacks, mejores dobladas y un crupier que se pasa más.</p>
<h2>El sistema Hi-Lo</h2>
<table><thead><tr><th>Cartas</th><th>Valor</th></tr></thead><tbody>
<tr><td>2 a 6</td><td>+1</td></tr><tr><td>7 a 9</td><td>0</td></tr><tr><td>10, figuras y as</td><td>−1</td></tr></tbody></table>
<p>La suma es la <strong>cuenta corriente</strong>. Dividida entre las barajas que quedan da la <strong>cuenta verdadera</strong>. Cuanto más alta, más apuestas.</p>
<h2>La verdad sobre la ventaja</h2>
<p>Un contador disciplinado, con buenas reglas, consigue del orden de un 0,5–1 % sobre lo que apuesta, con una variación enorme y un bankroll grande detrás. Los casinos barajan antes o te piden que dejes de jugar si te detectan. No es un plan de negocio.</p>
<h2>Dónde no funciona</h2>
<ul>
<li><strong>Online con generador aleatorio:</strong> se baraja cada mano.</li>
<li><strong>Máquinas de barajado continuo:</strong> las cartas vuelven a la baraja tras cada mano.</li>
</ul>
<p>Contar de memoria es legal; usar cualquier dispositivo en la mesa, no. Para practicar, tienes ejercicios en <a href="/practicar-contar-cartas/">cómo practicar el conteo</a>.</p>
<h2>Enhorabuena</h2>
<p>Has terminado el curso. Ya sabes más que la mayoría de la gente que se sienta en una mesa. Lo que falta es convertirlo en reflejo: decidir bien en dos segundos, mano tras mano. Eso solo se consigue practicando.</p>`,
    quiz: [
      { q: '¿Cuánto vale un 5 en el Hi-Lo?', options: ['+1', '0', '−1'], answer: 0, why: 'Del 2 al 6, +1.' },
      { q: 'Cuenta corriente +6 y quedan 3 barajas. ¿Cuenta verdadera?', options: ['+6', '+2', '+18'], answer: 1, why: '6 ÷ 3 = +2.' },
      { q: '¿Sirve contar cartas en el blackjack online normal?', options: ['Sí, igual que en el casino', 'No, se baraja cada mano'], answer: 1, why: 'El software baraja después de cada mano: no hay nada que contar.' },
    ],
  },
];

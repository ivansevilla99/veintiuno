// English edition of the free course (src/lib/course.ts). Same lessons, same facts, same
// quiz answers; adapted for readers whose reference is Las Vegas rules. Index i here is
// the same lesson as index i in the Spanish course (used for hreflang pairing).
import type { Lesson } from './course';

export const lessonsEn: Lesson[] = [
  {
    slug: 'what-is-blackjack',
    title: 'What blackjack is and how you win',
    h1: 'Lesson 1: what blackjack is and how you win',
    metaTitle: 'What Is Blackjack and How Do You Win? · Blackjack Course',
    description: 'Lesson 1 of the free blackjack course: what the game is, who you play against and how you win a hand. With a short quiz at the end.',
    minutes: 4,
    summary: 'You play against the dealer, not the table. You win by finishing closer to 21 than the dealer without going over.',
    body: `
<p>Blackjack is the most popular card game in casinos. It’s the casino version of the classic game of 21, with one important difference: <strong>you don’t play against the other players, you play against the dealer</strong>. What anyone else at the table does has no effect on your result.</p>
<h2>The real goal</h2>
<p>Many people think the goal is to reach 21. It isn’t. The goal is to <strong>beat the dealer</strong>, and there are two ways to do it:</p>
<ul>
<li>Finish with a higher total than the dealer without going over 21.</li>
<li>Stay at 21 or under while the dealer busts.</li>
</ul>
<p>If you both finish on the same total, it’s a <strong>push</strong>: you get your bet back.</p>
<h2>The rule that explains everything</h2>
<p>If you go over 21, you lose on the spot — even if the dealer busts afterwards. Because <strong>you always act before the dealer</strong>, that rule is where the house edge comes from. Everything in this course is about clawing back as much of it as possible.</p>
<h2>The dealer doesn’t think</h2>
<p>The dealer makes no decisions: they follow a fixed rule. They hit on 16 or less and stand on 17 or more. You, on the other hand, can hit, stand, double, split or surrender. That freedom is your weapon, and basic strategy is the right way to use it.</p>`,
    quiz: [
      { q: 'Who do you play against in blackjack?', options: ['The other players', 'The dealer', 'The casino and the players'], answer: 1, why: 'Only the dealer. What other players do doesn’t change your result.' },
      { q: 'You have 18 and the dealer has 20. What happens?', options: ['You win, nobody busted', 'Push', 'You lose'], answer: 2, why: 'Whoever is closer to 21 without going over wins: the dealer, with 20.' },
      { q: 'You bust with 23, then the dealer busts with 24. What happens?', options: ['Push', 'You lose', 'You win'], answer: 1, why: 'If you bust you lose right away. That’s where the house edge comes from.' },
    ],
  },
  {
    slug: 'card-values-and-soft-hands',
    title: 'Card values and soft hands',
    h1: 'Lesson 2: card values and soft hands',
    metaTitle: 'Blackjack Card Values and Soft Hands · Blackjack Course',
    description: 'What each card is worth in blackjack, how the ace works, what a soft hand is and what counts as a blackjack. Lesson 2 of the free course.',
    minutes: 4,
    summary: 'Face cards are worth 10, aces 1 or 11. A hand with an ace counted as 11 is “soft”: one card can’t bust it.',
    body: `
<table><thead><tr><th>Card</th><th>Value</th></tr></thead><tbody>
<tr><td>2 to 9</td><td>Face value</td></tr><tr><td>10, J, Q, K</td><td>10</td></tr><tr><td>Ace</td><td>1 or 11, whichever helps you</td></tr></tbody></table>
<p>Suits don’t matter. With four ten-value ranks, <strong>almost a third of the deck is worth 10</strong> (16 out of 52). Remember that: it explains a lot of plays.</p>
<h2>The ace and soft hands</h2>
<p>A hand with an ace counted as 11 is called <strong>soft</strong>. Ace-6 is <strong>soft 17</strong>: it can be 7 or 17. The key point is that <strong>you can’t bust by taking one card</strong>: if a ten comes, the ace drops to 1 and you have 17.</p>
<p>Any other hand is <strong>hard</strong>. 10-7 is hard 17: hit it and almost anything busts you.</p>
<p>A soft hand can turn hard: ace-6 (soft 17) plus a 9 is hard 16, because the ace now has to count as 1.</p>
<h2>Blackjack</h2>
<p>An ace plus a ten-value card as your first two cards is a <strong>blackjack</strong>. It’s the best hand and beats any other 21, including a three-card 21. It normally pays 3 to 2.</p>`,
    quiz: [
      { q: 'What is ace-6 worth?', options: ['Only 7', 'Only 17', '7 or 17 (soft 17)'], answer: 2, why: 'The ace is 1 or 11. Counted as 11 it doesn’t bust you, so it’s soft 17.' },
      { q: 'You have ace-6 and hit: a 10 comes. What do you have?', options: ['27, bust', 'Hard 17', '21'], answer: 1, why: 'The ace drops to 1: 1 + 6 + 10 = 17. That’s why one card can’t bust a soft hand.' },
      { q: 'Which wins: a blackjack or a three-card 21?', options: ['The blackjack', 'The three-card 21', 'It’s a push'], answer: 0, why: 'A blackjack (ace + ten in the first two cards) beats any other 21.' },
    ],
  },
  {
    slug: 'how-a-hand-plays-out',
    title: 'How a hand plays out, step by step',
    h1: 'Lesson 3: how a hand plays out, step by step',
    metaTitle: 'How a Blackjack Hand Plays Out, Step by Step · Course',
    description: 'A full hand of blackjack from start to finish: the bet, the deal, the hole card, the player’s turn, the dealer’s turn and the payout. Lesson 3 of the free course.',
    minutes: 5,
    summary: 'You bet, get two cards, make your decisions, and the dealer plays last by a fixed rule: hit to 16.',
    body: `
<ol>
<li><strong>Bet.</strong> You place your bet before the deal.</li>
<li><strong>Deal.</strong> You get two cards face up. The dealer gets one card face up.</li>
<li><strong>The hole card.</strong> There are two versions. In the <strong>American</strong> game the dealer takes a second card face down and, if showing an ace or a ten, checks it for blackjack before you play. In the <strong>European</strong> game (Spain and many online tables) there’s no hole card: the dealer draws the second card at the end.</li>
<li><strong>Your turn.</strong> Hit, stand, double, split or surrender. You can take as many cards as you like.</li>
<li><strong>Dealer’s turn.</strong> The dealer hits on 16 or less and stands on 17 or more. At some tables the dealer also hits soft 17 (“H17”).</li>
<li><strong>Payout.</strong> Totals are compared and bets are paid.</li>
</ol>
<h2>Why the hole card matters</h2>
<p>With no hole card, the dealer can still have blackjack when you double or split, and if they do, they take everything you have on the table. That’s why at European tables you don’t double 11 against a 10. More in <a href="/en/blackjack-rules-in-spain/">blackjack rules in Spain</a>.</p>
<h2>The card that matters: the dealer’s upcard</h2>
<p>All of strategy rests on two things: <strong>your total</strong> and <strong>the dealer’s upcard</strong>. The upcard tells you how likely the dealer is to bust. With a 5 or a 6 showing, they bust over 40% of the time; with a 10, about 23%.</p>`,
    quiz: [
      { q: 'When does the dealer take a card?', options: ['Whenever they think it helps', 'Always on 16 or less', 'Only if players have more'], answer: 1, why: 'The dealer doesn’t decide: they hit on 16 or less and stand on 17 or more.' },
      { q: 'At a European (no hole card) table, does the dealer check for blackjack first?', options: ['Yes, before you play', 'No, the second card comes at the end', 'It depends on the player'], answer: 1, why: 'In the European game there’s no hole card: the dealer’s second card comes after you play.' },
      { q: 'Which upcard makes the dealer bust most often?', options: ['A 10', 'An ace', 'A 5 or a 6'], answer: 2, why: 'With a 5 or 6 the dealer busts about 42% of the time; with a 10, about 23%.' },
    ],
  },
  {
    slug: 'payouts-and-insurance',
    title: 'What pays and what robs you: payouts and insurance',
    h1: 'Lesson 4: what pays and what robs you',
    metaTitle: 'Blackjack Payouts, 6:5 and Insurance · Blackjack Course',
    description: 'What blackjack pays, why 6:5 tables are a trap, what insurance is and why you should never take it — or even money. Lesson 4 of the free blackjack course.',
    minutes: 4,
    summary: 'Blackjack should pay 3 to 2. Avoid 6:5 tables. Never take insurance — or even money.',
    body: `
<table><thead><tr><th>Result</th><th>Pays</th></tr></thead><tbody>
<tr><td>Win</td><td>1 to 1</td></tr><tr><td>Blackjack</td><td>3 to 2 ($10 wins $15)</td></tr><tr><td>Push</td><td>Bet returned</td></tr></tbody></table>
<h2>The 6:5 trap</h2>
<p>Some tables pay blackjack only 6 to 5 ($10 wins $12). It doesn’t sound like much, but it adds about <strong>1.4 percentage points</strong> to the house edge — roughly four times what you lose playing perfectly. It’s the worst rule there is. If the felt says “Blackjack pays 6 to 5”, find another table.</p>
<h2>Insurance</h2>
<p>When the dealer shows an ace you’ll be offered <strong>insurance</strong>: a side bet, up to half your wager, that the dealer has a ten underneath. It pays 2 to 1. To break even it would need the dealer to have a ten more than a third of the time, and they only do about <strong>31%</strong> of the time. The house wins around 7% on that bet.</p>
<h2>Even money</h2>
<p>If you have blackjack and the dealer shows an ace, you’ll be offered “even money”: take 1 to 1 right now. It’s exactly the same as insuring your blackjack. Turning it down is worth 1.04 bets on average; taking it, exactly 1. You give away 4%.</p>`,
    quiz: [
      { q: 'What should a blackjack pay?', options: ['1 to 1', '6 to 5', '3 to 2'], answer: 2, why: '3 to 2 is standard. 6 to 5 adds about 1.4 points to the house edge.' },
      { q: 'The dealer shows an ace and offers insurance. What do you do?', options: ['Take it with a good hand', 'Never take it', 'Always take it'], answer: 1, why: 'Insurance is a separate bet with about a 7% house edge, whatever your hand.' },
      { q: 'You have blackjack and the dealer shows an ace. Take even money?', options: ['Yes, it’s guaranteed money', 'No', 'Only with few decks'], answer: 1, why: 'Taking it is worth 1 bet; declining, 1.04 on average. It’s insurance in disguise.' },
    ],
  },
  {
    slug: 'hit-or-stand',
    title: 'Hit or stand with 12 to 16',
    h1: 'Lesson 5: hit or stand with hard hands',
    metaTitle: 'When to Hit or Stand in Blackjack (12 to 16) · Course',
    description: 'When to hit and when to stand in blackjack with hard 12 to 16, depending on the dealer’s upcard, plus the 12 exception. Lesson 5 of the free course.',
    minutes: 5,
    summary: 'With 12–16: stand against 2–6 (except 12 against 2 or 3) and hit against 7 or higher. With 17 or more, always stand.',
    body: `
<p>Hands from 12 to 16 are the awkward ones: you can bust if you hit, but they’re too low to win if you stand. The answer depends on the dealer’s upcard.</p>
<h2>Against 2 to 6: stand</h2>
<p>A dealer with a low card has to draw, and busts often: about 40% of the time with a 4, 5 or 6. Don’t take the risk: stand and let the dealer bust.</p>
<h2>Against 7 or higher: hit</h2>
<p>With a 7, 8, 9, 10 or ace showing, the dealer finishes on 17 or more most of the time. Your 12–16 loses if you stand, so you <strong>hit even though you might bust</strong>. It’s the hardest rule to accept, and the most important. The classic example is <a href="/en/16-vs-10-blackjack/">16 vs 10</a>.</p>
<h2>The 12 exception</h2>
<p><strong>Hit 12 against a 2 or 3.</strong> With 12 only a ten busts you, and a dealer showing 2 or 3 busts less often than with 4–6. It’s the cell people miss most.</p>
<h2>Hard hands at a glance</h2>
<table><thead><tr><th>Your total</th><th>vs 2–3</th><th>vs 4–6</th><th>vs 7–A</th></tr></thead><tbody>
<tr><td>8 or less</td><td>Hit</td><td>Hit</td><td>Hit</td></tr>
<tr><td>12</td><td>Hit</td><td>Stand</td><td>Hit</td></tr>
<tr><td>13–16</td><td>Stand</td><td>Stand</td><td>Hit*</td></tr>
<tr><td>17+</td><td>Stand</td><td>Stand</td><td>Stand</td></tr></tbody></table>
<p class="muted small">* With surrender: surrender 16 against 9, 10 or ace and 15 against 10 (lesson 9). Totals of 9 to 11 are doubled (lesson 6).</p>`,
    quiz: [
      { q: 'You have 15 and the dealer shows a 6. What do you do?', options: ['Hit', 'Stand', 'Double'], answer: 1, why: 'Against 2–6 you stand on 13–16: a dealer showing 6 busts about 42% of the time.' },
      { q: 'You have 14 and the dealer shows a 9. What do you do?', options: ['Hit', 'Stand'], answer: 0, why: 'Against 7 or higher, hit 12–16: standing loses more.' },
      { q: 'You have 12 and the dealer shows a 3. What do you do?', options: ['Stand', 'Hit'], answer: 1, why: 'That’s the exception: hit 12 against 2 or 3.' },
    ],
  },
  {
    slug: 'doubling-down',
    title: 'Doubling down: bet more when you’re ahead',
    h1: 'Lesson 6: doubling down on 9, 10 and 11',
    metaTitle: 'When to Double Down on 9, 10 and 11 · Blackjack Course',
    description: 'What doubling down is in blackjack and when to do it with 9, 10 and 11, including what changes at European tables. Lesson 6 of the free blackjack course.',
    minutes: 4,
    summary: 'Double 11 against everything but an ace, 10 against 2–9 and 9 against 3–6. At no-hole-card tables, don’t double against a 10 or ace.',
    body: `
<p><strong>Doubling down</strong> means doubling your bet in exchange for <strong>exactly one more card</strong>. You do it when you’re already ahead: your total is strong and the dealer is weak. It doesn’t make you win more often, but when you win, you collect twice.</p>
<h2>The three rules</h2>
<ul>
<li><strong>11:</strong> double against any card except an ace. Any ten — almost a third of the deck — gives you 21. (If the dealer hits soft 17, double against the ace too.)</li>
<li><strong>10:</strong> double against 2 through 9.</li>
<li><strong>9:</strong> double against 3 through 6.</li>
</ul>
<p>With 11 against a 6, hitting is worth +0.34 bets on average and doubling +0.68. That’s the difference between playing well and playing very well.</p>
<h2>At European tables</h2>
<p>With no hole card, the dealer may still have blackjack. If you double and they have it, you lose twice as much. That’s why at no-hole-card tables <strong>11 against a 10 or ace is a hit</strong>, not a double. In Spanish casinos you can also only double on 9, 10 or 11.</p>
<p>Every case, with the numbers, in <a href="/en/when-to-double-down/">when to double down</a>.</p>`,
    quiz: [
      { q: 'You have 11 and the dealer shows a 7 (Las Vegas table). What do you do?', options: ['Hit', 'Double', 'Stand'], answer: 1, why: 'Double 11 against everything except an ace.' },
      { q: 'You have 9 and the dealer shows a 2. What do you do?', options: ['Double', 'Hit'], answer: 1, why: 'Double 9 only against 3–6 (with 6 or 8 decks).' },
      { q: 'No-hole-card table: you have 11 and the dealer shows a 10. What do you do?', options: ['Double', 'Hit'], answer: 1, why: 'The dealer may still have blackjack and you’d lose double: hit.' },
    ],
  },
  {
    slug: 'soft-hands',
    title: 'Soft hands: the ace that keeps you safe',
    h1: 'Lesson 7: how to play soft hands',
    metaTitle: 'How to Play Soft Hands in Blackjack (A-2 to A-9) · Course',
    description: 'How to play soft hands in blackjack, from A-2 to A-9: when to hit, double or stand, and why soft 18 isn’t as good as it looks. Lesson 7 of the free course.',
    minutes: 5,
    summary: 'A-2 to A-6: never stand. A-7: stand against 2, 7 and 8, hit against 9, 10 and ace. A-8 and A-9: stand.',
    body: `
<p>One card can’t bust a soft hand, so soft hands are played much more aggressively than hard ones.</p>
<h2>A-2 to A-6: never stand</h2>
<p>These are soft 13 to 17: weak totals that one card can’t make worse. <strong>Always hit</strong>, and where you can double any two cards, double against the dealer’s weak cards (A-2 and A-3 against 5–6, A-4 and A-5 against 4–6, A-6 against 3–6).</p>
<h2>A-7: the soft 18 that isn’t that good</h2>
<ul>
<li>Against <strong>2, 7 or 8</strong>: stand.</li>
<li>Against <strong>3 to 6</strong>: double if allowed; otherwise stand.</li>
<li>Against <strong>9, 10 or ace</strong>: <strong>hit</strong>. 18 loses more than it wins against those cards.</li>
</ul>
<p>A-7 against a 9 is the classic mistake of experienced players: standing is worth −0.18 bets on average and hitting −0.10.</p>
<h2>A-8 and A-9: stand</h2>
<p>Soft 19 and 20 are winning hands. Leave them alone.</p>
<h2>In Spanish casinos</h2>
<p>You can only double on 9–11, so soft doubles disappear: hit A-2 through A-6, and stand on A-7 against 3–6.</p>`,
    quiz: [
      { q: 'You have A-5 and the dealer shows a 10. What do you do?', options: ['Stand', 'Hit'], answer: 1, why: 'A-5 is soft 16: one card can’t bust you and the total is weak. Hit.' },
      { q: 'You have A-7 and the dealer shows a 9. What do you do?', options: ['Stand', 'Hit'], answer: 1, why: 'Soft 18 against 9, 10 or ace is a hit: standing loses more.' },
      { q: 'You have A-8 and the dealer shows a 10. What do you do?', options: ['Stand', 'Hit', 'Double'], answer: 0, why: 'Soft 19 is a winning hand: stand.' },
    ],
  },
  {
    slug: 'splitting-pairs',
    title: 'Pairs: when to split',
    h1: 'Lesson 8: when to split pairs',
    metaTitle: 'When to Split Pairs in Blackjack · Blackjack Course',
    description: 'Which pairs to split in blackjack: always aces and eights, never tens or fives, and the rest depending on the dealer’s upcard. Lesson 8 of the free course.',
    minutes: 4,
    summary: 'Always split aces and eights; never tens or fives. The rest mostly against 2–6.',
    body: `
<h2>Always: aces and eights</h2>
<p>Two aces are 2 or 12; split, each can make 21. Two eights are 16, the worst hand; split, each starts on 8. At no-hole-card tables there are exceptions: don’t split aces against an ace, or eights against a 10 or ace.</p>
<h2>Never: tens and fives</h2>
<p>A 20 almost always wins: don’t break it up. Two fives make 10, perfect for doubling.</p>
<h2>The rest: against weak cards</h2>
<table><thead><tr><th>Pair</th><th>Split against</th></tr></thead><tbody>
<tr><td>2-2, 3-3</td><td>2 to 7</td></tr><tr><td>4-4</td><td>5 and 6 (if you can double after splitting)</td></tr>
<tr><td>6-6</td><td>2 to 6</td></tr><tr><td>7-7</td><td>2 to 7</td></tr><tr><td>9-9</td><td>2 to 6, 8 and 9 (not 7, 10 or ace)</td></tr></tbody></table>
<p>Stand on 9-9 against a 7: a dealer showing 7 often ends on 17, and your 18 beats it. More detail and numbers in <a href="/en/when-to-split-in-blackjack/">when to split</a>.</p>`,
    quiz: [
      { q: 'You have 8-8 and the dealer shows a 10 (Las Vegas table). What do you do?', options: ['Stand on 16', 'Split', 'Hit'], answer: 1, why: 'With a hole card, always split eights: two hands starting on 8 lose less than a 16.' },
      { q: 'You have 10-10 and the dealer shows a 6. What do you do?', options: ['Split, the dealer is weak', 'Stand'], answer: 1, why: 'Never split tens: standing on 20 is worth +0.70 bets, splitting +0.57.' },
      { q: 'You have 9-9 and the dealer shows a 7. What do you do?', options: ['Split', 'Stand'], answer: 1, why: 'Your 18 beats the 17 a dealer showing 7 often makes: stand.' },
    ],
  },
  {
    slug: 'surrender-and-table-rules',
    title: 'Surrender and choosing the right table',
    h1: 'Lesson 9: surrender and choosing a table',
    metaTitle: 'Blackjack Surrender and How to Pick a Table · Course',
    description: 'When to surrender in blackjack and how to pick a table with good rules: 3:2 payout, dealer stands on soft 17, double after split, fewer decks. Lesson 9 of the free course.',
    minutes: 4,
    summary: 'Surrender 16 against 9, 10 or ace and 15 against 10, if allowed. And pick 3:2 tables where the dealer stands on soft 17.',
    body: `
<h2>Surrender isn’t for cowards</h2>
<p>Some tables let you <strong>surrender</strong> right after the deal: you give up the hand and get half your bet back. It’s only worth it when a hand loses more than half the time. With Las Vegas rules that means <strong>16 against 9, 10 or ace</strong> and <strong>15 against 10</strong>. If surrender isn’t offered, hit those hands.</p>
<h2>The most expensive decision happens before you sit down</h2>
<p>Table rules move the house edge more than many mistakes do. Look for:</p>
<ul>
<li><strong>Blackjack paying 3 to 2</strong>, never 6 to 5 (+1.4 points to the house).</li>
<li><strong>Dealer stands on soft 17</strong> (S17). If the dealer hits (H17), +0.2 points.</li>
<li><strong>Double after split</strong> allowed.</li>
<li><strong>Surrender</strong>, if available.</li>
<li><strong>Fewer decks</strong> is better, though it matters less than the above.</li>
</ul>
<p>All of it is quantified in <a href="/en/blackjack-data/house-edge-by-rules/">house edge by rules</a>.</p>`,
    quiz: [
      { q: 'You have 16 against a 10 and the table allows surrender. What do you do?', options: ['Surrender', 'Hit', 'Stand'], answer: 0, why: 'With surrender, 16 against 10 is a surrender: you save half your bet on a hand that loses more than half the time.' },
      { q: 'Which rule is worse for you?', options: ['Dealer hits soft 17', 'Blackjack pays 6 to 5', '8 decks instead of 6'], answer: 1, why: '6:5 adds about 1.4 points to the house edge; H17 about 0.2; 8 decks about 0.02.' },
      { q: 'No surrender at this table. You have 15 against a 10. What do you do?', options: ['Stand', 'Hit'], answer: 1, why: 'Without surrender, those hands are hits.' },
    ],
  },
  {
    slug: 'card-counting-without-myths',
    title: 'Card counting, without the myths',
    h1: 'Lesson 10: card counting, without the myths',
    metaTitle: 'Card Counting Without the Myths · Blackjack Course',
    description: 'The last lesson of the free blackjack course: what card counting with Hi-Lo is, what edge it really gives and where it doesn’t work at all.',
    minutes: 5,
    summary: 'Hi-Lo: 2–6 count +1, 7–9 zero, tens and aces −1. It’s legal, but the edge is small and it doesn’t work online.',
    body: `
<p>Card counting means keeping track of the cards that have been dealt, so you know when the remaining cards are rich in high cards — which favour the player: more blackjacks, better doubles and a dealer who busts more.</p>
<h2>The Hi-Lo system</h2>
<table><thead><tr><th>Cards</th><th>Value</th></tr></thead><tbody>
<tr><td>2 to 6</td><td>+1</td></tr><tr><td>7 to 9</td><td>0</td></tr><tr><td>10, faces and ace</td><td>−1</td></tr></tbody></table>
<p>The running total is the <strong>running count</strong>. Divided by the decks left to be dealt, it’s the <strong>true count</strong>. The higher it is, the more you bet.</p>
<h2>The truth about the edge</h2>
<p>A disciplined counter with good rules gets roughly 0.5–1% on money wagered, with enormous swings and a big bankroll behind it. Casinos shuffle early or ask you to stop playing once they spot you. It’s not a business plan.</p>
<h2>Where it doesn’t work</h2>
<ul>
<li><strong>Online RNG blackjack:</strong> the deck is reshuffled every hand.</li>
<li><strong>Continuous shuffling machines:</strong> cards go back in after every hand.</li>
</ul>
<p>Counting in your head is legal; using any device at the table isn’t. To practise, try the drills in <a href="/en/how-to-practice-card-counting/">how to practice card counting</a>.</p>
<h2>Congratulations</h2>
<p>You’ve finished the course. You now know more than most people who sit down at a table. What’s left is turning it into reflex: deciding correctly in two seconds, hand after hand. The only way there is practice.</p>`,
    quiz: [
      { q: 'What is a 5 worth in Hi-Lo?', options: ['+1', '0', '−1'], answer: 0, why: '2 through 6 count +1.' },
      { q: 'Running count +6 with 3 decks left. True count?', options: ['+6', '+2', '+18'], answer: 1, why: '6 ÷ 3 = +2.' },
      { q: 'Does counting work in regular online blackjack?', options: ['Yes, just like in a casino', 'No, it reshuffles every hand'], answer: 1, why: 'The software reshuffles after every hand: there’s nothing to count.' },
    ],
  },
];

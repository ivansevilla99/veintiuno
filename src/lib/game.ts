// Playable blackjack for the free web trainer. Pure logic, no DOM.
// Rules and the correct play come from strategy.ts (the app's table); this file only
// deals cards, tracks hands and settles them. No money: results are just win/lose/push.

import { strategyTable, primary, fallback, type Action, type HandKey, type Rules, type Upcard } from './strategy';

export type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
export type Suit = '♠' | '♥' | '♦' | '♣';
export interface Card { rank: Rank; suit: Suit }

const RANKS: Rank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const SUITS: Suit[] = ['♠', '♥', '♦', '♣'];

export const value = (c: Card) => (c.rank === 'A' ? 1 : ['10', 'J', 'Q', 'K'].includes(c.rank) ? 10 : Number(c.rank));

export class Shoe {
  private cards: Card[] = [];
  constructor(private decks: number) { this.shuffle(); }
  shuffle() {
    this.cards = [];
    for (let d = 0; d < this.decks; d++) for (const s of SUITS) for (const r of RANKS) this.cards.push({ rank: r, suit: s });
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  /** Reshuffle at ~75% penetration, between rounds. */
  needsShuffle() { return this.cards.length < this.decks * 52 * 0.25; }
  draw(): Card { if (!this.cards.length) this.shuffle(); return this.cards.pop()!; }
}

export function total(cards: Card[]): { total: number; soft: boolean } {
  let t = 0, aces = 0;
  for (const c of cards) { const v = value(c); t += v; if (v === 1) aces++; }
  let soft = false;
  if (aces && t + 10 <= 21) { t += 10; soft = true; }
  return { total: t, soft };
}

export const isBlackjack = (cards: Card[]) => cards.length === 2 && total(cards).total === 21;

export interface PlayerHand {
  cards: Card[];
  bet: 1 | 2;            // 2 after doubling
  done: boolean;
  fromSplit: boolean;
  splitAces: boolean;
  surrendered: boolean;
}

export type Outcome = 'blackjack' | 'win' | 'push' | 'lose' | 'bust' | 'surrender';

export class Round {
  player: PlayerHand[];
  dealer: Card[];
  active = 0;
  finished = false;
  outcomes: Outcome[] = [];

  constructor(private shoe: Shoe, readonly rules: Rules) {
    const p1 = shoe.draw(), d1 = shoe.draw(), p2 = shoe.draw();
    this.player = [{ cards: [p1, p2], bet: 1, done: false, fromSplit: false, splitAces: false, surrendered: false }];
    this.dealer = [d1];
    // With a hole card the dealer takes a second card now and peeks on A/10.
    if (rules.holeCard) this.dealer.push(shoe.draw());
    const dealerBJ = rules.holeCard && isBlackjack(this.dealer);
    if (isBlackjack(this.player[0].cards) || dealerBJ) {
      this.player[0].done = true;
      this.finish();
    }
  }

  get hand() { return this.player[this.active]; }
  get upcard(): Upcard { const v = value(this.dealer[0]); return (v === 1 ? 11 : v) as Upcard; }

  /** What the table lets the player do right now. */
  available(): Set<Action> {
    const h = this.hand, r = this.rules, set = new Set<Action>();
    if (this.finished || !h || h.done) return set;
    if (h.splitAces) return set;
    set.add('hit'); set.add('stand');
    const two = h.cards.length === 2;
    if (two) {
      const { total: t, soft } = total(h.cards);
      const hard = soft ? t - 10 : t;
      const doubleOK = r.doubleRule === 'anyTwo' || (!soft && (r.doubleRule === 'nineToEleven' ? hard >= 9 && hard <= 11 : hard >= 10 && hard <= 11));
      if (doubleOK && (!h.fromSplit || r.doubleAfterSplit)) set.add('double');
      if (value(h.cards[0]) === value(h.cards[1]) && this.player.length < r.maxSplitHands) set.add('split');
      if (r.surrender === 'late' && !h.fromSplit && this.player.length === 1) set.add('surrender');
    }
    return set;
  }

  /** The chart key for the current hand, as the app builds it. */
  key(): HandKey {
    const h = this.hand, avail = this.available();
    if (h.cards.length === 2 && value(h.cards[0]) === value(h.cards[1]) && avail.has('split')) return { kind: 'pair', value: value(h.cards[0]) };
    const { total: t, soft } = total(h.cards);
    return soft ? { kind: 'soft', total: t } : { kind: 'hard', total: t };
  }

  /** Correct action under the table's rules (Play.resolve in the app). */
  correct(): Action {
    const avail = this.available();
    const play = strategyTable(this.rules)(this.key(), this.upcard);
    const p = primary(play), f = fallback(play);
    if (avail.has(p)) return p;
    if (avail.has(f)) return f;
    if (play === 'Rp') return avail.has('split') ? 'split' : 'hit';
    return avail.has('stand') ? 'stand' : 'hit';
  }

  perform(a: Action) {
    const h = this.hand;
    if (!this.available().has(a)) return;
    switch (a) {
      case 'hit':
        h.cards.push(this.shoe.draw());
        if (total(h.cards).total >= 21) h.done = true;
        break;
      case 'stand':
        h.done = true;
        break;
      case 'double':
        h.bet = 2; h.cards.push(this.shoe.draw()); h.done = true;
        break;
      case 'surrender':
        h.surrendered = true; h.done = true;
        break;
      case 'split': {
        const aces = value(h.cards[0]) === 1;
        const second: PlayerHand = { cards: [h.cards[1], this.shoe.draw()], bet: 1, done: aces, fromSplit: true, splitAces: aces, surrendered: false };
        h.cards = [h.cards[0], this.shoe.draw()];
        h.fromSplit = true; h.splitAces = aces; h.done = aces;
        this.player.splice(this.active + 1, 0, second);
        break;
      }
    }
    this.advance();
  }

  private advance() {
    while (this.active < this.player.length && this.player[this.active].done) this.active++;
    if (this.active >= this.player.length) { this.active = this.player.length - 1; this.finish(); }
  }

  private finish() {
    const live = this.player.some((h) => !h.surrendered && total(h.cards).total <= 21);
    const playerBJ = this.player.length === 1 && isBlackjack(this.player[0].cards);
    if (!this.rules.holeCard) this.dealer.push(this.shoe.draw());
    // The dealer only draws if some hand is still in play and it isn't a lone player blackjack.
    if (live && !playerBJ && !isBlackjack(this.dealer)) {
      while (true) {
        const { total: t, soft } = total(this.dealer);
        if (t < 17 || (t === 17 && soft && this.rules.dealerHitsSoft17)) this.dealer.push(this.shoe.draw());
        else break;
      }
    }
    const d = total(this.dealer).total, dealerBJ = isBlackjack(this.dealer);
    this.outcomes = this.player.map((h) => {
      const p = total(h.cards).total;
      if (h.surrendered) return 'surrender';
      if (playerBJ) return dealerBJ ? 'push' : 'blackjack';
      if (dealerBJ) return 'lose'; // no hole card: doubles and splits are lost too
      if (p > 21) return 'bust';
      if (d > 21 || p > d) return 'win';
      return p === d ? 'push' : 'lose';
    });
    this.finished = true;
  }
}

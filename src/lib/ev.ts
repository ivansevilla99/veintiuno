// Exact expected-value engine, ported from the app's EVEngine.swift.
//
// Model (same as the app): the visible cards are removed from an N-deck shoe and the draw
// probabilities stay fixed from there on. Deterministic — no sampling, no randomness.
// With a hole card, the player's EV is conditional on the dealer not having blackjack.
// Without a hole card (Europe/Spain), a dealer blackjack also takes doubles and splits.

import type { Rules } from './strategy';

type Card = number; // 1 = ace, 10 = any ten-value card

export class Composition {
  counts: number[];
  total: number;
  constructor(decks: number) {
    this.counts = Array(11).fill(0);
    for (let v = 1; v <= 9; v++) this.counts[v] = 4 * decks;
    this.counts[10] = 16 * decks;
    this.total = 52 * decks;
  }
  remove(v: Card) {
    if (this.counts[v] > 0) {
      this.counts[v]--;
      this.total--;
    }
  }
  p(v: Card) {
    return this.total > 0 ? this.counts[v] / this.total : 0;
  }
  pExcluding(v: Card, excluded: Card) {
    if (v === excluded) return 0;
    const rest = this.total - this.counts[excluded];
    return rest > 0 ? this.counts[v] / rest : 0;
  }
}

export interface DealerOutcomes {
  /** index 0..4 = final totals 17..21 */
  standing: number[];
  bust: number;
}

const empty = (): DealerOutcomes => ({ standing: [0, 0, 0, 0, 0], bust: 0 });

export function add(v: Card, total: number, soft: boolean): { total: number; soft: boolean } {
  let t: number;
  let s = soft;
  if (v === 1 && !soft && total + 11 <= 21) {
    t = total + 11;
    s = true;
  } else {
    t = total + v;
  }
  if (s && t > 21) {
    t -= 10;
    s = false;
  }
  return { total: t, soft: s };
}

export class Solver {
  private dealerMemo = new Map<number, DealerOutcomes>();
  private hitMemo = new Map<number, number>();
  dealer: DealerOutcomes = empty();

  constructor(private comp: Composition, private rules: Rules) {}

  /** Dealer distribution conditioned on no blackjack; returns P(blackjack). */
  prepareDealer(up: Card): number {
    const bjCard = up === 1 ? 10 : up === 10 ? 1 : 0;
    const pBJ = bjCard === 0 ? 0 : this.comp.p(bjCard);
    const start = add(up, 0, false);
    const out = empty();
    for (let v = 1; v <= 10; v++) {
      if (v === bjCard) continue;
      const p = bjCard === 0 ? this.comp.p(v) : this.comp.pExcluding(v, bjCard);
      if (p <= 0) continue;
      const n = add(v, start.total, start.soft);
      acc(out, this.dealerFrom(n.total, n.soft), p);
    }
    this.dealer = out;
    return pBJ;
  }

  private dealerFrom(total: number, soft: boolean): DealerOutcomes {
    if (total > 21) return { standing: [0, 0, 0, 0, 0], bust: 1 };
    const key = total * 2 + (soft ? 1 : 0);
    const hit = this.dealerMemo.get(key);
    if (hit) return hit;
    const mustHit = total < 17 || (total === 17 && soft && this.rules.dealerHitsSoft17);
    let out: DealerOutcomes;
    if (!mustHit) {
      out = empty();
      out.standing[Math.min(Math.max(total, 17), 21) - 17] = 1;
    } else {
      out = empty();
      for (let v = 1; v <= 10; v++) {
        const p = this.comp.p(v);
        if (p <= 0) continue;
        const n = add(v, total, soft);
        acc(out, this.dealerFrom(n.total, n.soft), p);
      }
    }
    this.dealerMemo.set(key, out);
    return out;
  }

  evStand(player: number): number {
    if (player > 21) return -1;
    let ev = this.dealer.bust;
    for (let d = 17; d <= 21; d++) {
      const p = this.dealer.standing[d - 17];
      if (player > d) ev += p;
      else if (player < d) ev -= p;
    }
    return ev;
  }

  evHit(total: number, soft: boolean): number {
    const key = total * 2 + (soft ? 1 : 0);
    const c = this.hitMemo.get(key);
    if (c !== undefined) return c;
    let ev = 0;
    for (let v = 1; v <= 10; v++) {
      const p = this.comp.p(v);
      if (p <= 0) continue;
      const n = add(v, total, soft);
      ev += n.total > 21 ? -p : p * Math.max(this.evStand(n.total), this.evHit(n.total, n.soft));
    }
    this.hitMemo.set(key, ev);
    return ev;
  }

  evDouble(total: number, soft: boolean): number {
    let ev = 0;
    for (let v = 1; v <= 10; v++) {
      const p = this.comp.p(v);
      if (p <= 0) continue;
      const n = add(v, total, soft);
      ev += n.total > 21 ? -2 * p : 2 * p * this.evStand(n.total);
    }
    return ev;
  }

  /** Two independent hands, no resplitting (as in the app). */
  evSplit(pair: Card): number {
    const aces = pair === 1;
    const start = add(pair, 0, false);
    let ev = 0;
    for (let v = 1; v <= 10; v++) {
      const p = this.comp.p(v);
      if (p <= 0) continue;
      const n = add(v, start.total, start.soft);
      if (n.total > 21) { ev -= p; continue; }
      if (aces) { ev += p * this.evStand(n.total); continue; }
      let best = Math.max(this.evStand(n.total), this.evHit(n.total, n.soft));
      const hard = n.soft ? n.total - 10 : n.total;
      const canDouble =
        this.rules.doubleRule === 'anyTwo' ||
        (!n.soft && (this.rules.doubleRule === 'nineToEleven' ? hard >= 9 && hard <= 11 : hard >= 10 && hard <= 11));
      if (this.rules.doubleAfterSplit && canDouble) best = Math.max(best, this.evDouble(n.total, n.soft));
      ev += p * best;
    }
    return 2 * ev;
  }
}

function acc(into: DealerOutcomes, o: DealerOutcomes, w: number) {
  for (let i = 0; i < 5; i++) into.standing[i] += o.standing[i] * w;
  into.bust += o.bust * w;
}

export type ActionName = 'hit' | 'stand' | 'double' | 'split' | 'surrender';

/** Expected value per unit bet of every option for a two-card hand, like the app's consultant. */
export function evaluate(cards: [Card, Card], up: Card, rules: Rules, surrender = rules.surrender === 'late') {
  const comp = new Composition(rules.decks);
  cards.forEach((c) => comp.remove(c));
  comp.remove(up);
  const s = new Solver(comp, rules);
  const pBJ0 = s.prepareDealer(up);
  const pBJ = rules.holeCard ? 0 : pBJ0;
  const h1 = add(cards[0], 0, false);
  const h = add(cards[1], h1.total, h1.soft);
  const adj = (raw: number, loss: number) => (pBJ > 0 ? pBJ * loss + (1 - pBJ) * raw : raw);
  const out: Partial<Record<ActionName, number>> = {
    stand: adj(s.evStand(h.total), -1),
    hit: adj(s.evHit(h.total, h.soft), -1),
  };
  const hard = h.soft ? h.total - 10 : h.total;
  const canDouble =
    rules.doubleRule === 'anyTwo' || (!h.soft && (rules.doubleRule === 'nineToEleven' ? hard >= 9 && hard <= 11 : hard >= 10 && hard <= 11));
  if (canDouble) out.double = adj(s.evDouble(h.total, h.soft), -2);
  if (cards[0] === cards[1]) out.split = adj(s.evSplit(cards[0]), -2);
  if (surrender) out.surrender = -0.5; // resolves the hand at once, always for half (as in the app)
  return { ev: out, dealerBust: s.dealer.bust, pDealerBlackjack: pBJ0 };
}

/** Final-total distribution of the dealer for an upcard, from a full shoe (only the upcard removed). */
export function dealerTable(up: Card, rules: Rules) {
  const comp = new Composition(rules.decks);
  comp.remove(up);
  const s = new Solver(comp, rules);
  const pBJ = s.prepareDealer(up);
  return { ...s.dealer, pBlackjack: pBJ };
}

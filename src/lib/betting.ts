// Betting-system simulator. Plays real hands with the same engine as the free table
// (game.ts: shoe, dealer rules, settlement) and perfect basic strategy from strategy.ts,
// and only varies how much is bet. Pure logic, no DOM: it runs in the browser and in Node.

import { Round, Shoe } from './game';
import type { Rules } from './strategy';

export type System = 'flat' | 'martingale' | 'paroli' | 'dalembert';
export const SYSTEMS: System[] = ['flat', 'martingale', 'paroli', 'dalembert'];

export interface Params {
  rules: Rules;
  bankroll: number;   // starting money
  unit: number;       // base bet
  maxBet: number;     // table limit
  hands: number;      // hands per session
  stopWin: number;    // leave when up this much (0 = never)
}

export interface Session {
  net: number;          // final bankroll minus starting bankroll
  low: number;          // lowest bankroll reached
  ruined: boolean;      // could not cover the base bet any more
  limitHit: boolean;    // the table limit blocked the progression at least once
  wagered: number;      // total money put on the table (initial bets, not counting doubles)
  path?: number[];      // bankroll after each hand (only when asked for)
}

const payoutOf = (r: Rules) => (r.payout === 'sixToFive' ? 1.2 : r.payout === 'evenMoney' ? 1 : 1.5);

/** Net result of one round in units of the initial bet, playing basic strategy. */
export function playRound(shoe: Shoe, rules: Rules): number {
  if (shoe.needsShuffle()) shoe.shuffle();
  const r = new Round(shoe, rules);
  while (!r.finished) r.perform(r.correct());
  let net = 0;
  r.player.forEach((h, i) => {
    switch (r.outcomes[i]) {
      case 'blackjack': net += payoutOf(rules); break;
      case 'win': net += h.bet; break;
      case 'lose': case 'bust': net -= h.bet; break;
      case 'surrender': net -= 0.5; break;
      default: break; // push
    }
  });
  return net;
}

/** One session with one betting system. */
export function runSession(system: System, p: Params, shoe: Shoe, keepPath = false): Session {
  let bank = p.bankroll;
  let low = bank;
  let mult = 1;       // bet multiple of the base unit
  let streak = 0;     // consecutive wins (Paroli)
  let limitHit = false;
  let wagered = 0;
  const path: number[] | undefined = keepPath ? [bank] : undefined;

  for (let i = 0; i < p.hands; i++) {
    if (bank < p.unit) break;
    if (p.stopWin > 0 && bank - p.bankroll >= p.stopWin) break;
    let bet = mult * p.unit;
    if (bet > p.maxBet) { bet = p.maxBet; limitHit = true; }
    if (bet > bank) bet = bank;
    const units = playRound(shoe, p.rules);
    // No floor at zero: a doubled or split last hand can take a little more than what was left.
    // Clamping it would hand the player free money and make the systems look better than they are.
    bank += units * bet;
    wagered += bet;
    if (bank < low) low = bank;
    path?.push(bank);

    if (units > 0) {
      streak++;
      if (system === 'martingale') mult = 1;
      else if (system === 'paroli') mult = streak >= 3 ? 1 : mult * 2;
      else if (system === 'dalembert') mult = Math.max(1, mult - 1);
      if (system === 'paroli' && streak >= 3) streak = 0;
    } else if (units < 0) {
      streak = 0;
      if (system === 'martingale') mult *= 2;
      else if (system === 'paroli') mult = 1;
      else if (system === 'dalembert') mult += 1;
    }
  }
  return { net: bank - p.bankroll, low, ruined: bank < p.unit, limitHit, wagered, path };
}

export interface Summary {
  system: System;
  sessions: number;
  profitPct: number;   // share of sessions that ended above the starting money
  ruinPct: number;     // share that ended unable to cover the base bet
  limitPct: number;    // share where the table limit stopped the progression
  mean: number;        // average net result
  median: number;
  p5: number;          // 5% of sessions did worse than this
  p95: number;
  worst: number;
  edgePct: number;     // average loss per unit wagered, in %
}

export function summarize(system: System, sessions: Session[]): Summary {
  const n = sessions.length;
  const nets = sessions.map((s) => s.net).sort((a, b) => a - b);
  const at = (q: number) => nets[Math.min(n - 1, Math.max(0, Math.floor(q * n)))];
  const sum = nets.reduce((a, b) => a + b, 0);
  const wagered = sessions.reduce((a, s) => a + s.wagered, 0);
  return {
    system,
    sessions: n,
    profitPct: (100 * sessions.filter((s) => s.net > 0).length) / n,
    ruinPct: (100 * sessions.filter((s) => s.ruined).length) / n,
    limitPct: (100 * sessions.filter((s) => s.limitHit).length) / n,
    mean: sum / n,
    median: at(0.5),
    p5: at(0.05),
    p95: at(0.95),
    worst: nets[0],
    edgePct: wagered ? (-100 * sum) / wagered : 0,
  };
}

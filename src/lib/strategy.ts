// Basic-strategy table, ported one-to-one from the app's engine
// (Packages/VeintiunoCore/Sources/VeintiunoCore/StrategyTable.swift and Rules.swift)
// so the website and the app always give the same answer.

export type Play = 'H' | 'S' | 'D' | 'Ds' | 'P' | 'Rh' | 'Rs' | 'Rp';
export type DoubleRule = 'anyTwo' | 'nineToEleven' | 'tenEleven';
export type Surrender = 'none' | 'late';
export type Payout = 'threeToTwo' | 'sixToFive' | 'evenMoney';

export interface Rules {
  decks: number;
  dealerHitsSoft17: boolean;
  holeCard: boolean; // false = European no hole card (ENHC)
  doubleAfterSplit: boolean;
  doubleRule: DoubleRule;
  surrender: Surrender;
  resplitAces: boolean;
  maxSplitHands: number;
  payout: Payout;
}

export const defaultRules: Rules = {
  decks: 6,
  dealerHitsSoft17: false,
  holeCard: true,
  doubleAfterSplit: true,
  doubleRule: 'anyTwo',
  surrender: 'late',
  resplitAces: false,
  maxSplitHands: 4,
  payout: 'threeToTwo',
};

export const presets: Record<string, Rules> = {
  vegasS17: { ...defaultRules },
  vegasH17: { ...defaultRules, dealerHitsSoft17: true },
  europeanOnline: { ...defaultRules, holeCard: false, surrender: 'none' },
  spainCasino: { ...defaultRules, holeCard: false, doubleRule: 'nineToEleven', surrender: 'none', maxSplitHands: 4 },
  doubleDeck: { ...defaultRules, decks: 2 },
};

// Upcards in chart order: 2..10, then ace (value 11 / "A").
export const upcards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;
export type Upcard = (typeof upcards)[number];

export type HandKey =
  | { kind: 'hard'; total: number }
  | { kind: 'soft'; total: number }
  | { kind: 'pair'; value: number }; // value 1 = aces

export const hardKeys: HandKey[] = Array.from({ length: 13 }, (_, i) => ({ kind: 'hard', total: 5 + i }));
export const softKeys: HandKey[] = Array.from({ length: 8 }, (_, i) => ({ kind: 'soft', total: 13 + i }));
export const pairKeys: HandKey[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1].map((value) => ({ kind: 'pair', value }));

const id = (k: HandKey) => (k.kind === 'pair' ? `pair${k.value}` : `${k.kind}${k.total}`);

type Table = Map<string, Map<Upcard, Play>>;

function row(s: string): Map<Upcard, Play> {
  const parts = s.split(' ') as Play[];
  if (parts.length !== 10) throw new Error(`bad row ${s}`);
  return new Map(upcards.map((u, i) => [u, parts[i]]));
}

// Baseline: 6 decks, S17, DAS, late surrender, peek.
function baseline(): Table {
  const t: Table = new Map();
  for (let total = 4; total <= 8; total++) t.set(`hard${total}`, row('H H H H H H H H H H'));
  t.set('hard9', row('H D D D D H H H H H'));
  t.set('hard10', row('D D D D D D D D H H'));
  t.set('hard11', row('D D D D D D D D D H'));
  t.set('hard12', row('H H S S S H H H H H'));
  t.set('hard13', row('S S S S S H H H H H'));
  t.set('hard14', row('S S S S S H H H H H'));
  t.set('hard15', row('S S S S S H H H Rh H'));
  t.set('hard16', row('S S S S S H H Rh Rh Rh'));
  for (let total = 17; total <= 21; total++) t.set(`hard${total}`, row('S S S S S S S S S S'));

  t.set('soft13', row('H H H D D H H H H H'));
  t.set('soft14', row('H H H D D H H H H H'));
  t.set('soft15', row('H H D D D H H H H H'));
  t.set('soft16', row('H H D D D H H H H H'));
  t.set('soft17', row('H D D D D H H H H H'));
  t.set('soft18', row('S Ds Ds Ds Ds S S H H H'));
  t.set('soft19', row('S S S S S S S S S S'));
  t.set('soft20', row('S S S S S S S S S S'));
  t.set('soft21', row('S S S S S S S S S S'));

  t.set('pair2', row('P P P P P P H H H H'));
  t.set('pair3', row('P P P P P P H H H H'));
  t.set('pair4', row('H H H P P H H H H H'));
  t.set('pair5', row('D D D D D D D D H H'));
  t.set('pair6', row('P P P P P H H H H H'));
  t.set('pair7', row('P P P P P P H H H H'));
  t.set('pair8', row('P P P P P P P P P P'));
  t.set('pair9', row('P P P P P S P P S S'));
  t.set('pair10', row('S S S S S S S S S S'));
  t.set('pair1', row('P P P P P P P P P P'));
  return t;
}

export function strategyTable(rules: Rules): (key: HandKey, up: Upcard) => Play {
  const t = baseline();
  const set = (key: string, up: Upcard, play: Play) => t.get(key)!.set(up, play);

  if (rules.decks <= 2) {
    set('hard9', 2, 'D');
    set('hard11', 11, 'D');
    set('pair6', 7, 'P');
    set('pair7', 8, 'P');
    set('hard16', 9, 'H');
  }

  if (rules.dealerHitsSoft17) {
    set('hard11', 11, 'D');
    set('hard15', 11, 'Rh');
    set('hard17', 11, 'Rs');
    set('soft18', 2, 'Ds');
    set('soft19', 6, 'Ds');
    set('pair8', 11, 'Rp');
  }

  if (!rules.holeCard) {
    // Doubled/split bets are lost to a dealer blackjack, so don't expose them vs A/10.
    set('hard11', 11, 'H');
    set('hard11', 10, 'H');
    set('pair1', 11, 'H');
    if (rules.surrender === 'late') {
      set('pair8', 10, 'Rh');
      set('pair8', 11, 'Rh');
    } else {
      set('pair8', 10, 'H');
      set('pair8', 11, 'H');
    }
  }

  if (!rules.doubleAfterSplit) {
    set('pair2', 2, 'H'); set('pair2', 3, 'H');
    set('pair3', 2, 'H'); set('pair3', 3, 'H');
    set('pair4', 5, 'H'); set('pair4', 6, 'H');
    set('pair6', 2, 'H');
  }

  if (rules.doubleRule !== 'anyTwo') {
    for (let total = 13; total <= 17; total++) {
      for (const up of upcards) if (t.get(`soft${total}`)!.get(up) === 'D') set(`soft${total}`, up, 'H');
    }
    for (const up of upcards) if (t.get('soft18')!.get(up) === 'Ds') set('soft18', up, 'S');
    if (rules.doubleRule === 'tenEleven') {
      for (const up of upcards) if (t.get('hard9')!.get(up) === 'D') set('hard9', up, 'H');
    }
  }

  if (rules.surrender === 'none') {
    for (const [key, r] of t) {
      for (const [up, play] of r) {
        if (play === 'Rh') set(key, up, 'H');
        if (play === 'Rs') set(key, up, 'S');
        if (play === 'Rp') set(key, up, 'P');
      }
    }
  }

  return (key, up) => t.get(id(key))?.get(up) ?? 'H';
}

/** Approximate house edge in percent, from the Wizard of Odds rule-effect table (same as the app). */
export function houseEdge(r: Rules): number {
  let edge = 0.36;
  if (r.decks === 1) edge -= 0.46;
  else if (r.decks === 2) edge -= 0.17;
  else if (r.decks === 4) edge -= 0.04;
  else if (r.decks === 8) edge += 0.02;
  if (r.dealerHitsSoft17) edge += 0.22;
  if (!r.holeCard) edge += 0.11;
  if (!r.doubleAfterSplit) edge += 0.14;
  if (r.doubleRule === 'nineToEleven') edge += 0.09;
  if (r.doubleRule === 'tenEleven') edge += 0.18;
  if (r.surrender === 'none') edge += 0.07;
  if (r.resplitAces) edge -= 0.08;
  if (r.maxSplitHands <= 2) edge += 0.1;
  if (r.payout === 'sixToFive') edge += 1.39;
  if (r.payout === 'evenMoney') edge += 2.27;
  return Math.round(edge * 100) / 100;
}

export type Action = 'hit' | 'stand' | 'double' | 'split' | 'surrender';

export const primary = (p: Play): Action =>
  p === 'H' ? 'hit' : p === 'S' ? 'stand' : p === 'D' || p === 'Ds' ? 'double' : p === 'P' ? 'split' : 'surrender';

export const fallback = (p: Play): Action =>
  p === 'H' || p === 'Rh' || p === 'D' ? 'hit' : p === 'S' || p === 'Rs' || p === 'Ds' ? 'stand' : 'split';

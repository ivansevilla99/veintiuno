// Language packs for the languages added after es/en/de/fr (whose texts live in the components).
import type { LangPack } from './types';
import { pack as ja } from './ja';
import { pack as pt } from './pt';
import { pack as it } from './it';
import { pack as nl } from './nl';
import { pack as zh } from './zh';

export const packs = { ja, pt, it, nl, zh } as Record<string, LangPack | undefined>;

// Shape of a language pack. Loosely typed on purpose: each section mirrors the English
// dictionary inside the component that uses it (see src/i18n/_template.ts).
import type { RouteKey } from '../lib/site';

export interface LangPack {
  htmlLang: string;
  locale: string;
  name: string;
  routes: Partial<Record<RouteKey, string>>;
  /** Paths reserved for this language; moved into `routes` when the pages exist. */
  routesPlanned?: Partial<Record<RouteKey, string>>;
  ui: Record<string, any>;
  base: { skip: string; nav: string; course: string; data: string };
  related: Partial<Record<RouteKey, [string, string]>>;
  ev: Record<string, any>;
  quiz: { title: string; score: string };
  drill: Record<string, any>;
  deck: Record<string, any>;
  simT: Record<string, any>;
  simW: Record<string, any>;
  chart: Record<string, any>;
  chartText: Record<string, any>;
  print: Record<string, any>;
  courseIndex: (total: number) => Record<string, any>;
  courseLesson: Record<string, any>;
  explain: { up: Record<number, string> } & Record<string, any>;
}

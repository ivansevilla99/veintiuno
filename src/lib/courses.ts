// All editions of the course, by language. Lesson i is the same lesson in every language,
// which is how each lesson page finds its translations for hreflang and the language menu.
import type { Lang } from './site';
import { routes } from './site';
import { lessons, type Lesson } from './course';
import { lessonsEn } from './course-en';
import { lessonsDe } from './course-de';
import { lessonsFr } from './course-fr';

export const courses: Record<Lang, Lesson[]> = { es: lessons, en: lessonsEn, de: lessonsDe, fr: lessonsFr };

export function lessonAlternates(i: number): Partial<Record<Lang, string>> {
  const out: Partial<Record<Lang, string>> = {};
  for (const [lang, list] of Object.entries(courses) as [Lang, Lesson[]][]) {
    const base = (routes.course as Partial<Record<Lang, string>>)[lang];
    if (base && list[i]) out[lang] = `${base}${list[i].slug}/`;
  }
  return out;
}

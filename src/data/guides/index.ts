import type { Guide, GroupKey } from './types';
import { visitGuides } from './visit';
import { historyGuides } from './history';
import { transportGuides } from './transport';
import { nearbyGuides } from './nearby';
import { itineraryGuides } from './itineraries';
import { attractionGuides } from './attractions';

export { GROUPS, GROUP_ORDER } from './types';
export type { Guide, GuideCopy, GuideSection, GroupKey } from './types';

export const guides: Guide[] = [
  ...visitGuides,
  ...historyGuides,
  ...transportGuides,
  ...nearbyGuides,
  ...itineraryGuides,
  ...attractionGuides,
];

export function bySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function guideHref(slug: string, lang: 'ar' | 'en'): string {
  return (lang === 'en' ? '/en/' : '/') + slug + '/';
}

/** Group the guides by their top-level section, preserving order. */
export function groupedGuides(): { key: GroupKey; items: Guide[] }[] {
  const order: GroupKey[] = ['visit', 'history', 'transport', 'nearby', 'itineraries'];
  return order.map((key) => ({ key, items: guides.filter((g) => g.group === key) }));
}

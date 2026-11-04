export type GroupKey = 'visit' | 'history' | 'transport' | 'nearby' | 'itineraries';

export interface GuideSection {
  h: string;
  p?: string[];
  list?: string[];
}

export interface GuideCopy {
  /** <title> tag text */
  title: string;
  /** on-page H1 */
  h1: string;
  /** meta description */
  description: string;
  /** answer-first opening paragraph (mobile users read this first) */
  lead: string;
  /** short answer box: [label, value] pairs */
  quick?: [string, string][];
  sections: GuideSection[];
  faq?: [string, string][];
  /** slugs of related guide pages */
  related?: string[];
}

export interface Guide {
  slug: string;
  group: GroupKey;
  /** shared, language-neutral hero image path used for the guide figure and social/structured data */
  image?: string;
  imageAlt?: string;
  en: GuideCopy;
  ar: GuideCopy;
}

export const GROUPS: Record<GroupKey, { en: string; ar: string }> = {
  visit: { en: 'Visitor information', ar: 'معلومات الزيارة' },
  history: { en: 'History and architecture', ar: 'التاريخ والمعمار' },
  transport: { en: 'Getting there', ar: 'الوصول' },
  nearby: { en: 'Around Montaza', ar: 'حول المنتزه' },
  itineraries: { en: 'Routes and visitor types', ar: 'المسارات وأنواع الزوار' },
};

export const GROUP_ORDER: GroupKey[] = ['visit', 'history', 'transport', 'nearby', 'itineraries'];

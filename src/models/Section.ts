import { Book } from './Book';

export type SectionType = 'bannerCarousel' | 'bookCarousel';

export interface Section {
  id: number;
  type: SectionType;
  title?: string;
  books: Book[];
}

export type Sections = Section[];

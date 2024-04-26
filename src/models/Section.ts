import { Book } from './Book';
import { Playlist } from './Playlist';

export type SectionType =
  | 'bannerCarousel'
  | 'bookCarousel'
  | 'continueWatching';

export interface Carousel {
  title?: string;
  books?: Book[];
}

export interface ContinueWatching {
  bookImageUrl?: string;
  bookName?: string;
  bookAuthor?: string;
  positionMillis?: number;
  playlists?: Playlist[];
  currentVideoIndex?: number;
}

export interface Section {
  id: number;
  type: SectionType;
  data: Carousel & ContinueWatching;
}

export type Sections = Section[];

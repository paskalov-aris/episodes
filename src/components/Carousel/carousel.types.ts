import { Book } from '../../models/Book';
import { Playlist } from '../../models/Playlist';
import { SectionType } from '../../models/Section';

export interface CarouselProps {
  books: Book[];
  type: SectionType;
  title?: string;
  onCarouselItemPress: (playlists: Playlist[]) => void;
}

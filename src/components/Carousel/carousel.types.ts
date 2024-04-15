import { Book } from '../../models/Book';
import { SectionType } from '../../models/Section';

export interface CarouselProps {
  books: Book[];
  type: SectionType;
  title?: string;
  onCarouselItemPress: (playlistUrl: string) => void;
}

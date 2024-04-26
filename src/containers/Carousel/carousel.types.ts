import { Playlist } from '../../models/Playlist';
import { Carousel, SectionType } from '../../models/Section';

export interface CarouselProps {
  data: Carousel;
  type: SectionType;
  onCarouselItemPress?: (playlists: Playlist[]) => void;
}

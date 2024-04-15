import { ViewStyle } from 'react-native';
import { Book } from '../../models/Book';
import { Playlist } from '../../models/Playlist';

export interface BookCardProps extends Book {
  additionalContainerStyle?: ViewStyle;
  onBookCardPress?: (playlistUrls: Playlist[]) => void;
}

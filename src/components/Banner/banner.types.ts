import { ViewStyle } from 'react-native';
import { Book } from '../../models/Book';
import { Playlist } from '../../models/Playlist';

export interface BannerProps extends Book {
  additionalContainerStyle?: ViewStyle;
  onBannerPress?: (playlists: Playlist[]) => void;
}

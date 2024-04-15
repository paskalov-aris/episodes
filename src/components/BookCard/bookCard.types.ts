import { ViewStyle } from 'react-native';
import { Book } from '../../models/Book';

export interface BookCardProps extends Book {
  additionalContainerStyle?: ViewStyle;
  onBookCardPress?: (playlistUrl: string) => void;
}

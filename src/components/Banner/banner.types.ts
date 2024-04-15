import { ViewStyle } from 'react-native';
import { Book } from '../../models/Book';

export interface BannerProps extends Book {
  additionalContainerStyle?: ViewStyle;
}

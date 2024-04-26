import { ViewStyle } from 'react-native';
import { Book } from '../../models/Book';
import { UseCreateContinueWatchingSectionArgs } from '../../hooks/useCreateContinueWatchingSection/useCreateContinueWatchingSection.types';

export interface BookCardProps extends Book {
  additionalContainerStyle?: ViewStyle;
  onBookCardPress?: (args: UseCreateContinueWatchingSectionArgs) => void;
}

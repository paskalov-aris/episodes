import { ViewStyle } from 'react-native';
import { Book } from '../../models/Book';
import { UseCreateContinueWatchingSectionArgs } from '../../hooks/useCreateContinueWatchingSection/useCreateContinueWatchingSection.types';

export interface BannerProps extends Book {
  additionalContainerStyle?: ViewStyle;
  onBannerPress?: (args: UseCreateContinueWatchingSectionArgs) => void;
}

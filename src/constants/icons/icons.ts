import { ImageSourcePropType } from 'react-native';
import { BookCardIcon, HeaderIcon } from './icons.types';

export const HEADER_ICONS: Record<HeaderIcon, ImageSourcePropType> = {
  search: require('../../assets/images/icons/search.png'),
};

export const BOOK_CARD_ICONS: Record<BookCardIcon, ImageSourcePropType> = {
  lock: require('../../assets/images/icons/lock.png'),
};

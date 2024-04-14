import { ImageSourcePropType } from 'react-native';

export interface BookCardProps {
  name: string;
  image: ImageSourcePropType;
  isComingSoon?: boolean;
  releaseDate?: string;
}

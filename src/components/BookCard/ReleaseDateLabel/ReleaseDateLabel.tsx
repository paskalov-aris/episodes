import { FC } from 'react';
import { Text } from 'react-native';
import { ReleaseDateLabelProps } from './releaseDateLabel.types';
import { styles } from './releaseDateLabel.styles';
import { format, toDate } from 'date-fns';

export const ReleaseDateLabel: FC<ReleaseDateLabelProps> = ({
  releaseDate,
}) => {
  const date = toDate(releaseDate);
  const formattedReleaseDate = format(date, 'MMMM d');

  return <Text style={styles.releaseDate}>Coming {formattedReleaseDate}</Text>;
};

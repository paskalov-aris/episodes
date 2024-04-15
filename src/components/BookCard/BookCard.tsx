import { FC } from 'react';
import { BookCardProps } from './bookCard.types';
import { Image, Text, View } from 'react-native';
import { COMING_SOON_BLUR_RADIUS, NO_BLUR } from './bookCard.settings';
import { ReleaseDateLabel } from './ReleaseDateLabel/ReleaseDateLabel';
import { LockIcon } from './LockIcon/LockIcon';
import { styles } from './bookCard.styles';

export const BookCard: FC<BookCardProps> = ({
  name,
  imageUrl,
  released,
  releaseDate,
  additionalContainerStyle,
}) => {
  const blurRadius = !released ? COMING_SOON_BLUR_RADIUS : NO_BLUR;

  const shouldRenderReleaseDate = !released && !!releaseDate;

  const source = { uri: imageUrl };

  return (
    <View style={[styles.container, additionalContainerStyle]}>
      <View>
        {!released && <LockIcon />}
        <Image
          source={source}
          style={styles.bookCover}
          blurRadius={blurRadius}
        />
      </View>
      {shouldRenderReleaseDate && (
        <ReleaseDateLabel releaseDate={releaseDate} />
      )}
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

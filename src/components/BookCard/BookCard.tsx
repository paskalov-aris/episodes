import { FC } from 'react';
import { BookCardProps } from './bookCard.types';
import { Image, Text, View } from 'react-native';
import { COMING_SOON_BLUR_RADIUS, NO_BLUR } from './bookCard.settings';
import { ReleaseDateLabel } from './ReleaseDateLabel/ReleaseDateLabel';
import { LockIcon } from './LockIcon/LockIcon';
import { styles } from './bookCard.styles';

export const BookCard: FC<BookCardProps> = ({
  name,
  image,
  isComingSoon,
  releaseDate,
}) => {
  const blurRadius = isComingSoon ? COMING_SOON_BLUR_RADIUS : NO_BLUR;

  const shouldRenderReleaseDate = isComingSoon && releaseDate;

  return (
    <View>
      <View>
        {isComingSoon && <LockIcon />}
        <Image
          source={image}
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

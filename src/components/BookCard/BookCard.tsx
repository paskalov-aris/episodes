import { FC } from 'react';
import { BookCardProps } from './bookCard.types';
import { Image, Text, TouchableOpacity, View } from 'react-native';
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
  playlists,
  author,
  onBookCardPress,
}) => {
  const blurRadius = !released ? COMING_SOON_BLUR_RADIUS : NO_BLUR;

  const isNotReleased = !released;
  const shouldRenderReleaseDate = isNotReleased && !!releaseDate;

  const source = { uri: imageUrl };

  const handleBookCardPress = () => {
    if (onBookCardPress) {
      onBookCardPress({
        playlists: playlists || [],
        bookName: name,
        bookImageUrl: imageUrl,
        bookAuthor: author,
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={handleBookCardPress}
      disabled={isNotReleased}
      style={[styles.container, additionalContainerStyle]}>
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
    </TouchableOpacity>
  );
};

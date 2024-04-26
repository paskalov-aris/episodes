import { FC } from 'react';
import { ContinueWatchingCardProps } from './continueWatchingCard.types';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import SVGArrowRightIcon from '../../assets/images/icons/arrow-right.svg';
import { styles } from './continueWatchingCard.styles';
import { ARROW_RIGHT_ICON_SIZE } from './continueWatchingCard.settings';

export const ContinueWatchingCard: FC<ContinueWatchingCardProps> = ({
  data: { bookImageUrl, bookName, bookAuthor },
  onCardPress,
}) => {
  const imageUrl = { uri: bookImageUrl };

  const handleCardPress = () => {
    if (onCardPress) {
      onCardPress();
    }
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.container}>
      <View style={styles.bookContainer}>
        <Image source={imageUrl} style={styles.bookImage} />
        <View>
          <Text style={styles.bookName}>{bookName}</Text>
          <Text style={styles.bookAuthor}>{bookAuthor}</Text>
        </View>
      </View>
      <SVGArrowRightIcon
        width={ARROW_RIGHT_ICON_SIZE}
        height={ARROW_RIGHT_ICON_SIZE}
      />
    </TouchableOpacity>
  );
};

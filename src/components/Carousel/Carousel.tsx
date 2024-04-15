import { FC, useCallback } from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { Banner } from '../Banner/Banner';
import { CarouselProps } from './carousel.types';
import { BookCard } from '../BookCard/BookCard';
import { styles } from './carousel.styles';
import { Book } from '../../models/Book';

export const Carousel: FC<CarouselProps> = ({
  books,
  type,
  title,
  onCarouselItemPress,
}) => {
  const isBannerSlider = type === 'bannerCarousel';

  const renderBanner = useCallback(
    ({ item }: ListRenderItemInfo<Book>) => {
      return (
        <Banner
          {...item}
          key={item.id}
          additionalContainerStyle={styles.rightIndent}
          onBannerPress={onCarouselItemPress}
        />
      );
    },
    [onCarouselItemPress],
  );

  const renderBookCard = useCallback(
    ({ item }: ListRenderItemInfo<Book>) => {
      return (
        <BookCard
          {...item}
          key={item.id}
          additionalContainerStyle={styles.rightIndent}
          onBookCardPress={onCarouselItemPress}
        />
      );
    },
    [onCarouselItemPress],
  );

  return (
    <View style={styles.container}>
      {title && <Text style={styles.sliderTitle}>{title}</Text>}
      <FlatList
        data={books}
        renderItem={isBannerSlider ? renderBanner : renderBookCard}
        horizontal
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

import { FC } from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { Banner } from '../Banner/Banner';
import { CarouselProps } from './carousel.types';
import { BookCard } from '../BookCard/BookCard';
import { styles } from './carousel.styles';
import { Book } from '../../models/Book';

const renderBanner = ({ item }: ListRenderItemInfo<Book>) => {
  return (
    <Banner
      {...item}
      key={item.id}
      additionalContainerStyle={styles.rightIndent}
    />
  );
};

const renderBookCard = ({ item }: ListRenderItemInfo<Book>) => {
  return (
    <BookCard
      {...item}
      key={item.id}
      additionalContainerStyle={styles.rightIndent}
    />
  );
};

export const Carousel: FC<CarouselProps> = ({ books, type, title }) => {
  const isBannerSlider = type === 'bannerCarousel';

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

import { FC, useCallback } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { Banner } from '../../components/Banner/Banner';
import { CarouselProps } from './carousel.types';
import { BookCard } from '../../components/BookCard/BookCard';
import { styles } from './carousel.styles';
import { Book } from '../../models/Book';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { useCreateContinueWatchingSection } from '../../hooks/useCreateContinueWatchingSection/useCreateContinueWatchingSection';
import { UseCreateContinueWatchingSectionArgs } from '../../hooks/useCreateContinueWatchingSection/useCreateContinueWatchingSection.types';

export const Carousel: FC<CarouselProps> = ({
  data: { title = '', books = [] },
  type,
}) => {
  const isBannerSlider = type === 'bannerCarousel';

  const createContinueWatchingSection = useCreateContinueWatchingSection();

  const handleCarouselItemPress = useCallback(
    ({
      playlists,
      bookName,
      bookAuthor,
      bookImageUrl,
    }: UseCreateContinueWatchingSectionArgs) => {
      createContinueWatchingSection({
        playlists: playlists || [],
        bookName,
        bookImageUrl,
        bookAuthor,
      });
    },
    [createContinueWatchingSection],
  );

  const renderBanner = useCallback(
    ({ item }: ListRenderItemInfo<Book>) => {
      return (
        <Banner
          {...item}
          key={item.id}
          additionalContainerStyle={styles.rightIndent}
          onBannerPress={handleCarouselItemPress}
        />
      );
    },
    [handleCarouselItemPress],
  );

  const renderBookCard = useCallback(
    ({ item }: ListRenderItemInfo<Book>) => {
      return (
        <BookCard
          {...item}
          key={item.id}
          additionalContainerStyle={styles.rightIndent}
          onBookCardPress={handleCarouselItemPress}
        />
      );
    },
    [handleCarouselItemPress],
  );

  return (
    <View style={styles.container}>
      {title && <SectionTitle title={title} />}
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

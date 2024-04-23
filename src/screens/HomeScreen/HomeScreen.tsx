import { FC, useCallback } from 'react';
import { FlatList, ListRenderItemInfo, SafeAreaView, View } from 'react-native';
import { styles } from './homeScreen.styles';
import { Section } from '../../models/Section';
import { Carousel } from '../../components/Carousel/Carousel';
import { HomeScreenProps } from '../../navigators/screenTypes';
import { Playlist } from '../../models/Playlist';
import { useHomeScreenSections } from '../../hooks/useHomeScreenSections';

const keyExtractor = (item: Section) => item.id.toString();

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const sections = useHomeScreenSections();

  const handleCarouselItemPress = useCallback(
    (playlists: Playlist[]) => {
      navigation.navigate('ViewEpisodes', { playlists });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Section>) => {
      return (
        <Carousel
          {...item}
          key={item.id}
          onCarouselItemPress={handleCarouselItemPress}
        />
      );
    },
    [handleCarouselItemPress],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          data={sections}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </SafeAreaView>
  );
};

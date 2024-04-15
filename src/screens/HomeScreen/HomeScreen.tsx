import { FC, useCallback } from 'react';
import { FlatList, ListRenderItemInfo, SafeAreaView, View } from 'react-native';
import { styles } from './homeScreen.styles';
import sections from '../../../sections.json';
import { Section } from '../../models/Section';
import { Carousel } from '../../components/Carousel/Carousel';
import { HomeScreenProps } from '../../navigators/screenTypes';
import { Playlist } from '../../models/Playlist';

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
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
          data={sections.sections as Section[]}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

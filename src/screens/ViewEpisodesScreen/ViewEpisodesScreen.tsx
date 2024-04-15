import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  View,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { styles } from './viewEpisodesScreen.styles';
import { FC, useCallback, useRef } from 'react';
import { ViewEpisodesScreenProps } from '../../navigators/screenTypes';
import { Video, ResizeMode } from 'expo-av';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { OnViewableItemsChangedArgs } from './viewEpisodesScreen.types';
import { VIEWABILITY_CONFIG } from './viewEpisodesScreen.settings';
import { Playlist } from '../../models/Playlist';

const keyExtractor = (item: { id: number }) => item.id.toString();

export const ViewEpisodesScreen: FC<ViewEpisodesScreenProps> = ({
  navigation,
  route: {
    params: { playlists },
  },
}) => {
  const playlistRefs = useRef<Video[]>([]);

  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const playlistHeight =
    Dimensions.get('window').height - headerHeight - insets.bottom;

  const setCurrentEpisodeIndexToNavigationParams = (index: number) => {
    navigation.setParams({
      currentEpisode: index,
    });
  };

  const onViewableItemsChanged = ({
    viewableItems,
    changed,
  }: OnViewableItemsChangedArgs) => {
    const currentViewableItem = viewableItems[0];
    const currentViewableItemIndex = currentViewableItem?.index;
    const index = currentViewableItemIndex ? currentViewableItemIndex + 1 : 1;
    setCurrentEpisodeIndexToNavigationParams(index);

    changed.forEach(viewableItem => {
      const viewableItemRef = playlistRefs.current[Number(viewableItem.key)];

      if (viewableItemRef) {
        if (viewableItem.isViewable) {
          viewableItemRef.playAsync();
        } else {
          viewableItemRef.pauseAsync();
        }
      }
    });
  };

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Playlist>) => (
      <View style={{ height: playlistHeight }}>
        <Video
          source={{
            uri: item.url,
          }}
          shouldPlay={false}
          useNativeControls
          resizeMode={ResizeMode.COVER}
          style={styles.backgroundVideo}
          ref={(playlistRef: Video) => {
            playlistRefs.current[item.id] = playlistRef;
          }}
        />
      </View>
    ),
    [playlistHeight],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={playlists}
        renderItem={renderItem}
        viewabilityConfig={VIEWABILITY_CONFIG}
        onViewableItemsChanged={onViewableItemsChanged}
        pagingEnabled
        decelerationRate="normal"
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

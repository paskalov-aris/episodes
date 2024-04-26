import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  View,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { styles } from './viewEpisodesScreen.styles';
import { FC, useCallback, useContext, useEffect, useRef } from 'react';
import { ViewEpisodesScreenProps } from '../../navigators/screenTypes';
import { Video, ResizeMode } from 'expo-av';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { OnViewableItemsChangedArgs } from './viewEpisodesScreen.types';
import { VIEWABILITY_CONFIG } from './viewEpisodesScreen.settings';
import { Playlist } from '../../models/Playlist';
import { asyncStorageService } from '../../services/asyncStorage/asyncStorageService';
import { useFocusEffect } from '@react-navigation/native';
import { ContinueWatchingContext } from '../../contexts/ContinueWatchingContext';

const keyExtractor = (item: { id: number }) => item.id.toString();

export const ViewEpisodesScreen: FC<ViewEpisodesScreenProps> = ({
  navigation,
  route: {
    params: { playlists = [], currentVideoIndex = 0, positionMillis = 0 },
  },
}) => {
  const flatListRef = useRef<FlatList>(null);
  const playlistRefs = useRef<Video[]>([]);

  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const screenHeight = Dimensions.get('window').height;
  const playlistHeight = screenHeight - headerHeight - insets.bottom;

  const { continueWatchingSection, setContinueWatchingSection } = useContext(
    ContinueWatchingContext,
  );

  const setCurrentEpisodeIndexToNavigationParams = (index: number) => {
    const episodeNumber = index + 1;

    navigation.setParams({
      screenTitle: `Episode ${episodeNumber}`,
      currentVideoIndex: index,
    });
  };

  const onViewableItemsChanged = ({
    viewableItems,
    changed,
  }: OnViewableItemsChangedArgs) => {
    const currentViewableItem = viewableItems[0];
    const currentViewableItemIndex = currentViewableItem?.index;
    setCurrentEpisodeIndexToNavigationParams(currentViewableItemIndex || 0);

    changed.forEach(viewableItem => {
      const viewableItemRef = playlistRefs.current[viewableItem.index || 0];

      if (viewableItemRef) {
        if (viewableItem.isViewable) {
          if (positionMillis && viewableItem.index === currentVideoIndex) {
            viewableItemRef.playFromPositionAsync(positionMillis);
          } else {
            viewableItemRef.playAsync();
          }
        } else {
          viewableItemRef.pauseAsync();
        }
      }
    });
  };

  const getItemLayout = useCallback(
    (_: unknown, index: number) => {
      return {
        length: playlistHeight,
        offset: playlistHeight * index,
        index,
      };
    },
    [playlistHeight],
  );

  useFocusEffect(
    useCallback(() => {
      if (currentVideoIndex && currentVideoIndex <= playlists.length) {
        flatListRef.current?.scrollToIndex({
          animated: true,
          index: currentVideoIndex,
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playlists.length]),
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', async () => {
      try {
        const currentPlaylistRef = playlistRefs.current[currentVideoIndex];
        const playbackStatus = await currentPlaylistRef.getStatusAsync();

        if (playbackStatus.isLoaded && continueWatchingSection) {
          setContinueWatchingSection?.({
            ...continueWatchingSection,
            data: {
              ...continueWatchingSection.data,
              currentVideoIndex: currentVideoIndex,
              positionMillis: playbackStatus.positionMillis,
            },
          });
          asyncStorageService.mergeData('continueWatchingSection', {
            data: {
              playlists: playlists,
              currentVideoIndex: currentVideoIndex,
              positionMillis: playbackStatus.positionMillis,
            },
          });
        }
      } catch (error) {
        // TODO: handle error
      }
    });

    return unsubscribe;
  }, [
    continueWatchingSection,
    currentVideoIndex,
    navigation,
    playlists,
    setContinueWatchingSection,
  ]);

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<Playlist>) => (
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
            playlistRefs.current[index] = playlistRef;
          }}
        />
      </View>
    ),
    [playlistHeight],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        getItemLayout={getItemLayout}
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

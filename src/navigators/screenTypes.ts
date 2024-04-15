import { RouteProp } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Playlist } from '../models/Playlist';

export type RootStackParamList = {
  Home: undefined;
  ViewEpisodes: {
    playlists: Playlist[];
    currentEpisode?: number;
  };
};

type RootStackScreenProps = NativeStackScreenProps<RootStackParamList>;

export type RootStackScreenOptions<RouteName extends keyof RootStackParamList> =

    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<RootStackParamList, RouteName>;
        navigation: RootStackScreenProps['navigation'];
      }) => NativeStackNavigationOptions);

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type ViewEpisodesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ViewEpisodes'
>;

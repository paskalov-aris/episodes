import { RouteProp } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  ViewEpisodes: {
    playlistUrl: string;
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

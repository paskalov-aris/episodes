import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './screenTypes';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import {
  HOME_SCREEN_OPTIONS,
  VIEW_EPISODES_SCREEN_OPTIONS,
} from './rootStackOptions';
import { ViewEpisodesScreen } from '../screens/ViewEpisodesScreen/ViewEpisodesScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={HOME_SCREEN_OPTIONS}
      />
      <Stack.Screen
        name="ViewEpisodes"
        component={ViewEpisodesScreen}
        options={VIEW_EPISODES_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};

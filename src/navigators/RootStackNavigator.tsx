import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './screenTypes';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { HOME_SCREEN_OPTIONS } from './rootStackOptions';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={HOME_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};

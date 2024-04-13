import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './screenTypes';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

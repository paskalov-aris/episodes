import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HeaderTitle } from '../components/HeaderTitle/HeaderTitle';
import { COLORS } from '../constants/colors';
import { HeaderRightButton } from '../components/HeaderRightButton/HeaderRightButton';

export const HOME_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: COLORS.darkGray,
  },
  headerTitle: props => <HeaderTitle align="left" {...props} />,
  headerRight: HeaderRightButton,
};

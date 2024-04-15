import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HeaderTitle } from '../components/HeaderTitle/HeaderTitle';
import { COLORS } from '../constants/colors';
import { HeaderRightButton } from '../components/HeaderRightButton/HeaderRightButton';
import { RootStackScreenOptions } from './screenTypes';
import { HeaderLeftButton } from '../components/HeaderLeftButton/HeaderLeftButton';

export const HOME_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: COLORS.darkGray,
  },
  headerTitle: props => <HeaderTitle align="left" {...props} />,
  headerRight: HeaderRightButton,
};

export const VIEW_EPISODES_SCREEN_OPTIONS: RootStackScreenOptions<
  'ViewEpisodes'
> = ({
  navigation,
  route: {
    params: { currentEpisode = 1 },
  },
}) => ({
  headerStyle: {
    backgroundColor: COLORS.darkGray,
  },
  headerBackVisible: false,
  headerTitle: props => (
    <HeaderTitle
      align="center"
      customTitle={`Episode ${currentEpisode}`}
      {...props}
    />
  ),
  headerLeft: props => (
    <HeaderLeftButton {...props} onPress={navigation.goBack} />
  ),
});

import { FC } from 'react';
import { View, Image } from 'react-native';
import { HEADER_ICONS } from '../../constants/icons/icons';

export const HeaderRightButton: FC = () => (
  <View>
    <Image source={HEADER_ICONS.search} />
  </View>
);

import { View, TouchableOpacity, Image } from 'react-native';
import { HEADER_ICONS } from '../../constants/icons/icons';
import { FC } from 'react';
import { HeaderLeftButtonProps } from './headerLeftButton.types';

export const HeaderLeftButton: FC<HeaderLeftButtonProps> = ({ onPress }) => (
  <View>
    <TouchableOpacity onPress={onPress}>
      <Image source={HEADER_ICONS.close} />
    </TouchableOpacity>
  </View>
);

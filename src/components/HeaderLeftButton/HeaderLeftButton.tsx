import { View, TouchableOpacity, Image } from 'react-native';
import { HEADER_ICONS } from '../../constants/icons/icons';
import { FC } from 'react';
import { HeaderLeftButtonProps } from './headerLeftButton.types';
import { styles } from './headerLeftButton.styles';

export const HeaderLeftButton: FC<HeaderLeftButtonProps> = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Image source={HEADER_ICONS.close} />
    </TouchableOpacity>
  </View>
);

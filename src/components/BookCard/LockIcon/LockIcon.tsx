import { FC } from 'react';
import { Image, View } from 'react-native';
import { styles } from './lockIcon.styles';
import { BOOK_CARD_ICONS } from '../../../constants/icons/icons';

export const LockIcon: FC = () => (
  <View style={styles.container}>
    <View style={styles.lockIconContainer}>
      <View style={styles.lockIcon}>
        <Image source={BOOK_CARD_ICONS.lock} />
      </View>
    </View>
  </View>
);

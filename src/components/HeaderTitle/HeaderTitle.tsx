import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './headerTitle.styles';
import { HeaderTitleProps } from './headerTytle.types';

export const HeaderTitle: FC<HeaderTitleProps> = ({ align, children }) => {
  const leftAligned = align === 'left' ? styles.alignLeft : null;

  return (
    <View style={[styles.container, leftAligned]}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

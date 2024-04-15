import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './headerTitle.styles';
import { HeaderTitleProps } from './headerTytle.types';

export const HeaderTitle: FC<HeaderTitleProps> = ({
  align,
  customTitle,
  children,
}) => {
  const leftAligned = align === 'left' ? styles.alignLeft : null;

  const title = customTitle || children;

  return (
    <View style={[styles.container, leftAligned]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

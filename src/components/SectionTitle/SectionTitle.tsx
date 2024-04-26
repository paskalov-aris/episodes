import { FC } from 'react';
import { SectionTitleProps } from './sectionTitle.types';
import { Text } from 'react-native';
import { styles } from './sectionTitle.styles';

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

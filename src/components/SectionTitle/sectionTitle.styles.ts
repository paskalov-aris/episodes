import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { NUNITO_SANS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontFamily: NUNITO_SANS.bold,
    fontSize: 20,
    lineHeight: 24,
    paddingVertical: 16,
  },
});

import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { NUNITO_SANS } from '../../../constants/fonts';

export const styles = StyleSheet.create({
  releaseDate: {
    color: COLORS.blue,
    fontFamily: NUNITO_SANS.extraBold,
    fontSize: 11,
    lineHeight: 14,
    textTransform: 'uppercase',
    marginBottom: 4,
    maxWidth: 120,
  },
});

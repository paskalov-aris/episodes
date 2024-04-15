import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { NUNITO_SANS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginBottom: 28,
  },
  sliderTitle: {
    color: COLORS.white,
    fontFamily: NUNITO_SANS.bold,
    fontSize: 20,
    lineHeight: 24,
    paddingVertical: 16,
  },
  carousel: {
    width: '100%',
  },
  rightIndent: {
    marginRight: 12,
  },
});

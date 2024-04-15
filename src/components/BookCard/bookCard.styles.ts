import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { NUNITO_SANS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    width: 120,
  },
  bookCover: {
    height: 150,
    width: '100%',
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    color: COLORS.lightGray,
    fontFamily: NUNITO_SANS.semiBold,
    fontSize: 14,
    lineHeight: 17,
    maxWidth: 120,
  },
});

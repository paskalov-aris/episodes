import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { NUNITO_SANS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.blueSecondary,
    height: 68,
    width: '100%',
    paddingVertical: 6,
    paddingLeft: 6,
    paddingRight: 16,
    borderRadius: 12,
  },
  bookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookImage: {
    width: 44,
    height: 56,
    borderRadius: 8,
    marginRight: 12,
  },
  bookName: {
    color: COLORS.lightGray,
    fontFamily: NUNITO_SANS.bold,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 4,
  },
  bookAuthor: {
    color: COLORS.lightGrayFourth,
    fontFamily: NUNITO_SANS.regular,
    fontSize: 14,
    lineHeight: 18,
  },
});

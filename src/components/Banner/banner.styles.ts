import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { NUNITO_SANS } from '../../constants/fonts';
import { BANNER_BORDER_RADIUS } from './banner.settings';

export const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderBottomLeftRadius: BANNER_BORDER_RADIUS,
    borderBottomRightRadius: BANNER_BORDER_RADIUS,
    opacity: 0.6,
  },
  container: {
    width: '100%',
    height: 216,
  },
  backgroundImage: {
    flex: 1,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 16,
    paddingLeft: 16,
    zIndex: 2,
  },
  image: {
    borderRadius: BANNER_BORDER_RADIUS,
    resizeMode: 'cover',
  },
  genreWrapper: {
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    backgroundColor: COLORS.darkGray,
    borderRadius: 4,
  },
  genre: {
    color: COLORS.lightGrayThird,
    fontFamily: NUNITO_SANS.bold,
    fontSize: 11,
    lineHeight: 21,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  title: {
    color: COLORS.lightGraySecondary,
    fontFamily: NUNITO_SANS.bold,
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 4,
  },
  author: {
    color: COLORS.gray,
    fontFamily: NUNITO_SANS.regular,
    fontSize: 13,
    lineHeight: 16,
  },
});

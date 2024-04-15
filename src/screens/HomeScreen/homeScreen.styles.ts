import { StyleSheet } from 'react-native';
import { NUNITO_SANS } from '../../constants/fonts';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.darkGray,
  },
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
  },
  text: {
    color: COLORS.white,
    fontFamily: NUNITO_SANS.regular,
  },
});

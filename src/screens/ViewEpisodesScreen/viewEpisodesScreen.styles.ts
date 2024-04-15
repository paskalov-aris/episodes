import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { NUNITO_SANS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.darkGray,
  },
  text: {
    color: COLORS.white,
    fontFamily: NUNITO_SANS.semiBold,
    fontSize: 18,
  },
});

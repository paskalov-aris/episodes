import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { NUNITO_SANS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  alignLeft: {
    flex: 1,
  },
  title: {
    color: COLORS.white,
    fontFamily: NUNITO_SANS.bold,
    fontSize: 20,
  },
});

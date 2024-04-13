import { StyleSheet } from 'react-native';
import { NUNITO_SANS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: NUNITO_SANS.regular,
  },
});

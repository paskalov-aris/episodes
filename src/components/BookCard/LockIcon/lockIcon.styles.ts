import { StyleSheet } from 'react-native';
import { LOCK_ICON_SIZE } from './lockIcon.settings';
import { COLORS } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  lockIconContainer: {
    width: LOCK_ICON_SIZE,
    height: LOCK_ICON_SIZE,
    borderRadius: LOCK_ICON_SIZE / 2,
    backgroundColor: COLORS.whiteTransparent,
  },
  lockIcon: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

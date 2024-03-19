import {StyleSheet} from 'react-native';
import {color} from '../constants/color';

export const commonStyle = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: color.black},
  largeIconSize: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  mediumIconSize: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
  },
});

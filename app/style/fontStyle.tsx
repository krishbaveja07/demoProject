import {StyleSheet} from 'react-native';
import {color} from '../constants/color';

export const fontStyle = StyleSheet.create({
  largeWhiteText: {
    fontSize: 23,
    color: color.white,
    fontWeight: 'bold',
  },
  mediumWhiteText: {
    fontSize: 18,
    color: color.white,
    fontWeight: '500',
  },
  smallBlackText: {
    fontSize: 13,
    color: color.black,
    fontWeight: '500',
  },
  smallGreenText: {
    fontSize: 13,
    color: color.green,
    fontWeight: '500',
  },
  smallRedText: {
    fontSize: 13,
    color: color.red,
    fontWeight: '500',
  },
});

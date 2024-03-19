import {StyleSheet} from 'react-native';
import {color} from '../../../constants/color';

export const style = StyleSheet.create({
  upperContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  lowerContianer: {
    flex: 9,
    backgroundColor: color.white,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  dataContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    backgroundColor: color.white,
    padding: '5%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: color.black,
    elevation: 10,
    marginBottom: '2%',
  },
  alignData: {paddingTop: '2%'},
  imageSize: {width: 150, height: 150, resizeMode: 'contain'},
  logoutContianer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imageAlign: {marginRight: '5%'},
});

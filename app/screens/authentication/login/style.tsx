import {StyleSheet} from 'react-native';
import {color} from '../../../constants/color';

export const style = StyleSheet.create({
  upperContainer: {flex: 3, justifyContent: 'flex-end', alignItems: 'center'},
  middleContainer: {
    flex: 3.5,
    backgroundColor: color.white,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: 'center',
  },
  lowerContainer: {
    flex: 3.5,
    justifyContent: 'flex-end',
    backgroundColor: color.white,
  },
  textInputStyle: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: color.grey,
    borderRadius: 5,
    marginTop: '8%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '90%',
    backgroundColor: color.black,
    alignSelf: 'center',
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: '10%',
  },
  imageAlign: {margin: '2%'},
  largeHeadingAlign: {marginBottom: '1%'},
  smallHeadingAlign: {marginBottom: '5%'},
  errorAlign: {alignSelf: 'center', marginTop: '2%'},
});

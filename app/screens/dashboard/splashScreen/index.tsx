import React, {useEffect} from 'react';
import {View} from 'react-native';
import {style} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import * as RootNavigation from '../../../utility/RootNavigation';
import {data} from '../../../data';
import {useDispatch} from 'react-redux';
import {productDataFunction} from '../../../redux/reducers/productSlice';
const SplashScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    for (let i in data) {
      if (data) {
        dispatch(productDataFunction(data[i].userData));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  useEffect(() => {
    setTimeout(async () => {
      try {
        const getData = await AsyncStorage.getItem('loginData');
        const parseData = getData ? JSON.parse(getData) : null;
        if (parseData) {
          let resetAction = CommonActions.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
          RootNavigation.dispatch(resetAction);
        } else {
          let resetAction = CommonActions.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
          RootNavigation.dispatch(resetAction);
        }
      } catch (error) {
        console.log(error);
      }
    }, 3000);
  }, []);

  return <View style={style.mainContianer} />;
};

export default SplashScreen;

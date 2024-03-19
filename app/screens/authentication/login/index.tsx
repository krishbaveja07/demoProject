import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {style} from './style';
import {commonStyle} from '../../../style/commonStyle';
import {fontStyle} from '../../../style/fontStyle';
import {image} from '../../../constants/image';
import * as RootNavigation from './../../../utility/RootNavigation';
import {data} from '../../../data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {productDataFunction} from '../../../redux/reducers/productSlice';
import {CommonActions} from '@react-navigation/native';
const Login = () => {
  const [email, setEmail] = useState<any>(null);
  const [password, setPassword] = useState<any>(null);
  const dispatch = useDispatch();
  const setAsynchStorage = async (userData: any) => {
    try {
      const setData = JSON.stringify(userData);
      await AsyncStorage.setItem('loginData', setData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    for (let i in data) {
      if (
        data[i].userLoginCredentials.email === email &&
        data[i].userLoginCredentials.password === password
      ) {
        setAsynchStorage(data[i].userLoginCredentials);
        dispatch(productDataFunction(data[i].userData));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  return (
    <View style={commonStyle.mainContainer}>
      <View style={style.upperContainer}>
        <Text style={[fontStyle.largeWhiteText, style.largeHeadingAlign]}>
          Hello
        </Text>
        <Text style={[fontStyle.mediumWhiteText, style.smallHeadingAlign]}>
          Sign in to your account
        </Text>
      </View>
      <View style={style.middleContainer}>
        <View style={style.textInputStyle}>
          <Image
            style={[commonStyle.mediumIconSize, style.imageAlign]}
            source={image.mailEmptyBlack}
          />
          <TextInput
            placeholder="Enter your email address"
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </View>
        <View style={style.textInputStyle}>
          <Image
            style={[commonStyle.mediumIconSize, style.imageAlign]}
            source={image.lockEmptyBlack}
          />
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>
      </View>
      <View style={style.lowerContainer}>
        <TouchableOpacity
          onPress={() => {
            for (let i in data) {
              if (
                data[i].userLoginCredentials.email === email &&
                data[i].userLoginCredentials.password === password
              ) {
                let resetAction = CommonActions.reset({
                  index: 0,
                  routes: [{name: 'Home'}],
                });
                RootNavigation.dispatch(resetAction);
              }
            }
          }}
          style={style.buttonContainer}>
          <Text style={fontStyle.mediumWhiteText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

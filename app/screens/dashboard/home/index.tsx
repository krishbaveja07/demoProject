import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {commonStyle} from '../../../style/commonStyle';
import {useDispatch, useSelector} from 'react-redux';
import {style} from './style';
import {fontStyle} from '../../../style/fontStyle';
import {image} from '../../../constants/image';
import {CommonActions} from '@react-navigation/native';
import * as RootNavigation from '../../../utility/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {productDataFunction} from '../../../redux/reducers/productSlice';
const Home = () => {
  const dispatch = useDispatch();
  const {productData} = useSelector((state: any) => state.product);
  return (
    <View style={commonStyle.mainContainer}>
      <View style={style.upperContainer}>
        <Text style={fontStyle.largeWhiteText}>Product List</Text>
        <View style={style.logoutContianer}>
          <TouchableOpacity
            onPress={async () => {
              await AsyncStorage.clear();
              dispatch(productDataFunction(null));
              let resetAction = CommonActions.reset({
                index: 0,
                routes: [{name: 'Login'}],
              });
              RootNavigation.dispatch(resetAction);
            }}>
            <Image
              style={[commonStyle.largeIconSize, style.imageAlign]}
              source={image.logout}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.lowerContianer}>
        <FlatList
          data={productData}
          renderItem={({item}) => (
            <View style={style.dataContainer}>
              <Image style={style.imageSize} source={item.image} />
              <Text style={fontStyle.smallBlackText}>
                Product Name : {item.productName}
              </Text>
              <Text style={[fontStyle.smallBlackText, style.alignData]}>
                Prize :{' '}
                <Text style={fontStyle.smallGreenText}>{item.prize}</Text>
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Home;

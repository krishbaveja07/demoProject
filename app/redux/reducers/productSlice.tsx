import {createSlice} from '@reduxjs/toolkit';

const LoginSlice = createSlice({
  name: 'LoginSlice',
  initialState: {productData: null},
  reducers: {
    productDataFunction: (state: any, data: {type: any; payload: any}) => {
      state.productData = data.payload;
    },
  },
});

export const {productDataFunction} = LoginSlice.actions;
export default LoginSlice.reducer;

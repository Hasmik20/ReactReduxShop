import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems:[],
  cartAmount: 0,
  total: 0,
  isLoading: true,
}

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartAmount: (state, {payload}) => {
      const cartId = state.cartItems.find(item => item.id === payload)
     cartId.amount = cartId.amount + 1
    },
    minusCartAmount(state,{payload}) {
      const cartId = state.cartItems.find(item => item.id === payload)
      cartId.amount = cartId.amount - 1
    },
    clearCart(state){
      state.cartItems = []
    },
    removeCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
    },
    calculateTotalAmount(state) {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach(item => {
        amount += item.amount
        total += amount * item.price
     })
      state.cartAmount = amount
      state.total = total
    }
  },
   extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
})

export const {addCartAmount, clearCart, removeCart, minusCartAmount, calculateTotalAmount} = cartSlice.actions
export default cartSlice.reducer
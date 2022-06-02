import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/catrSlice'
import modalSlice from './features/modalSlice'
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    modal:modalSlice
  },
})
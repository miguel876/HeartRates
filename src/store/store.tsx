import { configureStore, } from '@reduxjs/toolkit'
import heartRatesReducer from './slices/dataSlice'

export default configureStore({
  reducer: {
    heartRates: heartRatesReducer
  } as any,
})
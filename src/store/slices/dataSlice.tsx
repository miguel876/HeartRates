import { createSlice } from '@reduxjs/toolkit'

interface HeartRates {
  minimum: string,
  maximum: string,
  meanAverage: string,
  dateTime: string,
};

export const heartRatesSlice = createSlice({
  name: 'heartrates',
  initialState: {
    data: [] as HeartRates[],
    filteredData: [] as HeartRates[],
    time: 0 as number,
    type: 'all' as string,
  },
  reducers: {
    add: (state: { data: HeartRates[], filteredData: HeartRates[]}, action: { payload: HeartRates[]}) => {
      state.data = action.payload
      state.filteredData = action.payload
    },
    filterTime: (state: { data: HeartRates[], filteredData: HeartRates[], time: number}, action: { payload: number}) => {
      state.time = action.payload
      state.filteredData =  action.payload === 0 ? state.data : state.data.filter((val: HeartRates, _i, arr: HeartRates[]) => (new Date(arr[arr.length - 1].dateTime).getMonth() - new Date(val?.dateTime).getMonth()) < action.payload)
    },
    filterType: (state: { type: string}, action: { payload: string}) => {
      state.type = action.payload
    },
    resetFilters: (state: { filteredData: HeartRates[], data: HeartRates[] }) => {
      state.filteredData = state.data
    }
  },
})

export const { add, filterTime, filterType, resetFilters } = heartRatesSlice.actions

export default heartRatesSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

export const filterFieldSlice = createSlice({
  name: 'filterField',
  initialState: '',
  reducers: {
    setFilterValue(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setFilterValue } = filterFieldSlice.actions;

export const getFilterFieldValue = state => state.filterField;

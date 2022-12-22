import { createSlice } from '@reduxjs/toolkit';

export const filterFieldSlice = createSlice({
  name: 'filterField',
  initialState: '',
  reducers: {
    setFilterValue(_, action) {
      return action.payload;
    },
  },
});

export const { setFilterValue } = filterFieldSlice.actions;

export const getFilterFieldValue = state => state.filterField;

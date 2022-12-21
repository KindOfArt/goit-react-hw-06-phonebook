import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const filterPersistConfig = {
  key: 'filterValue',
  storage,
  whiteList: ['value'],
};

const filterFieldSlice = createSlice({
  name: 'filterField',
  initialState: { value: '' },
  reducers: {
    filterChange(state, action) {
      state.value = action.payload;
    },
  },
});

export const filterFieldPersistReducer = persistReducer(
  filterPersistConfig,
  filterFieldSlice.reducer
);
export const { filterChange } = filterFieldSlice.actions;
export const getFilterFieldValue = state => state.filterField.value;

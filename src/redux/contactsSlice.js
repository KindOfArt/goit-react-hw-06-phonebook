import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whiteList: ['contacts', 'filterField'],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filterField: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      return {
        contacts: state.contacts.filter(({ id }) => id !== action.payload),
        filterField: state.filterField,
      };
    },
    filterChange(state, action) {
      state.filterField = action.payload;
    },
  },
});

export const contactsPersistReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, filterChange } =
  contactsSlice.actions;

export const getContactsList = state => state.phonebook.contacts;
export const getFilterFieldValue = state => state.phonebook.filterField;

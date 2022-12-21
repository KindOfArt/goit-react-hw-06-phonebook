import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contactsList',
  storage,
  whiteList: ['contactsList'],
};

const contactsSlice = createSlice({
  name: 'contactsList',
  initialState: { list: [] },
  reducers: {
    addContact(state, action) {
      state.list.push(action.payload);
    },
    deleteContact(state, action) {
      return { list: state.list.filter(({ id }) => id !== action.payload) };
    },
  },
});

export const contactsPersistReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContactsList = state => state.contacts.list;

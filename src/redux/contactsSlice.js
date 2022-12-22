import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: { id: nanoid(6), name, number },
        };
      },
    },
    deleteContact(state, action) {
      const idx = state.findIndex(({ id }) => id === action.payload);
      state.splice(idx, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContactsList = state => state.contacts;

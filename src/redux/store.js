import { configureStore } from '@reduxjs/toolkit';
import { contactsPersistReducer } from './contactsSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filterFieldPersistReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsPersistReducer,
    filterField: filterFieldPersistReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

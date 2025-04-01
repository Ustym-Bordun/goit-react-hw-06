import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contactsSlice';
import filtersReduser from './filtersSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: 'items',
};

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReduser);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

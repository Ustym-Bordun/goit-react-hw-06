import { configureStore } from '@reduxjs/toolkit';

import contactsReduser from './contactsSlice';
import filtersReduser from './filtersSliceRename';

const rootReducer = {
  contacts: contactsReduser,
  filters: filtersReduser,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

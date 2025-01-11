import { configureStore } from '@reduxjs/toolkit';

import themeSlice from '../features/themeSlice';
import searchSlice from '../features/searchSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    search: searchSlice,
  },
  devTools: true,
});

export default store;

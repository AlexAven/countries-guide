import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ui: {
    currentSearch: null,
  },
};

const searchSlice = createSlice({
  name: '@@search',
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.ui.currentSearch = payload;
    },
  },
});

export default searchSlice.reducer;
export const { setSearch } = searchSlice.actions;

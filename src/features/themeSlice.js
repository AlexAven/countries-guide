import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ui: {
    currentTheme: null,
  },
};

const themeSlice = createSlice({
  name: '@@theme',
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.ui.currentTheme = payload;
    },
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;

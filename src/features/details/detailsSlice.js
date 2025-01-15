import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentCountry: null,
  neighbors: [],
  status: 'idle',
  error: null,
};

const detailsSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const detailsReducer = detailsSlice.reducer;
export const { clearDetails } = detailsSlice.actions;

// selectors
export const selectCurrentCountry = (state) => state.details.currentCountry;
export const selectDetails = (state) => state.details;
export const selectNeighbors = (state) => state.details.neighbors;

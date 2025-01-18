import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadCountryByName = createAsyncThunk(
  '@@details/load-country-by-name',
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name));
  },
);

export const loadNeighbors = createAsyncThunk(
  '@@details/load-neighbors',
  (borders, { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders));
  },
);

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
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCountryByName.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.currentCountry = payload.data[0];
      })
      .addCase(loadNeighbors.fulfilled, (state, { payload }) => {
        state.neighbors = payload.data.map((country) => country.name);
      });
  },
});

export const detailsReducer = detailsSlice.reducer;
export const { clearDetails } = detailsSlice.actions;

// selectors
export const selectCurrentCountry = (state) => state.details.currentCountry;
export const selectDetails = (state) => state.details;
export const selectNeighbors = (state) => state.details.neighbors;

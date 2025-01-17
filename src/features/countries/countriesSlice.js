import { createSelector } from 'reselect';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadCountries = createAsyncThunk(
  '@@countries/load-countries',
  (_, { extra: { client, api } }) => {
    return client.get(api.ALL_COUNTRIES);
  },
);

const initialState = {
  status: 'idle',
  error: null,
  list: [],
};

const countriesSlice = createSlice({
  name: '@@countires',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCountries.fulfilled, (state, { payload }) => {
        state.status = 'received';
        state.list = payload.data;
      });
  },
});

export const countryReducer = countriesSlice.reducer;

// selectors
export const selectAllCountries = (state) => state.countries.list;

// memoized selectors
export const selectFilters = (state) => state.controls;

export const selectVisibleCountries = createSelector(
  [selectAllCountries, selectFilters],
  (countries, { search = '', region = '' }) => {
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(search.toLowerCase()) &&
        country.region.includes(region),
    );
  },
);

export const selectCountriesInfo = createSelector([(state) => state.countries], (countries) => ({
  status: countries.status,
  error: countries.error,
  qty: countries.list.length,
}));

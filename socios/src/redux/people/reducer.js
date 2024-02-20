import { createSlice } from '@reduxjs/toolkit';
import { getAllPeople } from './actions';

const initialState = {
  people: null,
  loading: false,
  error: null,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPeople.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPeople.fulfilled, (state, action) => {
        state.loading = false;
        state.people = action.payload;
        state.error = null;
      })
      .addCase(getAllPeople.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default peopleSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { getAllPeople,getPersonById } from './actions';

const initialState = {
  people: null,
  person:null,
  loading: false,
  error: null,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //GET ALL PEOPLE
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
      })
      //PERSON BY ID
      .addCase(getPersonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPersonById.fulfilled, (state, action) => {
        state.loading = false;
        state.person = action.payload;
        state.error = null;
      })
      .addCase(getPersonById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default peopleSlice.reducer;

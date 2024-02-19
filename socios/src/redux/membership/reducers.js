import { createSlice } from '@reduxjs/toolkit';
import { getAllMembership } from './actions';

const initialState = {
  membershipData: null,
  loading: false,
  error: null,
};

const membershipSlice = createSlice({
  name: 'membership',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMembership.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMembership.fulfilled, (state, action) => {
        state.loading = false;
        state.membershipData = action.payload;
        state.error = null;
      })
      .addCase(getAllMembership.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default membershipSlice.reducer;

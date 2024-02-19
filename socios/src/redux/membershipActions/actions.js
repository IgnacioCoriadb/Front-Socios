import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_KEY;

export const getAllMembership = createAsyncThunk(
  'getAllMembership/fetch',
  async () => {
    const response = await axios.get(`${apiUrl}/membership`);
    return response.data;
  }
);

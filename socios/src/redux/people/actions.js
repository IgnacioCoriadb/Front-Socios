import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_KEY;

export const getAllPeople = createAsyncThunk(
  'getAllPeople/fetch',
  async () => {
    const response = await axios.get(`${apiUrl}/people`);
    return response.data;
  }
);
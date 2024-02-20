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

export const getPersonById = createAsyncThunk(
  'getPersonById/fetch',
  async(id)=>{
    const response = await axios.get(`${apiUrl}/people/${id}`);
    return response.data;
  }
);
export const updatePerson = createAsyncThunk(
  'people/updatePerson', 
  async ({ id, values }, thunkAPI) => {
    try {
      const response = await axios.put(`${apiUrl}/people/${id}`, values);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

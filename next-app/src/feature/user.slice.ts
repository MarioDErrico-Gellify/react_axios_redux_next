import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserState, MantineFormDTO } from './user.types';
import axios from 'axios';
import { HttpStatus } from '@/constants/costants';
import { USER_ERROR, USER_START, USER_SUCCESS } from './user.action';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const initialState: UserState = {
  name: "",
  age: 0,
  email: "",
  status: 'idle',
  action: '',
  error: '',
};

export const registerUser = createAsyncThunk(
  USER_START,
  async (body: MantineFormDTO) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // Simulating delay of 4 seconds
      await new Promise((resolve) => setTimeout(resolve, 4000));
      const response = await axios.post(API_URL!, body, config);
      console.log('Dati ricevuti dalla chiamata API:', response.data, HttpStatus.OK);
      return response.data; 
    } catch (error) {
      console.error('Errore durante la chiamata API:', error);
      throw error;  
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}, 
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state: UserState) => {
        state.action = USER_START;
        state.status = 'loading';
        state.error = '';
      })
      .addCase(registerUser.fulfilled, (state: UserState, action) => {
        state.action = USER_SUCCESS;
        state.status = 'success';
        state.error = '';
        state.isAuthenticated = true;
      
        if (action.payload) {
          state.name = action.payload.name || '';
          state.age = action.payload.age || 0;
          state.email = action.payload.email || '';
        }
      })
      .addCase(registerUser.rejected, (state: UserState, action: any) => {
        state.action = USER_ERROR;
        state.status = 'fail';
        state.error = action.error?.response?.data?.message || 'An unknown error occurred';
      });
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice.reducer;

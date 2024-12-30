import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserState, UserFormDTO, initialStateUserForm } from './user.types';
import axios from 'axios';
import { HttpStatus } from '@/constants/costants';
import { USER_ERROR, USER_START, USER_SUCCESS } from './user.action';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

//------------------------

const initialState = initialStateUserForm;

export const simulateRegisterUser = createAsyncThunk(
  USER_START,
  async (body: UserFormDTO, _rejectedWithValue) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // Simulating delay of 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await axios.post(API_URL!, body, config);
      return response.data as UserFormDTO; 
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
      .addCase(simulateRegisterUser.pending, (state: UserState) => {
        state.action = USER_START;
        state.status = HttpStatus.Created;
        state.error = '';
      })
      .addCase(simulateRegisterUser.fulfilled, (state: UserState, action) => {
        state.action = USER_SUCCESS;
        state.status = HttpStatus.OK,
        state.error = '';
        state.isAuthenticated = 'true';
        if (action.payload) {
          state.name = action.payload.name;
          state.age = action.payload.age;
          state.email = action.payload.email;
          localStorage.setItem('ADDED_NEW_USER', state.isAuthenticated);
        }
      })
      .addCase(simulateRegisterUser.rejected, (state: UserState, action : any) => {
        state.action = USER_ERROR;
        state.status = HttpStatus.Bad_Request;
        state.error = action.error?.response?.data?.message || 'An unknown error occurred';
      });
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice.reducer;

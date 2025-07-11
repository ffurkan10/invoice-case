import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

 export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
      const response = await axios.post('https://api-dev.docnova.ai/auth/login/dev', body);
      
      console.log('login:', response.data);

      return response.data;
    } catch (error) {
      console.error('error:', error);
      thunkAPI.dispatch(setError(error.response.data.errorMessage));
      return thunkAPI.rejectWithValue(error.response.data);
    }
  })

const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  jwt: localStorage.getItem('jwt') ? localStorage.getItem('jwt') : null,

  isLoading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.jwt = null;
      localStorage.removeItem('user');
      localStorage.removeItem('jwt');
      window.location.href = '/login'; 
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.jwt = action.payload.jwt;
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('jwt', action.payload.jwt);
        window.location.href = '/';
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
      });
  }
});

export const { logout, setError } = authSlice.actions;
export default authSlice.reducer;

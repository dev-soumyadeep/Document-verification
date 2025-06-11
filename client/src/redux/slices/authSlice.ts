import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/User'; 
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  logout, 
  clearError 
} = authSlice.actions;

export default authSlice.reducer;

// Selectors
export const selectIsAuthenticated = (state: { auth: AuthState }) => 
  state.auth.isAuthenticated;
export const selectUser = (state: { auth: AuthState }) => 
  state.auth.user;
export const selectAuthError = (state: { auth: AuthState }) => 
  state.auth.error;
export const selectAuthLoading = (state: { auth: AuthState }) => 
  state.auth.loading;
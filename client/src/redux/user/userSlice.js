import { createSlice } from '@reduxjs/toolkit';

// Initial state for the user slice
const initialState = {
    currentUser: null,
    error: null,
    loading: false
};

// Creating a slice of state and defining actions using createSlice from Redux Toolkit
const userSlice = createSlice({
    name: 'user', // Name of the slice
    initialState, // Initial state
    reducers: {
        signInStart: (state) => { // Action to handle the start of sign-in
            state.loading = true; // Modifying the loading state to indicate sign-in start
        }, 
        signInSuccess: (state, action) => { 
            state.currentUser = action.payload; 
            state.loading = false; 
            state.error = null; 
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
          },
          updateUserStart: (state) => {
            state.loading = true;
          },
          updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
          },
          updateUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
          },
          deleteUserStart: (state) => {
            state.loading = true;
          },
          deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
          },
          deleteUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
          },
    }
});

// Exporting the user slice and its actions for use in Redux
export const { signInStart, signInSuccess, signInFailure, updateUserFailure, updateUserSuccess, updateUserStart, deleteUserStart, deleteUserFailure, deleteUserSuccess} = userSlice.actions; // Destructuring and exporting the signInStart action

export default userSlice.reducer; // Exporting the reducer function generated by createSlice

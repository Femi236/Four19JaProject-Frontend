import { createSlice } from "@reduxjs/toolkit";

/**
 * Storing application variables related to users
 */
export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: localStorage.getItem("isAuthenticated") || false,
  },
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", true);
    },
    unauthenticate: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", false);
    },
  },
});

// Action creators are generated for each case reducer function
export const { authenticate, unauthenticate } = userSlice.actions;

export default userSlice.reducer;

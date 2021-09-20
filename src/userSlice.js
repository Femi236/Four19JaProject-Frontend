import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("user") || {},
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
    setUser: (state, action) => {
      state.user += action.payload;
      localStorage.setItem("user", state.user);
    },
  },
});

// Action creators are generated for each case reducer function
export const { authenticate, unauthenticate, setUser } = userSlice.actions;

export default userSlice.reducer;

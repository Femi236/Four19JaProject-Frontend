import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("user") || {},
    isAuthenticated: localStorage.getItem("isAuthenticated") || false,
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
      localStorage.setItem("isAuthenticated", state.isAuthenticated);
    },
    setUser: (state, action) => {
      state.user += action.payload;
      localStorage.setItem("user", state.user);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthenticated, setUser } = userSlice.actions;

export default userSlice.reducer;

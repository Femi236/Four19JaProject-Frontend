import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAuthenticated: false,
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action) => {
      state.user += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthenticated, setUser } = userSlice.actions;

export default userSlice.reducer;

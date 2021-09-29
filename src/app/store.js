import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

/**
 * Storing all application variables
 */
export default configureStore({
  reducer: { user: userReducer },
});

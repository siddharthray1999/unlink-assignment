import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from "../Features/RocketsSlice";
export const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

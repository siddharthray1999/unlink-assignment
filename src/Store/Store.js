import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from "../Features/RocketsSlice";
import allRocketsReducer from "../Features/AllrocketSlice";
export const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    allRockets: allRocketsReducer,
  },
});

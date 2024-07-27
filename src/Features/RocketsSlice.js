import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state of the rockets slice
const initialState = {
  rockets: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const API_URL = "https://api.spacexdata.com/v3";

// Define the async thunk to fetch rockets
export const fetchRockets = createAsyncThunk(
  "rockets/fetchRockets",
  async () => {
    const response = await axios.get(`${API_URL}/launches/upcoming`);
    return response.data;
  }
);

export const fetchPastLaunch = createAsyncThunk("fetchPastLaunch", async () => {
  const response = await axios.get(`${API_URL}/launches/past`);
  return response.data;
});

const rocketsSlice = createSlice({
  name: "rockets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;

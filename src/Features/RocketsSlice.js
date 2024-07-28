import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  rockets: [],
  pastLaunches: [],
  status: "idle",
  pastLaunchesStatus: "idle",
  error: null,
  pastLaunchesError: null,
};

const API_URL = "https://api.spacexdata.com/v3";

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
      })
      .addCase(fetchPastLaunch.pending, (state) => {
        state.pastLaunchesStatus = "loading";
      })
      .addCase(fetchPastLaunch.fulfilled, (state, action) => {
        state.pastLaunchesStatus = "succeeded";
        state.pastLaunches = action.payload;
      })
      .addCase(fetchPastLaunch.rejected, (state, action) => {
        state.pastLaunchesStatus = "failed";
        state.pastLaunchesError = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;

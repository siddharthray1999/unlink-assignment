import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.spacexdata.com/v3";

const allRocketsInitialState = {
  rockets: [],
  status: "idle",
  error: null,
};

export const fetchAllRockets = createAsyncThunk(
  "allRockets/fetchAllRockets",
  async () => {
    const response = await axios.get(`${API_URL}/rockets`);
    return response.data;
  }
);

const allRocketsSlice = createSlice({
  name: "allRockets",
  initialState: allRocketsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRockets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllRockets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rockets = action.payload;
      })
      .addCase(fetchAllRockets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default allRocketsSlice.reducer;

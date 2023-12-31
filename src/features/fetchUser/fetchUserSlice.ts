import SERVER_URL from "@/serverUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { userType } from "@/types/types";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${SERVER_URL}/login`, {
        withCredentials: true,
      });
      // console.log("response received from fetchUser api call", response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

interface stateType {
  data: userType | null;
  loading: boolean;
  error: string | undefined | null;
}

const initialState: stateType = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;

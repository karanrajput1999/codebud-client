import SERVER_URL from "@/serverUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { questionType } from "@/types/types";

export const fetchQuestions = createAsyncThunk(
  "user/fetchQuestions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${SERVER_URL}/homepage`, {
        withCredentials: true,
      });
      // console.log(
      //   "response received from fetchQuestions api call",
      //   response.data
      // );

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

interface stateType {
  data: questionType[] | null;
  loading: boolean;
  error: string | undefined | null;
}

const initialState: stateType = {
  data: null,
  loading: false,
  error: null,
};

const fetchQuestionsSlice = createSlice({
  name: "fetchQuestions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchQuestionsSlice.reducer;

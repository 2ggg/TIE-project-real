import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apis } from "../../shared/axios";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  main: [],
};

//메인페이지 데이터 불러오기
export const __getPosts = createAsyncThunk(
  "GET_POSTS",
  async (payload, thunkAPI) => {
    try {
      console.log("겟받아오기");
      const response = await axios.get(`http://localhost:3001/main`);
      console.log("겟 끝");
      console.log("__getPosts", response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch(error) {
      return thunkAPI.rejectWithValue(error.message);
    };
  }
);

const postsSlice = createSlice({
  name: "postList",
  initialState,
  reducers: {},
  extraReducers: {
    //GET_POSTS
    [__getPosts.pending]: (state, action) => {
      //로딩중
      state.isLoading = true;
      state.isError = false;
    },
    [__getPosts.fulfilled]: (state, action) => {
      //응답 성공
      console.log("fulfilled: ", action);
      state.isLoading = false;
      state.isError = false;
      state.main = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      //응답 실패
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  }
});

export default postsSlice.reducer;
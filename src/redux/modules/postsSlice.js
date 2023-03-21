import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/axios";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  posts: [],
};

//메인페이지 데이터 불러오기
export const __getPosts = createAsyncThunk(
  "GET_POSTS",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.get(`api/posts`);
      console.log("__getPosts", response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch(error) {
      return thunkAPI.rejectWithValue(error.message);
    };
  }
);

//게시글 삭제
export const __deletePost = createAsyncThunk(
  "DELETE_POST",
  async(payload, thunkAPI) => {
    try {
      const response = await apis.delete(`/api/posts/${payload.postId}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch(error) {
      return thunkAPI.rejectWithValue(error.response.data.errorMessage);
    }
  }
)

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
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      //응답 실패
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },

    //게시글 삭제
    [__deletePost.pending]: (state, action) => {
      //로딩중
      state.isLoading = true;
      state.isError = false;
    },
    [__deletePost.fulfilled]: (state, action) => {
      //응답 성공
      console.log("fulfilled: ", action);
      state.isLoading = false;
      state.isError = false;
      state.posts = action.payload;
    },
    [__deletePost.rejected]: (state, action) => {
      //응답 실패
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  }
});

export default postsSlice.reducer;
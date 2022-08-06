import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchPosts,
  fetchRemovePost,
  fetchPostsPopulate,
} from "./asyncActions";
import { PostItem, PostsSliceProps } from "../fetchPost/types";

const initialState: PostsSliceProps = {
  items: [],
  status: "loading",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PostItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.items = [];
      state.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.items = [];
      state.status = "error";
    });

    builder.addCase(fetchPostsPopulate.pending, (state) => {
      state.items = [];
      state.status = "loading";
    });
    builder.addCase(fetchPostsPopulate.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchPostsPopulate.rejected, (state) => {
      state.items = [];
      state.status = "error";
    });

    builder.addCase(fetchRemovePost.pending, (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.meta.arg);
    });
  },
});

export const { setItems } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;

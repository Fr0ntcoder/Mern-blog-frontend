import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPost } from "./asyncActions";
import { PostItem, PostSliceProps } from "./types";

const initialState: PostSliceProps = {
  item: {},
  status: "loading",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<PostItem>) {
      state.item = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.item = [];
      state.status = "loading";
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.item = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchPost.rejected, (state) => {
      state.item = [];
      state.status = "error";
    });
  },
});

export const { setItem } = postSlice.actions;

export const postReducer = postSlice.reducer;

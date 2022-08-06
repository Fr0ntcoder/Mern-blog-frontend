import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTags } from "./asyncActions";
import { TagsSliceProps } from "./types";

const initialState: TagsSliceProps = {
  items: [],
  status: "loading",
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<string[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTags.pending, (state) => {
      state.items = [];
      state.status = "loading";
    });
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchTags.rejected, (state) => {
      state.items = [];
      state.status = "error";
    });
  },
});

export const { setItems } = tagsSlice.actions;

export const tagsReducer = tagsSlice.reducer;

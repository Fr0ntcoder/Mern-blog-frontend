import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostItem } from "../fetchPost/types";
import api from "../../../services/api";

export const fetchPosts = createAsyncThunk("/posts/fetchPosts", async () => {
  const { data } = await api.get<PostItem[]>("/posts");
  return data;
});

export const fetchPostsPopulate = createAsyncThunk(
  "/posts/fetchPostsPopulate",
  async () => {
    const { data } = await api.get<PostItem[]>("/posts/populate");
    return data;
  }
);

export const fetchRemovePost = createAsyncThunk(
  "/posts/fetchRemovePost",
  async (id: string | number) => await api.delete<PostItem>(`/posts/${id}`)
);
